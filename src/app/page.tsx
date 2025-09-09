import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>El Taller de Ari</h1>
          <p>Mi libro, mi música y mi proceso creativo.</p>
          <div className={styles.ctaRow}>
            <Link className={`${styles.btn} ${styles.btnPrimary}`} href="/posts">Lee mis pensamientos</Link>
            <Link className={styles.btn} href="/music">Escucha mi vida</Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src="/_R9A7364-1.jpg" alt="Author" width={500} height={750} />
        </div>
      </section>
    </main>
  );
}
