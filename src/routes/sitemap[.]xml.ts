import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { routeTree } from "../routeTree.gen";

const BASE_URL = "https://www.anyekadigitalinstitute.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

// Exclude non-indexable paths: assets (contain a "."), dynamic params ($),
// splats, api routes, not-found, and lovable internals.
export function isIndexablePath(path: string): boolean {
  if (!path.startsWith("/")) return false;
  if (path.includes("$")) return false;
  if (path.includes("*")) return false;
  if (path.startsWith("/api/")) return false;
  if (path.startsWith("/lovable")) return false;
  if (path === "/not-found") return false;
  // Skip file-like paths (sitemap.xml, robots.txt, etc.)
  const last = path.split("/").pop() ?? "";
  if (last.includes(".")) return false;
  return true;
}

export function collectRoutePaths(tree: any): string[] {
  const paths = new Set<string>();
  const walk = (node: any) => {
    if (!node) return;
    const p: string | undefined = node.fullPath ?? node.path;
    if (typeof p === "string" && p.length > 0) paths.add(p);
    const children = node.children;
    if (children) {
      const list = Array.isArray(children) ? children : Object.values(children);
      for (const child of list) walk(child);
    }
  };
  walk(tree);
  return Array.from(paths);
}

export function buildEntries(tree: any): SitemapEntry[] {
  const all = collectRoutePaths(tree).filter(isIndexablePath);
  if (!all.includes("/")) all.unshift("/");
  return all.sort().map((path) => ({
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
        const xml = renderSitemap(buildEntries(routeTree));
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
