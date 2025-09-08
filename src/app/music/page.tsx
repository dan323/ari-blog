import styles from "@/app/page.module.css";

export const metadata = { title: "Music" };

export default function MusicPage() {
  return (
    <main className={styles.main}>
      <h1>Your Music</h1>
      <p>Embed your tracks, albums, or playlists here.</p>
    </main>
  );
}


