import plant from "../assets/refyn-plant.png";
import engineers from "../assets/engineers.png";
import { services } from "../data/siteData";
import { DarkCTA, Meta, PageHero } from "../components/UI";
import { SolutionIntro } from "../components/PageSections";

export function EnergySolutions() {
  return (
    <>
      <Meta
        title="REFYN ENERGY SOLUTIONS | Contract & Value-Added Services"
        description="Contract and managed industrial services for efficiency and alternative fuels."
      />
      <PageHero
        eyebrow="Business pillar 02"
        title="Refyn Energy Solutions"
        text="Contract & Value-Added Services"
        image={engineers}
      />
      <SolutionIntro
        eyebrow="Integrated delivery"
        title="Expertise with flexible commercial models."
        highlight="Flexible commercial models"
        lead="A comprehensive suite of contract and managed services focused on cost optimization and operational efficiency, primarily for cement plants and large industrial consumers."
        text="Our model gives customers access to state-of-the-art technology and operational expertise with or without upfront CAPEX, reducing fuel costs, improving process reliability and enabling greener industrial operations."
        image={plant}
      />
      <section className="bg-white pb-24 pt-4">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
          <div className="relative overflow-hidden border border-stone-200 [&>img]:h-80 [&>img]:w-full [&>img]:object-cover md:[&>img]:h-[520px] [&>div]:bg-brand-dark [&>div]:p-8 [&>div]:text-white md:[&>div]:absolute md:[&>div]:bottom-0 md:[&>div]:left-0 md:[&>div]:w-1/2 md:[&>div]:border-t-4 md:[&>div]:border-brand-orange md:[&>div]:p-12 [&_h2]:my-3 [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:leading-tight [&_p]:text-white/65">
            <img src={plant} alt="Cement plant operations" />
            <div>
              <span>Core services</span>
              <h2>Heat, fuel and process performance</h2>
              <p>
                Engineering and operations come together around the plant's real
                production requirements.
              </p>
            </div>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {services.map(([n, t, d, I]) => (
              <article
                key={n}
                className="group grid min-h-36 grid-cols-[42px_38px_1fr] gap-4 border border-stone-300 bg-brand-paper p-6 transition hover:border-brand-olive hover:bg-white hover:shadow-lg"
              >
                <span className="font-bold text-brand-orange">{n}</span>
                <I className="text-brand-olive" />
                <div>
                  <h3 className="mb-2 font-bold uppercase">{t}</h3>
                  <p className="m-0 text-xs">{d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <DarkCTA />
    </>
  );
}
