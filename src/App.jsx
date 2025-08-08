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
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
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

      {/* PORTFOLIO */}
      <section id="portfolio" className="border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Portfolio</h2>
              <p className="mt-2 max-w-2xl text-white/70">
                A few snapshots from recent stages we’ve supported.
              </p>
            </div>
            <a href="#contact" className="hidden sm:inline-block rounded-xl bg-[#E10600] px-5 py-2 font-semibold text-white hover:bg-[#ff2a22]">
              Book Your Date
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1510826373715-9731d76f6d66?q=80&w=1600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1507878866276-a947ef722fee?q=80&w=1600&auto=format&fit=crop",
            ].map((src, idx) => (
              <div key={idx} className="group overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img src={src} alt="Event photo" className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEAR */}
      <section id="gear" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Gear & Tech</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            A representative list — we’ll scale to your room and audience.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { h: "Consoles & I/O", items: ["Behringer WING / X32", "Yamaha DM series (available via partners)", "Dante networking / stageboxes"] },
              { h: "Microphones", items: ["Shure SM/Beta series", "Sennheiser e9xx", "Drum & choir mic kits"] },
              { h: "Monitors & RF", items: ["Sennheiser IEMs", "Wireless handhelds & lavs", "Antenna distro"] },
              { h: "Loudspeakers", items: ["Array & point‑source", "Subs as needed", "Delay fills"] },
              { h: "Playback", items: ["Tracks, click & guide", "Timecode to video/lighting", "Multitrack recording"] },
              { h: "Utilities", items: ["Power distro", "Stands, cabling, cases", "Stage management"] },
            ].map((g) => (
              <div key={g.h} className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
                <h3 className="text-lg font-semibold">{g.h}</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-white/75">
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Packages</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Transparent options sized for most gatherings. Custom quotes available.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                name: "Essential",
                price: "Starts at $X",
                goodFor: "Acoustic sets, small rooms, breakout sessions",
                features: ["Compact PA + 1 sub", "2 wireless mics", "Basic playback", "Pro tech (up to 4 hrs)"]
              },
              {
                name: "Standard",
                price: "Starts at $X",
                goodFor: "Mid‑size worship nights & corporate meetings",
                features: ["Full PA + subs", "4–6 wireless / IEMs", "Multitrack playback", "Pro tech (up to 6 hrs)"]
              },
              {
                name: "Full Production",
                price: "Custom",
                goodFor: "Conferences, outdoor, multi‑band events",
                features: ["Scaled PA + fills", "Comms & stage management", "Recording + timecode", "Team of engineers"]
              },
            ].map((p, idx) => (
              <div
                key={p.name}
                className={`relative rounded-2xl border p-6 ring-1 ${
                  idx === 1 ? "border-[#E10600]/40 bg-[#E10600]/5 ring-[#E10600]/40" : "border-white/10 bg-black/30 ring-white/10"
                }`}
              >
                {idx === 1 && (
                  <span className="absolute -top-3 right-6 rounded-full bg-[#E10600] px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="mt-1 text-white/70">{p.goodFor}</p>
                <p className="mt-4 text-xl font-semibold">{p.price}</p>
                <ul className="mt-4 space-y-2 text-white/80">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#E10600]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-block rounded-xl bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/20">
                  Request This Package
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/60">
            *Final pricing varies by venue, audience size, schedule, and logistics.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">About ResoNate</h2>
              <p className="mt-4 text-white/80">
                Founded by Nate Vela, ResoNate Productions serves the Rio Grande
                Valley with professional audio that supports the message — not the
                other way around. We value excellence, great sound, faith, and hard
                work. Whether it’s a Sunday service or a corporate meeting, we come
                prepared, on time, and focused on the win for your audience.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { h: "Faith‑forward", p: "We serve ministries and values‑aligned events." },
                  { h: "Detail‑driven", p: "Advance prep, clean stage plots, tidy cable runs." },
                  { h: "Scalable", p: "From intimate rooms to outdoor gatherings." },
                  { h: "Partner network", p: "Access to lighting, video, and staging as needed." },
                ].map((b) => (
                  <div key={b.h} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h3 className="font-semibold">{b.h}</h3>
                    <p className="text-white/70">{b.p}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop"
                  alt="Engineer at a mixing console"
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10 bg-gradient-to-b from-black via-black to-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Request a Quote</h2>
              <p className="mt-2 max-w-xl text-white/70">
                Tell us about your event and we’ll follow up within 24 hours.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 placeholder-white/40 outline-none focus:ring-2 focus:ring-[#E10600]" placeholder="Name" />
                  <input type="email" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 placeholder-white/40 outline-none focus:ring-2 focus:ring-[#E10600]" placeholder="Email" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 placeholder-white/40 outline-none focus:ring-2 focus:ring-[#E10600]" placeholder="Event Type (worship night, conference, etc.)" />
                  <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 placeholder-white/40 outline-none focus:ring-2 focus:ring-[#E10600]" placeholder="Date & Venue" />
                </div>
                <textarea rows={5} className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 placeholder-white/40 outline-none focus:ring-2 focus:ring-[#E10600]" placeholder="Share details: audience size, schedule, special needs…" />
                <button className="w-full rounded-xl bg-[#E10600] px-6 py-3 font-semibold uppercase tracking-wide text-white hover:bg-[#ff2a22]">
                  Send (demo)
                </button>
                <p className="text-xs text-white/50">This demo doesn’t send email. Hook it to your form service (Netlify, Formspree, Tally, etc.).</p>
              </form>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Direct Contact</h3>
                <div className="space-y-2 text-white/80">
                  <p>
                    Email: <a className="text-white underline decoration-white/30 underline-offset-4 hover:text-white" href="mailto:info@resonateproductions.net">info@resonateproductions.net</a>
                  </p>
                  <p>
                    Phone: <a className="text-white underline decoration-white/30 underline-offset-4 hover:text-white" href="tel:+1-956-463-9154">(956)463-9154</a>
                  </p>
                  <p>
                    Instagram: <a className="text-white underline decoration-white/30 underline-offset-4 hover:text-white" href="https://instagram.com/resonateproductions" target="_blank" rel="noreferrer">@resonateproductions</a>
                  </p>
                </div>
                <div className="mt-6 rounded-xl bg-black/60 p-4 text-sm text-white/70 ring-1 ring-white/10">
                  <p className="font-semibold">Service Area</p>
                  <p>Rio Grande Valley and surrounding Texas cities. Travel available upon request.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
          <p className="text-white/60">© {new Date().getFullYear()} ResoNate Productions LLC</p>
          <div className="flex items-center gap-6 text-white/60">
            <a href="#services" className="text-white/60 hover:text-white">Services</a>
            <a href="#packages" className="text-white/60 hover:text-white">Packages</a>
            <a href="#contact" className="text-white/60 hover:text-white">Book</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
