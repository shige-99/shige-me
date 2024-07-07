import Parser from 'rss-parser';

const parser = new Parser();
const ZENN_RSS_URL = "https://zenn.dev/shige99/feed";

export async function getArticles() {
  try {
    const feed = await parser.parseURL(ZENN_RSS_URL);
    return feed.items.map(item => ({
      id: item.guid || item.link,
      title: item.title,
      link: item.link,
      pubDate: item.pubDate ? new Date(item.pubDate) : null,
      description: item.contentSnippet
    }));
  } catch (error) {
    console.error("RSSフィードの取得に失敗しました:", error);
    return [];
  }
}