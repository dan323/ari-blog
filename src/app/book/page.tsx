import styles from "@/app/page.module.css";

export const metadata = { title: "Book" };

export default function BookPage() {
  return (
    <main className={styles.main}>
      <h1>Your Book</h1>
      <p>Introduce your book, add cover art, links, and sample chapters.</p>
    </main>
  );
}


