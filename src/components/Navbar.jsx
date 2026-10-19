import { useState } from "react"
import { azienda } from "../data"

const link = [
  { href: "#servizi", label: "Servizi" },
  { href: "#galleria", label: "Lavori" },
  { href: "#chi-siamo", label: "Chi siamo" },
  { href: "#appuntamento", label: "Appuntamento" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-stone-200">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 font-bold text-xl tracking-tight text-stone-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-orange-700 text-white">
            <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor">
              <path d="M8 22V13l8-5 8 5v9h-5v-6h-6v6H8z" />
            </svg>
          </span>
          {azienda.nomeBreve}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {link.map((l) => (
            <a key={l.href} href={l.href} className="text-stone-600 hover:text-orange-700 transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a
            href="#appuntamento"
            className="rounded-lg bg-orange-700 px-4 py-2 text-white font-semibold hover:bg-orange-800 transition-colors"
          >
            Prenota
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-stone-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Apri menu"
        >
          <svg className="h-6 w-6 text-stone-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-stone-200 bg-white px-4 py-3 flex flex-col gap-1">
          {link.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-stone-700 font-medium hover:text-orange-700"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
