import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Meta, PageHero } from "../components/UI";
import { products } from "../data/products";
import processing from "../assets/waste-processing.png";

export function Products() {
  return (
    <>
      <Meta
        title="Industrial Products | Refyn Energy"
        description="Explore Refyn Energy equipment for waste processing, material recovery and alternative fuel preparation."
      />

      <PageHero
        eyebrow="Equipment portfolio"
        title="Industrial Products"
        text="Equipment for size reduction, screening, separation, compaction and alternative fuel preparation."
        image={processing}
      />

      <section className="bg-brand-paper py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
          <div className="mb-10 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                Product range
              </span>
              <h2 className="mt-3 text-3xl font-black uppercase !leading-[1.2] text-brand-dark md:text-5xl">
                Equipment for every process stage.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-brand-dark/65 md:justify-self-end md:text-base">
              Select a product to review its role, core capabilities and typical
              applications within an integrated processing line.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-stone-300 bg-stone-300 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <motion.article
                key={product.slug}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (index % 4) * 0.06, duration: 0.5 }}
                className="group relative flex min-h-full flex-col bg-white"
              >
                <Link
                  to={`/products/${product.slug}`}
                  className="flex h-full flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-orange"
                  aria-label={`View ${product.name}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f7f7f4] p-5">
                    <span className="absolute left-4 top-4 z-10 text-[9px] font-extrabold text-brand-orange">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-brand-olive">
                      {product.category}
                    </span>
                    <h3 className="mt-2 text-lg font-extrabold uppercase !leading-[1.25] text-brand-dark">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-xs leading-5 text-brand-dark/60">
                      {product.summary}
                    </p>
                    <span className="mt-6 flex items-center justify-between border-t border-stone-200 pt-4 text-[10px] font-extrabold uppercase text-brand-dark">
                      View product
                      <ArrowRight
                        size={16}
                        className="text-brand-orange transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brand-orange transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-14 text-white">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-6 px-5 md:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#c5cf67]">
              Need a complete system?
            </span>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold uppercase !leading-[1.3] md:text-4xl">
              Let us configure the right equipment for your material stream.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-brand-orange px-7 py-3.5 text-[10px] font-extrabold uppercase text-white transition hover:bg-[#d85d19]"
          >
            Contact our team <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
