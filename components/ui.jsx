import Link from 'next/link';

export const Arrow = () => (
  <svg className="ar" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function Btn({ href, children, className = 'btn btn-g', ...rest }) {
  const external = /^(https?:|tel:|mailto:)/.test(href);
  const inner = (<>{children}<Arrow /></>);
  return external
    ? <a href={href} className={className} {...rest}>{inner}</a>
    : <Link href={href} className={className} {...rest}>{inner}</Link>;
}

export function Icon({ f, p, size = 26, fill = '#DCDAD5' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path fill={fill} stroke="none" transform="translate(1.5 1.5)" d={f} />
      <path d={p} />
    </svg>
  );
}

export const BookIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 4h9a4 4 0 0 1 4 4v12H9a4 4 0 0 1-4-4z M5 16a4 4 0 0 1 4-4h9 M9 8h5" />
  </svg>
);

export const CallIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const WaIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M12 2.5a9.4 9.4 0 0 0-8.1 14.1L2.6 21.5l5-1.3A9.4 9.4 0 1 0 12 2.5z" />
    <path style={{ fill: 'var(--wain, #141414)' }} d="M8.8 7.8c-.2 0-.5.1-.7.4-.3.4-.9 1-.9 2.2s.9 2.4 1 2.6c.1.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.9-.4-1.8-1-2.5-1.9-.2-.3-.4-.5-.6-.9-.1-.2 0-.3.1-.4l.4-.5c.1-.1.1-.3.2-.4 0-.2 0-.3-.1-.4l-.8-1.9c-.2-.5-.4-.5-.6-.5z" />
  </svg>
);

export const MapPlaceholder = () => (
  <svg viewBox="0 0 600 320" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Map placeholder">
    <rect width="600" height="320" fill="#ECEAE5" />
    <g fill="#DEDBD4"><rect x="20" y="20" width="150" height="90" /><rect x="200" y="20" width="110" height="90" /><rect x="340" y="20" width="240" height="60" /><rect x="20" y="140" width="110" height="70" /><rect x="160" y="140" width="150" height="70" /><rect x="340" y="110" width="110" height="100" /><rect x="480" y="110" width="100" height="100" /><rect x="20" y="240" width="190" height="60" /><rect x="240" y="240" width="130" height="60" /><rect x="400" y="240" width="180" height="60" /></g>
    <g stroke="#FFFFFF" strokeWidth="9"><path d="M0 125H600M0 225H600M185 0V320M325 0V320M465 0V320" /></g>
    <path d="M0 290L600 40" stroke="#FFFFFF" strokeWidth="14" />
    <g transform="translate(300 150)"><path d="M0 0c-14-18-24-28-24-44a24 24 0 0 1 48 0c0 16-10 26-24 44z" fill="#141414" /><circle cy="-44" r="9" fill="#FFFFFF" /></g>
    <g transform="translate(16 286)"><rect width="150" height="26" rx="4" fill="#FFFFFF" /><text x="10" y="18" fontFamily="Source Sans 3,sans-serif" fontSize="13" fill="#6B6B6B">Map placeholder</text></g>
  </svg>
);
