import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function NotFound() {
  return (
    <section className="section not-found">
      <title>Page not found | National Roofing Services</title>
      <meta name="robots" content="noindex" />
      <Container className="text-center">
        <div className="big-year">404</div>
        <h1 className="h2">This page has blown off the roof.</h1>
        <p>The link may be old. Everything we offer is still a click away.</p>
        <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
          <Link to="/" className="btn-main">Back home</Link>
          <Link to="/contact-us" className="btn-line">Contact us</Link>
        </div>
      </Container>
    </section>
  )
}
