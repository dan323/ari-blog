import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { ContentItem } from "@/types";

function getDirectoryFor(kind: "posts" | "reviews"): string {
  return path.join(process.cwd(), "content", kind);
}

export function getSlugs(kind: "posts" | "reviews"): string[] {
  const directory = getDirectoryFor(kind);
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export async function getContentBySlug(
  kind: "posts" | "reviews",
  slug: string
): Promise<ContentItem | null> {
  const directory = getDirectoryFor(kind);
  const fullPath = path.join(directory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    title: (data.title as string) || slug,
    date: data.date as string | undefined,
    description: data.description as string | undefined,
    category: data.category as string | undefined,
    author: data.author as string | undefined,
    contentHtml,
  };
}

export async function getAllContent(
  kind: "posts" | "reviews"
): Promise<ContentItem[]> {
  const slugs = getSlugs(kind);
  const items = await Promise.all(slugs.map((slug) => getContentBySlug(kind, slug)));
  return items
    .filter((x): x is ContentItem => Boolean(x))
    .sort((a, b) => {
      const da = a.date ? new Date(a.date).getTime() : 0;
      const db = b.date ? new Date(b.date).getTime() : 0;
      return db - da;
    });
}


