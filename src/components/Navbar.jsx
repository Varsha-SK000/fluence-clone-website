import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navItems = ["feature", "about", "testimonial", "pricing", "faq"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [bounce, setBounce] = useState(false);

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 });
  const blurVal = useTransform(smoothVelocity, [-500, 0, 500], [22, 14, 22]);

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    let timeout;
    return scrollY.on("change", (y) => {
      setScrolled(y > 40);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setBounce(true);
        setTimeout(() => setBounce(false), 300);
      }, 120);
    });
  }, [scrollY]);

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      let current = "";
      navItems.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offset = section.offsetTop - 120;
          if (window.scrollY >= offset) current = id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    if (!isHome) {
      navigate(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const target = el.offsetTop - 80;
    const start = window.scrollY;
    let startTime = null;
    const duration = 700;
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      window.scrollTo(0, start + (target - start) * ease(progress));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  const btnRef = useRef(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;
    setBtnPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.25,
      y: (e.clientY - rect.top - rect.height / 2) * 0.25,
    });
  };

  return (
    <>
      {/* Cursor glow */}
      <motion.div
        className="fixed top-0 left-0 w-[280px] h-[280px] pointer-events-none z-40"
        animate={{ x: cursor.x - 140, y: cursor.y - 140 }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Header */}
      <header
        className="fixed top-0 left-0 w-full z-50 flex justify-center"
        style={{
          padding: scrolled ? "12px 20px" : "22px 28px",
          transition: "padding 0.4s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <motion.div
          layout
          animate={{
            height: scrolled ? 54 : 62,
            width: scrolled ? "52%" : "92%",
            scale: scrolled ? 0.93 : 1,
            borderRadius: scrolled ? 10 : 12,
            y: bounce ? -3 : 0,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          style={{
            backdropFilter: `blur(${blurVal.get()}px)`,
            WebkitBackdropFilter: `blur(${blurVal.get()}px)`,
            backgroundColor: "rgba(225, 215, 237, 0.65)",
            border: "1px solid rgba(255,255,255,0.28)",
            maxWidth: "1240px",
            width: "100%",
          }}
          className="px-6 flex items-center justify-between relative overflow-hidden"
        >
          {/* Noise texture */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 z-10 no-underline">
            <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">✦</span>
            </div>
            <span className="text-lg font-semibold text-gray-900" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Fluence AI
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium z-10">
            {navItems.map((item, i) => (
              <div
                key={item}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative py-1"
              >
                <a
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`capitalize transition-colors ${active === item ? "text-black" : "text-gray-600 hover:text-black"}`}
                  style={{ textDecoration: "none" }}
                >
                  {item}
                </a>
                {active === item && (
                  <motion.div
                    layoutId="active-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-black rounded-full"
                  />
                )}
                {hovered === i && active !== item && (
                  <motion.div
                    layoutId="hover-bg"
                    className="absolute inset-0 -z-10 rounded-md bg-black/6"
                  />
                )}
              </div>
            ))}

            <motion.a
              ref={btnRef}
              href="/contact"
              animate={{ x: btnPos.x, y: btnPos.y }}
              whileHover={{ scale: 1.06 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setBtnPos({ x: 0, y: 0 })}
              className="bg-black text-white px-5 py-2 rounded-xl text-sm font-medium no-underline"
              style={{ textDecoration: "none" }}
            >
              Contact
            </motion.a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden z-10 flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </motion.div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/25 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 w-[88%] bg-white rounded-2xl border border-gray-100 shadow-2xl p-6 flex flex-col gap-3 z-50"
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="capitalize text-gray-700 font-medium py-1 hover:text-black transition-colors"
                  style={{ textDecoration: "none" }}
                >
                  {item}
                </a>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 bg-black text-white py-2.5 rounded-xl text-center font-semibold no-underline"
              >
                Contact
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
