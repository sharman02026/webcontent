import { useState } from "react";
import { Check } from "lucide-react";
import { Heading, Meta, PageHero } from "../components/UI";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <Meta
        title="Contact REFYN ENERGY"
        description="Contact Refyn Energy for equipment, AFR supply, contract services and partnerships."
      />
      <PageHero
        eyebrow="Start a conversation"
        title="Let's build a greener industrial future."
        text="Talk to REFYN ENERGY."
      />
      <section className="bg-brand-paper py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="min-w-0 border-l-2 border-brand-orange pl-5 sm:pl-6">
            <Heading
              eyebrow="Contact"
              title="Bring us the operating challenge."
            />
            <p>
              For equipment orders, AFR supply, contract services, plant
              development and partnership inquiries. Our team will respond
              through the official channels within one business day.
            </p>
            <div className="mt-10 grid min-w-0 grid-cols-[72px_minmax(0,1fr)] gap-4 border-t border-stone-300 pt-5 sm:grid-cols-[90px_minmax(0,1fr)] [&>span]:text-[10px] [&>span]:uppercase [&>span]:text-stone-500 [&>a]:break-all [&>a]:font-bold">
              <span>Website</span>
              <a href="https://www.refynenergy.com">www.refynenergy.com</a>
              <span>Email</span>
              <a href="mailto:info@refynenergy.com">info@refynenergy.com</a>
            </div>
          </div>
          {sent ? (
            <div className="bg-brand-paper p-10 md:p-16 [&>svg]:size-11 [&>svg]:text-brand-olive [&>span]:mb-2 [&>span]:mt-7 [&>span]:block [&>span]:text-[10px] [&>span]:font-bold [&>span]:uppercase [&>span]:text-brand-orange [&>h2]:text-3xl [&>h2]:font-bold">
              <Check />
              <span>Enquiry received</span>
              <h2>Thank you for reaching out.</h2>
              <p>
                Your message has been recorded in this demonstration interface.
              </p>
              <button
                className="flex items-center gap-2 border-0 bg-transparent py-5 font-bold text-brand-olive"
                onClick={() => setSent(false)}
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form
              className="grid min-w-0 gap-5 border border-stone-300 bg-white p-5 shadow-xl sm:p-6 md:grid-cols-2 md:p-10 [&_label]:min-w-0 [&_label]:flex [&_label]:flex-col [&_label]:gap-2 [&_label]:text-[10px] [&_label]:font-bold [&_label]:uppercase [&_input]:min-w-0 [&_input]:w-full [&_input]:border-0 [&_input]:border-b [&_input]:border-stone-300 [&_input]:bg-stone-50 [&_input]:p-3.5 [&_input]:text-base [&_input]:font-normal [&_input]:normal-case [&_input]:outline-none focus:[&_input]:border-brand-orange [&_select]:min-w-0 [&_select]:w-full [&_select]:border-0 [&_select]:border-b [&_select]:border-stone-300 [&_select]:bg-stone-50 [&_select]:p-3.5 [&_select]:text-base [&_select]:font-normal [&_select]:normal-case [&_textarea]:min-w-0 [&_textarea]:w-full [&_textarea]:border-0 [&_textarea]:border-b [&_textarea]:border-stone-300 [&_textarea]:bg-stone-50 [&_textarea]:p-3.5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Field label="Full name" name="name" />
              <Field label="Company name" name="company" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
              <label className="md:col-span-2">
                Inquiry type
                <select required defaultValue="">
                  <option value="" disabled>
                    Select an inquiry
                  </option>
                  {[
                    "Equipment Orders",
                    "AFR Supply",
                    "Contract Services",
                    "Plant Development",
                    "Partnership Inquiry",
                    "Other",
                  ].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </label>
              <label className="md:col-span-2">
                Message
                <textarea rows="5" required />
              </label>
              <button
                className="inline-flex items-center justify-center gap-2.5 border border-brand-orange bg-brand-orange px-5 py-3.5 text-xs font-bold uppercase text-white transition hover:bg-[#c95613] md:col-span-2"
                type="submit"
              >
                Send enquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
function Field({ label, ...props }) {
  return (
    <label>
      {label}
      <input required {...props} />
    </label>
  );
}
