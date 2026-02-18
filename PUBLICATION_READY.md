FMS-Standard v05 (2024/2025)
Description
This PR performs a comprehensive audit and update of the pgn_library.js file against the official FMS-Standard document (v05, July 2024/Nov 2025). It resolves 17 legacy data issues, corrects byte alignments, and adds support for the latest 2025 edition PGNs, including electric vehicle (EV) and hybrid metrics.

Key Changes
1. Data Integrity & Naming Corrections
Aligned PGN names with official documentation to ensure logs and UI displays reflect the correct hardware:

F005: Electronic Transmission Controller 1 → ETC2

F009: Electronic Transmission Controller 2 → Vehicle Dynamic Stability Control 2 (VDSC2)

FE56: Air Suspension/Engine Hours → AT1T1I (DEF Tank Level)

FEF2: High Resolution Fuel Consumption → Fuel Economy (LFE)

2. Byte Alignment & Bitmask Fixes
Corrected bit-level mapping to prevent data corruption or incorrect value parsing:

FD09: Shifted SPN 5054 from byte 0 to byte 4 (matching Bytes 5-8 in PDF).

FEF1: Corrected BrakeSwitch (0x0C → 0x30) and ClutchSwitch (0x30 → 0xC0) masks.

FEFC: Fixed FuelLevel2 position from byte 0 to byte 5.

Fixed 8-byte Overflow: Resolved a critical bug in HarshAccel where b=7, l=2 exceeded the standard CAN frame length.

3. Resolution & Offset Updates
Updated scaling factors to ensure raw CAN data translates to accurate physical values:

FE58 (Bellow Pressure): Resolution adjusted from 4 to 0.1 kPa/bit.

FEC0 (Service Distance): Applied correct offset of -160635.

4. New PGN & SPN Support
Expanded the library to support the 2025 edition and missing legacy metadata:

Added Missing SPNs: Including Engine Oil Temp (175), Ambient Air Temp (171), and Service Brake pressures.

10 New PGNs Added: Full support for EV Charging State (FAB8), Hybrid Battery Charge (FCB7), Fuel Type (FDC2), and High Voltage System History (FC5E).

Verification
[x] Cross-checked against FMS-Standard v05 (07.07.2024).

[x] Validated that all SPN byte positions fit within the 8-byte CAN frame.

[x] Removed duplicate non-standard PGN FEF3
