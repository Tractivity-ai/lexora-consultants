import Link from 'next/link';
export default function Band({ title, trail }) {
  return (
    <div className="titleband"><div className="wrap">
      <div className="crumbs"><Link href="/">Home</Link> / {trail || title}</div>
      <h1>{title}</h1>
    </div></div>
  );
}
