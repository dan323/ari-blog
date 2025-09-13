import styles from "./music.module.css";

export const metadata = {
  title: "Mi música – Vicente Ariel Muñoz",
  description: "Escucha mi música en Spotify y descubre mis discos y canciones.",
  keywords: ["Vicente Ariel Muñoz música", "Spotify", "canciones", "álbum", "artista"],
  metadataBase: new URL("https://dan323.github.io/ari-blog/"),
  openGraph: {
    title: "Mi música – Vicente Ariel Muñoz",
    description: "Escucha mis canciones y mi último disco en Spotify.",
    url: "https://dan323.github.io/ari-blog/music",
    siteName: "Vicente Ariel Muñoz",
    type: "music.album",
  },
};


export default function MusicPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Mi música</h1>
      <p className={styles.text}>
        Escucha mis canciones más populares o de mi último álbum directamente aquí o sígueme en Spotify.
      </p>

      <div className={styles.player}>
        <iframe
          src="https://open.spotify.com/embed/artist/01713LAVVVYlyiYBorCeZD?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className={styles.player}>
        <iframe
          src="https://open.spotify.com/embed/album/3Yi7LdG6RJTvKwDo6trjdo?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <a
        href="https://open.spotify.com/intl-es/artist/01713LAVVVYlyiYBorCeZD"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkButton}
      >
        Escuchar en Spotify
      </a>
    </main>
  );
}
