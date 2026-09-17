import {
  Award,
  Boxes,
  CircleGauge,
  Factory,
  Flame,
  Handshake,
  Leaf,
  Recycle,
  ShieldCheck,
  Truck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
export const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Our Values", "/our-values"],
  ["Products", "/products"],
  ["Support & Services", "/support-services"],
  ["Contact", "/contact"],
];
export const solutionItems = [
  ["Energy Cycle", "/energy-cycle"],
  ["Energy Solutions", "/energy-solutions"],
  ["AFR Plant", "/afr-plant"],
];
export const stats = [
  ["100 M", "Kcal/hr", "Max HAG Capacity"],
  ["3,000", "TPD", "RDF Processing Peak Daily Throughput"],
  ["500", "TPD", "Solid AFR Ready-to-Feed Fuel"],
  ["60", "TPH", "Shredding Waste Processing Range"],
  ["500", "KLPD", "Liquid AFR HCV & LCV Combined"],
  ["50", "TPH", "Pond Ash Flash & Spin Drying"],
];
export const services = [
  [
    "01",
    "On-Site Heat Supply",
    "AFR, biomass or coal-based Hot Air Generator solutions.",
    Flame,
  ],
  [
    "02",
    "Flexible CAPEX Models",
    "Delivery models with or without customer CAPEX.",
    CircleGauge,
  ],
  [
    "03",
    "Pond Ash Drying",
    "On-site conversion of pond ash to dry fly ash.",
    Zap,
  ],
  [
    "04",
    "AFR Pre-processing O&M",
    "On-site operations and maintenance for reliable output.",
    Wrench,
  ],
  [
    "05",
    "AFR Co-processing O&M",
    "Off-site operations and maintenance support.",
    Factory,
  ],
  [
    "06",
    "Raw Material Sourcing",
    "Limestone, red ochre, gypsum and other alternatives.",
    Boxes,
  ],
  [
    "07",
    "Pre-processed AFR Supply",
    "Supply of consistent pre-processed and shredded AFR.",
    Truck,
  ],
  [
    "08",
    "Carbon Capture & Utilization",
    "CCU technology deployment for cement operations.",
    Leaf,
  ],
  [
    "09",
    "Technical Advisory",
    "Practical fuel-transition advisory for cement plants.",
    Award,
  ],
  [
    "10",
    "Long-Term Partnerships",
    "Operational partnerships built around shared outcomes.",
    Handshake,
  ],
];
export const values = [
  [
    "01",
    "Innovation First",
    "Engineering answers to industrial challenges, backed by continuous R&D for Indian conditions.",
    Zap,
  ],
  [
    "02",
    "Customer Partnership",
    "Partners in customer success, not just vendors.",
    Handshake,
  ],
  [
    "03",
    "Sustainable Impact",
    "Designed to reduce waste, lower emissions and improve resource efficiency.",
    Leaf,
  ],
  [
    "04",
    "Operational Reliability",
    "Built for performance, robustness, maintainability and consistent output.",
    CircleGauge,
  ],
  [
    "05",
    "Integrity & Transparency",
    "Ethical business practices and transparent dealings.",
    ShieldCheck,
  ],
  [
    "06",
    "Waste to Value",
    "Converting industrial waste into fuels, metals and recovered materials.",
    Recycle,
  ],
  [
    "07",
    "Ownership Mindset",
    "Entrepreneurial spirit and responsibility for the environment.",
    Award,
  ],
  [
    "08",
    "Cooperative Culture",
    "Mutual support and coordination among teams.",
    Users,
  ],
  [
    "09",
    "Clean & Green",
    "Committed to creating a greener industrial future.",
    Leaf,
  ],
];
export const plantSteps = [
  [
    "01",
    "Primary Shredder",
    "High-torque, low-speed dual-shaft shredding reduces municipal waste to 50-150 mm.",
  ],
  [
    "02",
    "Over Band Magnet",
    "Separates ferrous metals from the material stream.",
  ],
  ["03", "Disc Screen", "Separates oversized and undersized material."],
  [
    "04",
    "Windshifter",
    "Divides heavy glass, stone and metal from light plastics and fabric.",
  ],
  ["05", "Feeding Conveyor", "Moves sorted waste to the secondary shredder."],
  [
    "06",
    "R-Max Secondary Shredder",
    "Single-shaft fine shredding produces 30-80 mm RDF output.",
  ],
  [
    "07",
    "PLC Control Panel",
    "Automation supports consistent, monitored throughput.",
  ],
  [
    "08",
    "Output Conveyor",
    "Transfers final RDF to storage or direct dispatch.",
  ],
];
