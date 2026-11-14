import type { Area } from "../data/areas";
import type { OfferedService } from "../data/offeredServices";
import { addressLine, practice } from "../data/site";

function hash(value: string) {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function pairKey(area: Area, service: OfferedService) {
  return `${area.slug}:${service.slug}`;
}

export function lede(area: Area, service: OfferedService) {
  const where = area.atStudio
    ? `The studio is already in ${area.name}, at ${addressLine}.`
    : `There is no Five Points Wellness office in ${area.name}. ${service.h1Name} for ${area.name} residents is at the Fishtown studio, ${addressLine}.`;
  return `${where} ${area.distance} Care is with ${practice.practitionerFull}. Call or text ${practice.phoneDisplay}.`;
}

export function pairEssay(area: Area, service: OfferedService) {
  const s = service.h1Name;
  const n = area.name;
  const marks = area.landmarks;
  const first = marks[0];
  const mid = marks[Math.min(1, marks.length - 1)];
  const last = marks[marks.length - 1];
  const localZip = area.zips.split(",")[0].trim();
  const ride = area.group === "philadelphia" ? "an in-city ride" : area.group === "main-line" ? "a Main Line drive" : "a drive in from outside Center City";
  return [
    `${s} for ${n} is booked at Five Points Wellness LLC on East Huntingdon Street, not at ${first}.`,
    `A ${n} resident who wants ${s.toLowerCase()} calls or texts (610) 742-5810 and then starts from ${mid}.`,
    `${n} is ${area.atStudio ? "the neighborhood edge where the studio already stands" : "only the starting point"}; ${s.toLowerCase()} does not add a second street address in ${n}.`,
    `For ${s.toLowerCase()}, the ${n} mail code to name is ${localZip}, and the studio code stays 19125.`,
    `Monday through Thursday until 7 PM is the evening window for ${s.toLowerCase()} when the ${n} trip is ${ride}, and Friday still ends at 3 PM for ${n} bookings.`,
    `${last} is a fair way for a ${n} patient to describe the start of a ${s.toLowerCase()} visit, while East Huntingdon Street is the end of that same ${n} trip.`,
    `Cara Speer sees ${s.toLowerCase()} patients who start in ${n} in the same Fishtown room used for every other town, including ${n}.`,
    `If ${s.toLowerCase()} for a person from ${n} is combined with acupuncture or cupping, that choice is made at the studio after they arrive from ${n}.`,
  ].join(" ");
}

export function bridge(area: Area, service: OfferedService) {
  const n = hash(pairKey(area, service)) % 6;
  const landmark = area.landmarks[0];
  const second = area.landmarks[1] ?? landmark;
  const frames = [
    `A ${service.name.toLowerCase()} search that starts near ${landmark} still ends on East Huntingdon Street. ${area.transit} ${service.summary}`,
    `From ${second}, the useful question is the trip, not a second address. ${area.drive} Once you are there, ${service.summary.charAt(0).toLowerCase()}${service.summary.slice(1)}`,
    `${area.name} and the Fishtown studio are ${area.atStudio ? "the same neighborhood edge" : "connected by the trip above"}. ${area.commute} The ${service.name.toLowerCase()} visit itself follows what the practice already publishes: ${service.summary.charAt(0).toLowerCase()}${service.summary.slice(1)}`,
    `If you are timing a ${service.name.toLowerCase()} visit from ${area.name}, use ${area.distance.charAt(0).toLowerCase()}${area.distance.slice(1)} ${area.transit}`,
    `${landmark} is a ${area.name} landmark, not a treatment room. ${area.drive} Phone ${practice.phoneDisplay} if the drive time is the part you need to check before you book ${service.name.toLowerCase()}.`,
    `ZIP codes people use around ${area.name} include ${area.zips}. The studio ZIP is 19125. ${area.commute} For ${service.name.toLowerCase()}, ${service.summary.charAt(0).toLowerCase()}${service.summary.slice(1)}`,
  ];
  return frames[n];
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
