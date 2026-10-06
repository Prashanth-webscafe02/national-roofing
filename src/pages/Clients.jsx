import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { clients } from '../data/site.js'

export default function Clients() {
  return (
    <>
      <title>Our Clients | National Roofing Services, Mumbai</title>
      <meta name="description" content="Clients of National Roofing Services include Aditya Birla Group, Godrej, Larsen & Toubro, Reliance, Siemens, Tata Group and more." />

      <PageHeader
        eyebrow="Clients"
        title="Who we work for"
        photo="/img/photos/hero-space-frame.webp"
        intro="We’re committed to a client-centric approach: known manufacturers, a well-kept warehouse, and products customised to each client’s requirement."
      />

      <section className="section">
        <Container>
          <div className="client-grid">
            {clients.map((c, i) => (
              <motion.figure
                key={c.name}
                className="client-tile glass"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              >
                <span className="client-logo"><img src={c.logo} alt={`${c.name} logo`} loading="lazy" width={c.w} height={c.h} /></span>
                <figcaption>{c.name}</figcaption>
              </motion.figure>
            ))}
          </div>

          <Reveal className="cta-strip glass mt-5">
            <div>
              <h2>Your project could be next.</h2>
              <p className="mb-0">Factories, warehouses, offices and labs. Tell us what you’re building.</p>
            </div>
            <Link to="/contact-us" className="btn-main">Start a quote</Link>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
