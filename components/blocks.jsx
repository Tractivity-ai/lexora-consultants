export function Rich({ parts }) {
  return parts.map(([t, b], i) => (b ? <b key={i}>{t}</b> : <span key={i}>{t}</span>));
}

export function AreaIcon({ d, size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
  );
}

export function FounderCard({ f, delay = 0 }) {
  return (
    <article className="fo" id={f.id} style={{ animationDelay: `${delay}s` }}>
      <div className="top">
        <div className="ph">{f.img ? <img src={f.img} alt={f.name} /> : <span aria-hidden="true">{f.initials}</span>}</div>
        <div><h3 className="h3">{f.name}</h3><div className="role">{f.role}</div></div>
      </div>
      <p><Rich parts={f.parts} /></p>
    </article>
  );
}
