import { azienda } from "../data"

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-stone-900 text-white">
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/70 to-stone-900/40" />

      <div className="relative mx-auto max-w-6xl px-4 py-28 md:py-40">
        <span className="inline-block rounded-full bg-orange-700/90 px-4 py-1 text-sm font-semibold tracking-wide">
          {azienda.zona}
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          {azienda.nome}
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-stone-200">{azienda.claim}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#appuntamento"
            className="rounded-lg bg-orange-700 px-6 py-3 font-semibold hover:bg-orange-800 transition-colors"
          >
            Richiedi un appuntamento
          </a>
          <a
            href="#galleria"
            className="rounded-lg border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
          >
            Guarda i lavori
          </a>
        </div>
      </div>
    </section>
  )
}
