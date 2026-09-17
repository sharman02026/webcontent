import {
  ArrowLeft,
  ArrowRight,
  Check,
  Factory,
  Gauge,
  Settings2,
  Zap,
} from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Meta } from "../components/UI";
import { getProduct, products } from "../data/products";

export function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);

  if (!product) return <Navigate to="/products" replace />;

  const index = products.findIndex((item) => item.slug === product.slug);

  const previous =
    products[(index - 1 + products.length) % products.length];

  const next = products[(index + 1) % products.length];

  return (
    <>
      <Meta
        title={`${product.name} | Refyn Energy`}
        description={product.summary}
      />

      {/* =========================================================
          PRODUCT HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-brand-dark pt-28 text-white md:pt-32 lg:pt-36">
        {/* Background technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* Right background panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-[42%] bg-white/[0.025] lg:block"
        />

        {/* Orange glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-brand-orange/[0.06] blur-[100px]"
        />

        <div className="relative mx-auto w-full max-w-[1240px] px-5 md:px-8">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/50 transition-colors duration-300 hover:text-brand-orange"
            >
              <ArrowLeft
                size={15}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

              All products
            </Link>
          </motion.div>

          <div className="mt-7 grid items-stretch gap-8 pb-14 md:pb-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:pb-24">

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col justify-center py-3 lg:py-10"
            >
              {/* Category */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                className="flex items-center gap-3"
              >
                <span className="h-0.5 w-9 bg-brand-orange" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#c8d36a]">
                  {product.category}
                </span>
              </motion.div>

              {/* Product number */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                }}
                className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-white/25"
              >
                Equipment {String(index + 1).padStart(2, "0")} /{" "}
                {String(products.length).padStart(2, "0")}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.25,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-4 max-w-xl text-4xl font-black uppercase !leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
              >
                {product.name}
                <span className="text-brand-orange">.</span>
              </motion.h1>

              {/* Summary */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.65,
                }}
                className="mt-6 max-w-lg text-sm leading-7 !text-white/60 md:text-base"
              >
                {product.summary}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                }}
              >
                <Link
                  to="/contact"
                  className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-brand-orange px-6 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff792e] hover:shadow-[0_12px_30px_rgba(243,107,33,0.25)]"
                >
                  Discuss this product

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* =====================================================
                PRODUCT IMAGE
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-white p-7 sm:min-h-[430px] sm:p-12"
            >
              {/* Technical grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(#071524 1px, transparent 1px), linear-gradient(90deg, #071524 1px, transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />

              {/* Corner labels */}
              <span className="absolute left-5 top-5 z-10 text-[8px] font-bold uppercase tracking-[0.16em] text-brand-dark/35">
                Refyn Energy
              </span>

              <span className="absolute right-5 top-5 z-10 text-[10px] font-black text-brand-orange">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(products.length).padStart(2, "0")}
              </span>

              {/* Animated corner */}
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "25%" }}
                transition={{
                  delay: 0.8,
                  duration: 0.7,
                }}
                className="absolute left-0 top-0 h-1 bg-brand-orange"
              />

              {/* Product image */}
              <motion.img
                src={product.image}
                alt={product.name}
                className="relative z-10 h-[250px] w-full object-contain sm:h-[350px]"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -5, 0],
                }}
                transition={{
                  opacity: {
                    delay: 0.35,
                    duration: 0.6,
                  },
                  scale: {
                    delay: 0.35,
                    duration: 0.7,
                    ease: "easeOut",
                  },
                  y: {
                    delay: 1,
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />

              {/* Bottom orange line */}
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "33%" }}
                transition={{
                  delay: 0.7,
                  duration: 0.7,
                }}
                className="absolute bottom-0 left-0 h-1 bg-brand-orange"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT OVERVIEW
      ========================================================= */}
      <section className="relative overflow-hidden bg-brand-paper py-16 md:py-20 lg:py-24">

        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-brand-orange/[0.035] blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-[1240px] gap-12 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

          {/* =====================================================
              OVERVIEW CONTENT
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="h-0.5 w-9 bg-brand-orange" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-olive">
                Product overview
              </span>
            </motion.div>

            {/* Heading */}
            <h2 className="mt-5 max-w-2xl text-3xl font-black uppercase !leading-[1.15] text-brand-dark md:text-4xl lg:text-5xl">
              Reliable processing for
              <span className="block text-brand-olive">
                demanding operations.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-brand-dark/65 md:text-base md:leading-8">
              {product.description}
            </p>

            {/* Features */}
            <div className="mt-10 border-y border-stone-300">
              {product.features.map((feature, featureIndex) => (
                <motion.div
                  key={feature}
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
                    amount: 0.5,
                  }}
                  transition={{
                    delay: featureIndex * 0.08,
                    duration: 0.45,
                  }}
                  className="group flex items-center gap-4 border-b border-stone-300 py-4 last:border-b-0"
                >
                  <span className="text-[10px] font-extrabold text-brand-orange">
                    {String(featureIndex + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-bold text-brand-dark transition-colors duration-300 group-hover:text-brand-orange">
                    {feature}
                  </span>

                  <Check
                    size={17}
                    className="ml-auto text-brand-olive transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =====================================================
              APPLICATIONS
          ===================================================== */}
          <motion.aside
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="relative self-start overflow-hidden border border-stone-300 bg-white p-6 md:p-8"
          >
            {/* Top accent */}
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "30%" }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="absolute left-0 top-0 h-1 bg-brand-orange"
            />

            {/* Icon */}
            <div className="flex items-center justify-between">
              <Factory
                size={30}
                strokeWidth={1.5}
                className="text-brand-olive"
              />

              <span className="text-[9px] font-black uppercase tracking-[0.16em] text-brand-dark/25">
                Applications
              </span>
            </div>

            <h2 className="mt-5 text-xl font-extrabold uppercase !leading-[1.3] text-brand-dark md:text-2xl">
              Typical applications
            </h2>

            {/* Applications */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {product.applications.map((application, applicationIndex) => (
                <motion.div
                  key={application}
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: applicationIndex * 0.08,
                    duration: 0.4,
                  }}
                  whileHover={{
                    x: 5,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  className="group flex items-center gap-3 border-l-2 border-brand-orange bg-brand-paper px-4 py-3 text-sm font-semibold text-brand-dark transition-colors duration-300 hover:bg-[#eef0e7]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange transition-transform duration-300 group-hover:scale-125" />

                  {application}
                </motion.div>
              ))}
            </div>

            {/* Info */}
            <div className="mt-7 border-t border-stone-200 pt-5">
              <p className="text-xs leading-6 text-brand-dark/55">
                Final equipment selection and configuration are based on
                material characteristics, throughput and required output.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* =========================================================
          ENGINEERING HIGHLIGHTS
      ========================================================= */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">

          <motion.div
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
              duration: 0.6,
            }}
            className="mb-8 flex items-end justify-between gap-5"
          >
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                Engineering focus
              </span>

              <h2 className="mt-3 text-2xl font-black uppercase text-brand-dark md:text-3xl">
                Designed around performance.
              </h2>
            </div>

            <span className="hidden text-[9px] font-bold uppercase tracking-[0.15em] text-brand-dark/30 sm:block">
              Refyn Energy
            </span>
          </motion.div>

          <div className="grid border border-stone-300 sm:grid-cols-3">
            {[
              {
                icon: Settings2,
                title: "Industrial design",
                text: "Built for demanding material processing environments.",
              },
              {
                icon: Gauge,
                title: "Process efficiency",
                text: "Designed to support consistent and controlled output.",
              },
              {
                icon: Zap,
                title: "Operational reliability",
                text: "Equipment focused on dependable day-to-day operation.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  className={`group p-6 md:p-8 ${
                    index !== 2
                      ? "border-b border-stone-300 sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <Icon
                    size={25}
                    strokeWidth={1.5}
                    className="text-brand-orange transition-transform duration-300 group-hover:-translate-y-1"
                  />

                  <h3 className="mt-5 text-sm font-extrabold uppercase tracking-[0.04em] text-brand-dark">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-brand-dark/55">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT NAVIGATION
      ========================================================= */}
      <nav
        className="border-t border-stone-300 bg-brand-paper"
        aria-label="Product navigation"
      >
        <div className="mx-auto grid w-full max-w-[1240px] sm:grid-cols-2">

          {/* Previous */}
          <Link
            to={`/products/${previous.slug}`}
            className="group relative flex min-h-32 items-center gap-5 overflow-hidden border-b border-stone-300 px-5 py-7 transition-colors duration-300 hover:bg-white sm:border-b-0 sm:border-r md:px-8"
          >
            <motion.div
              whileHover={{ x: -4 }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-300 bg-white text-brand-orange transition-colors duration-300 group-hover:border-brand-orange"
            >
              <ArrowLeft size={16} />
            </motion.div>

            <span>
              <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-brand-dark/40">
                Previous product
              </span>

              <strong className="mt-1 block text-sm uppercase text-brand-dark transition-colors group-hover:text-brand-orange">
                {previous.name}
              </strong>
            </span>

            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-orange transition-all duration-500 group-hover:w-1/3" />
          </Link>

          {/* Next */}
          <Link
            to={`/products/${next.slug}`}
            className="group relative flex min-h-32 items-center justify-end gap-5 overflow-hidden px-5 py-7 text-right transition-colors duration-300 hover:bg-white md:px-8"
          >
            <span>
              <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-brand-dark/40">
                Next product
              </span>

              <strong className="mt-1 block text-sm uppercase text-brand-dark transition-colors group-hover:text-brand-orange">
                {next.name}
              </strong>
            </span>

            <motion.div
              whileHover={{ x: 4 }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-300 bg-white text-brand-orange transition-colors duration-300 group-hover:border-brand-orange"
            >
              <ArrowRight size={16} />
            </motion.div>

            <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-brand-orange transition-all duration-500 group-hover:w-1/3" />
          </Link>
        </div>
      </nav>
    </>
  );
}