Server Side Rendering: When user requests next js build the page on server according to the request and serve to client. But if we use forced-cache option next js will store that html rendered page in ram for an hour (approx.) and serve the rendered page to client directly. But if we use no-cache or no-store option it will recreate and render html page on each request.

Server Side Generation: Statically generated pages in Next.js are pre-rendered HTML pages that are generated at build time and served as static assets. Unlike server-side rendered pages that are generated dynamically on each request, static pages are generated once and can be served directly from a CDN or a static file server without the need for a web server or a Node.js process to be running.

Incremental static Regeneration: It is SSR but in this  we can also set time to rerender page in given time by option revaildate: time_to_regenerate.
it can be done on layout or page level also by: export const revaildate = 360 in the page or layout section  (6 minutes).


In this repo we are going to convert last projects ssr postpage to ssg postpage using default function generateStaticParams()   
basically if we know what will the params we have pass to the dynamic route from beginning we can take advantage using this strategy.
