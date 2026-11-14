import { areas } from "./areas";
import { conditionMeta, conditionOrder } from "./conditionMeta";
import { dryNeedlingPlaces } from "./dryNeedlingPlaces";
import { locations } from "./locations";
import { modalities } from "./modalities";
import { offeredServices } from "./offeredServices";

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
  { href: "/locations", title: "All areas", group: "Locations" },
  ...locations
    .filter((loc) => loc.slug === "acupuncture-bella-vista")
    .map((loc) => ({
      href: `/${loc.slug}`,
      title: `Acupuncture in ${loc.name}`,
      group: "Locations",
    })),
  ...dryNeedlingPlaces
    .filter((place) => place.slug === "dry-needling-bella-vista")
    .map((place) => ({
      href: `/${place.slug}`,
      title: `Dry needling in ${place.name}`,
      group: "Locations",
    })),
  ...areas.flatMap((area) => [
    { href: `/${area.slug}`, title: `${area.name} area hub`, group: area.name },
    ...offeredServices.map((service) => ({
      href: `/${area.slug}/${service.slug}`,
      title: `${service.h1Name} in ${area.h1Place}`,
      group: area.name,
    })),
  ]),
];

export const catalogGroups = ["Practice", "Services", "Conditions", "Locations", ...areas.map((area) => area.name)];
