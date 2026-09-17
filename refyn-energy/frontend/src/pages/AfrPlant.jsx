import {
  Factory,
  Gauge,
  Recycle,
  Settings,
  ShieldCheck,
  Wind,
  Zap,
  CheckCircle2,
} from "lucide-react";

import processing from "../assets/waste-processing.png";
import { plantSteps } from "../data/siteData";
import { Meta, PageHero, DarkCTA } from "../components/UI";
import { CheckGrid, SolutionIntro } from "../components/PageSections";
import { motion } from "framer-motion";

export function AfrPlant() {
  const flows = [
    "Input waste",
    "Primary shredding",
    "Metal separation",
    "Screening",
    "Air separation",
    "Secondary shredding",
    "RDF / SRF",
    "Cement / WTE co-processing",
  ];

  const icons = [
    Recycle,
    Settings,
    ShieldCheck,
    Gauge,
    Wind,
    Settings,
    Zap,
    Factory,
  ];

  return (
    <>
      {/* =========================================================
          META
      ========================================================= */}
      <Meta
        title="AFR Plant | Alternative Fuels & Raw Materials Processing"
        description="AFR plant processing and customized capacity from 200 to 3,000 tons per day."
      />

      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHero
        eyebrow="Processing infrastructure"
        title="AFR Plant"
        text="Alternative Fuels & Raw Materials Processing"
        image={processing}
      />

      {/* =========================================================
          AFR OVERVIEW
      ========================================================= */}
      <SolutionIntro
        eyebrow="Waste conversion"
        title="From mixed inputs to usable industrial fuel."
        highlight="usable industrial fuel"
        lead="AFR plants convert Municipal Solid Waste (MSW), Commercial & Industrial Waste (C&I), Construction & Demolition Waste (C&D), and bulky waste into Refuse Derived Fuel (RDF) and Solid Recovered Fuel (SRF)."
        text="The controlled fuel output is prepared for use in cement kilns and waste-to-energy plants, while separated material streams enable the recovery of ferrous metals."
        image={processing}
      />

      {/* =========================================================
          PROCESSING ARCHITECTURE
      ========================================================= */}
      <section className="relative overflow-hidden bg-brand-dark py-16 text-white lg:py-20">
        {/* Subtle background details */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-brand-orange blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-brand-olive blur-[130px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 md:px-8">
          {/* SECTION HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-9 bg-brand-orange" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#c8d36a]">
                  Processing architecture
                </span>
              </div>

              <h2 className="mt-5 max-w-3xl text-4xl font-bold uppercase leading-[1.02] tracking-tight md:text-5xl lg:text-6xl">
                Engineered as a{" "}
                <span className="text-brand-orange">continuous process.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 !text-white/45 lg:justify-self-end">
              Every stage is designed to progressively transform complex waste
              streams into controlled, usable industrial fuel.
            </p>
          </motion.div>

          {/* PROCESS JOURNEY */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-14"
          >
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[6%] right-[6%] top-7 hidden h-px bg-white/10 xl:block" />

              {/* Animated line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "88%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.8,
                  delay: 0.3,
                  ease: "easeInOut",
                }}
                className="absolute left-[6%] top-7 hidden h-[2px] bg-brand-orange xl:block"
              />

              <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 xl:gap-3">
                {plantSteps.map(([n, title, description], index) => {
                  const Icon = icons[index] || Settings;

                  return (
                    <motion.div
                      key={n}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.07,
                      }}
                      className="group relative text-center"
                    >
                      {/* Number */}
                      <span className="mb-3 block text-[9px] font-black tracking-[0.18em] text-brand-orange">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Icon */}
                      <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#0b120d] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand-orange">
                        <Icon
                          size={21}
                          strokeWidth={1.4}
                          className="text-[#c8d36a] transition-colors duration-300 group-hover:text-brand-orange"
                        />
                      </div>

                      {/* Content */}
                      <div className="mt-5 px-2">
                        <h3 className="text-[10px] font-bold uppercase leading-5 tracking-[0.08em] text-white/85">
                          {title}
                        </h3>

                        <p className="mt-2 text-[10px] leading-5 !text-white/40">
                          {description}
                        </p>
                      </div>

                      <div className="mx-auto mt-4 h-[2px] w-0 bg-brand-orange transition-all duration-300 group-hover:w-7" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* TECHNICAL STRIP */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
              Input → Separation → Refinement → Fuel
            </span>

            <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#c8d36a]">
              <span className="h-2 w-2 rounded-full bg-brand-orange" />
              Controlled processing
            </span>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CAPACITY + ENGINEERING
      ========================================================= */}
      <section className="relative overflow-hidden bg-brand-paper py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1500px] px-5 md:px-8">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-brand-orange" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-olive">
                Plant capacity
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl text-3xl font-bold uppercase leading-[1.05] tracking-tight text-brand-dark md:text-5xl">
              Built around your{" "}
              <span className="text-brand-olive">operating requirements.</span>
            </h2>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            {/* CAPACITY */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[28px] bg-brand-dark p-8 text-white md:p-10"
            >
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand-olive/10 blur-[80px]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c8d36a]/30 bg-[#c8d36a]/10">
                    <Factory
                      size={21}
                      className="text-[#c8d36a]"
                      strokeWidth={1.4}
                    />
                  </div>

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
                    AFR infrastructure
                  </span>
                </div>

                <span className="mt-14 block text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                  Processing range
                </span>

                <div className="mt-3">
                  <strong className="text-5xl font-bold tracking-tight md:text-6xl">
                    200–3,000
                  </strong>
                </div>

                <div className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-[#c8d36a]">
                  Tons / Day
                </div>

                <div className="mt-7 h-[2px] w-14 bg-brand-orange" />

                <p className="mt-6 max-w-md text-sm leading-7 !text-white/50">
                  Plant capacity and configuration can be customized around
                  input material characteristics, output requirements and
                  operating conditions.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="border border-white/10 bg-white/[0.035] p-4">
                    <span className="block text-[8px] uppercase tracking-[0.15em] text-white/30">
                      Input
                    </span>

                    <b className="mt-2 block text-xs uppercase text-white/80">
                      Customized
                    </b>
                  </div>

                  <div className="border border-white/10 bg-white/[0.035] p-4">
                    <span className="block text-[8px] uppercase tracking-[0.15em] text-white/30">
                      Output
                    </span>

                    <b className="mt-2 block text-xs uppercase text-white/80">
                      Controlled
                    </b>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-[3px] w-24 bg-brand-orange" />
            </motion.div>

            {/* ENGINEERING CAPABILITIES */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="mb-7">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-olive">
                  Engineering capabilities
                </span>

                <p className="mt-3 max-w-xl text-sm leading-6 text-brand-dark/55">
                  Designed to deliver reliable performance, safety and
                  operational flexibility across demanding industrial
                  environments.
                </p>
              </div>

              <CheckGrid
                items={[
                  "High-level safety systems",
                  "International environmental standards",
                  "Low-maintenance design",
                  "PLC auto control",
                  "Customized input material",
                  "Customized output size and capacity",
                ]}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUTPUT PATHWAY
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#111a12] py-16 text-white lg:py-20">
        <div className="mx-auto w-full max-w-[1500px] px-5 md:px-8">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-7 lg:grid-cols-[1fr_0.55fr] lg:items-end"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-brand-orange" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#c8d36a]">
                  Output pathway
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold uppercase leading-[1.05] tracking-tight md:text-5xl">
                From waste to{" "}
                <span className="text-brand-orange">industrial value.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 !text-white/45">
              A controlled material journey from initial waste reception to
              final industrial co-processing.
            </p>
          </motion.div>

          {/* ALL 8 FLOW ITEMS */}
          <div className="mt-12 grid overflow-hidden border border-white/10 bg-white/[0.025] sm:grid-cols-2 lg:grid-cols-4">
            {flows.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group relative min-h-[145px] border-b border-white/10 p-6 transition-all duration-300 hover:bg-white/[0.04] lg:border-r lg:last:border-r-0"
              >
                <span className="text-3xl font-black text-white/10 transition-colors duration-300 group-hover:text-brand-orange/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-7 max-w-[180px] text-xs font-bold uppercase leading-5 tracking-wide text-white/80">
                  {item}
                </h3>

                <div className="absolute bottom-0 left-6 h-[2px] w-7 bg-brand-orange transition-all duration-300 group-hover:w-12" />
              </motion.div>
            ))}
          </div>

          {/* FINAL APPLICATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 border border-brand-orange/20 bg-brand-orange/[0.05] p-7 md:p-9"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-brand-orange">
                  Final application
                </span>

                <h3 className="mt-2 text-xl font-bold uppercase tracking-wide text-white md:text-2xl">
                  RDF / SRF → Cement / WTE co-processing
                </h3>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-orange/30 bg-brand-orange/10">
                <CheckCircle2
                  size={20}
                  strokeWidth={1.5}
                  className="text-brand-orange"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMMON CTA */}
      <DarkCTA />
    </>
  );
}
