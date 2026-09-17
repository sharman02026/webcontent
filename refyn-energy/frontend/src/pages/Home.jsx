import {
  ArrowRight,
  BarChart3,
  Factory,
  Leaf,
  PackageCheck,
  Recycle,
  Settings,
  ShieldCheck,
  Target,
  Truck,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import plant from "../assets/refyn-plant.png";
import heroVideo from "../assets/industrial-hero.mp4";
import processing from "../assets/waste-processing.png";
import engineers from "../assets/engineers.png";
import { stats } from "../data/siteData";
import { Meta } from "../components/UI";

const focusDomains = [
  [
    "01",
    "Energy",
    "Multi-fuel heat systems and alternative-fuel strategies that improve flexibility and reduce conventional fuel demand.",
    plant,
    "/energy-solutions",
  ],
  [
    "02",
    "Environment",
    "Waste-to-value and decarbonization solutions that create measurable environmental impact.",
    engineers,
    "/energy-cycle",
  ],
  [
    "03",
    "Material Processing",
    "Robust shredding, screening, drying and recovery systems engineered for consistent output.",
    processing,
    "/afr-plant",
  ],
];

const processSteps = [
  ["01", "Source", "Waste streams", Truck],
  ["02", "Process", "Shredding · Screening · Drying", Settings],
  ["03", "Recover", "AFR · Materials", Recycle],
  ["04", "Deliver", "Consistent industrial fuel", PackageCheck],
  ["05", "Value", "Lower waste · Better efficiency", BarChart3],
];

export function Home() {
  return (
    <>
      <Meta
        title="REFYN ENERGY | Sustainable Energy & Waste-to-Fuel Solutions"
        description="Industrial engineering, AFR and sustainable waste-to-fuel solutions."
      />

      <section className="relative min-h-[100svh] overflow-hidden bg-[#050b07] text-white lg:min-h-[860px]">
        {/* =========================================================
      BACKGROUND VIDEO
  ========================================================== */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* =========================================================
      VIDEO OVERLAYS
  ========================================================== */}

        {/* Overall dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Left dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b07]/95 via-[#050b07]/75 to-[#050b07]/10" />

        {/* Bottom dark gradient */}
        <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-[#050b07] to-transparent" />

        {/* Top dark gradient */}
        <div className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-[#050b07]/70 to-transparent" />

        {/* =========================================================
      AMBIENT GLOW
  ========================================================== */}

        <motion.div
          animate={{
            opacity: [0.08, 0.18, 0.08],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[15%] top-[35%] hidden h-[350px] w-[350px] rounded-full bg-[#c5cf67] blur-[130px] md:block"
        />

        <motion.div
          animate={{
            opacity: [0.05, 0.14, 0.05],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[20%] top-[30%] hidden h-[300px] w-[300px] rounded-full bg-[#f36b21] blur-[120px] md:block"
        />

        {/* =========================================================
      MAIN CONTAINER
  ========================================================== */}

        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col px-5 pb-10 pt-32 sm:px-6 md:px-10 lg:min-h-[860px] lg:justify-center lg:pb-60 lg:pt-32">
          <div className="grid min-w-0 w-full gap-14 lg:grid-cols-[1fr_370px] lg:items-center">
            {/* =====================================================
          LEFT CONTENT
      ====================================================== */}

            <motion.div
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="min-w-0 max-w-[810px]"
            >
              {/* =====================================================
            HEADING
        ====================================================== */}

              <h1 className="text-[40px] font-black uppercase !leading-[1.15] tracking-[-0.03em] sm:text-5xl md:text-7xl lg:text-[80px] lg:!leading-[1.2]">
                <motion.span
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.65 }}
                  className="block"
                >
                  Engineering a
                </motion.span>

                <motion.span
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.65 }}
                  className="block"
                >
                  Greener
                </motion.span>

                <motion.span
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.65 }}
                  className="block"
                >
                  <span className="text-[#c5cf67]">Industrial</span>

                  <span className="block text-white sm:inline">Future</span>

                  <span className="text-[#f36b21]">.</span>
                </motion.span>
              </h1>

              {/* =====================================================
            ACCENT LINE
        ====================================================== */}

              <motion.div
                initial={false}
                animate={{ width: 95 }}
                transition={{ delay: 0.95, duration: 0.7 }}
                className="mt-7 h-[3px] bg-[#f36b21]"
              />

              {/* =====================================================
            DESCRIPTION
        ====================================================== */}

              <motion.p
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.7 }}
                className="mt-6 w-full max-w-[520px] text-[15px] leading-7 text-white/70"
              >
                Integrated engineering solutions for energy transition,
                waste-to-value and material recovery across demanding industrial
                operations.
              </motion.p>

              {/* =====================================================
            BUTTONS
        ====================================================== */}

              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15, duration: 0.7 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                <Link
                  to="/energy-solutions"
                  className="group flex items-center justify-center gap-5 rounded-full bg-[#f36b21] px-7 py-4 text-[11px] font-extrabold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff792e] hover:shadow-[0_12px_35px_rgba(243,107,33,0.35)]"
                >
                  Explore Solutions
                </Link>

                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-5 rounded-full border border-white/30 bg-black/20 px-7 py-4 text-[11px] font-extrabold uppercase tracking-wide backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c5cf67] hover:bg-[#c5cf67]/10"
                >
                  Talk to Our Team
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* =====================================================
    BOTTOM CAPABILITY CARDS
====================================================== */}

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.4,
              duration: 0.8,
            }}
            className="relative mt-10 min-w-0 w-full lg:absolute lg:bottom-7 lg:left-10 lg:right-10 lg:mt-0 lg:w-auto"
          >
            <div className="grid gap-3 md:grid-cols-3">
              {/* ================= ENERGY ================= */}
              <Link
                to="/energy-solutions"
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#07100b]/75 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#c5cf67]/50 hover:bg-[#0b160e]/90 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                {/* Hover glow */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#c5cf67]/10 blur-3xl transition-all duration-500 group-hover:bg-[#c5cf67]/20" />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Number */}
                    <div>
                      <span className="text-3xl font-black leading-none text-[#c5cf67]">
                        01
                      </span>

                      <div className="mt-2 h-[2px] w-8 bg-[#f36b21] transition-all duration-300 group-hover:w-12" />
                    </div>

                    {/* Content */}
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">
                        Focus Area
                      </p>

                      <h3 className="mt-1 text-sm font-black uppercase leading-[1.35] tracking-wide text-white">
                        Industrial Energy
                      </h3>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f36b21]/50 text-[#f36b21] transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-[#f36b21] group-hover:text-white">
                    <ArrowRight size={17} />
                  </div>
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c5cf67] transition-all duration-500 group-hover:w-full" />
              </Link>

              {/* ================= ENVIRONMENT ================= */}
              <Link
                to="/solutions"
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#07100b]/75 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#c5cf67]/50 hover:bg-[#0b160e]/90 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                {/* Hover glow */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#c5cf67]/10 blur-3xl transition-all duration-500 group-hover:bg-[#c5cf67]/20" />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Number */}
                    <div>
                      <span className="text-3xl font-black leading-none text-[#c5cf67]">
                        02
                      </span>

                      <div className="mt-2 h-[2px] w-8 bg-[#f36b21] transition-all duration-300 group-hover:w-12" />
                    </div>

                    {/* Content */}
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">
                        Focus Area
                      </p>

                      <h3 className="mt-1 text-sm font-black uppercase leading-[1.35] tracking-wide text-white">
                        Environment
                      </h3>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f36b21]/50 text-[#f36b21] transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-[#f36b21] group-hover:text-white">
                    <ArrowRight size={17} />
                  </div>
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c5cf67] transition-all duration-500 group-hover:w-full" />
              </Link>

              {/* ================= MATERIAL RECOVERY ================= */}
              <Link
                to="/solutions"
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#07100b]/75 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#c5cf67]/50 hover:bg-[#0b160e]/90 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                {/* Hover glow */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#c5cf67]/10 blur-3xl transition-all duration-500 group-hover:bg-[#c5cf67]/20" />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Number */}
                    <div>
                      <span className="text-3xl font-black leading-none text-[#c5cf67]">
                        03
                      </span>

                      <div className="mt-2 h-[2px] w-8 bg-[#f36b21] transition-all duration-300 group-hover:w-12" />
                    </div>

                    {/* Content */}
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">
                        Focus Area
                      </p>

                      <h3 className="mt-1 text-sm font-black uppercase leading-[1.35] tracking-wide text-white">
                        Material Recovery
                      </h3>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f36b21]/50 text-[#f36b21] transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-[#f36b21] group-hover:text-white">
                    <ArrowRight size={17} />
                  </div>
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c5cf67] transition-all duration-500 group-hover:w-full" />
              </Link>
            </div>
          </motion.div>

          {/* =====================================================
        SCROLL INDICATOR
    ====================================================== */}

          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-65px] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
          >
            <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-white/45">
              Scroll to Explore
            </span>

            <ArrowRight size={16} className="rotate-90 text-[#c5cf67]" />
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-paper py-16 lg:py-20">
        <img
          src={plant}
          alt="Industrial processing facility"
          className="absolute right-0 top-0 hidden h-[610px] w-[58%] object-cover object-center opacity-80 lg:block"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[68%] bg-gradient-to-r from-brand-paper via-brand-paper/60 to-transparent lg:block" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-48 bg-gradient-to-t from-brand-paper to-transparent lg:block" />

        <div className="relative mx-auto w-full max-w-[1400px] px-5 md:px-8">
          <div className="grid min-h-[440px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-[620px]"
            >
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <span className="h-0.5 w-11 bg-brand-orange" />

                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-orange">
                  Engineering with purpose
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mt-8 text-3xl font-bold !leading-[1.2] tracking-tight text-brand-dark md:text-5xl"
              >
                We help industries use resources better, operate efficiently and
                transition toward a{" "}
                <span className="text-brand-olive">lower-carbon future.</span>
              </motion.h2>

              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 55, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-7 h-0.5 bg-brand-orange"
              />

              <p className="mt-6 max-w-[470px] text-base leading-7 text-brand-dark/70 md:text-lg md:leading-8">
                Integrated engineering solutions that drive performance today
                and build a sustainable tomorrow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.75, ease: "easeOut" }}
              className="relative flex items-center gap-6 lg:ml-12 lg:mt-4"
            >
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-brand-olive/30 bg-brand-paper/75 ring-4 ring-white/50 backdrop-blur-sm md:h-24 md:w-24">
                <Factory
                  className="text-brand-olive"
                  size={40}
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <strong className="block text-5xl font-extrabold leading-none text-brand-dark md:text-6xl">
                  100M+
                </strong>
                <span className="mt-2 block text-sm font-extrabold uppercase text-brand-dark md:text-base">
                  Kcal/hr capacity
                </span>
                <p className="mt-4 max-w-[190px] text-sm leading-6 text-brand-dark/70 md:text-base">
                  Engineered for industrial scale.
                </p>
                <span className="mt-5 block h-0.5 w-14 bg-brand-orange" />
              </div>
            </motion.div>
          </div>

          <div className="relative z-10 grid overflow-hidden rounded-[20px] border border-stone-300 bg-brand-paper/95 shadow-[0_18px_55px_rgba(28,33,23,0.06)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                Target,
                "Integrated Solutions",
                "End-to-end engineering solutions across energy, environment and material processing.",
              ],
              [
                ShieldCheck,
                "Operational Excellence",
                "Reliable systems and proven processes for maximum efficiency and uptime.",
              ],
              [
                Leaf,
                "Sustainable Impact",
                "Enabling resource recovery, emissions reduction and responsible industrial growth.",
              ],
              [
                BarChart3,
                "Measurable Outcomes",
                "Data-driven performance with clear metrics and long-term value.",
              ],
            ].map(([Icon, label, description], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: 0.2 + index * 0.12,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
                className="group relative min-h-[250px] border-b border-stone-300 p-7 transition-colors duration-300 hover:bg-white sm:border-r sm:even:border-r-0 lg:border-b-0 lg:even:border-r lg:last:border-r-0 md:p-8"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-brand-olive/25 bg-white/40 ring-[3px] ring-white/70 transition-all duration-300 group-hover:border-brand-orange/50 group-hover:scale-105">
                    <Icon
                      size={31}
                      strokeWidth={1.5}
                      className="text-brand-olive"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold !leading-[1.25] text-brand-dark md:text-xl">
                      {label}
                    </h3>
                    <span className="mt-3 block h-0.5 w-10 bg-brand-orange transition-all duration-300 group-hover:w-16" />
                  </div>
                </div>

                <p className="mt-6 max-w-[255px] text-sm leading-6 text-brand-dark/70">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-brand-dark py-20 text-white lg:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-12"
          >
            {/* Section Label */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand-orange" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#c5cf67]">
                Focus domains
              </span>
            </div>

            {/* Heading + Description */}
            <div className="mt-5 grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-end">
              <h2 className="max-w-3xl text-3xl font-bold uppercase !leading-[1.2] tracking-tight md:text-5xl">
                Engineering for a{" "}
                <span className="text-[#c5cf67]">sustainable industry</span>
              </h2>

              <p className="max-w-md text-sm leading-6 !text-white/60 lg:pb-1">
                Integrated capability across industrial energy, environmental
                performance and material recovery, designed around demanding
                operating conditions.
              </p>
            </div>
          </motion.div>

          {/* Domain Cards */}
          <div className="grid gap-4 lg:grid-cols-3">
            {focusDomains.map(([number, title, text, image, to], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8 }}
                className="group relative flex min-h-[410px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-[#101810] transition-shadow duration-500 hover:border-[#c5cf67]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                {/* Image */}
                <img
                  src={image}
                  alt={title + " industrial operations"}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07100a] via-[#07100a]/75 to-[#07100a]/10" />

                {/* Orange Glow */}
                <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-brand-orange/10 blur-3xl transition-all duration-500 group-hover:bg-brand-orange/20" />

                {/* Content */}
                <div className="relative p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-brand-orange">
                      {number}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold uppercase leading-[1.35] tracking-wide">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 !text-white/65">
                    {text}
                  </p>

                  {/* CTA */}
                  <Link
                    className="group/link mt-6 inline-flex items-center gap-3 rounded-full border border-brand-orange/50 bg-brand-orange/10 px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-brand-orange backdrop-blur-sm transition-all duration-300 hover:bg-brand-orange hover:text-white"
                    to={to}
                  >
                    Explore {title}
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-orange transition-all duration-500 group-hover:w-full" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-brand-paper py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand-orange" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-olive">
                Our business
              </span>
            </div>

            <div className="mt-5 grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-end">
              <h2 className="max-w-3xl text-3xl font-bold uppercase !leading-[1.2] tracking-tight text-brand-dark md:text-5xl">
                Two pillars. One{" "}
                <span className="text-brand-olive">integrated purpose.</span>
              </h2>

              <p className="max-w-md text-sm leading-6 text-brand-dark/65 lg:pb-1">
                Technology platforms and operational services designed around
                measurable industrial value.
              </p>
            </div>
          </motion.div>

          {/* Business Cards */}
          <div className="grid gap-5 md:grid-cols-2">
            {/* Energy Cycle */}
            <motion.article
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -7 }}
              className="group relative min-h-[500px] overflow-hidden rounded-2xl border border-stone-300 bg-brand-dark"
            >
              {/* Image */}
              <img
                src={processing}
                alt="REFYN Energy Cycle"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07100a] via-[#07100a]/75 to-[#07100a]/10" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-brand-orange">
                    01
                  </span>

                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/60 backdrop-blur-sm">
                    Platform
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold uppercase leading-[1.25] tracking-wide text-white md:text-3xl">
                  REFYN ENERGY CYCLE
                </h3>

                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-olive">
                  AFR & Waste-to-Fuel Platforms
                </p>

                <p className="mt-4 max-w-xl text-sm leading-6 !text-white/65">
                  Large-scale pre-processing facilities converting municipal,
                  industrial and hazardous waste into consistent Alternative
                  Fuels and Raw Materials.
                </p>

                <Link
                  to="/energy-cycle"
                  className="group/link mt-6 inline-flex items-center gap-3 rounded-full bg-brand-orange px-5 py-3 text-[10px] font-extrabold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#ff792e] hover:shadow-[0_10px_30px_rgba(243,107,33,0.3)]"
                >
                  Explore Energy Cycle
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-brand-orange transition-all duration-500 group-hover:w-full" />
            </motion.article>

            {/* Energy Solutions */}
            <motion.article
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -7 }}
              className="group relative min-h-[500px] overflow-hidden rounded-2xl border border-stone-300 bg-brand-dark"
            >
              {/* Image */}
              <img
                src={engineers}
                alt="REFYN Energy Solutions"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07100a] via-[#07100a]/75 to-[#07100a]/10" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-brand-orange">
                    02
                  </span>

                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/60 backdrop-blur-sm">
                    Services
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold uppercase leading-[1.25] tracking-wide text-white md:text-3xl">
                  REFYN ENERGY SOLUTIONS
                </h3>

                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-olive">
                  Contract & Value-Added Services
                </p>

                <p className="mt-4 max-w-xl text-sm leading-6 !text-white/65">
                  Managed services focused on cost optimization, operational
                  efficiency, fuel transition and greener industrial operations.
                </p>

                <Link
                  to="/energy-solutions"
                  className="group/link mt-6 inline-flex items-center gap-3 rounded-full bg-brand-orange px-5 py-3 text-[10px] font-extrabold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#ff792e] hover:shadow-[0_10px_30px_rgba(243,107,33,0.3)]"
                >
                  Explore Solutions
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-brand-orange transition-all duration-500 group-hover:w-full" />
            </motion.article>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-brand-dark py-20 text-white lg:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand-orange" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#c5cf67]">
                From waste to industrial value
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl text-3xl font-bold uppercase !leading-[1.2] tracking-tight md:text-5xl">
              Turning complex waste into{" "}
              <span className="text-[#c5cf67]">industrial value.</span>
            </h2>
          </motion.div>

          {/* Process */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-7 right-7 top-7 hidden h-px bg-white/10 lg:block" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map(([number, title, text, Icon], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="group relative"
                >
                  {/* Number + Icon */}
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#aeba54]/60 bg-brand-dark transition-all duration-300 group-hover:border-brand-orange group-hover:bg-brand-orange">
                    <Icon
                      size={23}
                      strokeWidth={1.5}
                      className="text-[#c5cf67] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-5 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-orange">
                      Step {number}
                    </span>

                    <h3 className="mt-2 text-sm font-bold uppercase leading-[1.35] tracking-wide text-white">
                      {title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-[190px] text-xs leading-5 !text-white/55">
                      {text}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mx-auto mt-5 h-[2px] w-0 bg-brand-orange transition-all duration-500 group-hover:w-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-paper py-16 lg:py-24">
        <img
          src={plant}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 hidden h-[430px] w-[58%] object-cover object-center opacity-[0.11] lg:block"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[430px] bg-gradient-to-r from-brand-paper via-brand-paper/70 to-transparent lg:block" />

        <div className="relative mx-auto w-full max-w-[1400px] px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-12 lg:mb-14"
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand-orange" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-olive">
                Scale & capabilities
              </span>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <h2 className="max-w-[760px] text-3xl font-bold uppercase !leading-[1.2] tracking-tight text-brand-dark md:text-5xl">
                Built for industrial{" "}
                <span className="text-brand-olive">throughput</span>
                <span className="text-brand-orange">.</span>
              </h2>

              <div className="max-w-[450px] border-l-2 border-brand-orange/70 pl-6 lg:ml-3">
                <p className="text-base leading-7 text-brand-dark/75 md:text-xl md:leading-9">
                  Engineered for demanding industrial operating conditions, from
                  waste processing to alternative fuel production.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mx-auto grid max-w-[1160px] overflow-hidden rounded-[20px] border border-stone-300 bg-white/45 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map(([value, unit, label], index) => {
              const icons = [Zap, Factory, Leaf, Settings, Recycle, Target];
              const Icon = icons[index];

              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 28, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{
                    y: -5,
                    scale: 1.012,
                    transition: { duration: 0.22, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.99 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="group relative grid min-h-[180px] grid-cols-[56px_1fr] items-start gap-5 border-b border-stone-300 p-6 transition-[background-color,box-shadow] duration-300 before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-brand-orange before:transition-transform before:duration-500 hover:z-10 hover:bg-white/90 hover:shadow-[0_12px_35px_rgba(25,40,20,0.09)] hover:before:scale-x-100 sm:min-h-[205px] sm:border-r sm:p-7 sm:even:border-r-0 lg:min-h-[215px] lg:even:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(n+4)]:border-b-0"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-olive/30 ring-[3px] ring-white/60 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-brand-orange/40 group-hover:bg-brand-orange/5">
                    <Icon
                      size={27}
                      strokeWidth={1.6}
                      className="text-brand-olive"
                    />
                  </div>

                  <div>
                    <strong className="block text-4xl font-extrabold leading-none tracking-normal text-brand-orange transition-transform duration-300 group-hover:-translate-y-0.5 md:text-5xl">
                      {value.replace(" ", "")}
                    </strong>

                    <span className="mt-2.5 block text-xs font-extrabold uppercase tracking-normal text-brand-dark md:text-sm">
                      {unit}
                    </span>

                    <span className="mt-2.5 block h-px w-10 bg-brand-orange transition-[width] duration-500 group-hover:w-16" />
                    <p className="mt-4 max-w-[220px] text-xs leading-5 text-brand-dark/70 transition-colors duration-300 group-hover:text-brand-dark md:text-sm md:leading-6">
                      {label}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto h-0.5 w-0 bg-brand-orange transition-all duration-500 ease-out group-hover:w-full"
                  />
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-9 flex max-w-[950px] items-center justify-center gap-5 text-brand-dark/75"
          >
            <BarChart3
              className="hidden shrink-0 text-brand-olive sm:block"
              size={38}
              strokeWidth={1.6}
            />
            <span className="hidden h-9 w-px shrink-0 bg-brand-orange sm:block" />
            <p className="text-center text-sm leading-6 md:text-lg">
              High-capacity infrastructure. Proven technology. Consistent
              performance at{" "}
              <span className="font-semibold text-brand-orange">
                industrial scale.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(7,16,10,.96), rgba(7,16,10,.82) 48%, rgba(7,16,10,.45)), url(" +
            plant +
            ")",
        }}
      >
        <div className="mx-auto grid min-h-[500px] w-full max-w-[1240px] items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-brand-orange" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#c5cf67]">
                Technology & innovation
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 max-w-xl text-3xl font-bold uppercase !leading-[1.3] tracking-tight md:text-5xl"
            >
              Purpose-built for{" "}
              <span className="text-[#c5cf67]">operating realities.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-6 max-w-md text-sm leading-6 !text-white/60"
            >
              Advanced systems engineered to perform in demanding industrial
              environments with maximum reliability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8"
            >
              <Link
                to="/energy-solutions"
                className="inline-flex items-center justify-center rounded-full bg-brand-orange px-7 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff792e] hover:shadow-[0_12px_30px_rgba(243,107,33,0.3)]"
              >
                Discover technology
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT CAPABILITIES */}
          <div className="border-t border-white/15">
            {[
              "Carbon Capture & Utilization",
              "Multi-Fuel Engineering",
              "Waste Recovery",
              "AFR Processing",
            ].map((title, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: 0.15 + index * 0.12,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="group flex items-center justify-between border-b border-white/15 py-6 transition-all duration-300 hover:pl-3"
              >
                <div className="flex items-center gap-5">
                  <span className="h-2 w-2 rounded-full bg-[#c5cf67] transition-all duration-300 group-hover:bg-brand-orange group-hover:scale-125" />

                  <h3 className="text-sm font-bold uppercase leading-[1.35] tracking-wide text-white/85 transition-colors duration-300 group-hover:text-white md:text-base">
                    {title}
                  </h3>
                </div>

                <span className="h-[1px] w-8 bg-white/20 transition-all duration-300 group-hover:w-14 group-hover:bg-brand-orange" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subtle bottom accent */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "18%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute bottom-0 left-0 h-[3px] bg-brand-orange"
        />
      </section>

      <section className="overflow-hidden bg-brand-dark py-14 text-white lg:py-16">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8 md:px-10 md:py-10 lg:px-12"
          >
            {/* Orange Accent */}
            <div className="absolute left-0 top-0 h-full w-1 bg-brand-orange" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.6 }}
              >
                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#c5cf67]">
                  Let's build together
                </span>

                <h2 className="mt-4 max-w-2xl text-3xl font-bold uppercase !leading-[1.3] tracking-tight md:text-5xl">
                  Let's build a more{" "}
                  <span className="text-brand-orange">efficient</span>{" "}
                  industrial future.
                </h2>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="shrink-0 lg:w-[300px]"
              >
                <p className="mb-5 max-w-sm text-sm leading-6 !text-white/55">
                  Have an industrial challenge? Let's discuss the opportunity.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-orange px-7 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff792e] hover:shadow-[0_12px_30px_rgba(243,107,33,0.25)]"
                >
                  Talk to our team
                </Link>
              </motion.div>
            </div>

            {/* Bottom Glow Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "25%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-0 left-8 h-[2px] bg-brand-orange"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
