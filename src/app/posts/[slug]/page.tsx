import { getAllContent, getContentBySlug } from "@/lib/markdown";
import styles from "./post.module.css";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllContent("posts");
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getContentBySlug("posts", params.slug);
  if (!post) return null;
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{post.title}</h1>
      {post.date && <p className={styles.date}>{new Date(post.date).toLocaleDateString()}</p>}
      <article className={styles.prose} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </main>
  );
}
