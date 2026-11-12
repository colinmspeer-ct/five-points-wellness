import { conditionMeta, conditionOrder } from "./conditionMeta";
import { dryNeedlingPlaces } from "./dryNeedlingPlaces";
import { locations } from "./locations";
import { modalities } from "./modalities";

export type IndexPage = { href: string; title: string; group: string };

export const catalog: IndexPage[] = [
  { href: "/", title: "Acupuncture in Fishtown, Philadelphia", group: "Practice" },
  { href: "/about", title: "About Cara Speer, M.Ac., L.Ac.", group: "Practice" },
  { href: "/services", title: "Services", group: "Practice" },
  { href: "/contact", title: "Contact", group: "Practice" },
  { href: "/book-appointment", title: "Book an appointment", group: "Practice" },
  { href: "/privacy-policy", title: "Privacy policy", group: "Practice" },
  { href: "/terms", title: "Terms", group: "Practice" },
  { href: "/sitemap", title: "HTML sitemap", group: "Practice" },
  { href: "/acupuncture", title: "Acupuncture in Philadelphia", group: "Services" },
  { href: "/dry-needling", title: "Orthopedic dry needling", group: "Services" },
  { href: "/microneedling", title: "Microneedling", group: "Services" },
  ...modalities.map((item) => ({ href: `/${item.slug}`, title: item.name, group: "Services" })),
  ...conditionOrder.map((slug) => ({
    href: `/acupuncture/${slug}`,
    title: conditionMeta[slug].label,
    group: "Conditions",
  })),
  { href: "/locations", title: "Philadelphia neighborhoods", group: "Locations" },
  ...locations.map((loc) => ({
    href: `/${loc.slug}`,
    title: `Acupuncture in ${loc.name}`,
    group: "Locations",
  })),
  ...dryNeedlingPlaces.map((place) => ({
    href: `/${place.slug}`,
    title: `Dry needling in ${place.name}`,
    group: "Dry needling",
  })),
];

export const catalogGroups = ["Practice", "Services", "Conditions", "Locations", "Dry needling"];
