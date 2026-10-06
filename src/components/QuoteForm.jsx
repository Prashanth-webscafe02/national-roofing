import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { AnimatePresence, motion } from 'framer-motion'
import { company, services } from '../data/site.js'

const steps = ['What you need', 'About the job', 'Your details']
const empty = { needs: [], subject: '', message: '', name: '', email: '', phone: '', captcha: '' }

// Posts the same fields the old PHP mailer expects: name, email, phone, subject, message, captcha.
export default function QuoteForm({ endpoint = '/homemail.php', subject = '' }) {
  const [step, setStep] = useState(0)
  const [dir, setDir] = useState(1)
  const [data, setData] = useState({ ...empty, subject })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ state: 'idle', text: '' })
  const [captchaKey, setCaptchaKey] = useState(0)

  const set = (field) => (e) => setData({ ...data, [field]: e.target.value })

  const toggleNeed = (name) => {
    const needs = data.needs.includes(name) ? data.needs.filter((n) => n !== name) : [...data.needs, name]
    setData({ ...data, needs })
  }

  const validate = () => {
    const e = {}
    if (step === 0 && !data.needs.length && !data.subject.trim()) e.subject = 'Pick a service or type what you need.'
    if (step === 1 && data.message.trim().length < 10) e.message = 'A line or two helps us quote accurately.'
    if (step === 2) {
      if (!data.name.trim()) e.name = 'Please enter your name.'
      if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = 'Please enter a valid email.'
      if (data.phone.replace(/\D/g, '').length < 8) e.phone = 'Please enter a phone number.'
      if (data.captcha.trim().length < 4) e.captcha = 'Type the 4 characters shown.'
    }
    setErrors(e)
    return !Object.keys(e).length
  }

  const go = (to) => {
    if (to > step && !validate()) return
    setErrors({})
    setDir(to > step ? 1 : -1)
    setStep(to)
  }

  const submit = async (e) => {
    e.preventDefault()
    if (step < 2) return go(step + 1)
    if (!validate()) return
    setStatus({ state: 'sending', text: '' })
    const body = new FormData()
    body.append('name', data.name)
    body.append('email', data.email)
    body.append('phone', data.phone)
    body.append('subject', [data.subject, ...data.needs].filter(Boolean).join(', '))
    body.append('message', data.message)
    body.append('captcha', data.captcha)
    try {
      const res = await fetch(endpoint, { method: 'POST', body })
      if (!res.ok) throw new Error(res.statusText)
      const reply = new DOMParser().parseFromString(await res.text(), 'text/html').body.textContent.trim()
      setStatus({ state: 'done', text: reply || 'Thank you. We will get back to you shortly.' })
      setData({ ...empty })
    } catch {
      setStatus({ state: 'error', text: `We couldn't send that just now. Please call us on ${company.mobile}.` })
    }
    setCaptchaKey(Date.now())
  }

  if (status.state === 'done') {
    return (
      <motion.div className="quote-done" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        <div className="quote-done-mark" aria-hidden="true">✓</div>
        <h3>Message sent</h3>
        <p>{status.text}</p>
        <button type="button" className="btn-line" onClick={() => { setStatus({ state: 'idle' }); setStep(0) }}>
          Send another
        </button>
      </motion.div>
    )
  }

  return (
    <Form noValidate onSubmit={submit} className="quote-form">
      <ol className="quote-steps">
        {steps.map((s, i) => (
          <li key={s} className={i === step ? 'is-current' : i < step ? 'is-done' : ''}>
            <button type="button" onClick={() => i < step && go(i)} disabled={i > step}>
              <span>{i + 1}</span> {s}
            </button>
          </li>
        ))}
      </ol>

      <div className="quote-body">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div
            key={step}
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.25 }}
          >
            {step === 0 && (
              <>
                <p className="quote-q">Which of these do you need? Pick any.</p>
                <div className="chips">
                  {services.map((s) => (
                    <button
                      type="button"
                      key={s.slug}
                      className={`chip ${data.needs.includes(s.name) ? 'is-on' : ''}`}
                      aria-pressed={data.needs.includes(s.name)}
                      onClick={() => toggleNeed(s.name)}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
                <Form.Group className="mt-3" controlId="q-subject">
                  <Form.Label>Or tell us the product</Form.Label>
                  <Form.Control value={data.subject} onChange={set('subject')} placeholder="e.g. Colour coated galvalume sheets" isInvalid={!!errors.subject} />
                  <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
                </Form.Group>
              </>
            )}

            {step === 1 && (
              <Form.Group controlId="q-message">
                <Form.Label>About the job</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  value={data.message}
                  onChange={set('message')}
                  placeholder="Area in sq ft, site location, new roof or repair, when you need it…"
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
              </Form.Group>
            )}

            {step === 2 && (
              <div className="row g-3">
                <Form.Group className="col-sm-6" controlId="q-name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control value={data.name} onChange={set('name')} autoComplete="name" isInvalid={!!errors.name} />
                  <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="col-sm-6" controlId="q-phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="tel" value={data.phone} onChange={set('phone')} autoComplete="tel" isInvalid={!!errors.phone} />
                  <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="col-12" controlId="q-email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={data.email} onChange={set('email')} autoComplete="email" isInvalid={!!errors.email} />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="col-12" controlId="q-captcha">
                  <Form.Label>Type the code</Form.Label>
                  <div className="captcha">
                    <img src={`/captcha.php?${captchaKey}`} alt="Security code" width="90" height="38" />
                    <button type="button" className="btn-link-plain" onClick={() => setCaptchaKey(Date.now())}>
                      New code
                    </button>
                    <Form.Control value={data.captcha} onChange={set('captcha')} maxLength={4} autoComplete="off" isInvalid={!!errors.captcha} />
                  </div>
                  {errors.captcha && <div className="invalid-feedback d-block">{errors.captcha}</div>}
                </Form.Group>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {status.state === 'error' && <p className="quote-error" role="alert">{status.text}</p>}

      <div className="quote-actions">
        {step > 0 && (
          <button type="button" className="btn-line" onClick={() => go(step - 1)}>Back</button>
        )}
        <button type="submit" className="btn-main ms-auto" disabled={status.state === 'sending'}>
          {step < 2 ? 'Next' : status.state === 'sending' ? 'Sending…' : 'Send enquiry'}
        </button>
      </div>
    </Form>
  )
}
