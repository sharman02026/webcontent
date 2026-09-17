import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Meta, DarkCTA, PageHero } from "../components/UI";
import { products } from "../data/products";

export function Products() {
  return (
    <>
      <Meta
        title="Industrial Products | Refyn Energy"
        description="Explore Refyn Energy equipment for waste processing, material recovery and alternative fuel preparation."
      />

      {/* =========================================================
          PAGE HERO
      ========================================================= */}
     
      <PageHero
        eyebrow="Equipment portfolio"
        title="Industrial Products"
        text="Equipment for size reduction, screening, separation, compaction and alternative fuel preparation."
     
      />
     

      {/* =========================================================
          PRODUCT RANGE
      ========================================================= */}
      <section className="relative overflow-hidden bg-brand-paper py-16 md:py-20 lg:py-24">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-brand-orange/[0.035] blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1240px] px-5 md:px-8">
          {/* SECTION HEADER */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.65,
              ease: "easeOut",
            }}
            className="mb-10 grid gap-6 md:mb-12 md:grid-cols-[0.85fr_1.15fr] md:items-end"
          >
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-9 bg-brand-orange" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                  Product range
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-5 max-w-2xl text-3xl font-black uppercase !leading-[1.08] text-brand-dark md:text-5xl">
                Equipment for every
                <span className="block text-brand-olive">process stage.</span>
              </h2>
            </div>

            {/* Description */}
            <p className="max-w-xl text-sm leading-7 text-brand-dark/60 md:justify-self-end md:text-base">
              Select a product to review its role, core capabilities and typical
              applications within an integrated processing line.
            </p>
          </motion.div>

          {/* =====================================================
              PRODUCT GRID
          ===================================================== */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <motion.article
                key={product.slug}
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
                  amount: 0.15,
                }}
                transition={{
                  delay: index * 0.09,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -7,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="group relative"
              >
                <Link
                  to={`/products/${product.slug}`}
                  aria-label={`View ${product.name}`}
                  className="relative flex h-full flex-col overflow-hidden border border-stone-300 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                >
                  {/* IMAGE */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f1]">
                    {/* Technical grid */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.035]"
                      style={{
                        backgroundImage:
                          "linear-gradient(#071524 1px, transparent 1px), linear-gradient(90deg, #071524 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />

                    {/* Number */}
                    <span className="absolute left-4 top-4 z-10 text-[9px] font-black tracking-[0.15em] text-brand-orange">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Category */}
                    <span className="absolute right-4 top-4 z-10 max-w-[110px] text-right text-[8px] font-bold uppercase tracking-[0.12em] text-brand-dark/35">
                      {product.category}
                    </span>

                    {/* Product Image */}
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Image hover overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-brand-orange/[0.025] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col p-5">
                    {/* Category */}
                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-brand-olive">
                      {product.category}
                    </span>

                    {/* Name */}
                    <h3 className="mt-2 text-lg font-black uppercase !leading-[1.2] text-brand-dark transition-colors duration-300 group-hover:text-brand-orange">
                      {product.name}
                    </h3>

                    {/* Summary */}
                    <p className="mt-3 text-xs leading-5 text-brand-dark/55">
                      {product.summary}
                    </p>

                    {/* Bottom CTA */}
                    <div className="mt-auto pt-6">
                      <div className="flex items-center justify-between border-t border-stone-200 pt-4">
                        <span className="text-[9px] font-extrabold uppercase tracking-[0.1em] text-brand-dark">
                          View product
                        </span>

                        <motion.span
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 transition-all duration-300 group-hover:border-brand-orange group-hover:bg-brand-orange"
                          whileHover={{
                            scale: 1.08,
                          }}
                        >
                          <ArrowRight
                            size={14}
                            className="text-brand-dark transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white"
                          />
                        </motion.span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom orange line */}
                  <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-brand-orange transition-transform duration-500 group-hover:scale-x-100" />
                </Link>
              </motion.article>
            ))}
          </div>

          {/* =====================================================
              BOTTOM INFO
          ===================================================== */}
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
              delay: 0.2,
              duration: 0.6,
            }}
            className="mt-10 flex flex-col gap-4 border-t border-brand-dark/10 pt-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />

              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-brand-dark/40">
                Integrated material processing solutions
              </span>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.1em] text-brand-dark transition-colors hover:text-brand-orange"
            >
              Discuss your application
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          COMMON CTA
      ========================================================= */}
      <DarkCTA />
    </>
  );
}
