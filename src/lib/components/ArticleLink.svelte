<script>
    export let article;
  </script>
  
  <article>
    <h3>
      <a href={article.link} target="_blank" rel="noopener noreferrer">
        {article.title}
      </a>
    </h3>
    <p>{article.pubDate.toLocaleDateString()}</p>
  </article>