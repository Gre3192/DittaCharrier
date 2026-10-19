import { useState } from "react"
import { galleria } from "../data"

export default function Gallery() {
  const [foto, setFoto] = useState(galleria)
  const [attiva, setAttiva] = useState(null)

  // Caricamento locale (anteprima): le foto scelte vengono mostrate subito.
  // NB: senza backend non vengono salvate in modo permanente — al refresh si perdono.
  function aggiungiFoto(e) {
    const files = Array.from(e.target.files || [])
    const nuove = files.map((f) => ({
      src: URL.createObjectURL(f),
      titolo: f.name.replace(/\.[^.]+$/, ""),
    }))
    setFoto((prev) => [...nuove, ...prev])
    e.target.value = ""
  }

  return (
    <section id="galleria" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">I nostri lavori</h2>
            <p className="mt-4 text-stone-600 text-lg">
              Alcune delle realizzazioni dell'Impresa Charrier. Clicca su una foto per ingrandirla.
            </p>
          </div>

          <label className="cursor-pointer rounded-lg border border-stone-300 px-4 py-2 font-semibold text-stone-700 hover:bg-stone-100 transition-colors">
            + Carica foto
            <input type="file" accept="image/*" multiple className="hidden" onChange={aggiungiFoto} />
          </label>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {foto.map((f, i) => (
            <button
              key={i}
              onClick={() => setAttiva(f)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-100"
            >
              <img
                src={f.src}
                alt={f.titolo}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {f.titolo}
              </span>
            </button>
          ))}
        </div>
      </div>

      {attiva && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setAttiva(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white"
            aria-label="Chiudi"
            onClick={() => setAttiva(null)}
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <figure className="max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={attiva.src} alt={attiva.titolo} className="max-h-[80vh] w-auto rounded-lg" />
            <figcaption className="mt-3 text-center text-stone-200">{attiva.titolo}</figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
