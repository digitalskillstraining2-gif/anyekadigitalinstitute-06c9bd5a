import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://www.anyekadigitalinstitute.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

// Auto-discover every route file under src/routes/. Vite inlines this glob at
// build time, so adding a new file under src/routes/ automatically expands
// the sitemap — no manual entry updates required.
const routeModules = import.meta.glob("./**/*.{ts,tsx}", { eager: false });

// Convert a route file path (relative to src/routes) into its URL pathname,
// following TanStack Router's flat file-based routing conventions.
export function filePathToRoutePath(file: string): string | null {
  // Strip leading "./" and extension
  let name = file.replace(/^\.\//, "").replace(/\.(tsx?|jsx?)$/, "");
  // Skip framework/internal files
  if (name.startsWith("__root")) return null;
  if (name.startsWith("api/")) return null;
  // Convert folder separators to dots (both conventions produce same route)
  name = name.replace(/\//g, ".");
  // Escaped dot segments like "sitemap[.]xml" → literal "."
  name = name.replace(/\[\.\]/g, ".");
  // Drop trailing ".index"
  name = name.replace(/\.index$/, "").replace(/^index$/, "");
  // Split into segments and drop pathless layout segments (leading "_")
  const segments = name.length === 0 ? [] : name.split(".").filter((s) => !s.startsWith("_"));
  return "/" + segments.join("/");
}

export function isIndexablePath(path: string): boolean {
  if (!path.startsWith("/")) return false;
  if (path.includes("$")) return false;
  if (path.includes("*")) return false;
  if (path.startsWith("/api/")) return false;
  if (path.startsWith("/lovable")) return false;
  if (path === "/not-found") return false;
  const last = path.split("/").pop() ?? "";
  if (last.includes(".")) return false;
  return true;
}

export function collectRoutePathsFromFiles(files: string[]): string[] {
  const paths = new Set<string>();
  for (const f of files) {
    const p = filePathToRoutePath(f);
    if (p) paths.add(p);
  }
  return Array.from(paths);
}

export function buildEntries(files: string[]): SitemapEntry[] {
  const all = collectRoutePathsFromFiles(files).filter(isIndexablePath);
  if (!all.includes("/")) all.unshift("/");
  return Array.from(new Set(all))
    .sort()
    .map((path) => ({
      path,
      changefreq: "weekly",
      priority: path === "/" ? "1.0" : "0.8",
    }));
}

export function renderSitemap(entries: SitemapEntry[], baseUrl = BASE_URL): string {
  const now = new Date().toISOString().slice(0, 10);
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${baseUrl}${e.path}</loc>`,
      `    <lastmod>${now}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = renderSitemap(buildEntries(Object.keys(routeModules)));
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
