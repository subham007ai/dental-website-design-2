import type { Metadata } from 'next';
import { Playfair_Display, Inter, Poppins } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://utkaldentalcare.in';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

// Geometric grotesque used only for the wordmark / brand lockup.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.positioning}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: 'health',
  referrer: 'origin-when-cross-origin',
  formatDetection: { telephone: true, address: true, email: true },
  keywords: [
    'dentist Bhubaneswar',
    'dental clinic Bhubaneswar',
    'dental implants Bhubaneswar',
    'root canal Bhubaneswar',
    'braces and aligners',
    'hair transplant Bhubaneswar',
    'PRP hair treatment',
    'skin clinic Bhubaneswar',
    'dermatologist Bhubaneswar',
    'laser treatment',
    'Utkal Dental Care',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: site.name,
    title: `${site.name} — ${site.positioning}`,
    description: site.description,
    url: siteUrl,
    images: [{ url: '/logo.png', width: 145, height: 115, alt: site.name }],
  },
  twitter: {
    card: 'summary',
    title: `${site.name} — ${site.positioning}`,
    description: site.description,
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} ${poppins.variable} h-full bg-cream`}
    >
      <head>
        {/* Mark the root so reveal animations only run with JS enabled */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="h-full bg-cream text-ink font-body">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cream"
        >
          Skip to content
        </a>
        <div className="relative flex min-h-screen flex-col justify-between overflow-x-hidden bg-cream">
          <div>
            <Header />
            <main id="main">{children}</main>
          </div>
          <Footer />
        </div>
        <JsonLd />
      </body>
    </html>
  );
}
