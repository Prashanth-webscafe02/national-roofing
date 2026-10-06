import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { motion, useScroll, useTransform } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

// Page title set over a full-width photo that drifts slower than the page.
export default function PageHeader({ eyebrow, title, intro, photo, crumb }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <header className="page-header" ref={ref}>
      <motion.img
        className="page-header-photo"
        src={photo}
        alt=""
        style={{ y: bgY }}
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease }}
      />
      <div className="page-header-shade" aria-hidden="true" />
      <Container className="page-header-body">
        <motion.div style={{ y: textY }}>
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link to="/">Home</Link> <span>/</span> {crumb || title}
          </nav>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>
            <span className="line-mask">
              <motion.span initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease }}>
                {title}
              </motion.span>
            </span>
          </h1>
          {intro && (
            <motion.p className="page-header-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
              {intro}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </header>
  )
}
