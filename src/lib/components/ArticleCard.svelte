<script>
  export let article;

  const formattedDate = article.pubDate 
    ? article.pubDate.toLocaleDateString() 
    : '日付不明';
</script>

<div class="bg-primary-light rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
  <a href={article.link} target="_blank" rel="noopener noreferrer" class="flex flex-col h-full">
    <div class="flex-grow">
      <h3 class="text-lg font-semibold text-primary-font mb-2">{article.title}</h3>
    </div>
    <p class="text-sm text-primary-font mt-auto">{formattedDate}</p>
  </a>
</div>