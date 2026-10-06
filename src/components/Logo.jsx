export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'logo-light' : ''}`}>
      <svg viewBox="0 0 64 44" aria-hidden="true">
        <path d="M4 36 32 8l28 28" className="logo-roof" />
        <path d="M18 42 32 28l14 14" className="logo-ridge" />
      </svg>
      <span className="logo-text">
        <strong>National Roofing</strong>
        <small>Services · Est. 1944</small>
      </span>
    </span>
  )
}
