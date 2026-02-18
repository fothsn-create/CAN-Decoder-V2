Summary
I cross-checked the pgn_library.js file against the FMS-Standard document (v05, 07.07.2024 PDF) and found and fixed 17 data issues:

PGN Name Corrections

----PGN	Was	Fixed To
F005	Electronic Transmission Controller 1 (ETC1)	Electronic Transmission Controller 2 (ETC2)
F009	Electronic Transmission Controller 2 (ETC2)	Vehicle Dynamic Stability Control 2 (VDSC2)
FE56	Air Suspension Control / Engine Hours	AT1T1I (DEF Tank Level)
FD7D	Squarell Proprietary / Performance Data	FMS Tell Tale Status (FMS1)
F001	Brake Switch Status	Electronic Brake Controller 1 (EBC1)
FEF2	High Resolution Fuel Consumption (HRFC)	Fuel Economy (LFE)
FEFC	Dash Display (DD) / Fuel Economy (LFE)	Dash Display 1 (DD1)
FEEA	Axle Weight (WASH) / Vehicle Weight (VW)	Vehicle Weight (VW)

----SPN/Byte Position Fixes

FD09:   SPN 5054 byte position b=0 → b=4 (PDF: Bytes 5-8)
F005:   SPN 524 at b=0, SPN 523 at b=3 (was b=1 with wrong SPN)
FDD1:   SPN 2804 b=0 → b=6, SPN 2805 b=0 → b=5
FEFC:   FuelLevel2 b=0 → b=5
FEF1:   BrakeSwitch mask 0x0C → 0x30, ClutchSwitch mask 0x30 → 0xC0

----Resolution/Offset Fixes

FE58:   Bellow pressure resolution 4 → 0.1 kPa/bit
FEC0:   Service Distance offset 0 → -160635

----Structural Fixes

FEF2:   Replaced wrong SPN 5054 with correct SPN 183 (Fuel Rate) & SPN 184 (Instant Fuel Economy)
FEEA:   Swapped SPNs - AxleLocation now SPN 928, weight now SPN 582
FEF4:   Fixed to use SPN 929 (Tire Location) + SPN 241 (Tire Pressure)
Removed FEF3: Was a duplicate non-standard PGN
Fixed HarshAccel overflow: b=7, l=2 exceeded 8-byte CAN frame (replaced with FMS Tell Tale Status)


////////////////Thorough Cross-Check Results: pgn_library.js vs FMS v05 (11.11.2025)///////////////////

----Missing SPN Numbers Added

FEEE:         CoolantTemp (110), FuelTemp (174), EngineOilTemp (175)
FEF5:         BarometricPressure (108), CabInteriorTemp (170), AmbientAirTemp (171)
FEAE:         PneumaticSupplyPress (46), ParkBrakeActuatorPress (1086), ServiceBrake1 (1087), ServiceBrake2 (1088)
FEE6:         Seconds (959), Minutes (960), Hours (961), Day (962), Month (963), Year (964)

----10 New PGNs from 2025 Edition Added

PGN	Name	  Key SPNs
FDC2	      EEC14 - Fuel Type	SPN 5837
FAB8	      EVSE1DCS1 - DC Charging State	SPN 13171
FC69	      HVESS Estimated Remaining Distance	SPN 15268
FEFF	      Water In Fuel / Fuel Range	SPNs 97, 8428
FED5	      Alternator Speed (AS)	SPNs 3353-3356
FCB7	      VEP4 - Hybrid Battery Charge	SPN 5464
FCC2	      Propulsion System Active	SPN 7315
FEEF	      Engine Fluid Level/Pressure (EFL/P1)	SPN 100
FEF8	      Transmission Fluids 1 (TRF1)	SPN 177
FC5E	      HVESS History (HVESSHIST)	SPN 8211
