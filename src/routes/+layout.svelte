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

<div class="flex flex-col min-h-screen">
    <header class="flex items-center justify-between px-6 py-3 bg-primary">
        <a href="/">
            <img src="/images/icon.png" alt="icon" class="h-10 w-10 rounded-full object-cover" />
        </a>
        <nav class="flex gap-4">
            <a href="/about" class="text-primary-font hover:text-primary-light">About</a>
            <a href="/articles" class="text-primary-font hover:text-primary-light">Blog</a>
        </nav>
    </header>

    <div class="flex-grow px-4 py-6 bg-primary text-primary-font">
        <slot />
    </div>

    <footer class="bg-primary py-2 text-center text-primary-font">
        <p>© 2024 shige</p>
    </footer>
</div>