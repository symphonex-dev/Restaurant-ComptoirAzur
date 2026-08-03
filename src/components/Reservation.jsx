import { useState } from 'react'
import './Reservation.css'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  message: '',
}

// On calcule la date du jour au format attendu par <input type="date">
// (YYYY-MM-DD) pour interdire toute réservation dans le passé directement
// au niveau du sélecteur natif du navigateur, en plus de la validation JS.
function getTodayISO() {
  const now = new Date()
  const offset = now.getTimezoneOffset()
  const localDate = new Date(now.getTime() - offset * 60000)
  return localDate.toISOString().split('T')[0]
}

// ============================================================================
// VALIDATION
// ----------------------------------------------------------------------------
// EN JS VANILLA, on validerait chaque champ à la volée avec des
// addEventListener('blur', ...) séparés, en écrivant/effaçant à la main un
// message d'erreur dans le DOM à côté de chaque input.
//
// EN REACT, on centralise la validation dans une seule fonction pure qui
// prend l'état du formulaire et renvoie un objet d'erreurs. Le JSX se
// contente ensuite d'afficher errors.champX s'il existe. Avoir une seule
// source de vérité pour les erreurs simplifie énormément la relecture du
// code : la logique de validation n'est jamais éparpillée.
//
// `errorMessages` est désormais un paramètre (t.reservation.errors, fourni
// par le composant) plutôt qu'un texte en dur : la fonction reste pure
// (mêmes entrées → même sortie) tout en produisant des messages dans la
// langue actuellement affichée par le site.
// ============================================================================
function validate(form, errorMessages) {
  const errors = {}

  if (form.firstName.trim().length < 2) {
    errors.firstName = errorMessages.firstName
  }
  if (form.lastName.trim().length < 2) {
    errors.lastName = errorMessages.lastName
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = errorMessages.email
  }
  if (!/^(\+33|0)[1-9](\d{2}){4}$/.test(form.phone.replace(/[\s.-]/g, ''))) {
    errors.phone = errorMessages.phone
  }
  if (!form.date) {
    errors.date = errorMessages.dateRequired
  } else if (form.date < getTodayISO()) {
    errors.date = errorMessages.datePast
  }
  if (!form.time) {
    errors.time = errorMessages.time
  }
  const guestsNumber = Number(form.guests)
  if (!Number.isInteger(guestsNumber) || guestsNumber < 1 || guestsNumber > 20) {
    errors.guests = errorMessages.guests
  }

  return errors
}

export default function Reservation() {
  const { t } = useLanguage()
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  // status : 'idle' | 'submitting' | 'success'
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
    // Dès que la personne corrige un champ, on efface son erreur associée
    // plutôt que d'attendre une nouvelle soumission complète — un formulaire
    // qui garde des erreurs obsolètes affichées est frustrant à utiliser.
    setErrors((previous) => ({ ...previous, [name]: undefined }))
  }

  const handleSubmit = async (event) => {
    // On intercepte systématiquement la soumission native du formulaire :
    // sans ce preventDefault(), le navigateur tenterait de recharger la
    // page (comportement HTML par défaut d'un <form>), ce qui effacerait
    // instantanément tout l'état React qu'on vient de construire.
    event.preventDefault()

    const validationErrors = validate(form, t.reservation.errors)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setStatus('submitting')

    // ------------------------------------------------------------------
    // SIMULATION D'ENVOI
    // --------------------------------------------------------------------
    // Ce site est une vitrine 100% front-end, sans back-end ni service
    // d'emailing branché. Plutôt que de tenter un envoi réseau voué à
    // échouer (et d'afficher un message d'erreur frustrant pour la
    // personne qui vient de bien remplir le formulaire), on simule un
    // court délai de traitement — pour conserver l'état "Envoi en cours…"
    // qui rassure sur le fait que le clic a bien été pris en compte — puis
    // on confirme systématiquement la réussite.
    // ------------------------------------------------------------------
    await new Promise((resolve) => setTimeout(resolve, 900))

    setStatus('success')
    setForm(INITIAL_FORM)
  }

  return (
    <section id="reservation" className="section reservation">
      <div className="container reservation__grid">
        <Reveal className="reservation__intro">
          <p className="eyebrow">{t.reservation.eyebrow}</p>
          <h2 className="section-title">
            {t.reservation.titleBefore} <em>{t.reservation.titleEm}</em>
            {t.reservation.titleAfter}
          </h2>
          <p className="section-lead">{t.reservation.lead}</p>
        </Reveal>

        <Reveal delay={100} className="reservation__form-wrapper">
          <form className="reservation__form" onSubmit={handleSubmit} noValidate>
            <div className="reservation__row">
              <div className="reservation__field">
                <label htmlFor="firstName">{t.reservation.labels.firstName}</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                  autoComplete="given-name"
                />
                {errors.firstName && (
                  <p className="reservation__error" id="firstName-error" role="alert">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="reservation__field">
                <label htmlFor="lastName">{t.reservation.labels.lastName}</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.lastName)}
                  aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                  autoComplete="family-name"
                />
                {errors.lastName && (
                  <p className="reservation__error" id="lastName-error" role="alert">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div className="reservation__row">
              <div className="reservation__field">
                <label htmlFor="email">{t.reservation.labels.email}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t.reservation.placeholders.email}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="reservation__error" id="email-error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="reservation__field">
                <label htmlFor="phone">{t.reservation.labels.phone}</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={t.reservation.placeholders.phone}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  autoComplete="tel"
                />
                {errors.phone && (
                  <p className="reservation__error" id="phone-error" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="reservation__row reservation__row--three">
              <div className="reservation__field">
                <label htmlFor="date">{t.reservation.labels.date}</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  min={getTodayISO()}
                  value={form.date}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.date)}
                  aria-describedby={errors.date ? 'date-error' : undefined}
                />
                {errors.date && (
                  <p className="reservation__error" id="date-error" role="alert">
                    {errors.date}
                  </p>
                )}
              </div>

              <div className="reservation__field">
                <label htmlFor="time">{t.reservation.labels.time}</label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.time)}
                  aria-describedby={errors.time ? 'time-error' : undefined}
                />
                {errors.time && (
                  <p className="reservation__error" id="time-error" role="alert">
                    {errors.time}
                  </p>
                )}
              </div>

              <div className="reservation__field">
                <label htmlFor="guests">{t.reservation.labels.guests}</label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="20"
                  value={form.guests}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.guests)}
                  aria-describedby={errors.guests ? 'guests-error' : undefined}
                />
                {errors.guests && (
                  <p className="reservation__error" id="guests-error" role="alert">
                    {errors.guests}
                  </p>
                )}
              </div>
            </div>

            <div className="reservation__field">
              <label htmlFor="message">{t.reservation.labels.message}</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary reservation__submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? t.reservation.submitting : t.reservation.submit}
            </button>

            {/* role="status" annonce le résultat aux lecteurs d'écran sans
                déplacer le focus, contrairement à role="alert" qui aurait
                été trop intrusif pour un simple message de succès. */}
            {status === 'success' && (
              <p className="reservation__feedback reservation__feedback--success" role="status">
                {t.reservation.success}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
