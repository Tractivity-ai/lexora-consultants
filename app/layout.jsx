import { Source_Serif_4, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import DisclaimerModal from '@/components/DisclaimerModal';
import Motion from '@/components/Motion';

const serif = Source_Serif_4({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });
const sans = Source_Sans_3({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata = {
  title: 'Lexora Advocates & Consultants, Nagpur',
  description: 'LEXORA Advocates & Consultants is a full-service law firm based in Nagpur, Maharashtra, combining courtroom experience with modern legal advisory.',
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('mo');setTimeout(function(){if(!window.__mo)document.documentElement.classList.remove('mo')},5000)}}catch(e){}" }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
        <DisclaimerModal />
        <Motion />
      </body>
    </html>
  );
}
