import processing from "../assets/waste-processing.png";
import { DarkCTA, Heading, Meta, PageHero } from "../components/UI";
import {
  CheckGrid,
  ProcessFlow,
  SolutionIntro,
} from "../components/PageSections";

const capabilities = [
  "Shredded RDF pre-processing: 2,000-3,000 TPD",
  "Non-hazardous fuel production to plant requirements",
  "Liquid AFR - HCV: up to 500 KLPD",
  "Liquid AFR - LCV: up to 500 KLPD",
  "Plant-specific AFR blending and quality control",
  "Solid hazardous fuels: up to 500 TPD",
  "Consistent calorific value for stable kiln operation",
  "Co-processing for cement and WTE plants",
  "Environmental and safety compliance",
  "End-to-end traceability",
];

export function EnergyCycle() {
  return (
    <>
      <Meta
        title="REFYN ENERGY CYCLE | AFR & Waste-to-Fuel Platforms"
        description="Large-scale AFR and waste-to-fuel platforms."
      />
      <PageHero
        eyebrow="Business pillar 01"
        title="Refyn Energy Cycle"
        text="AFR & Waste-to-Fuel Platforms"
        image={processing}
      />
      <SolutionIntro
        eyebrow="Waste-to-fuel"
        title="Consistent fuel. Reliable co-processing."
        highlight="Reliable co-processing"
        lead="We develop and operate large-scale pre-processing facilities that convert municipal, industrial and hazardous waste into consistent, high-quality Alternative Fuels and Raw Materials (AFR)."
        text="Every solution is customized around calorific value, moisture, feed size and the cement plant's operating requirements. From shredded RDF to liquid AFR and ready-to-feed solid hazardous fuels, the platform covers the full spectrum of waste-derived energy."
        image={processing}
      />
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
          <Heading
            eyebrow="Key capabilities"
            title="From incoming waste to controlled output"
          />
          <CheckGrid items={capabilities} />
          <ProcessFlow />
        </div>
      </section>
      <DarkCTA />
    </>
  );
}
