import { clients } from '../data/site.js'

// Logos glide in a loop; the list is doubled so the loop is seamless. Hover pauses it.
export default function ClientMarquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...clients, ...clients].map((c, i) => (
          <div className="marquee-item" key={i} aria-hidden={i >= clients.length}>
            <img src={c.logo} alt={c.name} title={c.name} loading="lazy" width={c.w} height={c.h} />
          </div>
        ))}
      </div>
    </div>
  )
}
