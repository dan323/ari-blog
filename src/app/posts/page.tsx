import Link from "next/link";
import { getAllContent } from "@/lib/markdown";
import styles from "./posts.module.css";

export const metadata = { title: "Blog" };

export default async function PostsIndex() {
  const posts = await getAllContent("posts");
  return (
    <main className={styles.main}>
  <h1 className={styles.mainTitle}>Blog</h1>
  <div className={styles.cardList}>
    {posts.map((p) => (
      <article className={styles.card} key={p.slug}>
        <h3 className={styles.cardTitle}>
          <Link href={`/posts/${p.slug}`}>{p.title}</Link>
        </h3>
        {p.date && <small className={styles.cardDate}>{new Date(p.date).toLocaleDateString()}</small>}
        {p.description && <p className={styles.cardDesc}>{p.description}</p>}
      </article>
    ))}
  </div>
</main>

  );
}


