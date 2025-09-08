import Link from "next/link";
import { getAllContent } from "@/lib/markdown";
import styles from "@/app/page.module.css";

export const metadata = { title: "Reviews" };

export default async function ReviewsIndex() {
  const reviews = await getAllContent("reviews");
  return (
    <main className={styles.main}>
      <h1>Reviews</h1>
      <ul>
        {reviews.map((r) => (
          <li key={r.slug}>
            <Link href={`/reviews/${r.slug}`}>{r.title}</Link>
            {r.date && <small> – {new Date(r.date).toLocaleDateString()}</small>}
          </li>
        ))}
      </ul>
    </main>
  );
}


