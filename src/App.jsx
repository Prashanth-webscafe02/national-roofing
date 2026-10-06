import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import FloatingContact from './components/FloatingContact.jsx'
import { ScrollProgress, SmoothScroll, scrollToTop } from './components/Motion.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Clients from './pages/Clients.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

// Old .php addresses keep working (the server also 301s these).
const legacy = {
  '/index.php': '/',
  '/about-us.php': '/about-us',
  '/clients.php': '/clients',
  '/contact-us.php': '/contact-us',
  '/roofing-solutions.php': '/services/roofing-solutions',
  '/walling-solutions.php': '/services/walling-solutions',
  '/ceiling-solutions.php': '/services/ceiling-solutions',
  '/everest-engineered-roofing-solutions.php': '/services/everest-roofing-solutions',
  '/everest-engineered-systems.php': '/services/everest-pre-engineered-systems',
  '/dekstrip-flashing.php': '/services/dekstrip-flashing',
  '/promat-passive-fire.php': '/services/promat-passive-fire-protection',
}

export default function App() {
  const location = useLocation()

  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      <AnimatePresence mode="wait" onExitComplete={scrollToTop}>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services/:slug" element={<Service />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact-us" element={<Contact />} />
            {Object.entries(legacy).map(([from, to]) => (
              <Route key={from} path={from} element={<Navigate to={to} replace />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingContact />
    </MotionConfig>
  )
}
