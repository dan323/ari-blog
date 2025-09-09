import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Vicente Ariel Muñoz – Escritor y Músico",
  description: "Página oficial de Vicente Ariel Muñoz: descubre mi libro, mi música y mis proyectos creativos.",
  keywords: ["Vicente Ariel Muñoz", "escritor", "músico", "libro", "Barcelona", "arte", "canciones"],
  metadataBase: new URL("https://dan323.github.io/ari-blog/"),
  openGraph: {
    title: "Vicente Ariel Muñoz – Escritor y Músico",
    description: "Descubre mi libro, mi música y mis proyectos creativos.",
    url: "https://dan323.github.io/ari-blog",
    siteName: "Vicente Ariel Muñoz",
    images: [
      {
        url: "/ari-blog/_R9A7364-1.jpg",
        width: 800,
        height: 600,
        alt: "Foto de Vicente Ariel Muñoz",
      },
    ],
    type: "website",
  }
};

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>El Taller de Ari</h1>
          <p>Mi libro, mi música y mi proceso creativo.</p>
          <div className={styles.ctaRow}>
            <Link className={`${styles.btn} ${styles.btnPrimary}`} href="/posts">Lee mis pensamientos</Link>
            <Link className={`${styles.btn} ${styles.btnPrimary}`} href="/music">Escucha mi vida</Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src={`./${process.env.BASE_PATH||""}/_R9A7364-1.jpg`} alt="Author" width={500} height={750} />
        </div>
      </section>
    </main>
  );
}
