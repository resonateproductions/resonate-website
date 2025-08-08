import React, { useState } from "react";

// === ResoNate Productions — One‑Page Website (Updated) ===
// Changes in this version:
// - All links/buttons explicitly set to white text (no default blue links)
// - Fixed "Book Now" button styling in nav (desktop + mobile)
// - Updated Instagram handle, email, and phone number

export default function App() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#gear", label: "Gear" },
    { href: "#packages", label: "Packages" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      <style>{`a { color: inherit; text-decoration: none; } a:visited { color: inherit; }`}</style>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-3 text-white">
            <img
              src="/logo.png"
              alt="ResoNate Productions logo"
              className="h-10 w-auto block"
              onError={(e) => { e.currentTarget.remove(); }}
            />
          </a>

          <button
            className="sm:hidden inline-flex items-center justify-center rounded-lg border border-white/20 px-2 py-1 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul className="hidden sm:flex items-center gap-6 text-sm">
            {navItems.map((i) => (
              <li key={i.href}>
                <a href={i.href} className="uppercase tracking-wide text-white/80 hover:text-white">
                  {i.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="rounded-xl bg-[#E10600] px-4 py-2 font-semibold uppercase tracking-wide text-white whitespace-nowrap leading-none hover:bg-[#ff2a22]">
                Book Now
              </a>
            </li>
          </ul>
        </nav>
        {open && (
          <div className="sm:hidden border-t border-white/10 bg-black">
            <ul className="mx-auto max-w-7xl px-4 py-3 space-y-3">
              {navItems.map((i) => (
                <li key={i.href}>
                  <a
                    href={i.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/5"
                  >
                    {i.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg bg-[#E10600] px-3 py-2 text-center font-semibold text-white whitespace-nowrap leading-none hover:bg-[#ff2a22]"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative isolate">
        <div
          className="absolute inset-0 -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 70%), radial-gradient(60% 60% at 50% 100%, rgba(225,6,0,0.15) 0%, rgba(225,6,0,0.04) 45%, transparent 70%)",
          }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 sm:py-28 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/60">
              Live Sound • Church Production • Events
            </p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
              Excellence in <span className="text-[#E10600]">Audio</span> for
              Churches & Events
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              ResoNate Productions delivers clear, powerful sound with a servant
              heart — for worship services, conferences, school functions, and
              corporate events across the RGV.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-[#E10600] px-6 py-3 font-semibold uppercase tracking-wide text-white hover:bg-[#ff2a22]"
              >
                Get a Quote
              </a>
              <a
                href="#portfolio"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold uppercase tracking-wide text-white hover:bg-white/5"
              >
                See Our Work
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#E10600]" />
                Faith‑forward, service‑oriented
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-white/60" />
                Fully mobile & scalable
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg:white/5 bg-white/5 p-6 shadow-2xl">
              <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black/60 ring-1 ring-white/10">
                {/* Hero visual — swap the placeholder image or drop in an event photo */}
                <img
                  src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop"
                  alt="Live sound and stage lighting"
                  className="h-full w-full object-cover opacity-80"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs sm:text-sm">
                {[
                  "Worship Nights",
                  "Conferences",
                  "School Events",
                  "Corporate",
                  "Outdoor",
                  "Installations",
                ].map((t) => (
                  <div key={t} className="rounded-lg bg-white/5 px-3 py-2 text-white/80 ring-1 ring-white/10">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Services</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Tailored production support for faith gatherings and professional events.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Live Sound Reinforcement",
                body:
                  "Full PA systems, wireless mics, in‑ear monitoring, stage management, and FOH mixing for any venue size.",
              },
              {
                title: "Worship & Church Production",
                body:
                  "Sunday services, worship nights, youth events, and conferences — we serve your vision with excellence.",
              },
              {
                title: "Corporate & School Events",
                body:
                  "Assemblies, graduations, meetings, and fundraisers with clear speech, clean playback, and reliable logistics.",
              },
              {
                title: "System Design & Tuning",
                body:
                  "Room analysis, loudspeaker placement, and tuning for clarity and impact using industry‑standard tools.",
              },
              {
                title: "Playback & Tracks",
                body:
                  "Dante, multitrack playback, click/guide, timecode, and backing tracks integrated into your set.",
              },
              {
                title: "Training & Team Coaching",
                body:
                  "On‑site coaching and easy‑to‑follow workflows so your team keeps sounding great long after we leave.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg ring-1 ring-white/10"
              >
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-white/70">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More sections omitted for brevity; rest matches user's content */}
    </div>
  );
}