#!/usr/bin/env python3
"""
CSV Validation Script for CAN Decoder

This script validates CSV files to ensure they're compatible with the CAN decoder.
Usage: python3 validate_csv.py <csv_file>
"""

import sys
import csv
import re

def validate_csv(filename):
    """Validate a CSV file for CAN decoder compatibility."""
    
    print(f"\n{'='*60}")
    print(f"Validating: {filename}")
    print(f"{'='*60}\n")
    
    try:
        with open(filename, 'r') as f:
            # Read all lines
            all_lines = f.readlines()
            
            # Check for IXXAT MiniMon metadata header
            start_line = 0
            for i, line in enumerate(all_lines[:10]):  # Check first 10 lines
                if re.search(r'[",]Time[",]', line, re.I) and re.search(r'Identifier', line, re.I):
                    start_line = i
                    print(f"🔍 Detected IXXAT MiniMon format (metadata lines: {i})")
                    break
            
            # Use lines from start_line onwards
            lines_to_process = all_lines[start_line:]
            
            # Read first line to check headers
            first_line = lines_to_process[0].strip()
            # Handle both quoted and unquoted CSV
            if '"' in first_line:
                headers = [h.strip().strip('"') for h in first_line.split(',')]
            else:
                headers = [h.strip() for h in first_line.split(',')]
            
            print("📋 Headers found:")
            for i, header in enumerate(headers):
                print(f"   {i+1}. {header}")
            
            # Check for required columns
            id_col = None
            data_col = None
            time_col = None
            
            for i, h in enumerate(headers):
                if re.search(r'id|identifier|can.*id', h, re.I):
                    id_col = i
                    print(f"\n✅ ID column found: '{headers[i]}' (column {i+1})")
                if re.search(r'data|payload', h, re.I):
                    data_col = i
                    print(f"✅ Data column found: '{headers[i]}' (column {i+1})")
                if re.search(r'time|timestamp', h, re.I):
                    time_col = i
                    print(f"✅ Time column found: '{headers[i]}' (column {i+1})")
            
            if id_col is None:
                print("\n❌ ERROR: No ID/Identifier column found!")
                print("   Expected column names: 'ID', 'Identifier', 'CAN ID', etc.")
                return False
                
            if data_col is None:
                print("\n❌ ERROR: No Data column found!")
                print("   Expected column names: 'Data', 'Payload', etc.")
                return False
            
            # Read a few rows to validate format
            reader = csv.reader(lines_to_process)
            next(reader)  # Skip header
            
            rows_checked = 0
            valid_rows = 0
            sample_rows = []
            
            for row in reader:
                rows_checked += 1
                if rows_checked > 10:  # Check first 10 rows
                    break
                    
                if len(row) <= max(id_col, data_col):
                    continue
                
                can_id = row[id_col].strip()
                data = row[data_col].strip()
                
                # Validate CAN ID (should be hex)
                if re.match(r'^(0x)?[0-9A-Fa-f]+$', can_id):
                    # Validate Data (should be hex)
                    data_clean = re.sub(r'[^0-9A-Fa-f]', '', data)
                    if len(data_clean) >= 2 and len(data_clean) <= 16:
                        valid_rows += 1
                        if len(sample_rows) < 3:
                            sample_rows.append({
                                'id': can_id,
                                'data': data,
                                'time': row[time_col] if time_col is not None else 'N/A'
                            })
            
            print(f"\n📊 Validation Results:")
            print(f"   Rows checked: {rows_checked}")
            print(f"   Valid rows: {valid_rows}")
            
            if valid_rows == 0:
                print("\n❌ No valid CAN data rows found!")
                return False
            
            print(f"\n📝 Sample rows:")
            for i, row in enumerate(sample_rows, 1):
                print(f"\n   Row {i}:")
                print(f"      Time: {row['time']}")
                print(f"      ID: {row['id']}")
                print(f"      Data: {row['data']}")
            
            # Estimate PGNs
            print(f"\n🔍 Attempting PGN extraction from sample IDs...")
            for row in sample_rows:
                can_id = row['id'].upper().replace('0X', '')
                if len(can_id) >= 6:
                    pgn = can_id[-6:-2] if len(can_id) >= 8 else can_id[:4]
                    print(f"      ID {row['id']} → Possible PGN: {pgn}")
            
            print(f"\n✅ CSV file appears valid for CAN decoder!")
            print(f"\n💡 Next steps:")
            print(f"   1. Open decoder_standalone.html in your browser")
            print(f"   2. Load this CSV file")
            print(f"   3. Check if PGNs are recognized")
            
            return True
            
    except FileNotFoundError:
        print(f"\n❌ ERROR: File '{filename}' not found!")
        return False
    except Exception as e:
        print(f"\n❌ ERROR: {str(e)}")
        return False

def main():
    if len(sys.argv) != 2:
        print("Usage: python3 validate_csv.py <csv_file>")
        print("\nExample:")
        print("  python3 validate_csv.py test_data/my_can_data.csv")
        print("  python3 validate_csv.py sample_can_data.csv")
        sys.exit(1)
    
    filename = sys.argv[1]
    success = validate_csv(filename)
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()
