import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

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
      className="text-[0.7rem] uppercase tracking-[0.32em] text-brass"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {children}
    </p>
  );
}

function BrassRule() {
  return <div className="mx-auto h-px w-16 bg-brass" />;
}

function Index() {
  const ref = useFadeIn();
  return (
    <main
      ref={ref}
      className="min-h-screen"
      style={{ fontFamily: "var(--font-body)", color: "#1A2535" }}
    >
      {/* HERO */}
      <section className="bg-navy px-6 py-28 text-cream sm:py-36 md:py-44">
        <div className="mx-auto max-w-3xl text-center fade-in">
          <SectionLabel>Mr Matt Plumbing · Whitstable</SectionLabel>
          <h1
            className="mt-8 text-4xl italic leading-[1.1] text-cream sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            The plumber restaurants trust.
          </h1>
          <p className="mt-6 text-base font-light tracking-wide text-cream/70 sm:text-lg">
            Domestic & commercial — London and Kent.
          </p>

          <div className="mt-14">
            <BrassRule />
            <a
              href={PHONE_HREF}
              className="mt-8 block text-3xl tracking-wide text-brass transition-opacity hover:opacity-80 sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-cream/50">
              Free estimates · No call-out charge
            </p>
          </div>
        </div>
      </section>

      {/* WHAT MATT DOES */}
      <section className="bg-cream px-6 py-24 sm:py-32">
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
                  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 6v12a4 4 0 0 0 4 4h6v8a4 4 0 0 0 4 4h6" />
                    <path d="M10 6h8M30 30h8" />
                  </svg>
                ),
              },
              {
                title: "Restaurants & Bars",
                body: "Hospitality specialist. Discreet, on-time work that respects your kitchen and your service.",
                icon: (
                  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 6v14a4 4 0 0 0 4 4v18" />
                    <path d="M22 6v14a4 4 0 0 1-4 4" />
                    <path d="M32 6c-4 4-4 14 0 18v18" />
                  </svg>
                ),
              },
              {
                title: "London & Kent",
                body: "Based in Whitstable, serving private clients and venues across Kent and central London.",
                icon: (
                  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M24 42s14-12 14-23a14 14 0 0 0-28 0c0 11 14 23 14 23z" />
                    <circle cx="24" cy="19" r="4.5" />
                  </svg>
                ),
              },
            ].map((c) => (
              <div key={c.title} className="text-center fade-in">
                <div className="mx-auto flex justify-center text-brass">{c.icon}</div>
                <h3
                  className="mt-6 text-2xl text-navy"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESTAURANTS & BARS SPECIALITY */}
      <section className="bg-navy px-6 py-24 text-cream sm:py-32">
        <div className="mx-auto max-w-2xl text-center fade-in">
          <SectionLabel>Speciality</SectionLabel>
          <div className="mt-6"><BrassRule /></div>
          <p className="mt-10 text-base leading-relaxed text-cream/80 sm:text-lg">
            Matt specialises in hospitality plumbing — fast, discreet work that respects
            your kitchen and your service times.
          </p>
          <blockquote
            className="mt-14 text-2xl italic leading-snug text-brass sm:text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            “Back of house before service starts.”
          </blockquote>
        </div>
      </section>

      {/* ABOUT MATT */}
      <section className="bg-cream px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <div className="text-center fade-in">
            <SectionLabel>The man</SectionLabel>
            <h2
              className="mt-6 text-4xl text-navy sm:text-5xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              About Matt.
            </h2>
            <div className="mt-8"><BrassRule /></div>
          </div>
          <div className="mt-12 space-y-6 text-base leading-relaxed text-navy/80 fade-in">
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
            <p className="pt-4 text-navy">
              All general plumbing work undertaken — domestic and commercial. Competitive
              rates, free estimates, and no call-out charge.
            </p>
          </div>
        </div>
      </section>

      {/* THREE REASSURANCES */}
      <section className="bg-navy px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 text-center md:grid-cols-3 md:gap-6">
            {["Competitive rates", "Free estimates", "No call-out charge"].map((t) => (
              <p
                key={t}
                className="fade-in text-2xl italic text-brass sm:text-3xl md:text-[2rem]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CALL MATT */}
      <footer className="bg-cream px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl text-center fade-in">
          <SectionLabel>Get in touch</SectionLabel>
          <h2
            className="mt-6 text-4xl text-navy sm:text-5xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Call Matt.
          </h2>
          <div className="mt-10"><BrassRule /></div>
          <a
            href={PHONE_HREF}
            className="mt-10 block text-4xl tracking-wide text-brass transition-opacity hover:opacity-80 sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            {PHONE_DISPLAY}
          </a>
          <p className="mt-8 text-xs uppercase tracking-[0.28em] text-navy/50">
            Serving London & Kent
          </p>
        </div>
      </footer>
    </main>
  );
}
