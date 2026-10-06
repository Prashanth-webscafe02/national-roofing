import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from './Logo.jsx'
import { company, services } from '../data/site.js'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="stripes" />
      <Container>
        <Row className="gy-5">
          <Col lg={4}>
            <Logo light />
            <p className="mt-3 footer-note">
              Suppliers and specialist contractors of roofing, walling and ceiling solutions. Supplied, stored in our
              own warehouse, and installed by our team.
            </p>
            <a className="btn-main btn-sm" href={company.brochure} download>Download brochure</a>
          </Col>
          <Col sm={6} lg={4}>
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              {services.map((s) => (
                <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.name}</Link></li>
              ))}
            </ul>
          </Col>
          <Col sm={6} lg={4}>
            <h3 className="footer-title">Visit or call</h3>
            <address className="footer-links">
              {company.address.map((l) => <span key={l}>{l}<br /></span>)}
              <a href={company.mobileHref}>{company.mobile}</a><br />
              {company.phones.join(' · ')}<br />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </address>
          </Col>
        </Row>
        <div className="footer-base">
          <span>© {year} {company.name}. All rights reserved.</span>
          <span>
            <Link to="/about-us">About</Link> · <Link to="/clients">Clients</Link> · <Link to="/contact-us">Contact</Link>
          </span>
        </div>
      </Container>
    </footer>
  )
}
