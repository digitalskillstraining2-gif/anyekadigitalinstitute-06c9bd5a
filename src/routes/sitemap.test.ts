import { describe, it, expect } from "vitest";
import { routeTree } from "../routeTree.gen";
import {
  isIndexablePath,
  collectRoutePaths,
  buildEntries,
  renderSitemap,
} from "./sitemap[.]xml";

describe("sitemap", () => {
  it("filters non-indexable paths", () => {
    expect(isIndexablePath("/")).toBe(true);
    expect(isIndexablePath("/about")).toBe(true);
    expect(isIndexablePath("/sitemap.xml")).toBe(false);
    expect(isIndexablePath("/robots.txt")).toBe(false);
    expect(isIndexablePath("/posts/$id")).toBe(false);
    expect(isIndexablePath("/docs/$")).toBe(false);
    expect(isIndexablePath("/api/hello")).toBe(false);
    expect(isIndexablePath("/lovable/thing")).toBe(false);
  });

  it("collects paths from the generated route tree", () => {
    const paths = collectRoutePaths(routeTree);
    expect(paths).toContain("/");
  });

  it("builds entries including the root and excluding sitemap.xml", () => {
    const entries = buildEntries(routeTree);
    const paths = entries.map((e) => e.path);
    expect(paths).toContain("/");
    expect(paths).not.toContain("/sitemap.xml");
    expect(entries.find((e) => e.path === "/")?.priority).toBe("1.0");
  });

  it("renders valid sitemap XML with absolute URLs", () => {
    const xml = renderSitemap(buildEntries(routeTree));
    expect(xml).toMatch(/^<\?xml version="1\.0" encoding="UTF-8"\?>/);
    expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    expect(xml).toContain("<loc>https://www.anyekadigitalinstitute.com/</loc>");
    expect(xml).toContain("</urlset>");
  });
});
