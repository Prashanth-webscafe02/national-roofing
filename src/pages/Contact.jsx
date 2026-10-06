import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import QuoteForm from '../components/QuoteForm.jsx'
import { company } from '../data/site.js'

function CopyLine({ label, value, href }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard?.writeText(value).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }
  return (
    <div className="contact-line">
      <span className="contact-label">{label}</span>
      <a href={href}>{value}</a>
      <button type="button" className="btn-link-plain" onClick={copy}>{copied ? 'Copied' : 'Copy'}</button>
    </div>
  )
}

export default function Contact() {
  const [params] = useSearchParams()

  return (
    <>
      <title>Contact Us | National Roofing Services, Dadar, Mumbai</title>
      <meta name="description" content="Call +91 98203 99467 or visit us at 8, Lallubhai Mansion, Dr. Ambedkar Road, Dadar East, Mumbai 400014 for roofing, walling and ceiling quotes." />

      <PageHeader eyebrow="Contact" title="Let’s talk about your roof"
        photo="/img/photos/mumbai-skyline.webp" intro="Call, WhatsApp, email or send the form. Whichever is easiest for you." />

      <section className="section">
        <Container>
          <Row className="gy-5">
            <Col lg={5}>
              <Reveal className="glass contact-card">
                <h2 className="h4">National Roofing Services</h2>
                <address className="mb-4">
                  {company.address.map((l) => <span key={l}>{l}<br /></span>)}
                </address>
                <CopyLine label="Mobile" value={company.mobile} href={company.mobileHref} />
                {company.phones.map((ph) => (
                  <CopyLine key={ph} label="Phone" value={ph} href={`tel:${ph.replace(/\s/g, '')}`} />
                ))}
                <CopyLine label="Email" value={company.email} href={`mailto:${company.email}`} />
                <div className="d-flex flex-wrap gap-2 mt-4">
                  <a href={company.whatsapp} className="btn-main btn-sm" target="_blank" rel="noreferrer">WhatsApp</a>
                  <a href={company.mobileHref} className="btn-line btn-sm">Call now</a>
                </div>
              </Reveal>
              <Reveal delay={0.1} className="map-frame">
                <iframe src={company.mapEmbed} title="National Roofing Services on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </Reveal>
            </Col>
            <Col lg={7}>
              <Reveal delay={0.05} className="glass quote-card">
                <h2 className="h3 mb-1">Get a quick quote</h2>
                <p className="mb-4">Three short steps. Every field helps us quote faster.</p>
                <QuoteForm endpoint="/contactmail.php" subject={params.get('subject') || ''} />
              </Reveal>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
