import { getArticles } from '$lib/getArticles';

export async function load() {
  const articles = await getArticles();
  return { articles };
}