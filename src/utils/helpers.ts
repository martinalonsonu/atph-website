import { AUTHORS, CATEGORIES } from "./enrollment";

export function stripHtml(html: string) {
  if (!html) return "";
  const text = html.replace(/<[^>]+>/g, "");
  if (typeof window !== "undefined") {
    const doc = new DOMParser().parseFromString(text, "text/html");
    return doc.documentElement.textContent || "";
  }
  return text;
}

export function formatCategory(id: number) {
  const category = CATEGORIES.find((cat) => cat.id === id);
  return category ? category.name : "Otros";
}

export function formatTag(id: number) {
  const tag = CATEGORIES.find((tag) => tag.id === id);
  return tag ? tag.name : "#ATPH";
}

export function formatAuthor(id: number) {
  const author = AUTHORS.find((author) => author.id === id);
  return author
    ? {
        name: author.name,
        nick: author.slug,
        avatar: author.avatar,
        ocupation: author.ocupation,
        description: author.description,
      }
    : {
        name: "ATPH",
        nick: "atph",
        avatar: "",
        ocupation: "Sitio Web Oficial",
        description:
          "Portal de noticias y artículos sobre devociones y tradiciones.",
      };
}
