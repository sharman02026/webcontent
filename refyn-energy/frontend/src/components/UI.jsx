import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import plant from "../assets/refyn-plant.png";
export function Meta({ title, description }) {
  document.title = title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", description);
  return null;
}
export function PageHero({ eyebrow, title, text, image = plant }) {
  return (
    <section
      className="relative flex min-h-[430px] items-center overflow-hidden bg-cover bg-center py-20 text-white md:min-h-[470px] md:py-24"
      style={{
        backgroundImage: `
      linear-gradient(
        90deg,
        rgba(7,16,10,.97) 0%,
        rgba(7,16,10,.80) 45%,
        rgba(7,16,10,.25) 80%,
        rgba(7,16,10,.10) 100%
      ),
      linear-gradient(
        0deg,
        rgba(7,16,10,.55),
        transparent 60%
      ),
      url(${image})
    `,
      }}
    >
      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-orange/10 blur-[100px]" />

      <div className="relative mx-auto flex w-full max-w-[1240px] items-center px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="mb-5 flex items-center gap-3"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 36 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="h-[2px] bg-brand-orange"
            />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#c8d36a]">
              {eyebrow}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="max-w-4xl text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[76px]"
          >
            {title}
          </motion.h1>

          {/* Description */}
          {text && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="mt-6 max-w-3xl text-sm leading-7 !text-white/70 md:text-base md:leading-7"
            >
              {text}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
export function Heading({ eyebrow, title, text, center = false }) {
  return (
    <div className={`mb-12 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="mb-4 inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-olive before:h-px before:w-8 before:bg-brand-orange">
        {eyebrow}
      </span>
      <h2 className="mb-4 text-4xl font-bold uppercase leading-[1.08] text-brand-dark md:text-5xl">
        {title}
      </h2>
      {text && <p>{text}</p>}
    </div>
  );
}
export function Button({ to, children, secondary = false }) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2.5 border px-5 py-3.5 text-xs font-bold uppercase transition ${secondary ? "border-white/50 bg-transparent text-white hover:border-white hover:bg-white hover:text-brand-dark" : "border-brand-orange bg-brand-orange text-white hover:border-[#c95613] hover:bg-[#c95613]"}`}
      to={to}
    >
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
export function DarkCTA() {
  return (
    <section className="overflow-hidden bg-brand-dark py-14 text-white lg:py-16">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8 md:px-10 md:py-10 lg:px-12"
        >
          {/* Orange accent */}
          <div className="absolute left-0 top-0 h-full w-1 bg-brand-orange" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#c5cf67]">
                Industrial progress, responsibly engineered
              </span>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold uppercase leading-[1.08] tracking-tight md:text-4xl lg:text-5xl">
                Turning waste into{" "}
                <span className="text-brand-orange">value.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-6 !text-white/55">
                Supporting Indian industry in its transition toward cleaner
                fuels, sustainable operations and lower carbon footprints.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="shrink-0"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-orange px-7 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff792e] hover:shadow-[0_12px_30px_rgba(243,107,33,0.3)]"
              >
                Talk to Refyn Energy
              </Link>
            </motion.div>
          </div>

          {/* Bottom accent */}
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
  );
}
