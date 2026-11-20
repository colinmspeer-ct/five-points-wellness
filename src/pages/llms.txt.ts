// /llms.txt: a plain summary of the practice for AI search tools, built from the same data as the pages.
import { absUrl } from "../lib/legacy";
import { areas } from "../data/areas";
import { conditionMeta, conditionOrder } from "../data/conditionMeta";
import { modalities } from "../data/modalities";
import { addressLine, hours, practice } from "../data/site";

export function GET() {
  const link = (name: string, path: string) => `- [${name}](${absUrl(path)})`;
  const lines = [
    "# Five Points Wellness",
    "",
    `> Acupuncture and traditional Chinese medicine with ${practice.practitionerFull}, licensed acupuncturist, at ${practice.name}, ${addressLine} (${practice.areaNote}). Call or text ${practice.phoneDisplay}. Email ${practice.email}.`,
    "",
    "Visits are by appointment. Hours:",
    ...hours.map((row) => `- ${row.day}: ${row.time}`),
    "",
    `Book online at ${absUrl("/book-appointment")}, or call or text ${practice.phoneDisplay}.`,
    "",
    "## Main pages",
    link("Home", "/"),
    link("About Cara Speer", "/about"),
    link("Services", "/services"),
    link("Book an appointment", "/book-appointment"),
    link("Contact", "/contact"),
    link("Acupuncture in Philadelphia", "/acupuncture"),
    link("Orthopedic dry needling", "/acupuncture/dry-needling"),
    link("Microneedling", "/microneedling"),
    "",
    "## Conditions",
    ...conditionOrder.map((slug) => link(conditionMeta[slug].label, `/acupuncture/${slug}`)),
    "",
    "## Other services",
    ...modalities.map((item) => link(item.name, `/${item.slug}`)),
    "",
    "## Neighborhoods",
    link("All areas we serve", "/locations"),
    ...areas.map((area) => link(area.name, `/${area.slug}`)),
    "",
    "## Optional",
    link("HTML sitemap", "/sitemap"),
    `- [XML sitemap](${practice.url}/sitemap-index.xml)`,
    link("Privacy policy", "/privacy-policy"),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
