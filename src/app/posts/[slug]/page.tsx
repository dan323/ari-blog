import { getAllContent, getContentBySlug } from "@/lib/markdown";
import { getReadingTime } from "@/lib/text";
import styles from "./post.module.css";
import ShareButtons from "@/components/ShareButtons";
import Comments from "@/components/Comments";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllContent("posts");
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getContentBySlug("posts", (await params).slug);
  if (!post) return null;
  const baseUrl = "https://dan323.github.io/ari-blog"; 
  const url = `${baseUrl}/posts/${params.slug}`;
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{post.title}</h1>
      <ShareButtons url={url} />
      <p className={styles.date}>{post.date && new Date(post.date).toLocaleDateString() } - {getReadingTime(post.contentHtml)}</p>
      <article className={styles.prose} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      <Comments />
    </main>
  );
}
