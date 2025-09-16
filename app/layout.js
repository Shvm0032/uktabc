import './globals.css';
import { Montserrat, Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

// Fonts import
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'UK Tunnel and Building Construction India Pvt. Ltd.',
  description:
    'Leading construction company specializing in tunnel construction and building projects across India.',
    icons: {
    icon: '/Assets/logo/favicon-icon.png', 
    shortcut: '/favicon.ico',
    apple: '/Assets/logo/favicon-icon.png',      
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
