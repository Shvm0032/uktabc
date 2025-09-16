import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'UK Tunnel and Building Construction India Pvt. Ltd.',
  description: 'Leading construction company specializing in tunnel construction and building projects across India.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}