export type OfferedService = {
  slug: string;
  name: string;
  h1Name: string;
  serviceType: string;
  summary: string;
  paragraphs: string[];
  points: string[];
  faqs: { q: string; a: string }[];
  /** Shown once. Not a new clinical claim. */
  caveat?: string;
};

export const offeredServices: OfferedService[] = [
  {
    slug: "acupuncture",
    name: "Acupuncture",
    h1Name: "Acupuncture",
    serviceType: "Acupuncture",
    summary:
      "Needle therapy on the meridian system. A session is listed as 50 minutes. Traditional Chinese Medicine, 5 Element acupuncture, and Kiiko-style may be used depending on the patient.",
    paragraphs: [
      "Acupuncture at Five Points Wellness is the gentle insertion of very thin, sterile needles at specific points to stimulate qi, the vital energy the practice describes, pronounced “chee.” The aim published on the site is to restore balance along the body’s energy pathways and to support the body’s own healing.",
      "The practice says modern research has shown that acupuncture can trigger endorphins, improve circulation, and help regulate the nervous system, and that it is used as a complement to modern medical care. It is not described as a replacement for a physician or for emergency care.",
      "A published visit runs about 50 minutes. The first visit includes a health assessment of symptoms, lifestyle, and goals, then a plan. Needles are inserted and most patients find that comfortable. You rest about 15 to 40 minutes. Depending on the plan, some needles are inserted and removed immediately. Later visits and lifestyle suggestions are used to maintain progress.",
      "Benefits named on the site are pain relief, stress reduction, improved energy, and holistic wellness. Styles named are Traditional Chinese Medicine, 5 Element acupuncture, and Kiiko-style, chosen depending on the patient.",
    ],
    points: [
      "50-minute session, as listed",
      "TCM, 5 Element, and Kiiko-style, depending on the patient",
      "Rest on the table about 15 to 40 minutes",
      "Complementary to medical care, not a replacement for it",
    ],
    faqs: [
      {
        q: "How long is an acupuncture session?",
        a: "The services list says 50 minutes. Time on the table with needles in place is described as about 15 to 40 minutes, and some needles may be removed immediately.",
      },
      {
        q: "Which acupuncture styles are used?",
        a: "Traditional Chinese Medicine, 5 Element acupuncture, and Kiiko-style may be used depending on the patient.",
      },
    ],
  },
  {
    slug: "dry-needling",
    name: "Dry needling",
    h1Name: "Dry Needling",
    serviceType: "Dry needling",
    summary:
      "Orthopedic dry needling for trigger points, motor points, and movement pain. It is done inside acupuncture-based care. A separate price is not published.",
    paragraphs: [
      "Dry needling at this office treats muscular pain, trigger points, and movement dysfunction with fine, sterile needles. The practice calls it one application of the same foundational principles and tools used in acupuncture, performed inside integrative musculoskeletal care.",
      "The shorter services-list line calls it orthopedic dry needling aimed at motor points, trigger points, and areas of tension for chronic pain, sports injuries, and movement restrictions. Like the other hands-on methods on that list, it is included in an acupuncture session at the practitioner’s discretion. No separate dry needling fee is published.",
      "Trigger points are described as tight, overactive spots that can contribute to localized pain, stiffness, reduced range of motion, and pain that travels. A needle in one of those spots may cause a brief twitch. The practice describes that as a way to help reset abnormal muscle activity, improve circulation, and reduce localized tension. Motor-point work uses the place where a nerve enters a muscle, so one point can affect the whole muscle.",
      "A session starts with posture, movement, and the painful area. Treatment typically lasts 20 to 60 minutes and may be combined with acupuncture, cupping, or manual work. Many patients notice a change during or soon after treatment. Chronic problems often need a series. Mild soreness like a workout can last 24 to 48 hours. The practice has published before-and-after photos from one 20-minute session showing shoulder range of motion. Individual results vary.",
      "The practice states this care is given by a licensed acupuncturist with more than 2,000 hours of graduate education in acupuncture and Chinese medicine, study of anatomy, physiology, and pathology, orthopedic assessment, a clinical focus on trigger points and motor points, supervised practice, and two national board exams required for licensure.",
    ],
    points: [
      "Neck, shoulder, and back pain",
      "Sciatica and nerve-related pain patterns",
      "Hip, knee, and joint dysfunction",
      "Sports injuries, tightness, headaches, and TMJ-related pain",
      "Restricted mobility",
    ],
    faqs: [
      {
        q: "Does dry needling hurt?",
        a: "Most patients tolerate treatment well. Sensations vary and may include a brief twitch, pressure, or dull ache when a trigger point is stimulated.",
      },
      {
        q: "Is there a separate dry needling price?",
        a: "No price is published for dry needling alone. The services list includes it in an acupuncture session at the practitioner’s discretion.",
      },
    ],
  },
  {
    slug: "moxibustion",
    name: "Moxibustion",
    h1Name: "Moxibustion",
    serviceType: "Moxibustion",
    summary:
      "Heat from dried mugwort burned on acupuncture points, used inside an acupuncture visit when Cara chooses it.",
    paragraphs: [
      "Moxibustion is traditional heat therapy. Dried mugwort is burned on acupuncture points. The published description stops at “various effects.” The site does not list a fixed set of conditions treated only with moxa, and it does not say whether the herb sits on the skin or is held near it.",
      "It is not a walk-in heat menu. You book an acupuncture visit. Cara decides whether heat belongs in that plan. A separate moxibustion price is not published. Acupuncture sessions are listed as 50 minutes, and moxa, when it is used, happens inside that visit.",
      "If you want to ask before you commit, the practice also offers a complimentary session for questions. That offer is a conversation, not a published treatment protocol.",
    ],
    points: [
      "Dried mugwort, burned on acupuncture points",
      "Included at the practitioner’s discretion",
      "No standalone price published",
    ],
    faqs: [
      {
        q: "Is moxibustion its own appointment?",
        a: "Not as a published standalone service. It is included in an acupuncture session when the practitioner decides it fits.",
      },
      {
        q: "What herb is used?",
        a: "Dried mugwort, burned on acupuncture points.",
      },
    ],
  },
  {
    slug: "gua-sha",
    name: "Gua sha",
    h1Name: "Gua Sha",
    serviceType: "Gua sha",
    summary:
      "A smooth-edged tool and gentle pressure along the skin, for muscle tension and circulation, inside an acupuncture visit.",
    paragraphs: [
      "The services list spells this guasha and describes an old scraping method: a smooth-edged tool, gentle pressure along the skin, to release muscle tension, improve circulation, and, in the practice’s words, promote detoxification. This page keeps that scope.",
      "Gua sha is not cupping and it is not facial cupping. Cupping uses suction. Facial cupping is gentler suction for the face and neck. Cosmetic acupuncture is a needle treatment. Gua sha strokes the skin with a tool.",
      "Redness where the tool has passed is common with scraping. The site does not publish how long that redness lasts or a brand of tool. It is included in an acupuncture session at Cara’s discretion. A gua-sha-only appointment is not published.",
    ],
    points: [
      "Smooth-edged tool",
      "Muscle tension and circulation",
      "Included at the practitioner’s discretion",
    ],
    faqs: [
      {
        q: "Do you spell it gua sha or guasha?",
        a: "The services list says Guasha. Patients often search for gua sha. Both refer to the same listed service.",
      },
      {
        q: "Can I book gua sha only?",
        a: "A gua-sha-only appointment is not published. Book an acupuncture session and discuss the plan.",
      },
    ],
  },
  {
    slug: "cupping",
    name: "Cupping",
    h1Name: "Cupping",
    serviceType: "Cupping therapy",
    summary:
      "Therapeutic suction that draws blood to an area to ease deep muscle tension, support circulation, and reduce pain.",
    paragraphs: [
      "Cupping here is therapeutic suction. The practice says cups draw blood to targeted areas to help release deep muscle tension, improve circulation, and reduce pain. Because blood is drawn to the skin, round marks can follow. The site does not say how long those marks last.",
      "Body cupping is the service on this page. Facial cupping is a separate, gentler technique for the face and neck. The sports page mentions cupping as something that may be added around an event. It is still included when Cara decides it belongs, not sold as its own priced menu.",
      "You book an acupuncture appointment at the Fishtown studio. Tell Cara if you need to know what your skin may look like afterward, because aftercare rules for the marks are not published.",
    ],
    points: [
      "Suction for deep muscle tension",
      "Marks can follow because blood is drawn to the area",
      "Included at the practitioner’s discretion",
    ],
    faqs: [
      {
        q: "Why do cupping marks appear?",
        a: "The practice says cupping draws blood to the targeted area. Marks can follow from that. How long they show is not published.",
      },
      {
        q: "Is cupping its own appointment?",
        a: "A standalone cupping price is not published. It is included in an acupuncture session at Cara’s discretion.",
      },
    ],
  },
  {
    slug: "facial-cupping",
    name: "Facial cupping",
    h1Name: "Facial Cupping",
    serviceType: "Facial cupping",
    summary:
      "Gentle suction for drainage or lifting of the face and neck. Not cosmetic acupuncture and not microneedling.",
    paragraphs: [
      "Facial cupping is gentle suction specifically for drainage or lifting of the face and neck. That is the whole published description. The site does not give a series length, a price, or before-and-after photos for facial cupping. The face photos on the site are microneedling, labeled before and after 3 treatments.",
      "It is not cosmetic acupuncture, which uses needles, and it is not microneedling, which has its own prices. It is also not the stronger body cupping used for deep muscle tension. Facial cupping may be folded into a visit when Cara chooses it.",
      "The practice says facial rejuvenation acupuncture and microneedling are not performed on the same day. Facial cupping is not given that same written rule. Ask when you book if you want more than one face technique.",
    ],
    points: [
      "Gentle suction for the face and neck",
      "Drainage or lifting, in the practice’s words",
      "No facial-cupping price or photo series published",
    ],
    faqs: [
      {
        q: "Is facial cupping the same as cosmetic acupuncture?",
        a: "No. Facial cupping is gentle suction. Cosmetic acupuncture is a needle treatment with its own page.",
      },
      {
        q: "Are there facial cupping photos?",
        a: "Not on the current site. The face photos are microneedling, labeled before and after 3 treatments.",
      },
    ],
  },
  {
    slug: "herbal-liniments",
    name: "Herbal liniments",
    h1Name: "Herbal Liniments",
    serviceType: "Herbal liniments",
    summary:
      "External liniments applied to the body to ease pain, calm inflammation, and support recovery. Not teas or pills.",
    paragraphs: [
      "Herbal liniments at Five Points Wellness are for external use. They are applied to an area of the body to reduce inflammation, ease pain, and promote recovery. They are not described as teas, pills, or a retail shop.",
      "The site does not name the formulas or the herbs inside them. If you have an allergy, ask before the visit. Nothing on the site says bottles are sold to take home.",
      "Liniments sit with the other hands-on techniques that can be part of an acupuncture session at the practitioner’s discretion. They are not a substitute for a surgeon’s or physician’s instructions. A separate liniment fee is not published.",
    ],
    points: [
      "External use only",
      "Inflammation, pain, and recovery, as published",
      "Ingredients are not listed on the site",
    ],
    faqs: [
      {
        q: "Are the liniments taken by mouth?",
        a: "No. The practice describes them as external-use liniments applied to an area of the body.",
      },
      {
        q: "Can I buy a bottle to take home?",
        a: "The site does not say liniments are sold. Ask the office if you want something between visits.",
      },
    ],
  },
  {
    slug: "tuina",
    name: "Tuina",
    h1Name: "Tuina",
    serviceType: "Tuina",
    summary:
      "Chinese therapeutic massage to harmonize qi, release blockages, and restore balance, inside an acupuncture visit.",
    paragraphs: [
      "Tuina is traditional Chinese therapeutic massage. At this office it is used to harmonize qi flow, release blockages, and restore balance. It is bodywork inside a Chinese medicine visit, not a separate spa menu with its own hour and price.",
      "The site does not publish a 60-minute massage fee or promise that every acupuncture visit includes hands-on work. You book acupuncture and ask whether tuina belongs in the plan. Adult sessions that are acupuncture are listed as 50 minutes. Tuina is not given its own duration.",
      "Pediatric tuina is different. The pediatric page describes it as gentle therapeutic massage for children, often when needles are not used. That is a children’s visit, not this adult bodywork line.",
    ],
    points: [
      "Therapeutic massage in the Chinese medicine sense",
      "Included at the practitioner’s discretion",
      "No standalone tuina price published",
    ],
    faqs: [
      {
        q: "Is tuina a massage I can book by itself?",
        a: "A standalone tuina appointment is not published. It is included in acupuncture care when Cara decides to use it.",
      },
      {
        q: "Do children receive tuina?",
        a: "The pediatric page lists pediatric tuina as gentle therapeutic massage. That visit is described separately from adult tuina.",
      },
    ],
  },
  {
    slug: "nutrition",
    name: "Nutrition",
    h1Name: "Chinese Nutrition",
    serviceType: "Traditional Chinese nutrition",
    summary:
      "Food-as-medicine guidance from a constitutional look and the season, inside Chinese medicine care.",
    paragraphs: [
      "Nutrition at Five Points Wellness is traditional Chinese nutrition therapy. The practice describes food as medicine: dietary guidance based on a constitutional assessment and on the season, in support of health and healing.",
      "The site does not publish meal plans, calorie targets, or a supplement shop. It also does not say this replaces a registered dietitian or a physician’s diet order. If you already have a medical diet, bring it so the conversation can start from what you were told.",
      "Guidance, when it is used, comes out of the same assessment as acupuncture: symptoms, lifestyle, and goals. It is listed with the techniques included in a session at the practitioner’s discretion. A separate nutrition membership is not published.",
    ],
    points: [
      "Constitution and season, not a generic handout",
      "No published meal plan or supplement shop",
      "Included at the practitioner’s discretion",
    ],
    faqs: [
      {
        q: "Will I get a written meal plan?",
        a: "The site says personalized dietary guidance. It does not say a formal meal plan is provided.",
      },
      {
        q: "Do you sell herbs with the nutrition visit?",
        a: "No shop is described on the site.",
      },
    ],
  },
  {
    slug: "qigong",
    name: "Qigong",
    h1Name: "Qigong",
    serviceType: "Qigong",
    summary:
      "Gentle movement, breathing, and meditation. No public class schedule is posted.",
    paragraphs: [
      "Qigong here is gentle movement, breathing, and meditation used to cultivate and balance life energy. The practice says it supports physical vitality, mental clarity, and spiritual well-being through mindful exercise.",
      "The website does not list a weekly class, a studio rental, or a drop-in hour. Until a schedule is published, read qigong as something that may be part of care at the office, the same way the other listed practices may be included in a session at Cara’s discretion.",
      "The site does not name a lineage, a form, or a number of movements. If you need something to practice at home, ask during the visit what you were actually shown. A separate qigong fee is not published.",
    ],
    points: [
      "Movement, breathing, and meditation",
      "No class schedule on the site",
      "Included at the practitioner’s discretion",
    ],
    faqs: [
      {
        q: "Do you publish a qigong class time?",
        a: "No. Ask the office before you assume a group class is running.",
      },
      {
        q: "Is qigong billed on its own?",
        a: "A separate qigong fee is not published.",
      },
    ],
  },
  {
    slug: "microneedling",
    name: "Microneedling",
    h1Name: "Microneedling",
    serviceType: "Microneedling",
    summary:
      "Collagen induction for skin. Published prices are $350 for one session and $1,200 for four. Individual results vary.",
    paragraphs: [
      "Microneedling, also called collagen induction therapy, uses fine needles to create controlled micro-channels in the skin. The practice says that stimulates the body’s healing response and the production of collagen and elastin, with the aim of smoother, firmer, more even-toned skin. At this office it is done with an eye on the health patterns underneath the skin, not only the surface.",
      "Published prices are $350 for a single session and $1,200 for four sessions, listed as 50 minutes each, with the package described as a $200 savings. The same site also says treatment time can run about 30 to 60 minutes depending on the area, and that best results are often a series of 4 to 6 sessions spaced 4 to 6 weeks apart. Both sets of figures are published. Individual results vary.",
      "The practice’s photos are labeled before and after 3 treatments. Concerns named on the page include fine lines, firmness, acne scarring, uneven tone, pores, sun damage, texture, and stretch marks. Areas named are the face, neck and décolletage, scalp for hair-thinning support, and body for scars and stretch marks.",
      "A numbing cream is applied first. Afterward, redness and mild swelling often settle in 24 to 48 hours. Mineral sunscreen is recommended for a week when there is sun. Facial rejuvenation acupuncture and microneedling are not done on the same day. If acupuncture happens the same day, only body points are used. A full contraindication list, including pregnancy and bleeding problems, is on the main microneedling page.",
    ],
    points: [
      "$350 single session, $1,200 for four",
      "Numbing cream is used",
      "Not the same day as facial acupuncture",
      "Individual results vary",
    ],
    faqs: [
      {
        q: "What does microneedling cost?",
        a: "The site lists $350 for one session and $1,200 for four sessions, 50 minutes each. The package is described as saving $200.",
      },
      {
        q: "Can microneedling be combined with acupuncture?",
        a: "Yes, for body points on the same day. Facial rejuvenation acupuncture and microneedling are not performed on the same day.",
      },
    ],
  },
  {
    slug: "pediatric-acupuncture",
    name: "Pediatric acupuncture",
    h1Name: "Pediatric Acupuncture",
    serviceType: "Pediatric acupuncture",
    summary:
      "Gentle pediatric care, including Shonishin. For a child under 7, or a child who is anxious or not comfortable with needles, needles are not used.",
    paragraphs: [
      "Pediatric acupuncture at Five Points Wellness is described as gentle and adjusted for a child’s age and comfort. Care can include Shonishin, a Japanese non-needle technique that uses small tools on the skin, plus acupressure, moxibustion, cupping, and pediatric tuina, which the page calls gentle therapeutic massage.",
      "The page is explicit: for children under 7, or those who are anxious, sensitive, or not comfortable with needles, needles will not be used. The FAQ repeats that if a child is not comfortable with needles, they will not be used. Children of all ages can be seen, including infants, toddlers, school-age children, and adolescents.",
      "Concerns named on the pediatric page include stress and emotional regulation, sleep, stomach aches, constipation, nausea, appetite, frequent colds, allergies, asthma, recovery from illness, ADHD and attention challenges, sensory processing, growing pains, headaches, and pediatric incontinence. A separate pediatric price is not published.",
    ],
    points: [
      "Shonishin and other non-needle methods",
      "Needles are not used under age 7 or when a child is not comfortable",
      "Infants through adolescents, as published",
    ],
    faqs: [
      {
        q: "Does pediatric acupuncture use needles?",
        a: "Not always. Many children are treated with Shonishin, acupressure, moxibustion, cupping, or gentle massage. If a child is not comfortable with needles, they will not be used.",
      },
      {
        q: "What ages can be treated?",
        a: "The pediatric page says children of all ages, including infants, toddlers, school-age children, and adolescents.",
      },
    ],
  },
];

export const offeredServiceSlugs = new Set(offeredServices.map((service) => service.slug));

export function mainServiceHref(slug: string) {
  if (slug === "pediatric-acupuncture") return "/acupuncture/pediatric-acupuncture";
  return `/${slug}`;
}
