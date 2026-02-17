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
            {"n": "EngineLoad", "b": 2, "l": 1, "r": 1, "o": 0, "unit": "%", "desc": "Engine percent load at current speed"}
        ]
    },
    
    // Cruise Control/Vehicle Speed (CCVS)
    "FEF1": {
        "name": "Cruise Control/Vehicle Speed (CCVS)",
        "spns": [
            {"n": "VehicleSpeed", "spn": 84, "b": 1, "l": 2, "r": 0.00390625, "o": 0, "unit": "km/h", "desc": "Wheel-based vehicle speed (1/256 km/h per bit)"},
            {"n": "BrakeSwitch", "b": 3, "l": 1, "m": 0x0C, "s": 2, "unit": "", "desc": "Brake switch status", "labels": {0: "Not Active", 1: "Active", 2: "Error", 3: "Not Available"}},
            {"n": "ClutchSwitch", "b": 3, "l": 1, "m": 0x30, "s": 4, "unit": "", "desc": "Clutch switch status", "labels": {0: "Not Active", 1: "Active", 2: "Error", 3: "Not Available"}},
            {"n": "CruiseControl", "b": 3, "l": 1, "m": 0x03, "s": 0, "unit": "", "desc": "Cruise control state", "labels": {0: "Off/Disabled", 1: "Hold", 2: "Accelerate", 3: "Decelerate"}},
            {"n": "PTOState", "spn": 976, "b": 4, "l": 1, "m": 0x1F, "s": 0, "unit": "", "desc": "PTO state", "labels": {0: "Off/Disabled", 1: "Hold", 2: "Remote Hold", 3: "Standby", 4: "Remote Standby", 5: "Set", 6: "Decelerate/Coast", 7: "Resume", 8: "Accelerate", 9: "Accel. Override", 10: "Preprogrammed Set Speed 1", 11: "Preprogrammed Set Speed 2", 12: "Preprogrammed Set Speed 3", 13: "Preprogrammed Set Speed 4", 14: "PTO Set Speed Memory 1", 15: "PTO Set Speed Memory 2", 31: "Not Available"}}
        ]
    },
    
    // High Resolution Vehicle Distance (VDHR)
    "FEC1": {
        "name": "High Resolution Vehicle Distance (VDHR)",
        "spns": [
            {"n": "HighResDistance", "spn": 917, "b": 0, "l": 4, "r": 0.005, "o": 0, "unit": "km", "desc": "High resolution total vehicle distance (0-21,055,406 km)"}
        ]
    },
    
    // Dash Display (DD) / Fuel Economy (LFE)
    "FEFC": {
        "name": "Dash Display (DD) / Fuel Economy (LFE)",
        "spns": [
            {"n": "FuelLevel", "spn": 96, "b": 1, "l": 1, "r": 0.4, "o": 0, "unit": "%", "desc": "Fuel level 1 (0-100%)"},
            {"n": "FuelLevel2", "b": 0, "l": 1, "r": 0.4, "o": 0, "unit": "%", "desc": "Fuel level 2"}
        ]
    },
    
    // Vehicle Distance (VD)
    "FEE0": {
        "name": "Vehicle Distance (VD)",
        "spns": [
            {"n": "TotalDistance", "spn": 245, "b": 0, "l": 4, "r": 0.125, "o": 0, "unit": "km", "desc": "Total vehicle distance (0-526,385,151 km)"}
        ]
    },
    
    // High Resolution Fuel Consumption (HRFC)
    "FEF2": {
        "name": "High Resolution Fuel Consumption (HRFC)",
        "spns": [
            {"n": "TotalFuelUsed", "spn": 5054, "b": 0, "l": 4, "r": 0.001, "o": 0, "unit": "L", "desc": "High resolution total fuel used (0-4,211,081 L)"},
            {"n": "FuelRate", "b": 0, "l": 2, "r": 0.05, "o": 0, "unit": "L/h", "desc": "Fuel rate"}
        ]
    },
    
    // Fuel Economy (LFE) - Additional fuel parameters
    "FEF3": {
        "name": "Fuel Economy (LFE)",
        "spns": [
            {"n": "FuelRate", "b": 0, "l": 2, "r": 0.05, "o": 0, "unit": "L/h", "desc": "Fuel rate"},
            {"n": "InstantFuelEcon", "b": 2, "l": 2, "r": 0.001953125, "o": 0, "unit": "km/L", "desc": "Instantaneous fuel economy"}
        ]
    },
    
    // Engine Temperature 1 (ET1)
    "FEEE": {
        "name": "Engine Temperature 1 (ET1)",
        "spns": [
            {"n": "CoolantTemp", "b": 0, "l": 1, "r": 1, "o": -40, "unit": "°C", "desc": "Engine coolant temperature"},
            {"n": "FuelTemp", "b": 1, "l": 1, "r": 1, "o": -40, "unit": "°C", "desc": "Fuel temperature"},
            {"n": "OilTemp", "b": 2, "l": 1, "r": 1, "o": -40, "unit": "°C", "desc": "Engine oil temperature"}
        ]
    },
    
    // Axle Weight (WASH) / Vehicle Weight (VW)
    "FEEA": {
        "name": "Axle Weight (WASH) / Vehicle Weight (VW)",
        "spns": [
            {"n": "AxleLocation", "spn": 580, "b": 0, "l": 1, "r": 1, "o": 0, "unit": "", "desc": "Axle location (1 bit/axle)"},
            {"n": "FrontAxleWeight", "spn": 928, "b": 2, "l": 2, "r": 0.5, "o": 0, "unit": "kg", "desc": "Front axle weight (bytes 3-4)"},
            {"n": "RearAxleWeight", "b": 4, "l": 2, "r": 0.5, "o": 0, "unit": "kg", "desc": "Rear axle weight"}
        ]
    },
    
    // Driver Identification (DI)
    "FE6B": {
        "name": "Driver Identification (DI)",
        "spns": [
            {"n": "DriverID", "spn": 1622, "b": 0, "l": 8, "type": "ascii", "desc": "Driver 1 ID (ASCII 8 bytes)"}
        ]
    },
    
    // Electronic Transmission Controller 1 (ETC1)
    "F005": {
        "name": "Electronic Transmission Controller 1 (ETC1)",
        "spns": [
            {"n": "TransShiftInProgress", "b": 0, "l": 1, "m": 0x1F, "s": 0, "unit": "", "desc": "Transmission shift in progress"},
            {"n": "CurrentGear", "spn": 523, "b": 1, "l": 1, "r": 1, "o": -125, "unit": "gear", "desc": "Transmission current gear (-125 to 125)"},
            {"n": "TransOutputShaftSpeed", "b": 2, "l": 2, "r": 0.125, "o": 0, "unit": "rpm", "desc": "Transmission output shaft speed"}
        ]
    },
    
    // Electronic Transmission Controller 2 (ETC2)
    "F009": {
        "name": "Electronic Transmission Controller 2 (ETC2)",
        "spns": [
            {"n": "TransSelectedGear", "b": 0, "l": 1, "r": 1, "o": -125, "unit": "", "desc": "Transmission selected gear"}
        ]
    },
    
    // Ambient Conditions (AMB)
    "FEF5": {
        "name": "Ambient Conditions (AMB)",
        "spns": [
            {"n": "BarometricPressure", "b": 0, "l": 1, "r": 0.5, "o": 0, "unit": "kPa", "desc": "Barometric pressure"},
            {"n": "CabInteriorTemp", "b": 1, "l": 2, "r": 0.03125, "o": -273, "unit": "°C", "desc": "Cab interior temperature"},
            {"n": "AmbientAirTemp", "b": 3, "l": 2, "r": 0.03125, "o": -273, "unit": "°C", "desc": "Ambient air temperature"}
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
            {"n": "Seconds", "b": 0, "l": 1, "r": 0.25, "o": 0, "unit": "s", "desc": "Seconds"},
            {"n": "Minutes", "b": 1, "l": 1, "r": 1, "o": 0, "unit": "min", "desc": "Minutes"},
            {"n": "Hours", "b": 2, "l": 1, "r": 1, "o": 0, "unit": "h", "desc": "Hours"},
            {"n": "Month", "b": 3, "l": 1, "r": 1, "o": 0, "unit": "", "desc": "Month"},
            {"n": "Day", "b": 4, "l": 1, "r": 0.25, "o": 0, "unit": "", "desc": "Day"},
            {"n": "Year", "b": 5, "l": 1, "r": 1, "o": 1985, "unit": "", "desc": "Year"}
        ]
    },
    
    // Tachograph (TCO1)
    "FE6C": {
        "name": "Tachograph (TCO1)",
        "spns": [
            {"n": "TachoVehicleSpeed", "b": 4, "l": 2, "r": 0.00390625, "o": 0, "unit": "km/h", "desc": "Tachograph vehicle speed"},
            {"n": "TachoOverspeed", "b": 0, "l": 1, "m": 0x03, "s": 0, "unit": "", "desc": "Tachograph overspeed"}
        ]
    },
    
    // Air Supply Pressure (AIR1)
    "FEAE": {
        "name": "Air Supply Pressure (AIR1)",
        "spns": [
            {"n": "PneumaticSupplyPress", "b": 0, "l": 1, "r": 8, "o": 0, "unit": "kPa", "desc": "Pneumatic supply pressure"},
            {"n": "ParkBrakeActuatorPress", "b": 1, "l": 1, "r": 8, "o": 0, "unit": "kPa", "desc": "Park brake actuator pressure"},
            {"n": "ServiceBrakeCircuit1Press", "b": 2, "l": 1, "r": 8, "o": 0, "unit": "kPa", "desc": "Service brake circuit 1 air pressure"}
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
        "name": "High Resolution Fuel Consumption (FD09)",
        "spns": [
            {"n": "HighResFuelConsumption", "spn": 5054, "b": 0, "l": 4, "r": 0.001, "o": 0, "unit": "L", "desc": "High resolution fuel consumption (0-4,211,081 L)"}
        ]
    },
    
    // Air Suspension Control (FE56) - Also used for Engine Hours in some systems
    "FE56": {
        "name": "Air Suspension Control / Engine Hours",
        "spns": [
            {"n": "BellowPressureFrontAxle", "b": 0, "l": 1, "r": 4, "o": 0, "unit": "kPa", "desc": "Bellow pressure front axle"},
            {"n": "BellowPressureRearAxle", "b": 1, "l": 1, "r": 4, "o": 0, "unit": "kPa", "desc": "Bellow pressure rear axle"},
            {"n": "EngineHoursAlt", "spn": 247, "b": 0, "l": 4, "r": 0.05, "o": 0, "unit": "h", "desc": "Engine total hours of operation (alternate)"}
        ]
    },
    
    // Brake Switch (F001)
    "F001": {
        "name": "Brake Switch Status",
        "spns": [
            {"n": "ServiceBrake", "b": 0, "l": 1, "m": 0x0C, "s": 2, "unit": "", "desc": "Service brake switch"},
            {"n": "ParkingBrake", "b": 0, "l": 1, "m": 0x03, "s": 0, "unit": "", "desc": "Parking brake switch"}
        ]
    },
    
    // Proprietary Squarell - Enhanced with harsh events and EV data
    "FD7D": {
        "name": "Squarell Proprietary / Performance Data",
        "spns": [
            {"n": "HarshBrake", "b": 0, "l": 2, "r": 0.01, "o": 0, "unit": "g", "desc": "Harsh braking events"},
            {"n": "Energy", "b": 2, "l": 4, "r": 1, "o": 0, "unit": "Wh", "desc": "Energy consumption"},
            {"n": "BatterySOC", "spn": 5464, "b": 6, "l": 1, "r": 1, "o": 0, "unit": "%", "desc": "Hybrid/EV battery state of charge (1% per bit)"},
            {"n": "HarshAccel", "b": 7, "l": 2, "r": 0.001, "o": 0, "unit": "g", "desc": "Harsh acceleration events"}
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
            {"n": "RetarderTorque", "spn": 520, "b": 1, "l": 1, "r": 1, "o": -125, "unit": "%", "desc": "Retarder torque (%)"}
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
            {"n": "FMSDiagnoseSupport", "spn": 2804, "b": 0, "l": 1, "m": 0x03, "s": 0, "unit": "", "desc": "FMS diagnose support"},
            {"n": "FMSRequestsSupport", "spn": 2805, "b": 0, "l": 1, "m": 0x0C, "s": 2, "unit": "", "desc": "FMS requests support"},
            {"n": "FMSSoftwareVersion", "spn": 2806, "b": 1, "l": 4, "type": "hex", "desc": "FMS software support"}
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
    
    // Air Suspension Control 4 (ASC4) - Enhanced version of FE56
    "FE58": {
        "name": "Air Suspension Control 4 (ASC4)",
        "spns": [
            {"n": "BellowPressureFrontLeft", "spn": 1725, "b": 0, "l": 2, "r": 4, "o": 0, "unit": "kPa", "desc": "Bellow pressure front axle left"},
            {"n": "BellowPressureFrontRight", "spn": 1726, "b": 2, "l": 2, "r": 4, "o": 0, "unit": "kPa", "desc": "Bellow pressure front axle right"},
            {"n": "BellowPressureRearLeft", "spn": 1727, "b": 4, "l": 2, "r": 4, "o": 0, "unit": "kPa", "desc": "Bellow pressure rear axle left"},
            {"n": "BellowPressureRearRight", "spn": 1728, "b": 6, "l": 2, "r": 4, "o": 0, "unit": "kPa", "desc": "Bellow pressure rear axle right"}
        ]
    },
    
    // Combination Vehicle Weight (CVW)
    "FE70": {
        "name": "Combination Vehicle Weight (CVW)",
        "spns": [
            {"n": "PoweredVehicleWeight", "spn": 1585, "b": 0, "l": 2, "r": 0.5, "o": 0, "unit": "kg", "desc": "Powered vehicle weight"},
            {"n": "GrossCombinationWeight", "spn": 1760, "b": 2, "l": 2, "r": 0.5, "o": 0, "unit": "kg", "desc": "Gross combination vehicle weight"}
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
            {"n": "ServiceDistance", "spn": 914, "b": 1, "l": 2, "r": 5, "o": 0, "unit": "km", "desc": "Distance until next service"}
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
    
    // Tire Condition (FEF4) 
    "FEF4": {
        "name": "Tire Condition",
        "spns": [
            {"n": "TirePressureFrontLeft", "b": 0, "l": 1, "r": 4, "o": 0, "unit": "kPa", "desc": "Tire pressure front left"},
            {"n": "TirePressureFrontRight", "b": 1, "l": 1, "r": 4, "o": 0, "unit": "kPa", "desc": "Tire pressure front right"}
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
