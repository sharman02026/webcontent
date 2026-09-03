import { ArrowLeft, ArrowRight, Check, Factory } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Meta } from "../components/UI";
import { getProduct, products } from "../data/products";

export function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);

  if (!product) return <Navigate to="/products" replace />;

  const index = products.findIndex((item) => item.slug === product.slug);
  const previous = products[(index - 1 + products.length) % products.length];
  const next = products[(index + 1) % products.length];

  return (
    <>
      <Meta
        title={`${product.name} | Refyn Energy`}
        description={product.summary}
      />

      <section className="bg-brand-dark pb-14 pt-28 text-white md:pb-20 md:pt-32">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/60 transition hover:text-brand-orange"
          >
            <ArrowLeft size={15} /> All products
          </Link>

          <div className="mt-7 grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="flex flex-col justify-center py-3 lg:py-10"
            >
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#c5cf67]">
                {product.category}
              </span>
              <h1 className="mt-4 text-4xl font-black uppercase !leading-[1.15] md:text-6xl">
                {product.name}
                <span className="text-brand-orange">.</span>
              </h1>
              <p className="mt-6 max-w-lg text-sm leading-7 !text-white/65 md:text-base">
                {product.summary}
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-brand-orange px-6 py-3 text-[10px] font-extrabold uppercase text-white transition hover:bg-[#d85d19]"
              >
                Discuss this product <ArrowRight size={15} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12, duration: 0.6 }}
              className="relative flex min-h-[300px] items-center justify-center bg-white p-7 sm:min-h-[430px] sm:p-12"
            >
              <span className="absolute right-5 top-5 text-[10px] font-black text-brand-orange">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(products.length).padStart(2, "0")}
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="h-[250px] w-full object-contain sm:h-[350px]"
              />
              <span className="absolute bottom-0 left-0 h-1 w-1/3 bg-brand-orange" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-brand-paper py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-9 bg-brand-orange" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-olive">
                Product overview
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-black uppercase !leading-[1.25] text-brand-dark md:text-4xl">
              Reliable processing for demanding operations.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-brand-dark/70 md:text-base md:leading-8">
              {product.description}
            </p>

            <div className="mt-10 border-y border-stone-300">
              {product.features.map((feature, featureIndex) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 border-b border-stone-300 py-4 last:border-b-0"
                >
                  <span className="text-[10px] font-extrabold text-brand-orange">
                    {String(featureIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-bold text-brand-dark">
                    {feature}
                  </span>
                  <Check size={17} className="ml-auto text-brand-olive" />
                </div>
              ))}
            </div>
          </div>

          <aside className="self-start border border-stone-300 bg-white p-6 md:p-8">
            <Factory size={30} strokeWidth={1.5} className="text-brand-olive" />
            <h2 className="mt-5 text-xl font-extrabold uppercase !leading-[1.3] text-brand-dark">
              Typical applications
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {product.applications.map((application) => (
                <div
                  key={application}
                  className="flex items-center gap-3 border-l-2 border-brand-orange bg-brand-paper px-4 py-3 text-sm font-semibold text-brand-dark"
                >
                  {application}
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs leading-6 text-brand-dark/55">
              Final equipment selection and configuration are based on material
              characteristics, throughput and required output.
            </p>
          </aside>
        </div>
      </section>

      {product.specifications && (
        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-0.5 w-9 bg-brand-orange" />
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-olive">
                    Technical information
                  </span>
                </div>
                <h2 className="mt-4 text-3xl font-black uppercase !leading-[1.25] text-brand-dark md:text-4xl">
                  Models and specifications.
                </h2>
              </div>
              <p className="max-w-md text-xs leading-6 text-brand-dark/55">
                Final values depend on feed characteristics, selected options
                and the required process configuration.
              </p>
            </div>

            <div className="overflow-x-auto border border-stone-300">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    {product.specifications.columns.map((column) => (
                      <th
                        key={column}
                        className="border-r border-white/10 px-5 py-4 text-[10px] font-extrabold uppercase tracking-[0.1em] last:border-r-0"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.specifications.rows.map((row, rowIndex) => (
                    <tr
                      key={row.join("-")}
                      className={
                        rowIndex % 2 === 0 ? "bg-brand-paper" : "bg-white"
                      }
                    >
                      {row.map((value, cellIndex) => (
                        <td
                          key={`${value}-${cellIndex}`}
                          className={`border-r border-t border-stone-300 px-5 py-4 text-xs leading-5 text-brand-dark/70 last:border-r-0 ${cellIndex === 0 ? "font-bold text-brand-dark" : ""}`}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      <nav
        className="border-t border-stone-300 bg-white"
        aria-label="Product navigation"
      >
        <div className="mx-auto grid w-full max-w-[1240px] sm:grid-cols-2">
          <Link
            to={`/products/${previous.slug}`}
            className="group flex min-h-28 items-center gap-4 border-b border-stone-300 px-5 py-6 transition hover:bg-brand-paper sm:border-b-0 sm:border-r md:px-8"
          >
            <ArrowLeft className="shrink-0 text-brand-orange transition-transform group-hover:-translate-x-1" />
            <span>
              <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-brand-dark/45">
                Previous product
              </span>
              <strong className="mt-1 block text-sm uppercase text-brand-dark">
                {previous.name}
              </strong>
            </span>
          </Link>
          <Link
            to={`/products/${next.slug}`}
            className="group flex min-h-28 items-center justify-end gap-4 px-5 py-6 text-right transition hover:bg-brand-paper md:px-8"
          >
            <span>
              <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-brand-dark/45">
                Next product
              </span>
              <strong className="mt-1 block text-sm uppercase text-brand-dark">
                {next.name}
              </strong>
            </span>
            <ArrowRight className="shrink-0 text-brand-orange transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </nav>
    </>
  );
}
