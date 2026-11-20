// URLs that existed on the original Five Points Wellness site. They must keep
// their exact old form: no trailing slash, served directly with a 200.
// The build step in astro.config.mjs writes each of these as <path>.html.
export const SITE = "https://fivepointswellness.com";

export const LEGACY_PATHS = [
  "/about",
  "/services",
  "/contact",
  "/book-appointment",
  "/privacy-policy",
  "/microneedling",
  "/acupuncture/dry-needling",
  "/acupuncture/pain-injury-recovery",
  "/acupuncture/stress-sleep-wellness",
  "/acupuncture/womens-health-fertility",
  "/acupuncture/digestive-support",
  "/acupuncture/immune-autoimmune",
  "/acupuncture/neurological-health",
  "/acupuncture/sports-performance-recovery",
  "/acupuncture/facial-rejuvenation-cosmetic",
  "/acupuncture/pediatric-acupuncture",
  "/acupuncture/surgical-recovery-scar-treatment",
] as const;

// Newer URLs that duplicated a legacy page. They now redirect to the legacy URL.
export const MOVED_TO_LEGACY: Record<string, string> = {
  "/dry-needling": "/acupuncture/dry-needling",
};

const legacySet = new Set<string>(LEGACY_PATHS);

export function isLegacy(path: string) {
  return legacySet.has(path.replace(/\/+$/, ""));
}

/**
 * The one public form of an internal page path.
 * Home is "/", legacy pages have no trailing slash, every other page ends in "/".
 * Hash and query strings are kept. Files (anything with an extension) are left alone.
 */
export function canonicalPath(input: string) {
  const match = /^([^?#]*)(.*)$/.exec(input || "/")!;
  let path = match[1] || "/";
  const rest = match[2];
  if (path.endsWith("/index.html")) path = path.slice(0, -"index.html".length);
  if (path.endsWith(".html")) path = path.slice(0, -".html".length);
  if (!path.startsWith("/")) path = `/${path}`;
  let bare = path.replace(/\/+$/, "");
  if (bare === "") return `/${rest}`;
  if (MOVED_TO_LEGACY[bare]) bare = MOVED_TO_LEGACY[bare];
  if (legacySet.has(bare)) return bare + rest;
  if (/\.[a-z0-9]+$/i.test(bare)) return bare + rest;
  return `${bare}/${rest}`;
}

/** Internal link href. Use for every link to a page on this site. */
export function href(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return canonicalPath(path);
}

/** Absolute URL for canonical tags, og:url, sitemaps and JSON-LD. */
export function absUrl(path: string) {
  return SITE + canonicalPath(path);
}
