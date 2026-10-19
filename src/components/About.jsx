import { azienda } from "../data"

const punti = [
  { n: "20+", t: "Anni di esperienza" },
  { n: "500+", t: "Lavori completati" },
  { n: "100%", t: "Clienti soddisfatti" },
]

export default function About() {
  return (
    <section id="chi-siamo" className="bg-stone-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Chi siamo</h2>
          <p className="mt-6 text-lg text-stone-300">{azienda.descrizione}</p>
          <p className="mt-4 text-stone-400">
            Ogni cantiere è seguito con attenzione, materiali di qualità e massima trasparenza sui costi e sui
            tempi di consegna.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {punti.map((p) => (
              <div key={p.t}>
                <div className="text-3xl font-extrabold text-orange-500">{p.n}</div>
                <div className="mt-1 text-sm text-stone-400">{p.t}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80"
            alt="Lavori di edilizia"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
