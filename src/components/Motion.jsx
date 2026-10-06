import { Fragment, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

let lenis = null

// Inertial smooth scrolling for the whole page.
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    let frame
    const raf = (t) => {
      lenis.raf(t)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      lenis = null
    }
  }, [])
  return null
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true })
  else window.scrollTo(0, 0)
}

// Thin bar along the top showing how far down the page you are.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return <motion.div className="scroll-progress" style={{ scaleX }} />
}

// Heading whose words rise out of a mask, one after another, when scrolled into view.
export function TextReveal({ text, as = 'h2', className, delay = 0 }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      aria-label={text}
    >
      {text.split(' ').map((word, i) => (
        <Fragment key={i}>
          <span className="word-mask" aria-hidden="true">
            <motion.span
              className="word"
              variants={{ hidden: { y: '110%' }, show: { y: 0 } }}
              transition={{ duration: 0.8, ease }}
            >
              {word}
            </motion.span>
          </span>{' '}
        </Fragment>
      ))}
    </Tag>
  )
}

// Image that wipes open on scroll and drifts slightly as the page moves.
export function ImageReveal({ src, alt, className }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  // The wrapper is what gets watched: a fully clipped element never counts as "in view".
  return (
    <motion.div
      ref={ref}
      className={`image-reveal ${className || ''}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      <motion.div
        className="image-reveal-inner"
        variants={{ hidden: { clipPath: 'inset(100% 0% 0% 0%)' }, show: { clipPath: 'inset(0% 0% 0% 0%)' } }}
        transition={{ duration: 1.1, ease }}
      >
        <motion.img src={src} alt={alt} loading="lazy" style={{ y, scale: 1.1 }} />
      </motion.div>
    </motion.div>
  )
}
