import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { motion, useScroll, useTransform } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function PageHeader({ eyebrow, title, intro, image, crumb }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <header className="page-header" ref={ref}>
      <motion.div className="corrugated" style={{ y: bgY }} aria-hidden="true" />
      <Container className="position-relative">
        <motion.div
          className="page-header-card glass"
          style={{ y: cardY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
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
            <motion.p className="lead-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
              {intro}
            </motion.p>
          )}
        </motion.div>
        {image && (
          <motion.div
            className="page-header-img"
            initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ duration: 1.1, delay: 0.25, ease }}
          >
            <img src={image} alt="" />
          </motion.div>
        )}
      </Container>
    </header>
  )
}
