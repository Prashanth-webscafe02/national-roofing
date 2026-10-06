import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import Logo from './Logo.jsx'
import { company, services } from '../data/site.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Solid once you leave the top; slides away while scrolling down, back on scrolling up.
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setHidden(y > 240 && y > last)
      last = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu once a page link is chosen.
  const closeOnLink = (e) => {
    if (e.target.closest('.dropdown-item, .nav-link:not(.dropdown-toggle), .btn-main')) setOpen(false)
  }

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={open}
      onToggle={setOpen}
      className={`site-nav ${scrolled || open ? 'is-scrolled' : 'is-top'} ${hidden && !open ? 'is-hidden' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" aria-label="National Roofing Services home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" className="nav-toggle">
          <span />
          <span />
        </Navbar.Toggle>
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center" onClick={closeOnLink}>
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about-us">About</Nav.Link>
            <NavDropdown
              title="Services"
              id="services-menu"
              className={`mega ${pathname.startsWith('/services') ? 'active' : ''}`}
            >
              <div className="mega-grid">
                {services.map((s) => (
                  <NavDropdown.Item as={Link} to={`/services/${s.slug}`} key={s.slug} className="mega-item">
                    <img src={s.cover} alt="" loading="lazy" width="56" height="56" />
                    <span>
                      <strong>{s.name}</strong>
                      <small>{s.short}</small>
                    </span>
                  </NavDropdown.Item>
                ))}
              </div>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/clients">Clients</Nav.Link>
            <Nav.Link as={NavLink} to="/contact-us">Contact</Nav.Link>
            <a href={company.mobileHref} className="btn-main btn-sm ms-lg-3 mt-3 mt-lg-0">
              Call {company.mobile}
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
