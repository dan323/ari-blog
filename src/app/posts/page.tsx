import Link from "next/link";
import { getAllContent } from "@/lib/markdown";
import styles from "@/app/page.module.css";

export const metadata = { title: "Blog" };

export default async function PostsIndex() {
  const posts = await getAllContent("posts");
  return (
    <main className={styles.main}>
      <h1>Blog</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/posts/${p.slug}`}>{p.title}</Link>
            {p.date && <small> – {new Date(p.date).toLocaleDateString()}</small>}
          </li>
        ))}
      </ul>
    </main>
  );
}


