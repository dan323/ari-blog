import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Ari’s Blog</h1>
      <p>Welcome! Explore my book, music, blog posts, and reviews.</p>
      <ul>
        <li><a href="/posts/">Read the blog</a></li>
        <li><a href="/reviews/">See reviews</a></li>
        <li><a href="/book/">About my book</a></li>
        <li><a href="/music/">Listen to my music</a></li>
      </ul>
      <p>Use the navigation above to get started.</p>
    </main>
  );
}
