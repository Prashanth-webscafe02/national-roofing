import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { applications, company, services, team } from '../data/site.js'

export default function About() {
  return (
    <>
      <title>About Us | National Roofing Services, Mumbai since 1944</title>
      <meta name="description" content="National Roofing Services has supplied and installed roofing, ceiling and walling solutions in Mumbai since 1944, from certified manufacturers." />

      <PageHeader
        eyebrow={`Established ${company.founded}`}
        title="About us"
        intro="Suppliers and specialist contractors of roofing, ceiling and walling solutions, from Dadar, Mumbai."
        image="/img/hero-3.webp"
      />

      <section className="section">
        <Container>
          <Row className="gy-5">
            <Col lg={7}>
              <Reveal>
                <h2>Company profile</h2>
                <p>
                  Established in 1944, National Roofing Services is a well known supplier and specialist contractor of
                  roofing, ceiling and walling solutions. The products we supply are made by reputed manufacturers and
                  used across many industries.
                </p>
                <p>
                  We buy only from certified, trustworthy vendors, and only after confirming that they run strict,
                  regular quality tests. Products are kept in our own well-designed warehouse, with ample room for
                  storage and sorting, so quality is maintained until dispatch. We also install everything we supply.
                </p>
              </Reveal>
            </Col>
            <Col lg={5}>
              <Reveal delay={0.1} className="glass about-card">
                <h3>Where our products work</h3>
                <p>Valued for heat and fire resistance, strength and long life, our range is used in:</p>
                <div className="chips chips-static">
                  {applications.map((a) => <span className="chip" key={a}>{a}</span>)}
                </div>
              </Reveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section services-band">
        <div className="corrugated" aria-hidden="true" />
        <Container className="position-relative">
          <Row className="gy-4 align-items-stretch">
            <Col lg={6}>
              <Reveal className="glass about-card h-100">
                <h3>Our team</h3>
                <p>
                  Our procurement agents approach only certified manufacturers and make sure quality procedures are
                  followed at their end. Our quality controllers check every delivery for damage, and we train our
                  people regularly.
                </p>
                <ul className="tick-list">
                  {team.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </Reveal>
            </Col>
            <Col lg={6}>
              <Reveal delay={0.1} className="glass about-card h-100">
                <h3>Our services</h3>
                <ul className="link-list">
                  {services.map((s) => (
                    <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.name} <span>→</span></Link></li>
                  ))}
                </ul>
                <a href={company.brochure} className="btn-main mt-3" download>Download brochure (PDF)</a>
              </Reveal>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
