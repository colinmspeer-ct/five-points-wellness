import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const root = new URL("../dist/", import.meta.url);
const rootPath = root.pathname;
const port = Number(process.env.PORT || 4317);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};

function fileFor(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const rel = normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const direct = join(rootPath, rel);
  if (decoded.endsWith("/") && existsSync(join(direct, "index.html"))) return join(direct, "index.html");
  if (existsSync(direct) && statSync(direct).isFile()) return direct;
  if (existsSync(`${direct}.html`)) return `${direct}.html`;
  if (existsSync(join(direct, "index.html"))) return join(direct, "index.html");
  return "";
}

createServer((req, res) => {
  const path = req.url || "/";
  if (path === "/sitemap" || path.startsWith("/sitemap?")) {
    res.writeHead(301, { Location: "/sitemap/" });
    res.end();
    return;
  }
  const file = fileFor(path);
  if (!file) {
    const missing = fileFor("/404");
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    if (missing) createReadStream(missing).pipe(res);
    else res.end("Not found");
    return;
  }
  res.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream" });
  createReadStream(file).pipe(res);
}).listen(port, "127.0.0.1", () => {
  console.log(`Preview at http://127.0.0.1:${port}/`);
});
