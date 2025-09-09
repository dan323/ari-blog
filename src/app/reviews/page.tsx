// app/reviews/page.tsx  (Server Component)
import { getAllContent } from "@/lib/markdown";
import ReviewsClient from "./ReviewsClient";

export const metadata = { title: "Reseñas" };

export default async function ReviewsPage() {
  const reviews = await getAllContent("reviews"); // OK, server-side
  return <ReviewsClient initialReviews={reviews} />;
}
