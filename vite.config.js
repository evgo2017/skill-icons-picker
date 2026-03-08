import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  const tongjiId = env.VITE_BAIDU_TONGJI_ID;

  return {
    // vite build output
    base: env.BASE_PATH || './',
    plugins: [
      {
        name: 'html-transform',
        transformIndexHtml(html, { command }) {
          if (command !== 'build' || !tongjiId) return html;
          const baseUrl = env.BASE_PATH || '/';
          const tongjiScript = `
    <!-- Baidu Tongji Analytics -->
    <script>
        (function() {
            var baseUrl = "${baseUrl}";
            var normalizedBase = baseUrl === '/' ? '' : baseUrl.replace(/\\/$/, '');
            var pathname = window.location.pathname || '/';
            var trackedPath = pathname.startsWith(normalizedBase)
                ? pathname
                : (normalizedBase + (pathname.startsWith('/') ? pathname : '/' + pathname));
            var trackedUrl = trackedPath + window.location.search + window.location.hash;

            window._hmt = window._hmt || [];
            window._hmt.push(['_setAutoPageview', false]);
            window._hmt.push(['_trackPageview', trackedUrl]);

            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?${tongjiId}";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
        })();
    </script>
`;
          return html.replace('</head>', `${tongjiScript}</head>`);
        },
      },
    ],
  };
});
