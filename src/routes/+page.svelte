<script>
  export let data;
  import ArticleLink from '$lib/components/ArticleLink.svelte';
</script>

<svelte:head>
  <title>shige</title>
  <meta name="description" content="Personal website of shige." />
</svelte:head>

<div class="py-8 px-4 mb-10 rounded-lg flex flex-col items-center bg-primary-light">
  <h1 class="text-3xl font-bold">Hi, there👋🏻</h1>
  <div class="mt-4">
    <p class="text-lg text-primary-font text-s">
      shige is software developer based in Tokyo.
    </p>
  </div>
</div>

<ul>
  {#each data.articles as article}
    <li>
      <ArticleLink {article} />
    </li>
  {/each}
</ul>