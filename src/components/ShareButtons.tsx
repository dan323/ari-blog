"use client";

import React from "react";
import styles from "./shareButtons.module.css";

export default function ShareButtons({ url }: { url: string }) {
  return (
    <div className={styles.container}>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles.twitter}`}
      >
        Twitter
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles.facebook}`}
      >
        Facebook
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles.linkedin}`}
      >
        LinkedIn
      </a>
      <a
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles.whatsapp}`}
      >
        WhatsApp
      </a>
      <button
        onClick={() => navigator.clipboard.writeText(url)}
        className={`${styles.button} ${styles.copy}`}
      >
        Copiar enlace
      </button>
    </div>
  );
}
