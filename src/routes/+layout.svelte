<script>
    import "../app.css";
</script>

<svelte:head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-VJB60NQ1WV"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-VJB60NQ1WV');
    </script>
</svelte:head>

<div class="flex flex-col min-h-screen container mx-auto px-4">
    <header class="flex items-center justify-between px-6 py-3">
        <a href="/">
            <img src="/images/icon.png" alt="icon" class="h-10 w-10 rounded-full object-cover" />
        </a>
        <nav class="flex gap-4">
            <a href="/about" class="hover:text-primary-light">About</a>
            <a href="/articles" class="hover:text-primary-light">Blog</a>
        </nav>
    </header>

    <div class="flex-grow px-4 py-6">
        <slot />
    </div>

    <footer class="py-2 text-center">
        <p>© 2024 shige</p>
    </footer>
</div>