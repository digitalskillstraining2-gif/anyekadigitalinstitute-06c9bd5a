import { describe, it, expect } from "vitest";
import {
  isIndexablePath,
  filePathToRoutePath,
  collectRoutePathsFromFiles,
  buildEntries,
  renderSitemap,
} from "./sitemap[.]xml";

describe("sitemap", () => {
  it("filters non-indexable paths", () => {
    expect(isIndexablePath("/")).toBe(true);
    expect(isIndexablePath("/about")).toBe(true);
    expect(isIndexablePath("/sitemap.xml")).toBe(false);
    expect(isIndexablePath("/posts/$id")).toBe(false);
    expect(isIndexablePath("/docs/$")).toBe(false);
    expect(isIndexablePath("/api/hello")).toBe(false);
    expect(isIndexablePath("/lovable/thing")).toBe(false);
  });

  it("maps route file names to URL paths", () => {
    expect(filePathToRoutePath("./index.tsx")).toBe("/");
    expect(filePathToRoutePath("./about.tsx")).toBe("/about");
    expect(filePathToRoutePath("./settings.profile.tsx")).toBe("/settings/profile");
    expect(filePathToRoutePath("./_authenticated.dashboard.tsx")).toBe("/dashboard");
    expect(filePathToRoutePath("./posts/$id.tsx")).toBe("/posts/$id");
    expect(filePathToRoutePath("./sitemap[.]xml.ts")).toBe("/sitemap.xml");
    expect(filePathToRoutePath("./__root.tsx")).toBeNull();
    expect(filePathToRoutePath("./api/hello.ts")).toBeNull();
  });

  it("collects unique route paths from files", () => {
    const paths = collectRoutePathsFromFiles([
      "./index.tsx",
      "./about.tsx",
      "./sitemap[.]xml.ts",
      "./__root.tsx",
    ]);
    expect(paths).toContain("/");
    expect(paths).toContain("/about");
    expect(paths).toContain("/sitemap.xml");
    expect(paths).not.toContain(null as any);
  });

  it("builds entries — root first with priority 1.0, no sitemap.xml", () => {
    const entries = buildEntries([
      "./index.tsx",
      "./about.tsx",
      "./sitemap[.]xml.ts",
    ]);
    const paths = entries.map((e) => e.path);
    expect(paths).toContain("/");
    expect(paths).toContain("/about");
    expect(paths).not.toContain("/sitemap.xml");
    expect(entries.find((e) => e.path === "/")?.priority).toBe("1.0");
    expect(entries.find((e) => e.path === "/about")?.priority).toBe("0.8");
  });

  it("renders valid sitemap XML with absolute URLs", () => {
    const xml = renderSitemap(buildEntries(["./index.tsx", "./about.tsx"]));
    expect(xml).toMatch(/^<\?xml version="1\.0" encoding="UTF-8"\?>/);
    expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    expect(xml).toContain("<loc>https://www.anyekadigitalinstitute.com/</loc>");
    expect(xml).toContain("<loc>https://www.anyekadigitalinstitute.com/about</loc>");
    expect(xml).toContain("</urlset>");
  });
});
