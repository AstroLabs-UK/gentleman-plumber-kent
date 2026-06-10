import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import astrolabsLogo from "@/assets/astrolabs-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mr Matt Plumbing — The plumber restaurants trust" },
      { name: "description", content: "Whitstable-based plumber serving London & Kent. Domestic & commercial. Specialist in restaurants and bars. Free estimates, no call-out charge." },
      { property: "og:title", content: "Mr Matt Plumbing — The plumber restaurants trust" },
      { property: "og:description", content: "Domestic & commercial plumbing across London and Kent. Specialist in restaurants and bars." },
    ],
  }),
  component: Index,
});

const PHONE_DISPLAY = "07957 184 478";
const PHONE_HREF = "tel:+447957184478";

function useFadeIn() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>(".fade-in");
    if (!els || els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="uppercase"
      style={{
        fontFamily: "var(--font-body)",
        color: "#C9A96E",
        letterSpacing: "0.12em",
        fontSize: "11px",
        fontWeight: 500,
      }}
    >
      {children}
    </p>
  );
}

function BrassRule() {
  return <div className="mx-auto h-px w-16" style={{ background: "#C9A96E" }} />;
}

function Index() {
  const ref = useFadeIn();
  return (
    <main
      ref={ref}
      className="min-h-screen"
      style={{ fontFamily: "var(--font-body)", color: "#3a3530" }}
    >
      {/* HERO */}
      <section
        className="flex min-h-screen items-center px-6"
        style={{ background: "#1A2535" }}
      >
        <div className="mx-auto max-w-3xl text-center fade-in w-full">
          <SectionLabel>Mr Matt Plumbing · Whitstable</SectionLabel>
          <h1
            className="mt-8 italic leading-[1.05]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              color: "#F5F0E8",
              fontSize: "clamp(36px, 6vw, 56px)",
            }}
          >
            The plumber restaurants trust.
          </h1>
          <p
            className="mt-6 text-base font-light tracking-wide sm:text-lg"
            style={{ color: "#D4CCB8" }}
          >
            Domestic & commercial — London and Kent.
          </p>

          <div className="mt-12">
            <div className="mx-auto" style={{ height: "1px", width: "80px", background: "#C9A96E" }} />
            <a
              href={PHONE_HREF}
              className="mt-8 block tracking-wide transition-opacity hover:opacity-80 no-underline"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                color: "#C9A96E",
                fontSize: "28px",
                textDecoration: "none",
              }}
            >
              {PHONE_DISPLAY}
            </a>
            <p
              className="mt-6 uppercase"
              style={{ color: "#D4CCB8", letterSpacing: "0.28em", fontSize: "11px" }}
            >
              Free estimates · No call-out charge
            </p>
          </div>
        </div>
      </section>

      {/* WHAT MATT DOES */}
      <section className="px-6 py-24 sm:py-32" style={{ background: "#F5F0E8" }}>
        <div className="mx-auto max-w-5xl">
          <div className="text-center fade-in">
            <SectionLabel>What Matt does</SectionLabel>
            <div className="mt-6"><BrassRule /></div>
          </div>
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            {[
              {
                title: "General Plumbing",
                body: "Leaks, taps, boilers, bathrooms, blockages — all domestic and commercial work undertaken.",
                icon: (
                  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="#C9A96E" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8l6 6-10 10-6-6z" />
                    <path d="M24 14l16 16" />
                    <path d="M30 32l8 8-4 4-8-8z" />
                  </svg>
                ),
              },
              {
                title: "Restaurants & Bars",
                body: "Kitchens, bar pipework, cellar cooling lines — Matt knows how hospitality venues work and schedules around your service.",
                icon: (
                  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="#C9A96E" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 28a14 14 0 0 1 28 0" />
                    <path d="M6 32h36" />
                    <path d="M24 14v-4" />
                    <circle cx="24" cy="8" r="1.5" fill="#C9A96E" />
                  </svg>
                ),
              },
              {
                title: "London & Kent",
                body: "Based in Whitstable, serving private clients and venues across Kent and central London.",
                icon: (
                  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="#C9A96E" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M24 42s14-12 14-23a14 14 0 0 0-28 0c0 11 14 23 14 23z" />
                    <circle cx="24" cy="19" r="4.5" />
                  </svg>
                ),
              },
            ].map((c) => (
              <div key={c.title} className="text-center fade-in">
                <div className="mx-auto flex justify-center">{c.icon}</div>
                <h3
                  className="mt-6"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "20px", color: "#1A2535" }}
                >
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "#3a3530" }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESTAURANTS & BARS SPECIALITY */}
      <section className="px-6 py-24 sm:py-32" style={{ background: "#1A2535" }}>
        <div className="mx-auto max-w-2xl text-center fade-in">
          <SectionLabel>Speciality</SectionLabel>
          <div className="mt-6"><BrassRule /></div>
          <p className="mt-10 text-base leading-relaxed sm:text-lg" style={{ color: "#D4CCB8" }}>
            Matt specialises in hospitality plumbing — fast, discreet work that respects
            your kitchen and your service times.
          </p>
          <p
            className="mt-14 italic leading-snug"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#C9A96E", fontSize: "clamp(28px, 4vw, 36px)" }}
          >
            “Back of house before service starts.”
          </p>
        </div>
      </section>

      {/* ABOUT MATT */}
      <section className="px-6 py-24 sm:py-32" style={{ background: "#F5F0E8" }}>
        <div className="mx-auto" style={{ maxWidth: "640px" }}>
          <div className="text-center fade-in">
            <SectionLabel>The man</SectionLabel>
            <h2
              className="mt-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "#1A2535", fontSize: "clamp(36px, 5vw, 48px)" }}
            >
              About Matt.
            </h2>
            <div className="mt-8"><BrassRule /></div>
          </div>
          <div className="mt-12 space-y-6 text-base fade-in" style={{ color: "#3a3530", lineHeight: 1.9 }}>
            <p>
              Matt has been working as a plumber across London and Kent for over two decades.
              Based in Whitstable, he's built a reputation among restaurant owners, bar
              managers, and private clients who want the job done properly — on time, on
              budget, and without the fuss. He works alone, which means the person who
              answers the phone is the person who turns up. No subcontractors, no surprises.
            </p>
            <p>
              Restaurants and bars are a particular speciality. Matt understands that a
              plumbing problem in a working kitchen isn't just an inconvenience — it's lost
              covers and lost revenue. He works around your service times, arrives when he
              says he will, and leaves the place as he found it.
            </p>
            <p className="pt-4" style={{ color: "#1A2535" }}>
              All general plumbing work undertaken — domestic and commercial. Competitive
              rates, free estimates, and no call-out charge.
            </p>
          </div>
        </div>
      </section>

      {/* THREE REASSURANCES */}
      <section className="px-6 py-20 sm:py-28" style={{ background: "#1A2535" }}>
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-stretch gap-8 text-center md:flex-row md:items-center md:justify-center md:gap-0">
            {["Competitive rates", "Free estimates", "No call-out charge"].map((t, i) => (
              <div key={t} className="flex flex-1 items-center justify-center fade-in" style={{ position: "relative" }}>
                {i > 0 && (
                  <span
                    className="hidden md:block"
                    style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: "1px", height: "32px", background: "#C9A96E" }}
                  />
                )}
                <p
                  className="italic"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#C9A96E", fontSize: "22px" }}
                >
                  {t}
                </p>
              </div>
            ))}
          </div>
          </div>
      </section>

      {/* CALL MATT */}
      <footer className="px-6 py-28 sm:py-36" style={{ background: "#F5F0E8" }}>
        <div className="mx-auto max-w-3xl text-center fade-in">
          <SectionLabel>Get in touch</SectionLabel>
          <h2
            className="mt-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "#1A2535", fontSize: "clamp(36px, 5vw, 56px)" }}
          >
            Call Matt.
          </h2>
          <div className="mt-10"><BrassRule /></div>
          <a
            href={PHONE_HREF}
            className="mt-10 block transition-opacity hover:opacity-80"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "#1A2535",
              fontSize: "clamp(32px, 6vw, 48px)",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            {PHONE_DISPLAY}
          </a>
          <p
            className="mt-8 uppercase"
            style={{ color: "#C9A96E", letterSpacing: "0.28em", fontSize: "11px" }}
          >
            Serving London & Kent
          </p>
          <p className="mt-10 text-xs" style={{ color: "#3a3530", opacity: 0.6 }}>
            © Mr Matt Plumbing. All rights reserved.
          </p>
        </div>
      </footer>

      {/* AstroLabs credit badge */}
      <a
        href="https://astrolabs.com"
        target="_blank"
        rel="noopener noreferrer"
        className="astrolabs-badge"
        style={{
          position: "fixed",
          right: "16px",
          bottom: "16px",
          zIndex: 999,
          background: "#3D4466",
          borderRadius: "999px",
          padding: "8px 14px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
          textDecoration: "none",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#4A5278")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#3D4466")}
      >
        <img
          src={astrolabsLogo.url}
          alt="AstroLabs"
          style={{ width: "20px", height: "20px", borderRadius: "4px", display: "block" }}
        />
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            color: "#F5F0E8",
            textDecoration: "none",
          }}
        >
          Made by AstroLabs
        </span>
      </a>
    </main>
  );
}
