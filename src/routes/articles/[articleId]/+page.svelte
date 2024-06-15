<script>
    export let data;
  </script>

<svelte:head>
  <title>{data.metadata.title}</title>
  <meta name="description" content={data.metadata.description} />
</svelte:head>
  
<div class="py-8 px-4 mb-10 rounded-lg flex flex-col items-center bg-primary-light">
  <h1 class="text-3xl font-bold">{data.metadata.title}</h1>
  <div class="flex justify-center items-center w-full mt-4">
    <p
      class="inline-flex items-center px-2 py-1 bg-primary-button text-primary rounded-lg text-sm mr-2"
    >
      {data.metadata.category}
    </p>
    <p class="text-lg text-primary-font ml-2 text-s">{data.metadata.date}</p>
  </div>
</div>

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
<article class="bg-primary-light text-primary-font py-8 px-10 rounded-lg">{@html data.htmlContent}</article>