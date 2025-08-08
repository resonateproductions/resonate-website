
import React, { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#gear', label: 'Gear' },
    { href: '#packages', label: 'Packages' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className='min-h-screen bg-black text-white scroll-smooth'>
      <style>{`a { color: inherit; text-decoration: none; } a:visited { color: inherit; }`}</style>

      {/* NAV */}
      <header className='sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur'>
        <nav className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3'>
          <a href='#home' className='flex items-center gap-3'>
            <img src='/logo.png' alt='ResoNate logo' className='h-10 w-auto' />
          </a>

          <button className='sm:hidden rounded-lg border border-white/20 px-2 py-1' onClick={() => setOpen(!open)} aria-label='Toggle menu'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-6 w-6'>
              <path d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>

          <ul className='hidden sm:flex items-center gap-6 text-sm'>
            {nav.map(i => (
              <li key={i.href}><a href={i.href} className='uppercase tracking-wide text-white/80 hover:text-white'>{i.label}</a></li>
            ))}
            <li><a href='#contact' className='rounded-xl bg-[#E10600] px-4 py-2 font-semibold uppercase leading-none hover:bg-[#ff2a22]'>Book Now</a></li>
          </ul>
        </nav>
        {open && (
          <div className='sm:hidden border-t border-white/10 bg-black'>
            <ul className='mx-auto max-w-7xl px-4 py-3 space-y-3'>
              {nav.map(i => (
                <li key={i.href}><a href={i.href} onClick={() => setOpen(false)} className='block rounded-lg px-3 py-2 hover:bg-white/5'>{i.label}</a></li>
              ))}
              <li><a href='#contact' onClick={() => setOpen(false)} className='block rounded-lg bg-[#E10600] px-3 py-2 text-center font-semibold hover:bg-[#ff2a22]'>Book Now</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id='home' className='relative isolate'>
        <div className='absolute inset-0 -z-10' style={{background:
          'radial-gradient(60% 60% at 50% 0%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 70%), radial-gradient(60% 60% at 50% 100%, rgba(225,6,0,0.15) 0%, rgba(225,6,0,0.04) 45%, transparent 70%)'}} />
        <div className='mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 sm:py-28 lg:grid-cols-2'>
          <div>
            <p className='mb-3 text-sm uppercase tracking-[0.25em] text-white/60'>Live Sound • Church Production • Events</p>
            <h1 className='text-4xl font-extrabold leading-tight sm:text-6xl'>Excellence in <span className='text-[#E10600]'>Audio</span> for Churches & Events</h1>
            <p className='mt-5 max-w-xl text-lg text-white/80'>ResoNate Productions delivers clear, powerful sound with a servant heart — for worship services, conferences, school functions, and corporate events across the RGV.</p>
            <div className='mt-8 flex flex-wrap gap-4'>
              <a href='#contact' className='rounded-xl bg-[#E10600] px-6 py-3 font-semibold uppercase tracking-wide hover:bg-[#ff2a22]'>Get a Quote</a>
              <a href='#portfolio' className='rounded-xl border border-white/20 px-6 py-3 font-semibold uppercase tracking-wide hover:bg-white/5'>See Our Work</a>
            </div>
          </div>
          <div className='rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl'>
            <div className='aspect-video w-full overflow-hidden rounded-2xl bg-black/60 ring-1 ring-white/10'>
              <img src='https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop' alt='Live sound and stage lighting' className='h-full w-full object-cover opacity-80' />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id='services' className='border-t border-white/10'>
        <div className='mx-auto max-w-7xl px-4 py-20'>
          <h2 className='text-3xl font-bold sm:text-4xl'>Services</h2>
          <p className='mt-2 max-w-2xl text-white/70'>Tailored production support for faith gatherings and professional events.</p>
          <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {[
              {t:'Live Sound Reinforcement', b:'Full PA systems, wireless mics, in‑ear monitoring, stage management, and FOH mixing.'},
              {t:'Worship & Church Production', b:'Sunday services, worship nights, youth events, and conferences.'},
              {t:'Corporate & School Events', b:'Graduations, meetings, fundraisers with clear speech and reliable logistics.'},
              {t:'System Design & Tuning', b:'Room analysis, placement, and tuning for clarity and impact.'},
              {t:'Playback & Tracks', b:'Dante, multitrack playback, click/guide, timecode and backing tracks.'},
              {t:'Training & Team Coaching', b:'On‑site coaching and easy workflows for your team.'},
            ].map(x => (
              <div key={x.t} className='rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10'>
                <h3 className='text-lg font-semibold'>{x.t}</h3>
                <p className='mt-2 text-white/70'>{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id='contact' className='border-t border-white/10 bg-gradient-to-b from-black via-black to-[#0a0a0a]'>
        <div className='mx-auto max-w-7xl px-4 py-20 grid gap-10 lg:grid-cols-2'>
          <div>
            <h2 className='text-3xl font-bold sm:text-4xl'>Request a Quote</h2>
            <p className='mt-2 max-w-xl text-white/70'>Tell us about your event and we’ll follow up within 24 hours.</p>
            <form onSubmit={(e)=>e.preventDefault()} className='mt-8 space-y-4'>
              <div className='grid gap-4 sm:grid-cols-2'>
                <input className='w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 placeholder-white/40 focus:ring-2 focus:ring-[#E10600]' placeholder='Name' />
                <input type='email' className='w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 placeholder-white/40 focus:ring-2 focus:ring-[#E10600]' placeholder='Email' />
              </div>
              <textarea rows={5} className='w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 placeholder-white/40 focus:ring-2 focus:ring-[#E10600]' placeholder='Share details: audience size, schedule, special needs…' />
              <button className='w-full rounded-xl bg-[#E10600] px-6 py-3 font-semibold uppercase tracking-wide hover:bg-[#ff2a22]'>Send (demo)</button>
              <p className='text-xs text-white/50'>This demo doesn’t send email. Hook it to Netlify forms, Formspree, or your Google Form.</p>
            </form>
          </div>
          <div className='rounded-3xl border border-white/10 bg-white/5 p-6'>
            <h3 className='text-xl font-semibold mb-2'>Direct Contact</h3>
            <p>Email: <a className='underline decoration-white/30 underline-offset-4' href='mailto:info@resonateproductions.net'>info@resonateproductions.net</a></p>
            <p>Phone: <a className='underline decoration-white/30 underline-offset-4' href='tel:+1-956-463-9154'>(956)463-9154</a></p>
            <p>Instagram: <a className='underline decoration-white/30 underline-offset-4' href='https://instagram.com/resonateproductions' target='_blank' rel='noreferrer'>@resonateproductions</a></p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='border-t border-white/10'>
        <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row'>
          <p className='text-white/60'>© {new Date().getFullYear()} ResoNate Productions LLC</p>
          <div className='flex items-center gap-6 text-white/60'>
            <a href='#services' className='hover:text-white'>Services</a>
            <a href='#packages' className='hover:text-white'>Packages</a>
            <a href='#contact' className='hover:text-white'>Book</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
