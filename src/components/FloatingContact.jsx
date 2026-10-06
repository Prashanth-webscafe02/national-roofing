import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { company } from '../data/site.js'

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div className="float-contact">
      <AnimatePresence>
        {open && (
          <motion.div
            className="float-menu glass"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <a href={company.mobileHref}>Call {company.mobile}</a>
            <a href={company.whatsapp} target="_blank" rel="noreferrer">WhatsApp us</a>
            <a href={`mailto:${company.email}`}>Email us</a>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        className={`float-btn ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Contact options"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
        </svg>
      </button>
    </div>
  )
}
