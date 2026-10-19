import { servizi } from "../data"

const icons = {
  exterior: (
    <path d="M3 21h18M5 21V10l7-4 7 4v11M9 21v-6h6v6" />
  ),
  interior: (
    <path d="M4 21V5a1 1 0 011-1h14a1 1 0 011 1v16M4 13h16M9 4v9M15 13v8" />
  ),
  masonry: (
    <path d="M3 7h18M3 12h18M3 17h18M7 7v5M12 12v5M16 7v5M9 17v4M14 2v5" />
  ),
  building: (
    <path d="M6 22V4a1 1 0 011-1h10a1 1 0 011 1v18M9 8h.01M12 8h.01M15 8h.01M9 12h.01M12 12h.01M15 12h.01M10 22v-4h4v4" />
  ),
}

export default function Services() {
  return (
    <section id="servizi" className="bg-stone-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">I nostri servizi</h2>
          <p className="mt-4 text-stone-600 text-lg">
            Ci occupiamo di tutto ciò che riguarda l'edilizia, dalla posa dei pavimenti alle opere murarie.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servizi.map((s) => (
            <div
              key={s.titolo}
              className="group rounded-2xl bg-white p-6 shadow-sm border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700 group-hover:bg-orange-700 group-hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  {icons[s.icona]}
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-stone-900">{s.titolo}</h3>
              <p className="mt-2 text-stone-600">{s.descrizione}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
