import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import QuoteForm from '../components/QuoteForm.jsx'
import ClientMarquee from '../components/ClientMarquee.jsx'
import { ImageReveal, TextReveal } from '../components/Motion.jsx'
import { applications, company, heroSlides, services } from '../data/site.js'

const ease = [0.22, 1, 0.36, 1]
const years = new Date().getFullYear() - company.founded

const process = [
  {
    title: 'Source',
    text: 'We buy only from certified manufacturers, after checking that they run strict, regular quality tests.',
    image: '/img/photos/steel-coils.webp',
    alt: 'Coils of galvalume steel lined up in a store',
  },
  {
    title: 'Store',
    text: 'Stock sits in our own warehouse, sorted and protected, so it reaches site in the condition it left the plant.',
    image: '/img/photos/warehouse-store.webp',
    alt: 'Large covered warehouse with a metal roof',
  },
  {
    title: 'Install',
    text: 'Our own fitters and technicians install what we supply, so one team answers for the finished roof.',
    image: '/img/photos/install-welder.webp',
    alt: 'Fitter welding a steel beam high on a structure',
  },
]

// Full-bleed photo hero. The tab strip along the bottom switches the photo and shows time to the next one.
function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setActive((a) => (a + 1) % heroSlides.length), 6000)
    return () => clearInterval(t)
  }, [paused, active])

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero-media" style={{ y: imageY }}>
        <AnimatePresence initial={false}>
          <motion.img
            key={active}
            src={heroSlides[active].image}
            alt={heroSlides[active].alt}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.2 }, scale: { duration: 7, ease: 'linear' } }}
          />
        </AnimatePresence>
      </motion.div>
      <div className="hero-shade" aria-hidden="true" />

      <Container className="hero-body">
        <motion.div style={{ y: textY }}>
          <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
            Roofing, walling and ceiling contractors, Mumbai
          </motion.p>
          <h1 className="hero-title">
            {['Roofs over Mumbai’s', 'industry since 1944.'].map((line, i) => (
              <span className="line-mask" key={line}>
                <motion.span initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.15 + i * 0.12, ease }}>
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div className="hero-foot" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55, ease }}>
            <p className="hero-lead">
              Galvalume and PUF panels, Everest sheets, Promat fire protection and DEKS flashing. Supplied, stored and
              installed by our own team for factories, warehouses and offices.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/contact-us" className="btn-main btn-amber">Get a free quote</Link>
              <a href={company.mobileHref} className="btn-line btn-line-light">Call {company.mobile}</a>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <div className="hero-strip" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <Container>
          <div className="hero-tabs" role="tablist" aria-label="Featured work">
            {heroSlides.map((s, i) => (
              <button
                key={s.label}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={i === active ? 'is-on' : ''}
                onClick={() => setActive(i)}
              >
                {s.label}
                {i === active && <span className={`hero-progress ${paused ? 'is-paused' : ''}`} />}
              </button>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}

function ServiceTile({ s, i }) {
  return (
    <Reveal delay={(i % 4) * 0.06} className={`service-tile service-tile-${i}`}>
      <Link to={`/services/${s.slug}`} className="service-link">
        <img src={s.cover} alt="" loading="lazy" />
        <span className="service-text">
          <h3>{s.name}</h3>
          <span className="service-short">{s.short}</span>
        </span>
      </Link>
    </Reveal>
  )
}

// Wide photo band that drifts behind the list of industries we serve.
function IndustryBand() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  return (
    <section className="photo-band" ref={ref}>
      <motion.img src="/img/photos/industry-aerial.webp" alt="" loading="lazy" style={{ y }} />
      <div className="photo-band-shade" aria-hidden="true" />
      <Container className="photo-band-body">
        <Row className="align-items-end gy-4">
          <Col lg={7}>
            <TextReveal text={`${years} years under factory roofs.`} className="photo-band-title" />
          </Col>
          <Col lg={5}>
            <Reveal delay={0.1}>
              <p className="photo-band-text">
                Valued for heat and fire resistance, strength and long life, our range covers plants and warehouses in:
              </p>
              <ul className="industry-list">
                {applications.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <title>National Roofing Services | Roofing, Walling & Ceiling Contractors in Mumbai since 1944</title>
      <meta name="description" content="Suppliers and specialist contractors of roofing, walling and ceiling solutions in Mumbai since 1944. Galvalume, PUF panels, Everest, Promat and DEKS. Supply and installation." />

      <Hero />

      <section className="trust-band">
        <Container>
          <p className="trust-label">Trusted by Tata, Godrej, L&amp;T, Reliance, Siemens and more</p>
        </Container>
        <ClientMarquee />
      </section>

      <section className="section">
        <Container>
          <div className="section-head d-flex flex-wrap justify-content-between align-items-end gap-3">
            <div>
              <Reveal><p className="eyebrow">What we supply and install</p></Reveal>
              <TextReveal text="Seven service lines, one contractor." />
            </div>
            <Reveal><a href={company.brochure} className="btn-line" download>Download brochure (PDF)</a></Reveal>
          </div>
          <div className="service-grid">
            {services.map((s, i) => <ServiceTile s={s} i={i} key={s.slug} />)}
          </div>
        </Container>
      </section>

      <section className="section process-band">
        <Container>
          <Row className="gy-4 section-head">
            <Col lg={6}>
              <Reveal><p className="eyebrow">How we work</p></Reveal>
              <TextReveal text="From the plant to your roof, in our hands." />
            </Col>
            <Col lg={{ span: 5, offset: 1 }} className="d-flex align-items-end">
              <Reveal delay={0.1}>
                <p className="mb-0">
                  Since {company.founded} we have kept the whole chain in one company, so quality doesn’t slip between
                  a supplier, a stockist and a separate installer.
                </p>
              </Reveal>
            </Col>
          </Row>
          <ol className="process-list">
            {process.map((p, i) => (
              <li key={p.title}>
                <ImageReveal src={p.image} alt={p.alt} className="process-img" />
                <Reveal delay={0.1}>
                  <h3><span className="process-num">{i + 1}</span>{p.title}</h3>
                  <p>{p.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <IndustryBand />

      <section className="section heritage">
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={6}>
              <ImageReveal src="/img/photos/mumbai-heritage.webp" alt="Victorian Gothic municipal building in Mumbai framed by a stone arch" className="heritage-img" />
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <Reveal><p className="eyebrow">Our story</p></Reveal>
              <TextReveal text="A Dadar business, eight decades of roofs." />
              <Reveal delay={0.15}>
                <p>
                  Since 1944, National Roofing Services has supplied and installed roofing, ceiling and walling systems
                  from reputed manufacturers, from our office on Dr. Ambedkar Road in Dadar East.
                </p>
                <p>
                  We supply and install Everest, Promat and DEKS systems, and our clients include some of India’s
                  largest manufacturers and consultants.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to="/about-us" className="btn-main">More about us</Link>
                  <Link to="/clients" className="btn-line">See our clients</Link>
                </div>
              </Reveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section quote-band">
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={5}>
              <Reveal><p className="eyebrow">Get a quick quote</p></Reveal>
              <TextReveal text="Tell us about the roof. We’ll call you back." />
              <Reveal delay={0.1}>
                <p>Three short steps, and the right person from our team gets back to you. Prefer to talk now?</p>
                <a href={company.mobileHref} className="quote-call">{company.mobile}</a>
              </Reveal>
            </Col>
            <Col lg={7}>
              <Reveal delay={0.1} className="glass quote-card">
                <QuoteForm />
              </Reveal>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
