export function stripHtml(html: string) {
  if (!html) return "";
  const text = html.replace(/<[^>]+>/g, "");
  if (typeof window !== "undefined") {
    const doc = new DOMParser().parseFromString(text, "text/html");
    return doc.documentElement.textContent || "";
  }
  return text;
}
