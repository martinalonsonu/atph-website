export const WP_BASE_URL = process.env.API_BASE || "";

export async function fetchAPI<T>(
  endpoint: string,
  params?: Record<string, string | number>
): Promise<T> {
  const url = new URL(`${WP_BASE_URL}${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }

  const res = await fetch(url.toString());

  if (!res.ok) throw new Error(`Error fetching ${endpoint}: ${res.statusText}`);
  return res.json();
}
