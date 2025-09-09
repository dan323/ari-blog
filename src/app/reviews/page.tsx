// app/reviews/page.tsx  (Server Component)
import { getAllContent } from "@/lib/markdown";
import ReviewsClient from "./ReviewsClient";

export const metadata = {
  title: "Reseñas – Vicente Ariel Muñoz",
  description: "Opiniones sobre mi libro, mi música y mi trabajo artístico.",
  keywords: ["reseñas Vicente Ariel Muñoz", "opiniones libro", "opiniones música", "Barcelona"],
  metadataBase: new URL("https://dan323.github.io/ari-blog/"),
  openGraph: {
    title: "Reseñas – Vicente Ariel Muñoz",
    description: "Lo que dicen sobre mi libro, mi música y mi trabajo creativo.",
    url: "https://dan323.github.io/ari-blog/reviews",
    siteName: "Vicente Ariel Muñoz",
    type: "website",
  },
};


export default async function ReviewsPage() {
  const reviews = await getAllContent("reviews"); // OK, server-side
  return <ReviewsClient initialReviews={reviews} />;
}
