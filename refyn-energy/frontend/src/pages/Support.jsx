import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardPenLine,
  Clock3,
  Factory,
  Headphones,
  Leaf,
  Lightbulb,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import engineers from "../assets/engineers.png";
import plant from "../assets/refyn-plant.png";
import { DarkCTA, Meta, PageHero } from "../components/UI";

const journey = [
  [Lightbulb, "01", "Conceptualize", "We understand your goals"],
  [ClipboardPenLine, "02", "Engineer", "Purpose-built engineering"],
  [Settings, "03", "Install", "Safe, efficient implementation"],
  [CheckCircle2, "04", "Commission", "Performance you can rely on"],
  [Headphones, "05", "Support", "24/7 O&M support"],
];

const outcomes = [
  [
    ShieldCheck,
    "Reliable Performance",
    "Consistent, predictable and built to perform.",
  ],
  [
    Clock3,
    "Lower Downtime, Higher Output",
    "Optimized systems for continuous operations.",
  ],
  [Leaf, "Built for Sustainability", "Cleaner operations. Lower emissions."],
  [
    Users,
    "Partner in Your Long-Term Growth",
    "Collaborative support every step of the way.",
  ],
];

export function Support() {
  return (
    <>
      <Meta
        title="Support & Services | REFYN ENERGY"
        description="Engineering support from concept through long-term operations."
      />
      <PageHero
        eyebrow="Lifelong operational value"
        title="Support & Services"
        text="Your partner in seamless execution & operations"
        image={engineers}
      />

      <section className="relative overflow-hidden bg-brand-paper pb-10 pt-16 lg:pb-10 lg:pt-20">
        <div className="mx-auto w-full max-w-[1500px] px-5 md:px-8">
          <div className="support-overview-grid grid gap-12 lg:items-center lg:gap-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="support-accent h-0.5 bg-brand-orange" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-brand-orange">
                  End-to-end support
                </span>
              </div>
              <h2 className="mt-7 text-4xl font-extrabold uppercase !leading-[1.08] tracking-tight text-brand-dark md:text-5xl lg:text-[48px]">
                <span className="block whitespace-nowrap">
                  From first concept
                </span>
                <span className="block">to steady</span>
                <span className="block text-brand-olive">
                  Operations<span className="text-brand-orange">.</span>
                </span>
              </h2>
              <span className="support-accent mt-6 block h-0.5 bg-brand-orange" />
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
              {journey.map(([Icon, number, title, text], index) => (
                <div key={title} className="group relative px-3 text-center">
                  <div className="support-step-icon mx-auto flex items-center justify-center rounded-full border border-brand-olive/25 bg-white/25 ring-[3px] ring-white/70 transition-all duration-300 group-hover:border-brand-orange group-hover:-translate-y-1">
                    <Icon
                      size={26}
                      strokeWidth={1.5}
                      className="text-brand-olive"
                    />
                  </div>
                  {index < journey.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      size={18}
                      className="absolute -right-2 top-5 hidden text-brand-orange lg:block"
                    />
                  )}
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 top-[70px] hidden w-px bg-stone-300 lg:block"
                    />
                  )}
                  <span className="mt-5 block text-sm font-bold text-brand-orange">
                    {number}
                  </span>
                  <h3 className="mt-3 text-[11px] font-extrabold uppercase text-brand-dark">
                    {title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[135px] text-xs leading-5 text-brand-dark/65">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="support-story-grid mt-14 grid overflow-hidden border-t border-stone-300">
            <div className="flex flex-col justify-center py-12 lg:pr-12">
              <div className="flex items-start gap-5 border-l border-brand-orange pl-4">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand-olive/10">
                  <Factory
                    size={38}
                    strokeWidth={1.4}
                    className="text-brand-olive"
                  />
                </div>
                <h2 className="text-xl font-bold !leading-[1.4] text-brand-dark md:text-2xl">
                  We deliver{" "}
                  <span className="text-brand-olive">lifelong value</span> from
                  conceptualization and engineering to installation,
                  commissioning and beyond.
                </h2>
              </div>
              <span className="mt-7 block h-0.5 w-12 bg-brand-orange" />
              <p className="mt-7 text-sm leading-7 text-brand-dark/65 md:text-base">
                Our O&M services help AFR pre-processing and co-processing
                facilities run at peak efficiency with on-site support, off-site
                support, technical teams and round-the-clock guidance.
              </p>
            </div>

            <div className="support-image-frame min-h-[410px] overflow-hidden">
              <img
                src={plant}
                alt="Refyn Energy industrial facility"
                className="h-full min-h-[410px] w-full object-cover"
              />
            </div>
          </div>

          <div className="support-outcomes-grid mt-4 grid overflow-hidden rounded-xl border border-stone-300 bg-white/35">
            <div className="flex min-h-[145px] items-center justify-center bg-brand-olive p-5 text-[#ded28b]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#ded28b]/70">
                <BarChart3 size={32} strokeWidth={1.4} />
              </div>
            </div>
            <div className="flex flex-col justify-center border-b border-stone-300 px-5 py-7 lg:border-b-0 lg:border-r">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-dark/70">
                Integrated engineering
              </span>
              <strong className="mt-1 text-xs uppercase text-brand-orange">
                Measurable value
              </strong>
              <span className="mt-4 h-0.5 w-10 bg-brand-orange" />
            </div>

            {outcomes.map(([Icon, title, text]) => (
              <div
                key={title}
                className="border-b border-stone-300 px-5 py-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="flex items-start gap-3">
                  <Icon
                    size={34}
                    strokeWidth={1.4}
                    className="shrink-0 text-brand-olive"
                  />
                  <h3 className="text-xs font-bold !leading-[1.45] text-brand-dark">
                    {title}
                  </h3>
                </div>
                <p className="mt-5 text-xs leading-5 text-brand-dark/60">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DarkCTA />
    </>
  );
}
