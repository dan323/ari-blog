import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dan323.github.io/ari-blog"), // cámbialo por tu dominio real
  title: {
    default: "Vicente Ariel Muñoz",
    template: "%s | Vicente Ariel Muñoz",
  },
  description: "Escritor y músico. Reseñas, proyectos y más.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://dan323.github.io/ari-blog",
    siteName: "Vicente Ariel Muñoz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="site-header">
          <div className="container" style={{ padding: 16 }}>
            <nav style={{ display: "flex", gap: 16 }}>
              <Link href="/">Inicio</Link>
              <Link href="/posts">Blog</Link>
              <Link href="/reviews">Reseñas</Link>
              <Link href="/book">Mi libro</Link>
              <Link href="/music">Mi música</Link>
            </nav>
          </div>
        </header>
        <div className="container">
          {children}
        </div>
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vicente Ariel Muñoz",
              jobTitle: "Escritor y Músico",
              url: "https://dan323.github.io/ari-blog",
              sameAs: [
                "https://www.instagram.com/munoz_ari24/",
                "https://open.spotify.com/artist/01713LAVVVYlyiYBorCeZD",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
