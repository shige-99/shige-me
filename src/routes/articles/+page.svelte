<script>
    export let data;
    import ArticleLink from '$lib/components/ArticleLink.svelte';
</script>

<svelte:head>
  <title>Blog | shige</title>
  <meta name="description" content="shige's blog" />
</svelte:head>

<ul>
    {#each data.articles as article}
    <li>
        <ArticleLink {article} />
    </li>
    {/each}
</ul>