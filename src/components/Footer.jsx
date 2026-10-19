import { azienda } from "../data"

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-orange-700 text-white">
              <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor">
                <path d="M8 22V13l8-5 8 5v9h-5v-6h-6v6H8z" />
              </svg>
            </span>
            {azienda.nome}
          </div>
          <p className="mt-3 text-sm">{azienda.claim}</p>
        </div>

        <div>
          <h4 className="text-white font-semibold">Contatti</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              Email:{" "}
              <a href={`mailto:${azienda.email}`} className="hover:text-orange-500">
                {azienda.email}
              </a>
            </li>
            <li>
              Tel:{" "}
              <a href={`tel:${azienda.telefono.replace(/\s/g, "")}`} className="hover:text-orange-500">
                {azienda.telefono}
              </a>
            </li>
            <li>Zona: {azienda.zona}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold">Link</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#servizi" className="hover:text-orange-500">Servizi</a></li>
            <li><a href="#galleria" className="hover:text-orange-500">Lavori</a></li>
            <li><a href="#appuntamento" className="hover:text-orange-500">Appuntamento</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} {azienda.nome}. Tutti i diritti riservati.
      </div>
    </footer>
  )
}
