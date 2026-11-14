import { areas } from "./areas";
import { conditionMeta, conditionOrder } from "./conditionMeta";
import { dryNeedlingPlaces } from "./dryNeedlingPlaces";
import { locations } from "./locations";
import { modalities } from "./modalities";
import { offeredServices } from "./offeredServices";

export type IndexPage = { href: string; title: string; group: string };

export const catalog: IndexPage[] = [
  { href: "/", title: "Home", group: "About and contact" },
  { href: "/about", title: "About Cara Speer, M.Ac., L.Ac.", group: "About and contact" },
  { href: "/contact", title: "Contact", group: "About and contact" },
  { href: "/book-appointment", title: "Book an appointment", group: "About and contact" },
  { href: "/privacy-policy", title: "Privacy policy", group: "About and contact" },
  { href: "/terms", title: "Terms", group: "About and contact" },
  { href: "/sitemap/", title: "HTML sitemap", group: "About and contact" },
  { href: "/services", title: "Services overview", group: "Services" },
  { href: "/acupuncture", title: "Acupuncture in Philadelphia", group: "Services" },
  { href: "/dry-needling", title: "Orthopedic dry needling", group: "Services" },
  { href: "/microneedling", title: "Microneedling", group: "Services" },
  ...modalities.map((item) => ({ href: `/${item.slug}`, title: item.name, group: "Services" })),
  ...conditionOrder.map((slug) => ({
    href: `/acupuncture/${slug}`,
    title: conditionMeta[slug].label,
    group: "Services",
  })),
  { href: "/locations", title: "All areas", group: "Area hubs" },
  ...areas.map((area) => ({ href: `/${area.slug}`, title: `${area.name} area hub`, group: "Area hubs" })),
  ...locations
    .filter((loc) => loc.slug === "acupuncture-bella-vista")
    .map((loc) => ({
      href: `/${loc.slug}`,
      title: `Acupuncture in ${loc.name}`,
      group: "Area hubs",
    })),
  ...areas.flatMap((area) =>
    offeredServices.map((service) => ({
      href: `/${area.slug}/${service.slug}`,
      title: `${service.h1Name} in ${area.h1Place}`,
      group: "Service by area",
    })),
  ),
  ...dryNeedlingPlaces
    .filter((place) => place.slug === "dry-needling-bella-vista")
    .map((place) => ({
      href: `/${place.slug}`,
      title: `Dry needling in ${place.name}`,
      group: "Service by area",
    })),
];

export const catalogGroups = ["About and contact", "Services", "Area hubs", "Service by area"];
