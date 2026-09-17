import { useEffect, useState } from "react";
import { ChevronDown, Mail, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems, solutionItems } from "../data/siteData";
import darkLogo from "../assets/refyn-energy-logo-dark.png";
import lightLogo from "../assets/refyn-energy-logo-light-bg.png";

const Logo = ({ large = false, onDark = false }) => (
  <Link
    className="flex shrink-0 items-center overflow-hidden"
    to="/"
    aria-label="Refyn Energy home"
  >
    <img
      className={large ? "h-28 w-auto" : "h-16 w-auto"}
      src={onDark ? darkLogo : lightLogo}
      alt="Refyn Energy"
    />
  </Link>
);
function Navbar() {
  const [open, setOpen] = useState(false),
    [solutionsOpen, setSolutionsOpen] = useState(false),
    [scrolled, setScrolled] = useState(false),
    location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    const watch = () => setScrolled(window.scrollY > 20);
    watch();
    addEventListener("scroll", watch);
    return () => removeEventListener("scroll", watch);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-stone-200 bg-brand-paper/95 text-brand-dark shadow-sm backdrop-blur-md" : "border-stone-200 bg-brand-paper text-brand-dark lg:border-white/15 lg:bg-transparent lg:text-white"}`}
    >
      <div className="relative mx-auto flex h-[84px] w-full max-w-[1240px] items-center gap-6 px-5 md:px-8">
        <span className="lg:hidden">
          <Logo />
        </span>
        <span className="hidden lg:block">
          <Logo onDark={!scrolled} />
        </span>
        <nav
          className={`${open ? "absolute inset-x-0 top-[84px] flex max-h-[calc(100svh-84px)] flex-col items-stretch gap-1 overflow-y-auto border-t border-stone-200 bg-brand-paper p-5 text-brand-dark shadow-xl" : "hidden"} ml-auto lg:static lg:flex lg:max-h-none lg:flex-row lg:items-center lg:gap-5 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 lg:text-inherit lg:shadow-none`}
          aria-label="Primary navigation"
        >
          {navItems
            .filter(([, path]) => path !== "/contact")
            .map(([label, path]) => (
              <div key={path} className="contents">
                <NavLink
                  to={path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `relative whitespace-nowrap px-2 py-2 text-sm font-semibold lg:px-0 lg:text-[11px] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-brand-orange after:transition-transform ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`
                  }
                >
                  {label}
                </NavLink>

                {path === "/about" && (
                  <div className="group relative">
                    <button
                      type="button"
                      className={`relative flex w-full items-center justify-between gap-1.5 whitespace-nowrap px-2 py-2 text-left text-sm font-semibold lg:w-auto lg:px-0 lg:text-[11px] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-brand-orange after:transition-transform ${solutionItems.some(([, route]) => route === location.pathname) ? "after:scale-x-100" : "after:scale-x-0 group-hover:after:scale-x-100"}`}
                      aria-expanded={solutionsOpen}
                      aria-haspopup="true"
                      onClick={() => setSolutionsOpen((value) => !value)}
                    >
                      Solutions
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <div
                      className={`${solutionsOpen ? "block" : "hidden"} mt-1 border border-stone-200 bg-white p-2 text-brand-dark shadow-xl lg:absolute lg:left-1/2 lg:top-full lg:mt-3 lg:w-56 lg:-translate-x-1/2 lg:group-hover:block lg:group-focus-within:block`}
                    >
                      {solutionItems.map(([solution, route], index) => (
                        <NavLink
                          key={route}
                          to={route}
                          onClick={() => {
                            setOpen(false);
                            setSolutionsOpen(false);
                          }}
                          className={({ isActive }) =>
                            `flex items-center justify-between px-4 py-3 text-xs font-semibold transition hover:bg-brand-paper hover:text-brand-orange ${isActive ? "bg-brand-paper text-brand-orange" : ""}`
                          }
                        >
                          <span>{solution}</span>
                          <span className="text-[10px] text-brand-orange">
                            0{index + 1}
                          </span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          <Link
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-4 py-3 text-xs font-bold uppercase text-white lg:hidden"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <Link
          className="hidden rounded-full items-center gap-2 border border-brand-orange bg-brand-orange px-4 py-2.5 text-[10px] font-bold uppercase text-white transition hover:bg-[#c95613] lg:inline-flex"
          to="/contact"
        >
          Contact
        </Link>
        <button
          className="absolute right-5 grid h-10 w-10 place-items-center border-0 bg-transparent text-brand-dark md:right-8 lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer className="bg-[#12160f] pb-6 pt-16 text-[#d4d8ce]">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-10 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-[1.3fr_repeat(4,1fr)] [&>div]:flex [&>div]:flex-col [&>div]:items-start [&>div]:gap-2.5 [&_b]:mb-2 [&_b]:text-[10px] [&_b]:uppercase [&_b]:text-white [&_a]:flex [&_a]:items-center [&_a]:gap-1 [&_a]:text-xs [&_a]:text-white/60 [&_span]:text-xs [&_span]:text-white/60">
        <div>
          <Logo large onDark />
          <p className="text-xs text-white/50">Committed to a green future.</p>
        </div>
        <div>
          <b>Company</b>
          <Link to="/about">About</Link>
          <Link to="/our-values">Our Values</Link>
          <Link to="/support-services">Support & Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <b>Business</b>
          <Link to="/energy-cycle">Refyn Energy Cycle</Link>
          <Link to="/energy-solutions">Refyn Energy Solutions</Link>
          <Link to="/products">Products</Link>
        </div>
        <div>
          <b>Focus areas</b>
          <span>Energy</span>
          <span>Environment</span>
          <span>Material Processing</span>
        </div>
        <div>
          <b>Contact</b>
          <a href="mailto:info@refynenergy.com">
            <Mail size={14} /> info@refynenergy.com
          </a>
          <a href="https://www.refynenergy.com">www.refynenergy.com</a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex w-full max-w-[1240px] flex-col justify-between gap-2 border-t border-white/10 px-5 pt-5 text-[9px] uppercase text-white/35 sm:flex-row md:px-8">
        <span>© REFYN ENERGY</span>
        <span>Energy · Environment · Material Processing</span>
      </div>
    </footer>
  );
}
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
