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

// 定期的にRSSフィードを取得する
setInterval(async () => {
  const articles = await getArticles();
}, 600000); // 600000ミリ秒（10分）