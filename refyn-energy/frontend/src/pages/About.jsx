import { Leaf, Zap } from "lucide-react";
import plant from "../assets/refyn-plant.png";
import { DarkCTA, Meta, PageHero } from "../components/UI";
import { motion } from "framer-motion";
export function About() {
  return (
    <>
      <Meta
        title="About REFYN ENERGY | Sustainable Industrial Solutions"
        description="Refyn Energy's vision, mission and sustainable industrial engineering approach."
      />
      <PageHero
        eyebrow="Company"
        title="About Refyn Energy"
        text="Engineering sustainable industrial value through innovative solutions that improve efficiency, optimize resources, and support a lower-carbon future."
      />
      <section className="overflow-hidden bg-brand-paper py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-14 px-5 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          {/* =========================================================
        LEFT CONTENT
    ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 36 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="h-[2px] bg-brand-orange"
              />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-olive">
                Who we are
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="mt-6 max-w-xl text-3xl font-bold uppercase leading-[1.06] tracking-tight text-brand-dark md:text-4xl lg:text-[46px]"
            >
              Engineering excellence.{" "}
              <span className="text-brand-olive">Domain depth.</span>
            </motion.h2>

            {/* Animated Accent */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 60, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.45,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="mt-7 h-[3px] bg-brand-orange"
            />

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="mt-8 max-w-xl text-sm leading-7 text-brand-dark/65"
            >
              REFYN ENERGY is a professionally driven, business-focused
              organization delivering innovative and sustainable solutions
              across Energy, Environment and Material Processing.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.65,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="mt-5 max-w-xl text-sm leading-7 text-brand-dark/65"
            >
              We combine engineering excellence with deep domain expertise to
              serve the cement, waste management and energy sectors across India
              and beyond.
            </motion.p>

            {/* Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.8,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{ x: 5 }}
              className="relative mt-7 max-w-xl overflow-hidden rounded-r-xl border-l-2 border-brand-orange bg-brand-dark/[0.04] px-5 py-4"
            >
              {/* Commitment Shine */}
              <motion.div
                animate={{
                  x: ["-150%", "250%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 left-0 z-0 w-16 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />

              <p className="relative z-10 text-sm font-semibold leading-7 text-brand-dark">
                We do not just supply equipment. We build long-term partnerships
                that deliver measurable economic and environmental value.
              </p>
            </motion.div>
          </motion.div>

          {/* =========================================================
    RIGHT IMAGE
========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="relative pb-14"
          >
            {/* =======================================================
      OUTER GLASS FRAME
  ======================================================= */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="relative rounded-[34px] border-2 border-white/75 bg-white/15 p-2 shadow-[0_30px_80px_rgba(7,21,36,0.18)] backdrop-blur-xl"
            >
              {/* =====================================================
        AMBIENT GLOW
    ===================================================== */}
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.07, 0.14, 0.07],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -inset-8 -z-10 rounded-[45px] bg-brand-olive blur-3xl"
              />

              {/* =====================================================
        INNER IMAGE FRAME
    ===================================================== */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/35">
                {/* ===================================================
          IMAGE
      =================================================== */}
                <motion.img
                  whileHover={{
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  src={plant}
                  alt="Industrial facility in a green landscape"
                  className="h-[430px] w-full rounded-[26px] object-cover lg:h-[570px]"
                />

                {/* ===================================================
          DARK CINEMATIC OVERLAY
      =================================================== */}

                {/* Overall dark layer */}
                <div className="pointer-events-none absolute inset-0 z-[5] rounded-[26px] bg-black/30" />

                {/* Dark green cinematic tint */}
                <div className="pointer-events-none absolute inset-0 z-[6] rounded-[26px] bg-gradient-to-b from-brand-dark/45 via-brand-dark/35 to-black/80" />

                {/* Strong bottom vignette */}
                <div className="pointer-events-none absolute inset-0 z-[7] rounded-[26px] bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                {/* ===================================================
          ANIMATED GLASS — SOFT TRANSPARENT LAYER
      =================================================== */}
                <motion.div
                  animate={{
                    opacity: [0.04, 0.11, 0.04],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-0 z-10 rounded-[26px] bg-white/[0.05] backdrop-blur-[1px]"
                />

                {/* ===================================================
          MOVING GLASS REFLECTION
      =================================================== */}
                <motion.div
                  initial={{
                    x: "-130%",
                    opacity: 0,
                  }}
                  animate={{
                    x: ["-130%", "220%"],
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[60%] -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />

                {/* ===================================================
          SECOND SOFT GLASS MOVEMENT
      =================================================== */}
                <motion.div
                  animate={{
                    x: ["100%", "-100%"],
                    opacity: [0, 0.06, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-y-0 right-0 z-[11] w-[45%] skew-x-[18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />

                {/* ===================================================
          SOFT TOP GLASS HIGHLIGHT
      =================================================== */}
                <motion.div
                  animate={{
                    opacity: [0.03, 0.1, 0.03],
                    y: ["-5%", "8%", "-5%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute left-0 top-0 z-[12] h-[45%] w-full rounded-t-[26px] bg-gradient-to-b from-white/15 via-white/5 to-transparent"
                />

                {/* ===================================================
          ANIMATED GLASS BORDER
      =================================================== */}
                <motion.div
                  animate={{
                    opacity: [0.15, 0.4, 0.15],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-0 z-[21] rounded-[26px] border border-white/25"
                />

                {/* ===================================================
          COMMITMENT CARD
          No shine / No animated glass effect
      =================================================== */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -35,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.7,
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="absolute bottom-5 left-5 z-30 w-[285px] rounded-2xl border border-white/20 bg-brand-dark/95 p-5 shadow-[0_20px_45px_rgba(0,0,0,0.45)] backdrop-blur-md md:bottom-6 md:left-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-[2px] w-6 bg-brand-orange" />

                    <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#c8d36a]">
                      Our commitment
                    </span>
                  </div>

                  <p className="mb-0 mt-3 text-sm leading-6 !text-white/75">
                    Economic value and environmental progress, engineered
                    together.
                  </p>
                </motion.div>

                {/* ===================================================
          FLOATING STATUS INDICATOR
      =================================================== */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.9,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  className="absolute right-6 top-6 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/25 shadow-lg backdrop-blur-md"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.65, 1, 0.65],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-3 w-3 rounded-full bg-brand-orange shadow-[0_0_20px_rgba(243,107,33,0.95)]"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* =======================================================
      ORANGE ACCENT LINE
  ======================================================= */}
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              whileInView={{
                width: "32%",
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.9,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="absolute bottom-3 left-8 h-[3px] bg-brand-orange"
            />
          </motion.div>
        </div>
      </section>
      {/* =========================================================
    VISION & MISSION
========================================================= */}
      <section
        className="relative overflow-hidden bg-cover bg-center py-20 text-white lg:py-24"
        style={{
          backgroundImage: `
      linear-gradient(
        90deg,
        rgba(7,16,10,0.96) 0%,
        rgba(7,16,10,0.88) 45%,
        rgba(7,16,10,0.72) 100%
      ),
      linear-gradient(
        0deg,
        rgba(7,16,10,0.94),
        rgba(7,16,10,0.55)
      ),
      url(${plant})
    `,
        }}
      >
        {/* =======================================================
      ANIMATED BACKGROUND IMAGE
  ======================================================= */}
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-0 -z-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: `url(${plant})`,
          }}
        />

        {/* =======================================================
      DARK CINEMATIC OVERLAY
  ======================================================= */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[#07100a]/35" />

        {/* =======================================================
      LEFT AMBIENT GLOW
  ======================================================= */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            scale: [1, 1.12, 1],
            opacity: [0.04, 0.1, 0.04],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-32 top-10 z-0 h-80 w-80 rounded-full bg-[#c8d36a] blur-[110px]"
        />

        {/* =======================================================
      RIGHT AMBIENT GLOW
  ======================================================= */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-32 bottom-0 z-0 h-96 w-96 rounded-full bg-brand-orange blur-[120px]"
        />

        {/* =======================================================
      SUBTLE INDUSTRIAL GRID
  ======================================================= */}
        <motion.div
          animate={{
            opacity: [0.01, 0.035, 0.01],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:55px_55px]"
        />

        {/* =======================================================
      MAIN CONTENT
  ======================================================= */}
        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 md:px-8">
          {/* =====================================================
        SECTION HEADER
    ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mb-12 max-w-3xl"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
                duration: 0.5,
              }}
              className="flex items-center gap-3"
            >
              <motion.span
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 32,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                className="h-[2px] bg-brand-orange"
              />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#c8d36a]">
                Our direction
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.25,
                duration: 0.7,
              }}
              className="mt-5 text-3xl font-bold uppercase leading-[1.05] tracking-tight md:text-5xl"
            >
              Driven by <span className="text-brand-orange">purpose.</span>{" "}
              Built for <span className="text-[#c8d36a]">impact.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="mt-5 max-w-2xl text-sm leading-7 !text-white/60"
            >
              Our vision and mission guide every engineering decision we make,
              combining industrial performance with sustainable progress.
            </motion.p>
          </motion.div>

          {/* =====================================================
        VISION + MISSION
    ===================================================== */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* ===================================================
          VISION
      =================================================== */}
            <motion.article
              initial={{
                opacity: 0,
                x: -45,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[24px] border border-white/15 bg-[#0b140d]/80 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-500 hover:border-[#c8d36a]/50 hover:bg-[#0b140d]/90 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)] md:p-9"
            >
              {/* Vision Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.05, 0.12, 0.05],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#c8d36a] blur-[70px]"
              />

              {/* Subtle Shine */}
              <motion.div
                animate={{
                  x: ["-130%", "180%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[30%] -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.045] to-transparent"
              />

              <div className="relative z-20">
                {/* Top */}
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c8d36a]/30 bg-[#c8d36a]/10"
                  >
                    <Leaf
                      size={25}
                      strokeWidth={1.5}
                      className="text-[#c8d36a]"
                    />
                  </motion.div>

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
                    01 / Vision
                  </span>
                </div>

                {/* Label */}
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.35,
                    duration: 0.5,
                  }}
                  className="mt-9 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#c8d36a]"
                >
                  Vision 2030
                </motion.span>

                {/* Title */}
                <h3 className="mt-3 text-3xl font-bold uppercase tracking-tight md:text-4xl">
                  Our vision
                </h3>

                {/* Accent */}
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: 48,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.45,
                    duration: 0.6,
                  }}
                  className="mt-5 h-[2px] bg-[#c8d36a]"
                />

                {/* Paragraph 1 */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.6,
                  }}
                  className="mt-6 text-sm leading-7 !text-white/60"
                >
                  To be a nationally recognized leader in sustainable energy and
                  waste processing technology by 2030, delivering
                  state-of-the-art, economical and eco-friendly solutions.
                </motion.p>

                {/* Paragraph 2 */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.65,
                    duration: 0.6,
                  }}
                  className="mt-4 text-sm leading-7 !text-white/60"
                >
                  To pioneer the next generation of AFR, decarbonization and
                  circular economy solutions for Indian industry, setting new
                  benchmarks for efficiency, reliability and environmental
                  compliance.
                </motion.p>
              </div>

              {/* Bottom Accent */}
              <motion.div
                initial={{
                  width: 0,
                }}
                whileHover={{
                  width: "28%",
                }}
                transition={{
                  duration: 0.5,
                }}
                className="absolute bottom-0 left-0 h-[3px] bg-[#c8d36a]"
              />
            </motion.article>

            {/* ===================================================
          MISSION
      =================================================== */}
            <motion.article
              initial={{
                opacity: 0,
                x: 45,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: 0.15,
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[24px] border border-white/15 bg-[#0b140d]/80 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-500 hover:border-brand-orange/50 hover:bg-[#0b140d]/90 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)] md:p-9"
            >
              {/* Mission Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.04, 0.1, 0.04],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-orange blur-[70px]"
              />

              {/* Subtle Shine */}
              <motion.div
                animate={{
                  x: ["-130%", "180%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[30%] -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.045] to-transparent"
              />

              <div className="relative z-20">
                {/* Top */}
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{
                      rotate: -8,
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-orange/30 bg-brand-orange/10"
                  >
                    <Zap
                      size={25}
                      strokeWidth={1.5}
                      className="text-brand-orange"
                    />
                  </motion.div>

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
                    02 / Mission
                  </span>
                </div>

                {/* Label */}
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.45,
                    duration: 0.5,
                  }}
                  className="mt-9 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-orange"
                >
                  Our direction
                </motion.span>

                {/* Title */}
                <h3 className="mt-3 text-3xl font-bold uppercase tracking-tight md:text-4xl">
                  Our mission
                </h3>

                {/* Accent */}
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: 48,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.55,
                    duration: 0.6,
                  }}
                  className="mt-5 h-[2px] bg-brand-orange"
                />

                {/* Paragraph 1 */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 0.6,
                  }}
                  className="mt-6 text-sm leading-7 !text-white/60"
                >
                  To deliver integrated, customized and cost-effective solutions
                  that transform waste into value, reduce carbon footprints and
                  improve industrial profitability.
                </motion.p>

                {/* Paragraph 2 */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.75,
                    duration: 0.6,
                  }}
                  className="mt-4 text-sm leading-7 !text-white/60"
                >
                  To continuously innovate in hot gas generation, drying,
                  shredding and carbon capture technologies suited to Indian
                  operating conditions, supporting Indian industry's transition
                  to cleaner fuels and sustainable operations.
                </motion.p>
              </div>

              {/* Bottom Accent */}
              <motion.div
                initial={{
                  width: 0,
                }}
                whileHover={{
                  width: "28%",
                }}
                transition={{
                  duration: 0.5,
                }}
                className="absolute bottom-0 left-0 h-[3px] bg-brand-orange"
              />
            </motion.article>
          </div>
        </div>
      </section>
      <DarkCTA />
    </>
  );
}
