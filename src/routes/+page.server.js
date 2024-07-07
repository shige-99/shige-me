import { getArticles } from '$lib/getArticles';

export async function load() {
  const articles = await getArticles();
  return { articles: articles.slice(0, 5) }; // 最新の5記事のみ取得
}