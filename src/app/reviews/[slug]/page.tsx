import { getAllContent, getContentBySlug } from "@/lib/markdown";
import styles from "./review.module.css";

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
      <h1 className={styles.title}>{review.title}</h1>
      {review.date && (
        <p className={styles.date}>{new Date(review.date).toLocaleDateString()}</p>
      )}
      <article
        className={styles.prose}
        dangerouslySetInnerHTML={{ __html: review.contentHtml }}
      />
    </main>
  );
}
