import { Source_Sans_3, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import DisclaimerModal from '@/components/DisclaimerModal';

const sans = Source_Sans_3({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-sans', display: 'swap' });
const serif = Source_Serif_4({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-serif', display: 'swap' });

export const metadata = {
  title: 'Lexora Advocates & Consultants, Nagpur',
  description: 'Litigation, legal advisory and tax compliance in Nagpur. Advocates practising before the District and Sessions Court, the Bombay High Court at Nagpur Bench and tax tribunals.',
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
        <DisclaimerModal />
      </body>
    </html>
  );
}
