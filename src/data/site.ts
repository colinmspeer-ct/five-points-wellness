export const practice = {
  name: "Five Points Wellness LLC",
  shortName: "Five Points Wellness",
  practitioner: "Cara Speer",
  credentials: "M.Ac., L.Ac.",
  practitionerFull: "Cara Speer, M.Ac., L.Ac.",
  jobTitle: "Licensed Acupuncturist",
  street: "2137 E Huntingdon St",
  city: "Philadelphia",
  region: "PA",
  postal: "19125",
  neighborhood: "Fishtown",
  areaNote: "Fishtown / East Kensington",
  phoneDisplay: "(610) 742-5810",
  phoneTel: "+16107425810",
  email: "fivepointsphila@gmail.com",
  url: "https://fivepointswellness.com",
  parking: "Free street parking readily available",
  response: "Typical email response within one business day",
  bookingUrl: "https://fivepointswellness.acubliss.app/embedded-patient-portal/",
  lat: 39.983754,
  lng: -75.12276,
  mapEmbed:
    "https://maps.google.com/maps?q=Five%20Points%20Wellness%20LLC%2C%202137%20E%20Huntingdon%20St%2C%20Philadelphia%2C%20PA%2019125&z=16&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Five%20Points%20Wellness%20LLC%2C%202137%20E%20Huntingdon%20St%2C%20Philadelphia%2C%20PA%2019125",
};

export const addressLine = `${practice.street}, ${practice.city}, ${practice.region} ${practice.postal}`;

export const hours = [
  { day: "Monday", time: "9 AM–7 PM", opens: "09:00", closes: "19:00", schemaDay: "Monday" },
  { day: "Tuesday", time: "9 AM–7 PM", opens: "09:00", closes: "19:00", schemaDay: "Tuesday" },
  { day: "Wednesday", time: "9 AM–7 PM", opens: "09:00", closes: "19:00", schemaDay: "Wednesday" },
  { day: "Thursday", time: "9 AM–7 PM", opens: "09:00", closes: "19:00", schemaDay: "Thursday" },
  { day: "Friday", time: "9 AM–3 PM", opens: "09:00", closes: "15:00", schemaDay: "Friday" },
  { day: "Saturday", time: "10 AM–2 PM", opens: "10:00", closes: "14:00", schemaDay: "Saturday" },
  { day: "Sunday", time: "Closed", opens: "", closes: "", schemaDay: "Sunday" },
] as const;

export const training = [
  "Over 2,000 hours of formal graduate-level education in acupuncture and Chinese medicine",
  "Extensive study of human anatomy, physiology, and pathology",
  "Advanced training in musculoskeletal and orthopedic assessment",
  "Clinical focus on trigger points, motor points, and neuromuscular dysfunction",
  "Full-time supervised clinical practice treating a wide range of conditions",
  "Successful completion of two national board examinations required for licensure as an acupuncturist",
];

export const testimonials = [
  {
    quote:
      "Cara has been my acupuncturist for the past year. She has given me many treatments which have helped relieve physical pain, support my emotional wellbeing and give me an overall sense of grounding. I always leave the treatments with Cara feeling lighter and more at peace. I highly recommend anyone who wants to try acupuncture to see Cara—she will surely help change your life and support your wellness journey.",
    author: "KG",
  },
  {
    quote:
      "Before seeing Cara, my anxiety was getting worse by the day. I had tried to push through on my own but nothing helped. From my very first session, Cara's calm presence and thoughtful approach made me feel safe and understood. I can confidently say that through my sessions, my anxiety completely went away. I feel like myself again.",
    author: "CS",
  },
  {
    quote:
      "I've gone to Five Points Wellness for my shin splints and lower back pain. I was amazed at how much relief I got just from my first session! It was my first time ever receiving acupuncture and she was very informative about the entire process. I would highly recommend Five Points to anyone struggling with similar issues!",
    author: "ES",
  },
  {
    quote:
      "I've been seeing Cara for acupuncture for awhile now and I can honestly say she's made a huge difference in how I feel day to day. I came to her struggling with anxiety, stress, and lingering pain, and she has this calm, grounding energy that makes it easy to relax the second you walk in. Every session feels like a reset button for my body and mind. I always leave feeling lighter, clearer, and more centered. I can't recommend her enough.",
    author: "RF",
  },
  {
    quote:
      "I just wanted to talk about Cara she is my acupuncturist. When I tell you she's so detail oriented, so caring and such a good bedside manner and she doesn't forget anything. Week to week she would go over the things we talked about before. If I could clone Cara, I would. She is so patient, understanding and I could go on and on. My testimony to Cara is they don't make them like her, I don't want another acupuncturist... I only want Cara.",
    author: "LL",
  },
];

export const conditionsTreated = [
  { label: "Acute and chronic pain and musculoskeletal disorders", href: "/acupuncture/pain-injury-recovery" },
  { label: "Headaches and migraines", href: "/acupuncture/pain-injury-recovery" },
  { label: "Anxiety, depression, mental health, and stress", href: "/acupuncture/stress-sleep-wellness" },
  { label: "Digestive issues and IBS", href: "/acupuncture/digestive-support" },
  { label: "Sleep disorders and insomnia", href: "/acupuncture/stress-sleep-wellness" },
  { label: "Menstrual irregularities, PMS, menopause, fertility, and reproductive health", href: "/acupuncture/womens-health-fertility" },
  { label: "Allergies and respiratory conditions", href: "/acupuncture/immune-autoimmune" },
  { label: "Autoimmune conditions", href: "/acupuncture/immune-autoimmune" },
  { label: "Neurological and neuromuscular conditions", href: "/acupuncture/neurological-health" },
  { label: "Fatigue and low energy", href: "/acupuncture/stress-sleep-wellness" },
  { label: "Recovery from surgery and scar treatment", href: "/acupuncture/surgical-recovery-scar-treatment" },
];

export const visitSteps = [
  {
    title: "Initial consultation",
    text: "A health assessment that covers your symptoms, lifestyle, and treatment goals.",
  },
  {
    title: "Treatment planning",
    text: "A plan designed for your health needs. Traditional Chinese Medicine, 5 Element acupuncture, and Kiiko-style may be used depending on the patient.",
  },
  {
    title: "Needle insertion and other modalities",
    text: "Fine, sterile needles are gently inserted at specific points. Most patients find this comfortable. Other techniques may be added at the practitioner's discretion.",
  },
  {
    title: "Rest on the table",
    text: "You rest for 15–40 minutes while the needles work. Depending on the plan, some needles may be inserted and removed immediately.",
  },
  {
    title: "Follow-up care",
    text: "Later sessions and lifestyle recommendations are used to maintain progress.",
  },
];

export type Crumb = { name: string; href: string };

export function canonicalFor(pathname: string) {
  let clean = pathname || "/";
  if (clean.endsWith("/index.html")) clean = clean.slice(0, -"index.html".length) || "/";
  if (clean.endsWith(".html")) clean = clean.slice(0, -".html".length);
  if (!clean.startsWith("/")) clean = `/${clean}`;
  if (clean !== "/" && !clean.endsWith("/")) clean = `${clean}/`;
  return practice.url + clean;
}
