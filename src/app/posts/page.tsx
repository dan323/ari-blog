import Link from "next/link";
import { getAllContent } from "@/lib/markdown";
import styles from "./posts.module.css";

export const metadata = {
  title: "Blog – Vicente Ariel Muñoz",
  description: "Artículos, reflexiones y novedades sobre mis proyectos creativos.",
  keywords: ["Vicente Ariel Muñoz blog", "artículos", "literatura", "música", "Barcelona"],
  metadataBase: new URL("https://dan323.github.io/ari-blog/"),
  openGraph: {
    title: "Blog – Vicente Ariel Muñoz",
    description: "Reflexiones y noticias sobre mis proyectos creativos.",
    url: "https://dan323.github.io/ari-blog/posts",
    siteName: "Vicente Ariel Muñoz",
    type: "article",
  },
};


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


