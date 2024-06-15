<script>
    export let article;
    import { format } from 'date-fns';
</script>
  
<a 
    rel="prefetch"
    href="/articles/{article.slug}"
    class="m-4 p-4 max-w-sm mx-auto bg-primary-light rounded-lg border border-primary-font flex items-center space-x-4 transition-colors duration-200 ease-in-out hover:bg-primary-dark"
>
    <div>
        <div class="text-xl font-medium text-primary-font mb-3">{article.metadata.title}</div>
        <div class="mt-2 flex items-center justify-start">
        <p
            class="inline-flex items-center px-2 py-1 bg-primary-button text-primary rounded-lg text-sm mr-2"
        >
            {article.metadata.category}
        </p>
        <p class="text-primary-font text-xs">{format(new Date(article.metadata.date), 'yyyy-MM-dd')}</p>
        </div>
    </div>  
</a>