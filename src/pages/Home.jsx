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

function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 200])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setActive((a) => (a + 1) % heroSlides.length), 5000)
    return () => clearInterval(t)
  }, [paused, active])

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero-sun" style={{ y: sunY }} aria-hidden="true" />
      <Container className="position-relative">
        <Row className="align-items-center gy-5">
          <Col lg={6}>
            <motion.div style={{ y: textY, opacity: textOpacity }}>
              <motion.p className="eyebrow" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease }}>
                Roofing · Walling · Ceilings
              </motion.p>
              <h1 className="hero-title">
                {['Roofs over', 'Mumbai’s industry', 'since 1944.'].map((line, i) => (
                  <span className="line-mask" key={line}>
                    <motion.span
                      className={i === 2 ? 'accent' : undefined}
                      initial={{ y: '105%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>
              <motion.p className="lead-text" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55, ease }}>
                Galvalume and PUF panels, Everest sheets, Promat fire protection and DEKS flashing. We supply, store and
                install it ourselves, for factories, warehouses and offices.
              </motion.p>
              <motion.div className="d-flex flex-wrap gap-3 mt-4" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7, ease }}>
                <Link to="/contact-us" className="btn-main">Get a free quote <span className="arrow">→</span></Link>
                <a href={company.mobileHref} className="btn-line">Call {company.mobile}</a>
              </motion.div>
              <motion.dl className="hero-facts" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }}>
                <div><dt>{years} years</dt><dd>in Mumbai, since {company.founded}</dd></div>
                <div><dt>Everest · Promat · DEKS</dt><dd>brands we supply and install</dd></div>
              </motion.dl>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div className="hero-visual" style={{ y: imageY }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              <motion.div
                className="hero-frame"
                initial={{ clipPath: 'inset(0% 0% 0% 100%)' }}
                animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                transition={{ duration: 1.2, delay: 0.2, ease }}
              >
                <AnimatePresence initial={false}>
                  <motion.img
                    key={active}
                    src={heroSlides[active].image}
                    alt={heroSlides[active].alt}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease }}
                  />
                </AnimatePresence>
              </motion.div>
              <motion.div
                className="hero-switch glass"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease }}
              >
                <p className="hero-switch-label">What we do</p>
                <div className="hero-switch-list" role="tablist">
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
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

function ServiceCard({ s, i }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * -5, y: ((e.clientX - r.left) / r.width - 0.5) * 5 })
  }
  return (
    <Reveal delay={(i % 4) * 0.08} className="h-100">
      <Link
        to={`/services/${s.slug}`}
        className="service-card glass"
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <span className="service-img"><img src={s.image} alt="" loading="lazy" /></span>
        <h3>{s.name}</h3>
        <p>{s.short}</p>
        <span className="service-go">View products <span className="arrow">→</span></span>
      </Link>
    </Reveal>
  )
}

// Large outline type that slides sideways as the section scrolls past.
function SinceBand() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-35%'])
  return (
    <div className="since-band" ref={ref} aria-hidden="true">
      <motion.div style={{ x }}>Since 1944 · Roofing · Walling · Ceilings · Since 1944</motion.div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <title>National Roofing Services | Roofing, Walling & Ceiling Contractors in Mumbai since 1944</title>
      <meta name="description" content="Suppliers and specialist contractors of roofing, walling and ceiling solutions in Mumbai since 1944. Galvalume, PUF panels, Everest, Promat and DEKS. Supply and installation." />

      <Hero />

      <section className="section services-band">
        <div className="corrugated" aria-hidden="true" />
        <Container className="position-relative">
          <div className="section-head section-head-light">
            <Reveal><p className="eyebrow">What we supply & install</p></Reveal>
            <TextReveal text="Seven service lines, one contractor." />
          </div>
          <Row className="g-4">
            {services.map((s, i) => (
              <Col sm={6} lg={i < 3 ? 4 : 3} key={s.slug}>
                <ServiceCard s={s} i={i} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section heritage">
        <SinceBand />
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={6}>
              <ImageReveal src="/img/hero-3.webp" alt="Our installer fixing metal roofing on site" className="heritage-img" />
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <Reveal><p className="eyebrow">Our story</p></Reveal>
              <TextReveal text="Eight decades of roofs, walls and ceilings." />
              <Reveal delay={0.15}>
                <p>
                  Since 1944, National Roofing Services has supplied and installed roofing, ceiling and walling systems
                  from reputed manufacturers. We buy only from certified vendors that run regular quality tests, keep
                  stock in our own warehouse, and send our own team to install.
                </p>
                <p className="small-caps mb-2">Trusted across</p>
                <div className="chips chips-static">
                  {applications.map((a) => <span className="chip" key={a}>{a}</span>)}
                </div>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to="/about-us" className="btn-main">More about us <span className="arrow">→</span></Link>
                  <a href={company.brochure} className="btn-line" download>Brochure (PDF)</a>
                </div>
              </Reveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section quote-band">
        <Container className="position-relative">
          <Row className="align-items-center gy-5">
            <Col lg={5}>
              <Reveal><p className="eyebrow">Get a quick quote</p></Reveal>
              <TextReveal text="Tell us about the roof. We’ll call you back." />
              <Reveal delay={0.1}><p>Three short steps, and the right person from our team gets back to you.</p></Reveal>
              <ImageReveal src="/img/contact.webp" alt="Torch-on waterproofing membrane being laid on a roof" className="quote-photo" />
            </Col>
            <Col lg={7}>
              <Reveal delay={0.1} className="glass quote-card">
                <QuoteForm />
              </Reveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section pt-0 clients-band">
        <Container>
          <div className="section-head d-flex flex-wrap justify-content-between align-items-end gap-3">
            <div>
              <Reveal><p className="eyebrow">Clients</p></Reveal>
              <TextReveal text="Built for names you know." />
            </div>
            <Reveal><Link to="/clients" className="btn-line">See all clients <span className="arrow">→</span></Link></Reveal>
          </div>
        </Container>
        <ClientMarquee />
      </section>
    </>
  )
}
