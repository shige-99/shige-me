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
    <header class="flex items-center justify-between px-6 py-3 bg-[#64748b]">
        <a href="/">
            <img src="/images/icon.png" alt="icon" class="h-12 w-12 rounded-full object-cover" />
        </a>
        <nav class="flex gap-4">
            <a href="/" class="text-white hover:text-gray-400">Home</a>
            <a href="/profiles" class="text-white hover:text-gray-400">About</a>
            <a href="/articles" class="text-white hover:text-gray-400">Blog</a>
        </nav>
    </header>

    <div class="flex-grow px-4 py-6">
        <slot />
    </div>

    <footer class="bg-[#64748b] py-2 text-center text-white">
        <p>© 2024 shige</p>
    </footer>
</div>