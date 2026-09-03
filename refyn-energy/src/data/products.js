import airDensity from "../assets/air-density.webp";
import baleOpeners from "../assets/Bale openers.webp";
import baleDeWiring from "../assets/Bale-de wiring.webp";
import balers from "../assets/Balers.webp";
import ladderScreen from "../assets/Ladder-screen.png";
import opticalSorters from "../assets/optical sorters.webp";
import pelletMill from "../assets/pellet-mill.webp";
import shredders from "../assets/Shredders.png";

export const products = [
  {
    slug: "industrial-shredders",
    name: "Industrial Shredders",
    category: "Size Reduction",
    image: shredders,
    summary:
      "Advanced industrial shredders for reliable size reduction across diverse waste streams.",
    description:
      "Refyn Energy supplies industrial shredding systems through its technology partner Harden Machinery Limited. The range covers heavy-duty and customized machines for municipal solid waste, legacy waste, industrial waste, textiles, paper-mill waste, tires, agricultural waste, biomass and metal scrap. Each system is engineered for efficient, reliable and low-maintenance operation.",
    features: [
      "Heavy-duty, high-torque construction",
      "Single, two and four-shaft configurations",
      "Auto-reverse and load-sensing controls",
      "Hydraulic or electrical drive options",
      "Energy-efficient, low-maintenance operation",
      "Remote monitoring and diagnostics",
    ],
    applications: [
      "Municipal solid waste",
      "Legacy and industrial waste",
      "RDF and SRF preparation",
      "Tires, plastics, wood and biomass",
    ],
    specifications: {
      columns: ["Type", "Capacity", "Cut size", "Motor power", "Applications"],
      rows: [
        [
          "Primary Hook",
          "15-180 TPH",
          "50-300 mm",
          "Up to 550 kW",
          "MSW, bulky waste",
        ],
        [
          "Two Shaft",
          "5-50 TPH",
          "30-200 mm",
          "Up to 400 kW",
          "Metal, tires, plastic",
        ],
        [
          "Four Shaft",
          "3-17 TPH",
          "Customizable",
          "Up to 240 kW",
          "Paper, hazardous waste",
        ],
        [
          "Single Shaft",
          "3-31 TPH",
          "25-100 mm",
          "Up to 150 kW",
          "RDF, fine shredding",
        ],
      ],
    },
  },
  {
    slug: "ladder-screens",
    name: "Industrial Screens",
    category: "Screening",
    image: ladderScreen,
    summary:
      "Size-classification systems for efficient waste recovery and downstream processing.",
    description:
      "Screening is a critical stage in modern waste-processing and recycling plants. Refyn Energy integrates trommel, vibrating, disc and flip-flop screens into MSW, RDF, AFR pre-processing and industrial recycling projects. Selecting the correct screen improves material recovery, reduces manual sorting and prepares each fraction for recycling, composting or alternative fuel production.",
    features: [
      "Reliable separation into controlled size fractions",
      "Screen selection matched to material properties",
      "Supports RDF and AFR preparation",
      "Improves recovery and reduces manual sorting",
      "Configurations for sticky, moist and bulk waste",
    ],
    applications: [
      "RDF processing",
      "MSW and material recovery facilities",
      "Composting and biomass",
      "Packaging and industrial recycling",
    ],
    specifications: {
      columns: [
        "Screen type",
        "Best for",
        "Key strength",
        "Typical applications",
      ],
      rows: [
        [
          "Trommel",
          "MSW, RDF, AFR, compost",
          "Reliable bulk separation",
          "MSW plants, composting, RDF pre-treatment",
        ],
        [
          "Disc",
          "AFR, RDF, plastics, paper",
          "Precise, high-capacity sizing",
          "MRFs and packaging recycling",
        ],
        [
          "Vibrating",
          "Medium-capacity streams",
          "Adjustable cut points",
          "MSW, RDF, C&D waste",
        ],
        [
          "Flip-Flop",
          "Sticky, moist or fine fractions",
          "Clog-resistant screening",
          "Compost, green waste, slag, ASR",
        ],
      ],
    },
  },
  {
    slug: "air-density-separators",
    name: "Air Density Separators",
    category: "Separation",
    image: airDensity,
    summary:
      "Controlled airflow separation of materials by density, shape and weight.",
    description:
      "An air density separator, also known as a wind sifter, uses aerodynamic forces to divide light materials such as paper, plastic film and textiles from heavier fractions including stone, glass and metal. It is an important separation stage in RDF production, waste sorting, and construction and industrial waste recycling.",
    features: [
      "Adjustable aerodynamic classification",
      "Compatible with shredders, screens and optical sorters",
      "Modular design for new plants and retrofits",
      "SCADA and PLC automation compatibility",
      "Improves RDF quality by removing contaminants",
    ],
    applications: [
      "Light fraction recovery",
      "RDF refinement",
      "Construction waste",
      "Slag and shredded materials",
      "Plastic packaging and flake sorting",
    ],
    specifications: {
      columns: [
        "Model",
        "Feeding width",
        "Capacity",
        "Installed power",
        "Machine size",
      ],
      rows: [
        ["SFX800", "800 mm", "60 m³/h", "33 kW", "13,600 × 3,600 × 6,000 mm"],
        [
          "SFX1200",
          "1,200 mm",
          "120 m³/h",
          "42 kW",
          "17,600 × 5,200 × 6,900 mm",
        ],
        [
          "SFX1400",
          "1,400 mm",
          "145 m³/h",
          "58 kW",
          "20,000 × 6,500 × 8,100 mm",
        ],
      ],
    },
  },
  {
    slug: "optical-sorters",
    name: "Optical Sorters",
    category: "Automated Sorting",
    image: opticalSorters,
    summary:
      "Sensor-based separation for high-purity plastic recovery and quality control.",
    description:
      "Refyn Energy integrates Pellenc ST optical sorters, including Mistral+ Connect and Mistral Compact+, into plastic washing and recycling lines. NIR, visible-light and color sensors identify plastics by polymer, color and transparency, while targeted air jets remove contaminants with millisecond precision.",
    features: [
      "NIR, VIS, color and profile detection",
      "High-speed targeted air-jet ejection",
      "Up to 50% additional capacity with TopSpeed",
      "Smart monitoring and remote support",
      "Energy-efficient air consumption and cooling",
    ],
    applications: [
      "Plastic recovery",
      "PET bottle color sorting",
      "PE, PP, PS and film separation",
      "Washed-flake purification",
    ],
    specifications: {
      columns: [
        "Model",
        "Materials",
        "Detection",
        "Connectivity",
        "Maintenance",
      ],
      rows: [
        [
          "Mistral+ Connect",
          "PET, PE, PP, PS, films, flakes",
          "FLOW, NIR/VIS, color, profile",
          "Smart & Share, OPC UA, remote access",
          "Retractable access platforms",
        ],
        [
          "Mistral Compact+",
          "PET, PE, PP, films",
          "FLOW, NIR/VIS, color",
          "Smart & Share, remote access",
          "Pivoting reflectors, modular valves",
        ],
      ],
    },
  },
  {
    slug: "industrial-balers",
    name: "Industrial Balers",
    category: "Compaction",
    image: balers,
    summary:
      "Reliable compaction systems for efficient storage, handling and transport.",
    description:
      "Baler machines compact a wide range of recovered materials to optimize storage and transportation. Continuous horizontal, vertical and two-ram balers can be selected according to the required capacity, bale size, pressing force and tying method.",
    features: [
      "Continuous horizontal, vertical and two-ram models",
      "Configurable capacity and bale size",
      "Pressing force matched to the material",
      "Horizontal, vertical or cross ties",
      "Steel wire, PP twine and PET wire options",
    ],
    applications: [
      "Recovered paper",
      "Plastic fractions",
      "RDF materials",
      "Recycling facilities",
    ],
  },
  {
    slug: "bale-openers",
    name: "Bale Openers",
    category: "Material Feeding",
    image: baleOpeners,
    summary:
      "Controlled opening and metering of compacted material into processing lines.",
    description:
      "Bale openers automatically cut bale films and wires, remove them safely from compacted material and spool the recovered films and wires into manageable bundles for recycling. Waste-to-energy and cement plants use these systems to open and feed AFR fuel bales efficiently.",
    features: [
      "Automatic film and wire cutting",
      "Safe separation from baled material",
      "Removed material spooled for recycling",
      "Controlled opening and line feeding",
    ],
    applications: [
      "Plastic bales",
      "Recovered paper",
      "Mixed recyclables",
      "Sorting line feeding",
    ],
  },
  {
    slug: "pellet-mills",
    name: "Pellet Mills",
    category: "Fuel Preparation",
    image: pelletMill,
    summary:
      "Densification systems for producing consistent, manageable fuel pellets.",
    description:
      "Biomass, RDF, SRF and sludge typically have high storage volume and low bulk density. Pellet mills densify these materials into consistent alternative-fuel pellets, improving handling while reducing storage and transportation costs.",
    features: [
      "Increases bulk density",
      "Reduces storage volume",
      "Improves transport economics",
      "Produces consistent alternative fuel",
      "Suitable for multiple prepared feedstocks",
    ],
    applications: [
      "Alternative fuels",
      "Biomass preparation",
      "Densified RDF",
      "Industrial fuel handling",
    ],
  },
  {
    slug: "bale-de-wiring-systems",
    name: "Bale De-Wiring Systems",
    category: "Automation",
    image: baleDeWiring,
    summary:
      "Automated wire removal for safer and more efficient bale processing.",
    description:
      "Bale de-wiring machines automatically and safely cut and remove steel wires before baled material enters the processing line. Removed wires are coiled into small, tight bundles that are easier to handle and recycle.",
    features: [
      "Automatic steel-wire cutting and removal",
      "Wire coiling into compact bundles",
      "Reduced manual handling and exposure",
      "Cleaner downstream material feed",
      "Designed for processing-line integration",
    ],
    applications: [
      "RDF bales",
      "Plastic bales",
      "Paper bales",
      "Automated recycling lines",
    ],
  },
];

export const getProduct = (slug) =>
  products.find((product) => product.slug === slug);
