import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, Modal } from 'react-bootstrap'
import { AnimatePresence, motion } from 'framer-motion'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import NotFound from './NotFound.jsx'
import { productsFor, services } from '../data/site.js'

export default function Service() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(null)

  const items = useMemo(() => (service ? productsFor(service) : []), [service])
  // Promat pages filter by the service line; everything else by brand.
  const groupBy = service?.brand ? (x) => services.find((s) => s.slug === x.service).name : (x) => x.brand
  const groups = ['All', ...new Set(items.map(groupBy))]
  const shown = items.filter(
    (x) =>
      (filter === 'All' || groupBy(x) === filter) &&
      `${x.name} ${x.text} ${x.points.join(' ')}`.toLowerCase().includes(query.toLowerCase()),
  )

  if (!service) return <NotFound />

  return (
    <>
      <title>{`${service.title} | National Roofing Services`}</title>
      <meta name="description" content={service.intro} />

      <PageHeader eyebrow="Our services" title={service.name} intro={service.intro} image={service.image} />

      <section className="section">
        <Container>
          {items.length > 3 && (
            <div className="filter-bar glass">
              <div className="chips" role="group" aria-label="Filter products">
                {groups.map((g) => (
                  <button
                    type="button"
                    key={g}
                    className={`chip ${filter === g ? 'is-on' : ''}`}
                    aria-pressed={filter === g}
                    onClick={() => setFilter(g)}
                  >
                    {g}
                  </button>
                ))}
              </div>
              <input
                type="search"
                className="form-control filter-search"
                placeholder="Search products"
                aria-label="Search products"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          )}

          <motion.div layout className="product-grid">
            <AnimatePresence mode="popLayout">
              {shown.map((x) => (
                <motion.button
                  layout
                  type="button"
                  key={x.id}
                  className="product-card glass"
                  onClick={() => setOpen(x)}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="product-img">
                    <img src={x.image} alt={x.name} loading="lazy" />
                  </span>
                  <span className="product-brand">{x.brand}</span>
                  <h2>{x.name}</h2>
                  <p>{x.text}</p>
                  <span className="service-go">Details →</span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
          {!shown.length && <p className="text-center py-5">Nothing matches “{query}”. Try another word.</p>}
        </Container>
      </section>

      <section className="section pt-0">
        <Container>
          <Reveal className="cta-strip glass">
            <div>
              <h2>Not sure which one fits?</h2>
              <p className="mb-0">Tell us the site and the problem. We’ll suggest the right system and give you a quote.</p>
            </div>
            <Link to={`/contact-us?subject=${encodeURIComponent(service.name)}`} className="btn-main">Ask for a quote</Link>
          </Reveal>

          <h2 className="h4 mt-5 mb-3">Other services</h2>
          <div className="other-services">
            {services.filter((s) => s.slug !== slug).map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="chip">{s.name}</Link>
            ))}
          </div>
        </Container>
      </section>

      <Modal show={!!open} onHide={() => setOpen(null)} centered size="lg" contentClassName="glass product-modal" data-lenis-prevent>
        {open && (
          <>
            <Modal.Header closeButton>
              <Modal.Title as="h2">{open.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="product-modal-grid">
                <img src={open.image} alt={open.name} />
                <div>
                  <p className="product-brand">{open.brand}</p>
                  <p>{open.text}</p>
                  {open.points.length > 0 && (
                    <ul className="tick-list">
                      {open.points.map((pt) => <li key={pt}>{pt}</li>)}
                    </ul>
                  )}
                  {open.moq && <p className="spec">Minimum order: {open.moq}</p>}
                  <Link to={`/contact-us?subject=${encodeURIComponent(open.name)}`} className="btn-main mt-2">
                    Request a quote
                  </Link>
                </div>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  )
}
