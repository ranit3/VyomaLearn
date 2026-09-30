import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://vyomalearn.in'),
  title: {
    default: 'Vyoma Learn (VyomaLearn) — Agentic AI Personalized Learning Platform',
    template: '%s | Vyoma Learn (VyomaLearn)',
  },
  description:
    'Vyoma Learn (VyomaLearn) is an Agentic AI-powered learning platform delivering personalized practice, adaptive study sessions, and deep conceptual mastery.',
  keywords: [
    'Vyoma Learn',
    'VyomaLearn',
    'vyoma learn',
    'AI learning platform',
    'agentic AI tutor',
    'Ranit Purkait',
    'Saddam Hussain',
    'Ranit Purkait Vyoma Learn',
    'personalized practice',
    'adaptive education',
  ],
  authors: [
    { name: 'Ranit Purkait', url: 'https://github.com/ranit3' },
    { name: 'Saddam Hussain', url: 'https://github.com/dev-saddam' },
  ],
  creator: 'Ranit Purkait & Saddam Hussain',
  publisher: 'Vyoma Learn',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Vyoma Learn (VyomaLearn) — Agentic AI Personalized Learning Platform',
    description: 'Autonomous Agentic AI that maps your curriculum, diagnoses cognitive gaps, and adapts lessons in real-time.',
    url: 'https://vyomalearn.in',
    siteName: 'Vyoma Learn',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Vyoma Learn Emblem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vyoma Learn (VyomaLearn)',
    description: 'Agentic AI personalized tutoring from basics to mastery.',
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://vyomalearn.in/#organization",
        "name": "Vyoma Learn",
        "alternateName": ["VyomaLearn", "vyomalearn.in"],
        "url": "https://vyomalearn.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vyomalearn.in/logo.png",
          "caption": "Vyoma Learn Logo"
        },
        "founder": [
          {
            "@type": "Person",
            "name": "Ranit Purkait",
            "jobTitle": "Co-Founder & Software Developer",
            "url": "https://vyomalearn.in/about#ranit-purkait",
            "sameAs": ["https://github.com/ranit3"]
          },
          {
            "@type": "Person",
            "name": "Saddam Hussain",
            "jobTitle": "Co-Founder & Software Developer",
            "url": "https://vyomalearn.in/about#saddam-hussain",
            "sameAs": ["https://github.com/dev-saddam"]
          }
        ],
        "description": "Agentic AI-powered educational platform offering personalized, adaptive learning and automated diagnostic testing."
      },
      {
        "@type": "WebSite",
        "@id": "https://vyomalearn.in/#website",
        "url": "https://vyomalearn.in",
        "name": "Vyoma Learn",
        "publisher": {
          "@id": "https://vyomalearn.in/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-stone-50/50 dark:bg-stone-950 text-slate-900 dark:text-stone-100 antialiased selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}