import { useState } from "react"
import { azienda } from "../data"

const vuoto = { nome: "", cognome: "", email: "", data: "", messaggio: "" }

export default function AppointmentForm() {
  const [form, setForm] = useState(vuoto)
  const [errori, setErrori] = useState({})
  const [inviato, setInviato] = useState(false)

  function aggiorna(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrori((err) => ({ ...err, [name]: undefined }))
  }

  function valida() {
    const err = {}
    if (!form.nome.trim()) err.nome = "Inserisci il nome"
    if (!form.cognome.trim()) err.cognome = "Inserisci il cognome"
    if (!form.email.trim()) err.email = "Inserisci l'email"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Email non valida"
    return err
  }

  function invia(e) {
    e.preventDefault()
    const err = valida()
    if (Object.keys(err).length) {
      setErrori(err)
      return
    }

    // TODO: collegare l'invio reale dell'email al proprietario.
    // Opzioni: un endpoint backend (/api/appuntamento), oppure un servizio come
    // EmailJS o Formspree. Per ora mostriamo solo la conferma e, come ripiego,
    // prepariamo un'email precompilata verso il proprietario.
    const oggetto = encodeURIComponent(`Nuova richiesta di appuntamento — ${form.nome} ${form.cognome}`)
    const corpo = encodeURIComponent(
      `Nome: ${form.nome}\nCognome: ${form.cognome}\nEmail: ${form.email}\n` +
        `Data preferita: ${form.data || "non indicata"}\n\nMessaggio:\n${form.messaggio || "—"}`
    )
    window.location.href = `mailto:${azienda.email}?subject=${oggetto}&body=${corpo}`

    setInviato(true)
    setForm(vuoto)
  }

  return (
    <section id="appuntamento" className="bg-stone-50 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Prenota un appuntamento</h2>
          <p className="mt-4 text-stone-600 text-lg">
            Compila il modulo: la tua richiesta verrà inviata direttamente a {azienda.nomeBreve}.
          </p>
        </div>

        {inviato ? (
          <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-stone-900">Richiesta inviata!</h3>
            <p className="mt-2 text-stone-600">Ti contatteremo al più presto per confermare l'appuntamento.</p>
            <button
              onClick={() => setInviato(false)}
              className="mt-6 rounded-lg bg-orange-700 px-5 py-2.5 font-semibold text-white hover:bg-orange-800"
            >
              Invia un'altra richiesta
            </button>
          </div>
        ) : (
          <form onSubmit={invia} noValidate className="mt-10 rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-stone-100">
            <div className="grid gap-5 sm:grid-cols-2">
              <Campo label="Nome" name="nome" value={form.nome} onChange={aggiorna} errore={errori.nome} />
              <Campo label="Cognome" name="cognome" value={form.cognome} onChange={aggiorna} errore={errori.cognome} />
            </div>

            <div className="mt-5">
              <Campo
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={aggiorna}
                errore={errori.email}
              />
            </div>

            <div className="mt-5">
              <Campo label="Data preferita (facoltativa)" name="data" type="date" value={form.data} onChange={aggiorna} />
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium text-stone-700">Messaggio (facoltativo)</label>
              <textarea
                name="messaggio"
                rows={4}
                value={form.messaggio}
                onChange={aggiorna}
                placeholder="Descrivi brevemente il lavoro da svolgere..."
                className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-orange-700 px-6 py-3 font-semibold text-white hover:bg-orange-800 transition-colors"
            >
              Invia richiesta
            </button>

            <p className="mt-4 text-center text-sm text-stone-500">
              I tuoi dati vengono usati solo per rispondere alla richiesta.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}

function Campo({ label, name, type = "text", value, onChange, errore }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-stone-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`mt-1.5 w-full rounded-lg border px-4 py-2.5 outline-none focus:ring-2 focus:ring-orange-100 ${
          errore ? "border-red-400 focus:border-red-500" : "border-stone-300 focus:border-orange-600"
        }`}
      />
      {errore && <p className="mt-1 text-sm text-red-600">{errore}</p>}
    </div>
  )
}
