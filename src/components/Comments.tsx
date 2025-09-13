"use client";

import { useEffect } from "react";

export default function Comments() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", "dan323/ari-blog");
    script.setAttribute("data-repo-id", "R_kgDOPsEHag");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOPsEHas4CvZWi");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-theme", "dark");
    script.setAttribute("data-lang", "es");

    document.getElementById("giscus-container")?.appendChild(script);
  }, []);

  return <div id="giscus-container" style={{ marginTop: "3rem" }} />;
}