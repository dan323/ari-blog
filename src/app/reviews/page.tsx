import Link from "next/link";
import { getAllContent } from "@/lib/markdown";
import styles from "./reviews.module.css";

export const metadata = { title: "Reviews" };

export default async function ReviewsIndex() {
  const reviews = await getAllContent("reviews");
  return (
    <main className={styles.main}>
    <h1 className={styles.mainTitle}>Reseñas</h1>
    <div className={styles.cardList}>
      {reviews.map((p) => (
        <article className={styles.card} key={p.slug}>
          <h3 className={styles.cardTitle}>
            <Link href={`/reviews/${p.slug}`}>{p.title}</Link>
          </h3>
          {p.date && <small className={styles.cardDate}>{new Date(p.date).toLocaleDateString()}</small>}
          {p.description && <p className={styles.cardDesc}>{p.description}</p>}
        </article>
      ))}
    </div>
  </main>
  );
}


