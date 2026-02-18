// J1939 PGN (Parameter Group Number) Library
// This library contains definitions for common J1939 messages used in heavy-duty vehicles
// Each PGN contains SPNs (Suspect Parameter Numbers) with decoding information
//
// SPN Property Definitions:
// - n: Name of the parameter
// - b: Byte start position (0-indexed)
// - l: Length in bytes
// - r: Resolution (scaling factor/multiplier)
// - o: Offset (added after scaling)
// - m: Bit mask (for extracting specific bits)
// - s: Shift (number of bits to right-shift after masking)
// - unit: Unit of measurement
// - desc: Description
// - type: Data type (default: numeric, or 'ascii' for strings)

const PGN_LIBRARY = {
    // Electronic Engine Controller 1 (EEC1)
    "F004": {
        "name": "Electronic Engine Controller 1 (EEC1)",
        "spns": [
            {"n": "EngineSpeed", "spn": 190, "b": 3, "l": 2, "r": 0.125, "o": 0, "unit": "rpm", "desc": "Actual engine speed (0-8031 rpm)"},
            {"n": "TorqueMode", "b": 0, "l": 1, "m": 0x0F, "s": 0, "unit": "", "desc": "Driver's demand engine torque mode"},
            {"n": "ActualTorque", "b": 2, "l": 1, "r": 1, "o": -125, "unit": "%", "desc": "Actual engine torque"}
        ]
    },
    
    // Electronic Engine Controller 2 (EEC2)
    "F003": {
        "name": "Electronic Engine Controller 2 (EEC2)",
        "spns": [
            {"n": "AccelPedalPos", "spn": 91, "b": 1, "l": 1, "r": 0.4, "o": 0, "unit": "%", "desc": "Accelerator pedal position (0-100%)"},
            {"n": "EngineLoad", "spn": 92, "b": 2, "l": 1, "r": 1, "o": 0, "unit": "%", "desc": "Engine percent load at current speed"}
        ]
    },
    
    // Cruise Control/Vehicle Speed 1 (CCVS1)
    "FEF1": {
        "name": "Cruise Control/Vehicle Speed 1 (CCVS1)",
        "spns": [
            {"n": "VehicleSpeed", "spn": 84, "b": 1, "l": 2, "r": 0.00390625, "o": 0, "unit": "km/h", "desc": "Wheel-based vehicle speed (1/256 km/h per bit)"},
            {"n": "BrakeSwitch", "spn": 597, "b": 3, "l": 1, "m": 0x30, "s": 4, "unit": "", "desc": "Brake switch status", "labels": {0: "Not Active", 1: "Active", 2: "Error", 3: "Not Available"}},
            {"n": "ClutchSwitch", "spn": 598, "b": 3, "l": 1, "m": 0xC0, "s": 6, "unit": "", "desc": "Clutch switch status", "labels": {0: "Not Active", 1: "Active", 2: "Error", 3: "Not Available"}},
            {"n": "CruiseControlActive", "spn": 595, "b": 3, "l": 1, "m": 0x03, "s": 0, "unit": "", "desc": "Cruise control active", "labels": {0: "Off", 1: "On", 2: "Error", 3: "Not Available"}},
            {"n": "PTOState", "spn": 976, "b": 4, "l": 1, "m": 0x1F, "s": 0, "unit": "", "desc": "PTO state", "labels": {0: "Off/Disabled", 1: "Hold", 2: "Remote Hold", 3: "Standby", 4: "Remote Standby", 5: "Set", 6: "Decelerate/Coast", 7: "Resume", 8: "Accelerate", 9: "Accel. Override", 10: "Preprogrammed Set Speed 1", 11: "Preprogrammed Set Speed 2", 12: "Preprogrammed Set Speed 3", 13: "Preprogrammed Set Speed 4", 14: "PTO Set Speed Memory 1", 15: "PTO Set Speed Memory 2", 31: "Not Available"}},
            {"n": "ParkingBrakeSwitch", "spn": 70, "b": 3, "l": 1, "m": 0x0C, "s": 2, "unit": "", "desc": "Parking brake switch", "labels": {0: "Not Set", 1: "Set", 2: "Error", 3: "Not Available"}},
            {"n": "CruiseControlStates", "spn": 527, "b": 5, "l": 1, "m": 0x07, "s": 0, "unit": "", "desc": "Cruise control states", "labels": {0: "Off/Disabled", 1: "Hold", 2: "Accelerate", 3: "Decelerate", 4: "Resume", 5: "Set", 6: "Accel. Override", 7: "Not Available"}}
        ]
    },
    
    // High Resolution Vehicle Distance (VDHR)
    "FEC1": {
        "name": "High Resolution Vehicle Distance (VDHR)",
        "spns": [
            {"n": "HighResDistance", "spn": 917, "b": 0, "l": 4, "r": 0.005, "o": 0, "unit": "km", "desc": "High resolution total vehicle distance (0-21,055,406 km)"}
        ]
    },
    
    // Dash Display 1 (DD1)
    "FEFC": {
        "name": "Dash Display 1 (DD1)",
        "spns": [
            {"n": "FuelLevel", "spn": 96, "b": 1, "l": 1, "r": 0.4, "o": 0, "unit": "%", "desc": "Fuel level 1 (0-100%)"},
            {"n": "FuelLevel2", "spn": 38, "b": 5, "l": 1, "r": 0.4, "o": 0, "unit": "%", "desc": "Fuel level 2"}
        ]
    },
    
    // Vehicle Distance (VD)
    "FEE0": {
        "name": "Vehicle Distance (VD)",
        "spns": [
            {"n": "TotalDistance", "spn": 245, "b": 0, "l": 4, "r": 0.125, "o": 0, "unit": "km", "desc": "Total vehicle distance (0-526,385,151 km)"}
        ]
    },
    
    // High Resolution Fuel Consumption (Liquid) (HRLFC)
    "FEF2": {
        "name": "Fuel Economy (LFE)",
        "spns": [
            {"n": "FuelRate", "spn": 183, "b": 0, "l": 2, "r": 0.05, "o": 0, "unit": "L/h", "desc": "Fuel rate (0-3,212.75 L/h)"},
            {"n": "InstantFuelEcon", "spn": 184, "b": 2, "l": 2, "r": 0.001953125, "o": 0, "unit": "km/L", "desc": "Instantaneous fuel economy (0-125.5 km/L)"}
        ]
    },
    
    // Engine Temperature 1 (ET1)
    "FEEE": {
        "name": "Engine Temperature 1 (ET1)",
        "spns": [
            {"n": "CoolantTemp", "spn": 110, "b": 0, "l": 1, "r": 1, "o": -40, "unit": "°C", "desc": "Engine coolant temperature"},
            {"n": "FuelTemp", "spn": 174, "b": 1, "l": 1, "r": 1, "o": -40, "unit": "°C", "desc": "Fuel temperature"},
            {"n": "EngineOilTemp", "spn": 175, "b": 2, "l": 2, "r": 0.03125, "o": -273, "unit": "°C", "desc": "Engine oil temperature 1"}
        ]
    },
    
    // Axle Weight / Vehicle Weight (VW)
    "FEEA": {
        "name": "Vehicle Weight (VW)",
        "spns": [
            {"n": "AxleLocation", "spn": 928, "b": 0, "l": 1, "r": 1, "o": 0, "unit": "", "desc": "Axle location (bit-mapped, counting front to back)"},
            {"n": "AxleWeight1", "spn": 582, "b": 2, "l": 2, "r": 0.5, "o": 0, "unit": "kg", "desc": "Axle weight at location specified by AxleLocation (bytes 3-4)"},
            {"n": "AxleWeight2", "spn": 582, "b": 4, "l": 2, "r": 0.5, "o": 0, "unit": "kg", "desc": "Axle weight at next location (bytes 5-6), same SPN 582 repeating group"}
        ]
    },
    
    // Driver Identification (DI)
    "FE6B": {
        "name": "Driver Identification (DI)",
        "spns": [
            {"n": "DriverID", "spn": 1622, "b": 0, "l": 8, "type": "ascii", "desc": "Driver 1 ID (ASCII 8 bytes)"}
        ]
    },
    
    // Electronic Transmission Controller 2 (ETC2)
    "F005": {
        "name": "Electronic Transmission Controller 2 (ETC2)",
        "spns": [
            {"n": "SelectedGear", "spn": 524, "b": 0, "l": 1, "r": 1, "o": -125, "unit": "gear", "desc": "Transmission selected gear (-125 to 125)"},
            {"n": "CurrentGear", "spn": 523, "b": 3, "l": 1, "r": 1, "o": -125, "unit": "gear", "desc": "Transmission current gear (-125 to 125)"}
        ]
    },
    
    // Vehicle Dynamic Stability Control 2 (VDSC2)
    "F009": {
        "name": "Vehicle Dynamic Stability Control 2 (VDSC2)",
        "spns": [
            {"n": "SteeringWheelAngle", "spn": 1807, "b": 0, "l": 2, "r": 0.0009765625, "o": -31.374, "unit": "rad", "desc": "Steering wheel angle"},
            {"n": "LateralAcceleration", "spn": 1809, "b": 5, "l": 2, "r": 0.000488281, "o": -15.687, "unit": "m/s²", "desc": "Lateral acceleration (positive=left)"},
            {"n": "LongitudinalAcceleration", "spn": 1810, "b": 7, "l": 1, "r": 0.1, "o": -12.5, "unit": "m/s²", "desc": "Longitudinal acceleration (positive=speed increasing)"}
        ]
    },
    
    // Ambient Conditions (AMB)
    "FEF5": {
        "name": "Ambient Conditions (AMB)",
        "spns": [
            {"n": "BarometricPressure", "spn": 108, "b": 0, "l": 1, "r": 0.5, "o": 0, "unit": "kPa", "desc": "Barometric pressure (not used for FMS)"},
            {"n": "CabInteriorTemp", "spn": 170, "b": 1, "l": 2, "r": 0.03125, "o": -273, "unit": "°C", "desc": "Cab interior temperature"},
            {"n": "AmbientAirTemp", "spn": 171, "b": 3, "l": 2, "r": 0.03125, "o": -273, "unit": "°C", "desc": "Ambient air temperature"}
        ]
    },
    
    // Vehicle Electrical Power (VEP)
    "FEF7": {
        "name": "Vehicle Electrical Power (VEP)",
        "spns": [
            {"n": "BatteryVoltage", "spn": 168, "b": 4, "l": 2, "r": 0.05, "o": 0, "unit": "V", "desc": "Battery/electrical potential (0-3212 V)"}
        ]
    },
    
    // Engine Hours, Revolutions (HOURS)
    "FEE5": {
        "name": "Engine Hours, Revolutions (HOURS)",
        "spns": [
            {"n": "TotalEngineHours", "spn": 247, "b": 0, "l": 4, "r": 0.05, "o": 0, "unit": "h", "desc": "Total engine hours (0-21,055,406 h)"},
            {"n": "TotalEngineRevs", "b": 4, "l": 4, "r": 1000, "o": 0, "unit": "rev", "desc": "Total engine revolutions"}
        ]
    },
    
    // Time/Date (TD)
    "FEE6": {
        "name": "Time/Date (TD)",
        "spns": [
            {"n": "Seconds", "spn": 959, "b": 0, "l": 1, "r": 0.25, "o": 0, "unit": "s", "desc": "Seconds"},
            {"n": "Minutes", "spn": 960, "b": 1, "l": 1, "r": 1, "o": 0, "unit": "min", "desc": "Minutes"},
            {"n": "Hours", "spn": 961, "b": 2, "l": 1, "r": 1, "o": 0, "unit": "h", "desc": "Hours"},
            {"n": "Month", "spn": 963, "b": 3, "l": 1, "r": 1, "o": 0, "unit": "", "desc": "Month"},
            {"n": "Day", "spn": 962, "b": 4, "l": 1, "r": 0.25, "o": 0, "unit": "", "desc": "Day"},
            {"n": "Year", "spn": 964, "b": 5, "l": 1, "r": 1, "o": 1985, "unit": "", "desc": "Year"}
        ]
    },
    
    // Tachograph (TCO1) - per FMS-Standard v05 11.11.2025
    "FE6C": {
        "name": "Tachograph (TCO1)",
        "spns": [
            {"n": "VehicleMotion", "spn": 1611, "b": 0, "l": 1, "m": 0x03, "s": 0, "unit": "", "desc": "Vehicle motion detection", "labels": {0: "Not Detected", 1: "Detected", 2: "Error", 3: "Not Available"}},
            {"n": "VehicleOverspeed", "spn": 1614, "b": 0, "l": 1, "m": 0x0C, "s": 2, "unit": "", "desc": "Vehicle overspeed indicator", "labels": {0: "No Overspeed", 1: "Overspeed", 2: "Error", 3: "Not Available"}},
            {"n": "DirectionIndicator", "spn": 1619, "b": 0, "l": 1, "m": 0x30, "s": 4, "unit": "", "desc": "Direction indicator", "labels": {0: "Forward", 1: "Reverse", 2: "Error", 3: "Not Available"}},
            {"n": "Driver2WorkingState", "spn": 1613, "b": 1, "l": 1, "m": 0x07, "s": 0, "unit": "", "desc": "Driver 2 working state", "labels": {0: "Rest", 1: "Available", 2: "Work", 3: "Drive", 6: "Error", 7: "Not Available"}},
            {"n": "Driver1Card", "spn": 1615, "b": 1, "l": 1, "m": 0x18, "s": 3, "unit": "", "desc": "Driver 1 card presence", "labels": {0: "Not Present", 1: "Present", 2: "Error", 3: "Not Available"}},
            {"n": "Driver2Card", "spn": 1616, "b": 1, "l": 1, "m": 0x60, "s": 5, "unit": "", "desc": "Driver 2 card presence", "labels": {0: "Not Present", 1: "Present", 2: "Error", 3: "Not Available"}},
            {"n": "TachoPerformance", "spn": 1620, "b": 1, "l": 1, "m": 0x80, "s": 7, "unit": "", "desc": "Tachograph performance", "labels": {0: "Normal Performance", 1: "Performance Analysis"}},
            {"n": "Driver1WorkingState", "spn": 1612, "b": 2, "l": 1, "m": 0x07, "s": 0, "unit": "", "desc": "Driver 1 working state", "labels": {0: "Rest", 1: "Available", 2: "Work", 3: "Drive", 6: "Error", 7: "Not Available"}},
            {"n": "Driver1TimeRelatedState", "spn": 1617, "b": 2, "l": 1, "m": 0x78, "s": 3, "unit": "", "desc": "Driver 1 time-related status", "labels": {0: "Normal", 1: "15 min before 4½h", 2: "4½h reached", 3: "15 min before 9h", 4: "9h reached", 5: "15 min before 16h", 6: "16h reached", 14: "Error", 15: "Not Available"}},
            {"n": "Driver2TimeRelatedState", "spn": 1618, "b": 3, "l": 1, "m": 0x0F, "s": 0, "unit": "", "desc": "Driver 2 time-related status", "labels": {0: "Normal", 1: "15 min before 4½h", 2: "4½h reached", 3: "15 min before 9h", 4: "9h reached", 5: "15 min before 16h", 6: "16h reached", 14: "Error", 15: "Not Available"}},
            {"n": "HandlingInformation", "spn": 1621, "b": 3, "l": 1, "m": 0x30, "s": 4, "unit": "", "desc": "Handling information", "labels": {0: "No Info", 1: "Info Present", 2: "Error", 3: "Not Available"}},
            {"n": "SystemEvent", "spn": 1622, "b": 3, "l": 1, "m": 0xC0, "s": 6, "unit": "", "desc": "Tachograph system event", "labels": {0: "No Event", 1: "Event Occurred", 2: "Error", 3: "Not Available"}},
            {"n": "TachoVehicleSpeed", "spn": 1624, "b": 4, "l": 2, "r": 0.00390625, "o": 0, "unit": "km/h", "desc": "Tachograph vehicle speed (1/256 km/h per bit)"}
        ]
    },
    
    // Air Supply Pressure (AIR1)
    "FEAE": {
        "name": "Air Supply Pressure (AIR1)",
        "spns": [
            {"n": "PneumaticSupplyPress", "spn": 46, "b": 0, "l": 1, "r": 8, "o": 0, "unit": "kPa", "desc": "Pneumatic supply pressure (not used for FMS)"},
            {"n": "ParkBrakeActuatorPress", "spn": 1086, "b": 1, "l": 1, "r": 8, "o": 0, "unit": "kPa", "desc": "Park brake actuator pressure (not used for FMS)"},
            {"n": "ServiceBrakeCircuit1Press", "spn": 1087, "b": 2, "l": 1, "r": 8, "o": 0, "unit": "kPa", "desc": "Service brake circuit 1 air pressure"},
            {"n": "ServiceBrakeCircuit2Press", "spn": 1088, "b": 3, "l": 1, "r": 8, "o": 0, "unit": "kPa", "desc": "Service brake circuit 2 air pressure"}
        ]
    },
    
    // Wheel Speed Information (WSI)
    "FE49": {
        "name": "Wheel Speed Information (WSI)",
        "spns": [
            {"n": "FrontAxleSpeed", "b": 0, "l": 2, "r": 0.00390625, "o": 0, "unit": "km/h", "desc": "Front axle speed"},
            {"n": "RearAxle1Speed", "b": 4, "l": 2, "r": 0.00390625, "o": 0, "unit": "km/h", "desc": "Rear axle 1 speed"}
        ]
    },
    
    // High Resolution Fuel/Energy Consumption (FD09)
    "FD09": {
        "name": "High Resolution Fuel Consumption (Liquid) (HRLFC)",
        "spns": [
            {"n": "HighResFuelConsumption", "spn": 5054, "b": 4, "l": 4, "r": 0.001, "o": 0, "unit": "L", "desc": "High resolution engine total fuel used (0-4,211,081 L)"}
        ]
    },
    
    // Aftertreatment 1 Diesel Exhaust Fluid Tank 1 Information (AT1T1I)
    "FE56": {
        "name": "Aftertreatment 1 Diesel Exhaust Fluid Tank 1 Information (AT1T1I)",
        "spns": [
            {"n": "DEFTankLevel", "spn": 1761, "b": 0, "l": 1, "r": 0.4, "o": 0, "unit": "%", "desc": "Aftertreatment 1 diesel exhaust fluid tank 1 level (0-100%)"}
        ]
    },
    
    // Electronic Brake Controller 1 (EBC1)
    "F001": {
        "name": "Electronic Brake Controller 1 (EBC1)",
        "spns": [
            {"n": "BrakePedalPosition", "spn": 521, "b": 1, "l": 1, "r": 0.4, "o": 0, "unit": "%", "desc": "Brake pedal position (0-100%)"}
        ]
    },
    
    // FMS Tell Tale Status (FMS1)
    "FD7D": {
        "name": "FMS Tell Tale Status (FMS1)",
        "spns": [
            {"n": "TelltaleBlock1", "b": 0, "l": 1, "m": 0xF0, "s": 4, "unit": "", "desc": "Telltale block ID 1 (see FMS standard table)"},
            {"n": "TelltaleStatus1", "b": 0, "l": 1, "m": 0x07, "s": 0, "unit": "", "desc": "Telltale status 1 (0=off, 1=red, 2=yellow, 3=info, 7=N/A)"},
            {"n": "TelltaleBlock2", "b": 1, "l": 1, "m": 0xF0, "s": 4, "unit": "", "desc": "Telltale block ID 2"},
            {"n": "TelltaleStatus2", "b": 1, "l": 1, "m": 0x07, "s": 0, "unit": "", "desc": "Telltale status 2 (0=off, 1=red, 2=yellow, 3=info, 7=N/A)"},
            {"n": "TelltaleBlock3", "b": 2, "l": 1, "m": 0xF0, "s": 4, "unit": "", "desc": "Telltale block ID 3"},
            {"n": "TelltaleStatus3", "b": 2, "l": 1, "m": 0x07, "s": 0, "unit": "", "desc": "Telltale status 3 (0=off, 1=red, 2=yellow, 3=info, 7=N/A)"},
            {"n": "TelltaleBlock4", "b": 3, "l": 1, "m": 0xF0, "s": 4, "unit": "", "desc": "Telltale block ID 4"},
            {"n": "TelltaleStatus4", "b": 3, "l": 1, "m": 0x07, "s": 0, "unit": "", "desc": "Telltale status 4 (0=off, 1=red, 2=yellow, 3=info, 7=N/A)"}
        ]
    },
    
    // ========== ADDITIONAL PGNs FROM SQUARELL PROTOCOL 220419 ==========
    
    // Cab Message 1 (CM1)
    "E000": {
        "name": "Cab Message 1 (CM1)",
        "spns": [
            {"n": "SeatBeltSwitch", "spn": 1856, "b": 4, "l": 1, "m": 0xC0, "s": 6, "unit": "", "desc": "Seat belt switch (0=not buckled, 1=buckled, 2=error, 3=N/A)"},
            {"n": "SpeedGovEnableSwitch", "spn": 1653, "b": 5, "l": 1, "m": 0xC0, "s": 6, "unit": "", "desc": "Vehicle limiting speed governor enable switch"},
            {"n": "AutoGearShiftSwitch", "spn": 1666, "b": 6, "l": 1, "m": 0x20, "s": 5, "unit": "", "desc": "Automatic gear shifting enable switch"}
        ]
    },
    
    // Electronic Retarder Controller 1 (ERC1)
    "F000": {
        "name": "Electronic Retarder Controller 1 (ERC1)",
        "spns": [
            {"n": "RetarderTorqueMode", "spn": 900, "b": 0, "l": 1, "m": 0x0F, "s": 0, "unit": "", "desc": "Retarder torque mode"},
            {"n": "RetarderTorque", "spn": 520, "b": 1, "l": 1, "r": 1, "o": -125, "unit": "%", "desc": "Retarder torque (%)"},
            {"n": "RetarderSelection", "spn": 1716, "b": 6, "l": 1, "r": 0.4, "o": 0, "unit": "%", "desc": "Retarder selection, non-engine (0-100%)"}
        ]
    },
    
    // Electronic Transmission Controller 1 (ETC1)  
    "F002": {
        "name": "Electronic Transmission Controller 1 (ETC1)",
        "spns": [
            {"n": "DrivelineEngaged", "spn": 560, "b": 0, "l": 1, "m": 0x03, "s": 0, "unit": "", "desc": "Driveline engaged (0=disengaged, 1=engaged)"},
            {"n": "ShiftInProgress", "spn": 574, "b": 0, "l": 1, "m": 0x10, "s": 4, "unit": "", "desc": "Shift in progress"}
        ]
    },
    
    // Engine Gas Flow Rate (EGF1)
    "F00A": {
        "name": "Engine Gas Flow Rate (EGF1)",
        "spns": [
            {"n": "MassAirFlowRate", "spn": 132, "b": 2, "l": 2, "r": 0.05, "o": 0, "unit": "kg/h", "desc": "Mass air flow rate"}
        ]
    },
    
    // Direct Lamp Control Data 1
    "FD05": {
        "name": "Direct Lamp Control Data 1",
        "spns": [
            {"n": "EngineBrakeLamp", "spn": 5097, "b": 1, "l": 1, "m": 0x0C, "s": 2, "unit": "", "desc": "Engine brake active lamp data"}
        ]
    },
    
    // PTO Drive Engagement (PTODE)
    "FDA4": {
        "name": "PTO Drive Engagement (PTODE)",
        "spns": [
            {"n": "PTOEngaged", "spn": 3948, "b": 6, "l": 1, "m": 0x03, "s": 0, "unit": "", "desc": "One PTO engaged (0=not engaged, 1=engaged)", "labels": {0: "Not Engaged", 1: "Engaged", 2: "Error", 3: "Not Available"}}
        ]
    },
    
    // Door Control 2 (DC2)
    "FDA5": {
        "name": "Door Control 2 (DC2)",
        "spns": [
            {"n": "Door1LockStatus", "spn": 3412, "b": 0, "l": 1, "m": 0x03, "s": 0, "unit": "", "desc": "Lock status door 1"},
            {"n": "Door1OpenStatus", "spn": 3413, "b": 0, "l": 1, "m": 0x0C, "s": 2, "unit": "", "desc": "Open status door 1"},
            {"n": "Door1EnableStatus", "spn": 3414, "b": 0, "l": 1, "m": 0x30, "s": 4, "unit": "", "desc": "Enable status door 1"},
            {"n": "Door2LockStatus", "spn": 3415, "b": 0, "l": 1, "m": 0xC0, "s": 6, "unit": "", "desc": "Lock status door 2"},
            {"n": "Door2OpenStatus", "spn": 3416, "b": 1, "l": 1, "m": 0x03, "s": 0, "unit": "", "desc": "Open status door 2"},
            {"n": "Door2EnableStatus", "spn": 3417, "b": 1, "l": 1, "m": 0x0C, "s": 2, "unit": "", "desc": "Enable status door 2"}
        ]
    },
    
    // Operators External Light Controls (OEL)
    "FDCC": {
        "name": "Operators External Light Controls",
        "spns": [
            {"n": "MainLightSwitch", "spn": 2872, "b": 0, "l": 1, "m": 0x1E, "s": 1, "unit": "", "desc": "Main light switch"},
            {"n": "TurnSignalSwitch", "spn": 2876, "b": 1, "l": 1, "m": 0x0F, "s": 0, "unit": "", "desc": "Turn signal switch"},
            {"n": "HazardLightSwitch", "spn": 2875, "b": 1, "l": 1, "m": 0x30, "s": 4, "unit": "", "desc": "Hazard light switch"},
            {"n": "HighLowBeamSwitch", "spn": 2874, "b": 1, "l": 1, "m": 0xC0, "s": 6, "unit": "", "desc": "High-low beam switch"}
        ]
    },
    
    // Operator Wiper and Washer Controls (OWW)
    "FDCD": {
        "name": "Operator Wiper and Washer Controls (OWW)",
        "spns": [
            {"n": "FrontWiperSwitch", "spn": 2863, "b": 0, "l": 1, "m": 0x1E, "s": 1, "unit": "", "desc": "Front wiper switch"}
        ]
    },
    
    // FMS-standard Interface ID/Capabilities
    "FDD1": {
        "name": "FMS-standard Interface ID/Capabilities",
        "spns": [
            {"n": "FMSSoftwareVersion", "spn": 2806, "b": 1, "l": 4, "type": "hex", "desc": "FMS software version (4 ASCII bytes encoding version ab.cd)"},
            {"n": "FMSRequestsSupport", "spn": 2805, "b": 5, "l": 1, "m": 0x0C, "s": 2, "unit": "", "desc": "FMS requests support"},
            {"n": "FMSDiagnoseSupport", "spn": 2804, "b": 6, "l": 1, "m": 0x03, "s": 0, "unit": "", "desc": "FMS diagnose support"}
        ]
    },
    
    // Door Control 1 (DC1)
    "FE4E": {
        "name": "Door Control 1 (DC1)",
        "spns": [
            {"n": "PositionOfDoors", "spn": 1821, "b": 0, "l": 1, "m": 0x0F, "s": 0, "unit": "", "desc": "Position of doors"},
            {"n": "RampWheelLift", "spn": 1820, "b": 0, "l": 1, "m": 0x30, "s": 4, "unit": "", "desc": "Ramp/wheel lift"},
            {"n": "StatusOfDoors", "spn": 3411, "b": 0, "l": 1, "m": 0xC0, "s": 6, "unit": "", "desc": "Status of doors"}
        ]
    },
    
    // Air Suspension Control 4 (ASC4)
    "FE58": {
        "name": "Air Suspension Control 4 (ASC4)",
        "spns": [
            {"n": "BellowPressureFrontLeft", "spn": 1725, "b": 0, "l": 2, "r": 0.1, "o": 0, "unit": "kPa", "desc": "Bellow pressure front axle left"},
            {"n": "BellowPressureFrontRight", "spn": 1726, "b": 2, "l": 2, "r": 0.1, "o": 0, "unit": "kPa", "desc": "Bellow pressure front axle right"},
            {"n": "BellowPressureRearLeft", "spn": 1727, "b": 4, "l": 2, "r": 0.1, "o": 0, "unit": "kPa", "desc": "Bellow pressure rear axle left"},
            {"n": "BellowPressureRearRight", "spn": 1728, "b": 6, "l": 2, "r": 0.1, "o": 0, "unit": "kPa", "desc": "Bellow pressure rear axle right"}
        ]
    },
    
    // Combination Vehicle Weight (CVW)
    "FE70": {
        "name": "Combination Vehicle Weight (CVW)",
        "spns": [
            {"n": "PoweredVehicleWeight", "spn": 1585, "b": 0, "l": 2, "r": 10, "o": 0, "unit": "kg", "desc": "Powered vehicle weight (not used for FMS)"},
            {"n": "GrossCombinationWeight", "spn": 1760, "b": 2, "l": 2, "r": 10, "o": 0, "unit": "kg", "desc": "Gross combination vehicle weight (0-642,550 kg)"}
        ]
    },
    
    // Engine Information (EI)
    "FE92": {
        "name": "Engine Information (EI)",
        "spns": [
            {"n": "ExhaustGasPressure", "spn": 1209, "b": 1, "l": 2, "r": 0.125, "o": 0, "unit": "kPa", "desc": "Exhaust gas pressure"},
            {"n": "EngineGasMassFlow", "b": 4, "l": 2, "r": 0.05, "o": 0, "unit": "kg/h", "desc": "Engine gas mass flow rate"}
        ]
    },
    
    // Wheel Brake Lining Remaining Info (EBC4)
    "FEAC": {
        "name": "Wheel Brake Lining Remaining Info (EBC4)",
        "spns": [
            {"n": "BrakeLiningFrontLeft", "spn": 1099, "b": 0, "l": 1, "r": 0.4, "o": 0, "unit": "%", "desc": "Brake lining remaining front axle, left wheel"},
            {"n": "BrakeLiningFrontRight", "spn": 1100, "b": 1, "l": 1, "r": 0.4, "o": 0, "unit": "%", "desc": "Brake lining remaining front axle, right wheel"},
            {"n": "BrakeLiningAxle2Left", "b": 2, "l": 1, "r": 0.4, "o": 0, "unit": "%", "desc": "Brake lining remaining axle 2, left"},
            {"n": "BrakeLiningAxle2Right", "b": 3, "l": 1, "r": 0.4, "o": 0, "unit": "%", "desc": "Brake lining remaining axle 2, right"}
        ]
    },
    
    // Fuel Consumption (Gaseous) (GFC)
    "FEAF": {
        "name": "Fuel Consumption (Gaseous) (GFC)",
        "spns": [
            {"n": "TotalFuelGaseous", "spn": 1040, "b": 4, "l": 4, "r": 0.5, "o": 0, "unit": "kg", "desc": "Total fuel CAN Bus (gaseous)"}
        ]
    },
    
    // Service Information (SERV)
    "FEC0": {
        "name": "Service Information (SERV)",
        "spns": [
            {"n": "ServiceDistance", "spn": 914, "b": 1, "l": 2, "r": 5, "o": -160635, "unit": "km", "desc": "Distance until next service"}
        ]
    },
    
    // Electronic Transmission Controller 5 (ETC5)
    "FEC3": {
        "name": "Electronic Transmission Controller 5 (ETC5)",
        "spns": [
            {"n": "ReverseDirectionSwitch", "spn": 767, "b": 1, "l": 1, "m": 0x03, "s": 0, "unit": "", "desc": "Reverse direction switch"},
            {"n": "NeutralSwitch", "spn": 604, "b": 1, "l": 1, "m": 0x0C, "s": 2, "unit": "", "desc": "Neutral switch"}
        ]
    },
    
    // Tire Condition (TIRE1) 
    "FEF4": {
        "name": "Tire Condition (TIRE1)",
        "spns": [
            {"n": "TireLocation", "spn": 929, "b": 0, "l": 1, "r": 1, "o": 0, "unit": "", "desc": "Tire location (position number counting left to right, front to back)"},
            {"n": "TirePressure", "spn": 241, "b": 1, "l": 1, "r": 4, "o": 0, "unit": "kPa", "desc": "Tire pressure"}
        ]
    },
    
    // ========== NEW PGNs FROM FMS v05 2025 EDITION ==========
    
    // Electronic Engine Controller 14 (EEC14) - Fuel Type
    "FDC2": {
        "name": "Electronic Engine Controller 14 (EEC14)",
        "spns": [
            {"n": "FuelType", "spn": 5837, "b": 6, "l": 1, "r": 1, "o": 0, "unit": "", "desc": "Fuel type (256 states, see FMS standard table)"}
        ]
    },
    
    // EVSE 1 DC Charging Status 1 (EVSE1DCS1)
    "FAB8": {
        "name": "EVSE 1 DC Charging Status 1 (EVSE1DCS1)",
        "spns": [
            {"n": "DCChargingState", "spn": 13171, "b": 0, "l": 1, "m": 0x0F, "s": 0, "unit": "", "desc": "DC Charging State", "labels": {0: "Idle/No EVSE", 1: "Charging", 2: "Standby", 10: "Initialising", 11: "Pre-charge", 12: "Terminating", 13: "Battery Failure", 14: "EVSE Fault", 15: "Not Available"}}
        ]
    },
    
    // HVESS Estimated Remaining Distance
    "FC69": {
        "name": "HVESS Estimated Remaining Distance",
        "spns": [
            {"n": "HVESSEstRemainingDistance", "spn": 15268, "b": 0, "l": 2, "r": 0.25, "o": 0, "unit": "km", "desc": "HVESS estimated remaining distance"}
        ]
    },
    
    // Water In Fuel Indicator / Fuel Supply Estimated Remaining Distance
    "FEFF": {
        "name": "Water In Fuel Indicator 1 / Fuel Range (WIF/FR)",
        "spns": [
            {"n": "WaterInFuelIndicator", "spn": 97, "b": 0, "l": 1, "m": 0x03, "s": 0, "unit": "", "desc": "Water in fuel indicator 1", "labels": {0: "No", 1: "Yes", 2: "Error", 3: "Not Available"}},
            {"n": "FuelSupplyEstRemainingDist", "spn": 8428, "b": 2, "l": 2, "r": 1, "o": 0, "unit": "km", "desc": "Fuel supply estimated remaining distance"}
        ]
    },
    
    // Alternator Speed (AS)
    "FED5": {
        "name": "Alternator Speed (AS)",
        "spns": [
            {"n": "AlternatorStatus4", "spn": 3356, "b": 2, "l": 1, "m": 0x03, "s": 0, "unit": "", "desc": "Alternator 4 status", "labels": {0: "Not Charging", 1: "Charging", 2: "Error", 3: "Not Available"}},
            {"n": "AlternatorStatus3", "spn": 3355, "b": 2, "l": 1, "m": 0x0C, "s": 2, "unit": "", "desc": "Alternator 3 status", "labels": {0: "Not Charging", 1: "Charging", 2: "Error", 3: "Not Available"}},
            {"n": "AlternatorStatus2", "spn": 3354, "b": 2, "l": 1, "m": 0x30, "s": 4, "unit": "", "desc": "Alternator 2 status", "labels": {0: "Not Charging", 1: "Charging", 2: "Error", 3: "Not Available"}},
            {"n": "AlternatorStatus1", "spn": 3353, "b": 2, "l": 1, "m": 0xC0, "s": 6, "unit": "", "desc": "Alternator 1 status", "labels": {0: "Not Charging", 1: "Charging", 2: "Error", 3: "Not Available"}}
        ]
    },
    
    // Vehicle Electrical Power #4 (VEP4)
    "FCB7": {
        "name": "Vehicle Electrical Power #4 (VEP4)",
        "spns": [
            {"n": "HybridBatteryPackRemainingCharge", "spn": 5464, "b": 0, "l": 2, "r": 0.0025, "o": 0, "unit": "%", "desc": "Hybrid/EV battery pack remaining charge (0-160.6%)"}
        ]
    },
    
    // Electronic Engine Controller 14 - Propulsion System Active (FCC2)
    "FCC2": {
        "name": "Propulsion System Active",
        "spns": [
            {"n": "PropulsionSystemActive", "spn": 7315, "b": 1, "l": 1, "m": 0x03, "s": 0, "unit": "", "desc": "Propulsion system active", "labels": {0: "Not Ready", 1: "Ready/Moving", 2: "Reserved", 3: "Not Available"}}
        ]
    },
    
    // Engine Fluid Level/Pressure 1 (EFL/P1)
    "FEEF": {
        "name": "Engine Fluid Level/Pressure 1 (EFL/P1)",
        "spns": [
            {"n": "EngineOilPressure", "spn": 100, "b": 3, "l": 1, "r": 4, "o": 0, "unit": "kPa", "desc": "Engine oil pressure 1"}
        ]
    },
    
    // Transmission Fluids 1 (TRF1)
    "FEF8": {
        "name": "Transmission Fluids 1 (TRF1)",
        "spns": [
            {"n": "TransmissionOilTemp", "spn": 177, "b": 4, "l": 2, "r": 0.03125, "o": -273, "unit": "°C", "desc": "Transmission oil temperature 1"}
        ]
    },
    
    // High Voltage Energy Storage System History (HVESSHIST)
    "FC5E": {
        "name": "High Voltage Energy Storage System History (HVESSHIST)",
        "spns": [
            {"n": "HVESSTotalEnergyThroughput", "spn": 8211, "b": 4, "l": 4, "r": 100, "o": 0, "unit": "Wh", "desc": "HVESS total energy throughput (100 Wh/bit)"}
        ]
    },
    
    // ========== SQUARELL-SPECIFIC PGNs ==========
    
    // Squarell Parameters 10 (SQ10) - Voltage monitoring
    "FF70": {
        "name": "Squarell Parameters 10 - Voltage Monitoring (SQ10)",
        "spns": [
            {"n": "BatteryVoltage", "spn": 168, "b": 0, "l": 2, "r": 0.05, "o": 0, "unit": "V", "desc": "Supply/Battery voltage"},
            {"n": "AUX1Voltage", "spn": 33064, "b": 2, "l": 2, "r": 0.05, "o": 0, "unit": "V", "desc": "AUX1 voltage"},
            {"n": "AUX2Voltage", "spn": 33065, "b": 4, "l": 2, "r": 0.05, "o": 0, "unit": "V", "desc": "AUX2 voltage"},
            {"n": "SupplyVoltTrigger", "spn": 33058, "b": 6, "l": 1, "m": 0x03, "s": 0, "unit": "", "desc": "Supply voltage trigger (0=off, 1=on)"},
            {"n": "AUX1Trigger", "spn": 701, "b": 6, "l": 1, "m": 0x0C, "s": 2, "unit": "", "desc": "AUX1/IO#1 trigger"},
            {"n": "AUX2Trigger", "spn": 702, "b": 6, "l": 1, "m": 0x30, "s": 4, "unit": "", "desc": "AUX2/IO#2 trigger"}
        ]
    },
    
    // Tacho Times (Request/Response)
    "FF80": {
        "name": "Tacho Times - Break 1",
        "spns": [
            {"n": "TachoBreak1Remaining", "b": 0, "l": 2, "r": 1, "o": 0, "unit": "min", "desc": "Remaining time for break 1"}
        ]
    },
    
    "FF81": {
        "name": "Tacho Times - Break 2",
        "spns": [
            {"n": "TachoBreak2Remaining", "b": 0, "l": 2, "r": 1, "o": 0, "unit": "min", "desc": "Remaining time for break 2"}
        ]
    },
    
    "FF82": {
        "name": "Tacho Times - Driving",
        "spns": [
            {"n": "TachoDrivingRemaining", "b": 0, "l": 2, "r": 1, "o": 0, "unit": "min", "desc": "Remaining driving time"}
        ]
    },
    
    // Vehicle Identification Number (VIN)
    "FEEC": {
        "name": "Vehicle Identification Number (VIN)",
        "spns": [
            {"n": "VehicleID", "spn": 237, "b": 0, "l": 17, "type": "ascii", "desc": "Vehicle identification number (VIN)"}
        ]
    },

    // Vehicle Registration Number (License plate)
    "FF90": {
        "name": "Vehicle Registration Number (VRN)",
        "spns": [
            {"n": "VehicleRegNumber", "spn": 239, "b": 0, "l": 14, "type": "ascii", "desc": "Vehicle registration number (license plate)"}
        ]
    },
    
    // Squarell EV Parameters 0
    "FF94": {
        "name": "Squarell EV Parameters 0 (SQEV0)",
        "spns": [
            {"n": "StateOfCharge", "spn": 6149, "b": 0, "l": 2, "r": 0.1, "o": 0, "unit": "%", "desc": "Battery state of charge (SoC)"}
        ]
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PGN_LIBRARY;
}
