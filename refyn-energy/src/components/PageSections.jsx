import {
  BarChart3,
  Check,
  ChevronRight,
  Factory,
  Recycle,
  Scale,
  Truck,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

import plant from "../assets/refyn-plant.png";
export function Intro({ eyebrow, title, lead, text }) {
  return (
    <section className="relative overflow-hidden bg-brand-paper py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-20 flex flex-col justify-center bg-brand-paper py-8 pr-6 md:pr-10 lg:py-10 lg:pr-14"
          >
            {/* Orange vertical line */}
            <span className="absolute left-0 top-10 h-[190px] w-[2px] bg-brand-orange" />

            {/* Eyebrow */}
            <div className="ml-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-brand-orange" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                {eyebrow}
              </span>
            </div>

            {/* Title */}
            <h2 className="ml-5 mt-6 max-w-[560px] text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-brand-dark sm:text-5xl md:text-6xl lg:text-[58px]">
              {title}
            </h2>

            {/* Orange line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 55 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="ml-5 mt-7 h-[3px] bg-brand-orange"
            />

            {/* Small label */}
            <div className="ml-5 mt-7 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-olive/10">
                <BarChart3
                  size={18}
                  strokeWidth={1.6}
                  className="text-brand-olive"
                />
              </div>

              <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-stone-400">
                Integrated engineering · Measurable value
              </span>
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE + CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-[480px] overflow-hidden lg:min-h-[520px]"
          >
            {/* CLEAR IMAGE — NO BLUR / NO OVERLAY */}
            <motion.img
              src={plant}
              alt="Industrial processing facility"
              initial={{ scale: 1.04 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* White diagonal transition ONLY */}
            <div
              className="absolute left-0 top-0 h-full w-[95px] bg-brand-paper"
              style={{
                clipPath: "polygon(0 0, 100% 0, 25% 100%, 0 100%)",
              }}
            />

            {/* CONTENT — SOLID PAPER, NO BACKDROP BLUR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute left-16 top-1/2 w-[calc(100%-5rem)] max-w-[650px] -translate-y-1/2"
            >
              <div className="border-l-[3px] border-brand-orange bg-brand-paper px-6 py-7 md:px-8 md:py-9 lg:px-9">
                <p className="text-xl font-semibold leading-[1.35] tracking-tight text-[#30352b] md:text-2xl lg:text-[25px]">
                  {lead}
                </p>

                <div className="mt-6 h-[3px] w-12 bg-brand-orange" />

                <p className="mt-6 max-w-xl text-sm leading-7 text-stone-500 md:text-base md:leading-8">
                  {text}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-stone-300" />
      </div>
    </section>
  );
}

export function SolutionIntro({
  eyebrow,
  title,
  highlight,
  lead,
  text,
  image,
}) {
  const normalizedTitle = title.replace(/[.\s]+$/, "");
  const titleStart = highlight
    ? normalizedTitle.replace(highlight, "").trim()
    : normalizedTitle;

  return (
    <section className="overflow-hidden bg-brand-paper py-10 lg:py-14">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="grid border-b border-stone-300 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative pb-10 lg:min-h-[520px] lg:border-r lg:border-stone-300 lg:pb-12 lg:pr-12">
            <span className="absolute bottom-10 left-0 top-0 hidden w-px bg-brand-orange lg:block" />
            <div className="lg:pl-9">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-9 bg-brand-orange" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                  {eyebrow}
                </span>
              </div>
              <h2 className="mt-6 max-w-[540px] text-4xl font-black uppercase !leading-[1.18] text-brand-dark md:text-5xl lg:text-[46px]">
                {titleStart}{" "}
                {highlight && (
                  <span className="text-brand-olive">{highlight}</span>
                )}
                <span className="text-brand-orange">.</span>
              </h2>
              <div className="mt-8 h-0.5 w-12 bg-brand-orange" />
              <div className="mt-10 flex items-center gap-5 lg:absolute lg:bottom-14 lg:left-9">
                <span className="grid size-14 shrink-0 place-items-center rounded-full border border-brand-olive/25 bg-white/45 text-brand-olive">
                  <BarChart3 size={24} strokeWidth={1.6} />
                </span>
                <div className="text-[10px] font-bold uppercase tracking-[0.14em]">
                  <span className="block text-brand-dark/45">
                    Integrated engineering
                  </span>
                  <span className="mt-1.5 block text-brand-orange">
                    Measurable value
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:min-h-[520px]">
            <div className="relative ml-auto h-[280px] w-full overflow-hidden sm:h-[350px] lg:absolute lg:bottom-0 lg:right-0 lg:h-[410px] lg:w-[94%] lg:[clip-path:polygon(13%_0,100%_0,100%_100%,0_100%)]">
              <img
                src={image}
                alt="Industrial processing facility"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-brand-dark/10" />
            </div>
            <div className="relative z-10 mx-4 -mt-8 border border-stone-200 bg-white/95 p-6 shadow-[0_18px_50px_rgba(24,31,20,0.12)] backdrop-blur-sm sm:mx-8 sm:p-7 lg:mx-0 lg:ml-14 lg:mt-5 lg:max-w-[570px] lg:p-8">
              <span className="absolute bottom-8 left-0 top-8 w-0.5 bg-brand-orange" />
              <div className="pl-4">
                <div className="flex items-start gap-4">
                  <Factory
                    size={27}
                    strokeWidth={1.5}
                    className="mt-1 hidden shrink-0 text-brand-olive sm:block"
                  />
                  <p className="text-base font-bold !leading-[1.45] !text-brand-dark md:text-lg">
                    {lead}
                  </p>
                </div>
                <span className="mt-5 block h-0.5 w-11 bg-brand-orange sm:ml-11" />
                <p className="mt-5 text-sm leading-6 text-brand-dark/60 sm:ml-11">
                  {text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CheckGrid({ items }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="group flex min-h-16 items-center gap-4 border border-stone-300 bg-white px-5 py-4 text-sm transition hover:border-brand-olive hover:bg-brand-dark hover:text-white"
        >
          <span className="grid size-7 shrink-0 place-items-center border border-brand-olive text-brand-olive group-hover:border-[#c8d36a] group-hover:text-[#c8d36a]">
            <Check size={14} strokeWidth={2.5} />
          </span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export function ProcessFlow() {
  const stages = [
    ["Waste in", Truck],
    ["Sort & shred", Recycle],
    ["Quality control", Scale],
    ["Alternative fuel", Zap],
    ["Co-processing", Factory],
  ];

  return (
    <div className="mt-14 grid border border-white/10 bg-brand-dark text-white shadow-2xl md:grid-cols-5">
      {stages.map(([label, Icon], index) => (
        <div
          key={label}
          className="group relative flex min-h-32 flex-col items-center justify-center gap-3 border-b border-white/15 p-5 text-center last:border-b-0 md:min-h-40 md:border-b-0 md:border-r md:last:border-r-0"
        >
          <Icon className="size-7 text-[#c4cf65] transition group-hover:text-brand-orange" />
          <span className="text-[10px] font-bold uppercase tracking-[0.08em]">
            {label}
          </span>
          {index < stages.length - 1 && (
            <ChevronRight className="absolute -right-3 z-10 hidden size-5 text-brand-orange md:block" />
          )}
        </div>
      ))}
    </div>
  );
}
