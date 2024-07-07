<script>
  export let data;
  import ArticleCard from '$lib/components/ArticleCard.svelte';
</script>

<svelte:head>
  <title>shige</title>
  <meta name="description" content="Personal website of shige." />
</svelte:head>

<div class="py-8 px-4 mb-10 rounded-lg flex flex-col items-center bg-primary-light container">
  <h1 class="text-3xl font-bold">Hi, there👋🏻</h1>
  <div class="mt-4">
    <p class="text-lg text-s">
      shige is software developer based in Tokyo.
    </p> 
  </div>
</div>


<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
  {#each data.articles as article}
    <ArticleCard {article} />
  {/each}
</div>