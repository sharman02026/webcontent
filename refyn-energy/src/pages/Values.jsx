import engineers from "../assets/engineers.png";
import { values } from "../data/siteData";
import { DarkCTA, Heading, Meta, PageHero } from "../components/UI";

export function Values() {
  return (
    <>
      <Meta
        title="Our Values | REFYN ENERGY"
        description="The principles guiding Refyn Energy's engineering and partnerships."
      />
      <PageHero
        eyebrow="Our guiding principles"
        title="What we stand for"
        text="Values that shape how we engineer, operate and partner."
        image={engineers}
      />
      <section className="bg-brand-paper py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
          <Heading
            eyebrow="Nine commitments"
            title="Built into every decision"
            center
          />
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {values.map(([n, t, d, I]) => (
              <article
                key={n}
                className="group relative min-h-72 overflow-hidden border border-stone-300 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-olive hover:shadow-xl"
              >
                <span className="absolute right-5 top-3 text-6xl font-black text-stone-100 transition group-hover:text-[#eef0dc]">
                  {n}
                </span>
                <span className="grid size-12 place-items-center border border-brand-olive text-brand-olive transition group-hover:bg-brand-olive group-hover:text-white">
                  <I size={23} />
                </span>
                <h3 className="mb-4 mt-12 text-lg font-bold uppercase">{t}</h3>
                <p className="text-sm">{d}</p>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-brand-orange transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>
      <DarkCTA />
    </>
  );
}
