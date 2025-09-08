
import { getAllContent, getContentBySlug } from "@/lib/markdown";
import styles from "@/app/page.module.css";

export const dynamicParams = false;

export async function generateStaticParams() {
  const reviews = await getAllContent("reviews");
  return reviews.map((r) => ({ slug: r.slug }));
}

export default async function ReviewPage({ params }: { params: { slug: string } }) {
  const review = await getContentBySlug("reviews", params.slug);
  if (!review) return null;
  return (
    <main className={styles.main}>
      <h1>{review.title}</h1>
      {review.date && <p>{new Date(review.date).toLocaleDateString()}</p>}
      <article dangerouslySetInnerHTML={{ __html: review.contentHtml }} />
    </main>
  );
}


