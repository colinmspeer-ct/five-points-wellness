import type { Area } from "../data/areas";
import type { OfferedService } from "../data/offeredServices";
import { addressLine, practice } from "../data/site";

export function lede(area: Area, service: OfferedService) {
  return area.atStudio
    ? `Our studio is right here in ${area.name}, at ${addressLine}. ${practice.practitionerFull}, sees patients there. Call or text ${practice.phoneDisplay}.`
    : `We don't have an office in ${area.name}. Patients from ${area.name} come to our Fishtown studio at ${addressLine} for ${service.name.toLowerCase()} with ${practice.practitionerFull}`;
}

export function pairFaq(area: Area, service: OfferedService) {
  return {
    q: `How do I book ${service.name.toLowerCase()} from ${area.name}?`,
    a: area.atStudio
      ? `Book online or call or text ${practice.phoneDisplay}. The studio is at ${addressLine}. ${area.transit}`
      : `Book online or call or text ${practice.phoneDisplay}. You are coming to ${addressLine}. ${area.distance}`,
  };
}

export function pageTitle(area: Area, service: OfferedService) {
  return `${service.h1Name} in ${area.h1Place} | Five Points Wellness`;
}

export function pageDescription(area: Area, service: OfferedService) {
  const place = area.atStudio
    ? `at the Fishtown studio in ${area.name}`
    : `for ${area.name} residents, seen at the Fishtown studio`;
  return `${service.h1Name} ${place}. Five Points Wellness LLC, ${addressLine}. Call or text ${practice.phoneDisplay}.`;
}
