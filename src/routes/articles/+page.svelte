<script>
  export let data;
  import ArticleCard from '$lib/components/ArticleCard.svelte';
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {#each data.articles as article}
    <ArticleCard {article} />
  {/each}
</div>