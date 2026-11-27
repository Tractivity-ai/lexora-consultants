'use client';
import { usePathname } from 'next/navigation';
import Footer from './Footer';
// The home page carries its own footer inside the last panel.
export default function SiteFooter() {
  return usePathname() === '/' ? null : <Footer />;
}
