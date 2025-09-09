// app/reviews/ReviewsClient.tsx  (Client Component)
"use client";
import { useState } from "react"
;import Link from "next/link";
import styles from "./reviews.module.css";
import { ContentItem } from "@/types";

export default function ReviewsClient({ initialReviews }: { initialReviews: ContentItem[] }) {
  const [filter, setFilter] = useState("Todo");

  const filtered =
    filter === "Todo"
      ? initialReviews
      : initialReviews.filter((r) => r.category === filter);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Reseñas</h1>

      <div className={styles.filters}>
        {["Todo", "Libro", "Música", "General"].map((f) => (
          <button
            key={f}
            className={`${styles.filterButton} ${filter === f ? styles.active : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className={styles.cardList}>
        {filtered.map((r) => (
          <article key={r.slug} className={styles.card}>
            <h3 className={styles.cardTitle}>
              <Link href={`/reviews/${r.slug}`}>{r.title}</Link>
              </h3>
          {r.date && <small className={styles.cardDate}>{new Date(r.date).toLocaleDateString()}</small>}
          {r.description && <p className={styles.cardDesc}>{r.description}</p>}
          </article>
        ))}
      </div>
    </main>
  );
}
