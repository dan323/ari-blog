import styles from "./book.module.css";
import Image from "next/image";

export const metadata = {
  title: "Mi libro – Vicente Ariel Muñoz",
  description: "Sinopsis, portada y opciones para comprar mi libro, con posibilidad de dedicatoria en Barcelona.",
  keywords: ["Vicente Ariel Muñoz libro", "novela", "literatura", "Barcelona", "escritor"],
  metadataBase: new URL("https://dan323.github.io/ari-blog/"),
  openGraph: {
    title: "Mi libro – Vicente Ariel Muñoz",
    description: "Descubre la sinopsis y consigue mi libro dedicado.",
    url: "https://dan323.github.io/ari-blog/book",
    siteName: "Vicente Ariel Muñoz",
    images: [
      {
        url: "/ari-blog/book-cover.jpg",
        width: 600,
        height: 900,
        alt: "Portada del libro de Vicente Ariel Muñoz",
      },
    ],
    type: "book",
  },
};

export default function BookPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Mi libro</h1>

      {/* Portada */}
      <div className={styles.cover}>
        <Image
          src={`../${process.env.BASE_PATH||""}/book.jpg`}
          alt="Portada del libro"
          width={300}
          height={560}
        />
      </div>

      {/* Sinopsis */}
      <section className={styles.synopsis}>
        <h2 className={styles.sectionTitle}>Sinopsis</h2>
        <p>En Santa Rita nunca pasa nada... hasta que ocurre lo inevitable.</p>
<p>Cuando Alejandro Rodríguez aparece en el centro del caso más perturbador que ha vivido el pueblo, nadie sabe con certeza qué ha ocurrido. Solo se habla de él. De su silencio. De su sombra.</p>
<p>Mientras el pueblo murmura y el caso se transforma en titular, lo que Alejandro escribe desde su celda desvela algo más que un crimen: un recorrido por los silencios de una infancia quebrada, por los gestos invisibles que construyen un verdugo, por el deseo de justicia que nace donde el amor no llega...</p>
<p>El silencio de Santa Rita es un retrato sombrío de una sociedad que prefiere mirar hacia otro lado. Una confesión. Una advertencia. Y una pregunta incómoda: ¿cuántos Alejandros hay esperando
su detonante?</p>
      </section>

      {/* Comprar online */}
      <section className={styles.buyOnline}>
        <h2 className={styles.sectionTitle}>Cómpralo online</h2>
        <a
          href="https://amzn.eu/d/2gLSmUm"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buyButton}
        >
          Comprar ahora
        </a>
      </section>

      {/* Comprar en mano */}
      <section className={styles.buyLocal}>
        <h2 className={styles.sectionTitle}>En Barcelona y alrededores</h2>
        <p>
          Si prefieres un ejemplar firmado con dedicatoria, puedes escribirme
          directamente y quedamos en persona.
        </p>
        <a href="mailto:vicemunoz1996@gmail.com" className={styles.mailButton}>
          Pedir por email
        </a>
      </section>
    </main>
  );
}