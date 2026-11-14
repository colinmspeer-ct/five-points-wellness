export type Modality = {
  slug: string;
  name: string;
  serviceType: string;
  h1: string;
  title: string;
  description: string;
  lede: string;
  sections: { heading: string; paragraphs: string[]; items?: string[] }[];
  faqs: { q: string; a: string }[];
  notice?: string;
};

const discretion =
  "On the services list, Five Points Wellness says every technique below acupuncture is included in an acupuncture session at the practitioner's discretion. You book an acupuncture visit. Cara Speer decides whether this technique is part of that visit. A separate price is not published.";

export const modalities: Modality[] = [
  {
    slug: "moxibustion",
    name: "Moxibustion",
    serviceType: "Moxibustion",
    h1: "Moxibustion in Philadelphia",
    title: "Moxibustion in Philadelphia | Five Points Wellness",
    description:
      "Moxibustion at Five Points Wellness in Fishtown: heat from dried mugwort on acupuncture points, used within an acupuncture visit when Cara Speer chooses it.",
    lede:
      "Moxibustion at Five Points Wellness is traditional heat therapy. Dried mugwort is burned on acupuncture points. The practice describes the aim simply as various effects, chosen for the person in front of Cara, not as a fixed protocol.",
    sections: [
      {
        heading: "What moxibustion is in this office",
        paragraphs: [
          "The services page calls moxibustion traditional heat therapy using dried mugwort burned on acupuncture points. That is the whole published description, and this page does not add claims the practice has not made. Cara will tell you how heat is being used in your visit.",
          discretion,
          "Acupuncture sessions are listed as 50 minutes. Moxibustion, when it is used, happens inside that visit along with any other technique she selects. It is not offered here as a walk-in heat menu.",
        ],
      },
      {
        heading: "How a visit that includes moxibustion is arranged",
        paragraphs: [
          "Book an acupuncture appointment online, or call or text (610) 742-5810. If you want to ask whether heat therapy belongs in your plan before you commit, the practice also offers a complimentary session for questions.",
          "The office is Five Points Wellness LLC, 2137 E Huntingdon St, Philadelphia, PA 19125, in Fishtown. The site does not say whether the mugwort is applied directly on the skin or held near it, and it does not list smoke, scent, or conditions treated only with moxibustion. Ask Cara at the visit.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is moxibustion a separate appointment?",
        a: "Not as a published standalone service. It is included in an acupuncture session when the practitioner decides it fits.",
      },
      {
        q: "What herb is used?",
        a: "The practice says dried mugwort is burned on acupuncture points.",
      },
      {
        q: "Do you publish a moxibustion price?",
        a: "No. A general acupuncture fee is not listed on the site. Microneedling is the service with published prices.",
      },
      {
        q: "Where do I book?",
        a: "Use the patient portal on the booking page, or call or text (610) 742-5810.",
      },
    ],
    notice:
      "[COLIN/CARA: fill in whether moxa is applied on the skin or held near it, and whether smoke is part of the visit. The current site does not say.]",
  },
  {
    slug: "gua-sha",
    name: "Gua Sha",
    serviceType: "Gua Sha",
    h1: "Gua Sha in Philadelphia",
    title: "Gua Sha in Philadelphia | Five Points Wellness",
    description:
      "Gua sha in Fishtown at Five Points Wellness: a smooth-edged tool, gentle pressure, used for muscle tension and circulation inside an acupuncture visit.",
    lede:
      "Gua sha, written guasha on the current services list, is an old scraping method. Cara uses a smooth-edged tool and gentle pressure along the skin to release muscle tension, improve circulation, and, in the practice's words, promote detoxification.",
    sections: [
      {
        heading: "What the practice says gua sha does",
        paragraphs: [
          "The published description is specific and short: a smooth-edged tool, gentle pressure along the skin, muscle tension, circulation, and detoxification. This page keeps that scope. It does not add a list of diseases gua sha treats on its own.",
          "People often notice redness where the tool has passed. The practice does not publish aftercare rules for that redness. Ask during the visit if you need to know what your skin may look like afterward.",
          discretion,
        ],
      },
      {
        heading: "Gua sha is not the same page as cupping or facial cupping",
        paragraphs: [
          "Gua sha strokes the skin with a tool. Cupping uses suction. Facial cupping is a gentler suction method for the face and neck. Cosmetic acupuncture is a needle treatment with its own page. If you are comparing those, start with the page that matches the technique.",
          "Book acupuncture at 2137 E Huntingdon St. Tell Cara if a clinician has already told you to avoid scraping or if your skin is broken. She decides what is appropriate in the session.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is gua sha included in the acupuncture visit?",
        a: "Yes, when Cara chooses it. The services page says these techniques are included at the practitioner's discretion.",
      },
      {
        q: "What tool is used?",
        a: "A smooth-edged tool, with gentle pressure along the skin. The practice does not name a brand or stone.",
      },
      {
        q: "Do you spell it gua sha or guasha?",
        a: "Both appear in conversation. The current services list says Guasha. This page uses gua sha because that is the spelling patients search for.",
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
    serviceType: "Cupping therapy",
    h1: "Cupping Therapy in Philadelphia",
    title: "Cupping Therapy in Philadelphia | Five Points Wellness",
    description:
      "Cupping therapy in Philadelphia at Five Points Wellness. Suction to ease deep muscle tension, support circulation, and reduce pain, within an acupuncture visit.",
    lede:
      "Cupping at Five Points Wellness is therapeutic suction. Cups draw blood to targeted areas to help release deep muscle tension, improve circulation, and reduce pain. That is the practice's description, and it is the one this page uses.",
    sections: [
      {
        heading: "What cupping feels like in this clinic",
        paragraphs: [
          "Suction pulls the tissue up into the cup. Because the method draws blood to the area, round marks are a normal result of the technique the practice describes. The site does not say how long those marks last. Ask Cara if you have an event or a dress code to plan around.",
          "Cupping shows up inside other care too. The pain and sports pages mention it as something that may be added with acupuncture. It is still the same office and the same rule: included when the practitioner decides it belongs.",
          discretion,
        ],
      },
      {
        heading: "Body cupping and facial cupping are different",
        paragraphs: [
          "This page is body cupping for muscle tension and pain. Facial cupping is a separate, gentler technique for the face and neck. If your interest is skin and the face, read the facial cupping page and the cosmetic acupuncture page before you book, so you ask for the right visit.",
          "The office is in Fishtown at 2137 E Huntingdon St. Free street parking is what the practice tells patients to expect. Book online or call or text (610) 742-5810.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why do cupping marks appear?",
        a: "The practice says cupping draws blood to the targeted area. Marks can follow from that. Ask how long they may show on your skin.",
      },
      {
        q: "Is cupping its own appointment?",
        a: "It is included in an acupuncture session at Cara's discretion. A standalone cupping price is not published.",
      },
      {
        q: "Do you use cupping for athletes?",
        a: "The sports acupuncture page says cupping may be part of pre-event work. The race-day package is booked by phone or text, not as a generic cupping visit.",
      },
      {
        q: "Where is cupping done?",
        a: "At Five Points Wellness LLC, 2137 E Huntingdon St, Philadelphia, PA 19125.",
      },
    ],
    notice:
      "[COLIN/CARA: fill in how long cupping marks usually last, if you want that on the page. The current site does not say.]",
  },
  {
    slug: "facial-cupping",
    name: "Facial Cupping",
    serviceType: "Facial cupping",
    h1: "Facial Cupping in Philadelphia",
    title: "Facial Cupping in Philadelphia | Five Points Wellness",
    description:
      "Facial cupping in Fishtown for gentle suction, drainage, or lifting of the face and neck. Included in a visit at Five Points Wellness when Cara chooses it.",
    lede:
      "Facial cupping is gentle suction for the face and neck. The practice describes it as drainage or lifting. It is not the same treatment as cosmetic acupuncture, and it is not microneedling.",
    sections: [
      {
        heading: "What facial cupping is for, in their words",
        paragraphs: [
          "The services list says facial cupping is gentle suction therapy specifically designed for drainage or lifting of the face and neck. It does not publish a series length, a price, or a before-and-after gallery for facial cupping. The before-and-after photos on this site are for microneedling and for a dry-needling range-of-motion example.",
          discretion,
        ],
      },
      {
        heading: "Choose the face treatment that matches your question",
        paragraphs: [
          "If you want needles on the face for rejuvenation, read facial rejuvenation and cosmetic acupuncture. If you want collagen-induction microneedling, with published prices of $350 for a session and $1,200 for four, read the microneedling page. Facial cupping is the gentler suction option and may be folded into a visit rather than booked as that priced service.",
          "The practice also says facial rejuvenation acupuncture and microneedling are not performed on the same day. Facial cupping is not given that same rule in the current copy. Ask when you book if you want more than one face technique.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is facial cupping the same as cosmetic acupuncture?",
        a: "No. Facial cupping is gentle suction. Cosmetic acupuncture is a needle treatment with its own page.",
      },
      {
        q: "Is facial cupping the same as body cupping?",
        a: "No. The practice describes facial cupping as gentle suction for the face and neck, separate from the body cupping used for deep muscle tension.",
      },
      {
        q: "Do you have facial cupping photos?",
        a: "Not on the current site. The face photos are microneedling, labeled before and after 3 treatments.",
      },
      {
        q: "How do I ask for facial cupping?",
        a: "Book an acupuncture visit and say you are asking about facial cupping. Cara decides whether it is part of the session.",
      },
    ],
  },
  {
    slug: "herbal-liniments",
    name: "Herbal Liniments",
    serviceType: "Herbal liniments",
    h1: "Herbal Liniments in Philadelphia",
    title: "Herbal Liniments in Philadelphia | Five Points Wellness",
    description:
      "External herbal liniments at Five Points Wellness in Fishtown, applied to ease pain, calm inflammation, and support recovery during an acupuncture visit.",
    lede:
      "Herbal liniments at this practice are for external use. They are applied to an area of the body to reduce inflammation, ease pain, and promote recovery. They are not described as teas, pills, or a retail shelf.",
    sections: [
      {
        heading: "External herbs, not a formula list",
        paragraphs: [
          "The services page does not name the liniments, the herbs inside them, or a take-home shop. If you need the ingredient list because of an allergy, ask before the visit. Nothing on the site invents a product name, and this page does not either.",
          "Liniments are grouped with the other hands-on techniques that can be part of acupuncture. " + discretion,
        ],
      },
      {
        heading: "When patients ask about liniments",
        paragraphs: [
          "The published reasons match pain and recovery: inflammation, pain, and recovery. Surgical recovery and sports pages talk about recovery in more detail. A liniment, if used, is one piece of that visit, not a replacement for your surgeon's or physician's instructions.",
          "Book at the Fishtown office, 2137 E Huntingdon St, or call or text (610) 742-5810. Email fivepointsphila@gmail.com if you need to ask about an ingredient before you come. The practice usually answers email within one business day.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are the liniments taken by mouth?",
        a: "No. The practice describes them as external-use liniments applied to an area of the body.",
      },
      {
        q: "Can I buy a bottle to take home?",
        a: "The site does not say liniments are sold. Ask the office if you want something to use between visits.",
      },
      {
        q: "Are ingredient lists published?",
        a: "No. Ask fivepointsphila@gmail.com or (610) 742-5810 if you have an allergy to check.",
      },
      {
        q: "Is this Chinese herbal medicine as internal prescriptions?",
        a: "The published service is external liniment only. Internal herbal prescriptions are not described on the site.",
      },
    ],
    notice:
      "[COLIN/CARA: fill in formula names or a take-home policy if you want them published. The current site has neither.]",
  },
  {
    slug: "tuina",
    name: "Tuina",
    serviceType: "Tuina",
    h1: "Tuina in Philadelphia",
    title: "Tuina Massage in Philadelphia | Five Points Wellness",
    description:
      "Tuina in Philadelphia at Five Points Wellness: Chinese therapeutic massage to harmonize qi, release blockages, and restore balance, inside an acupuncture visit.",
    lede:
      "Tuina is traditional Chinese therapeutic massage. At Five Points Wellness it is used to harmonize qi flow, release blockages, and restore balance. It is bodywork inside a Chinese medicine visit, not a separate spa menu.",
    sections: [
      {
        heading: "What is published about tuina here",
        paragraphs: [
          "The services list gives that one aim: harmonize qi, release blockages, restore balance. It does not publish a 60-minute massage price, a table of styles, or a promise that every acupuncture visit includes hands-on work.",
          discretion,
          "Pediatric care is different. The pediatric page says children may receive pediatric tuina, which it describes as gentle therapeutic massage, often when needles are not used. Adult tuina and pediatric tuina are not the same appointment.",
        ],
      },
      {
        heading: "Booking tuina in Fishtown",
        paragraphs: [
          "Book acupuncture and say you are asking about tuina. Cara will say whether hands-on work belongs in the plan. Sessions that are acupuncture are listed as 50 minutes. The site does not give tuina its own duration.",
          "The office is in Fishtown at 2137 E Huntingdon St, with free street parking readily available, by the practice's account. Hours run until 7 PM Monday through Thursday.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is tuina a massage appointment I can book by itself?",
        a: "A standalone tuina appointment is not published. It is included in acupuncture care when Cara decides to use it.",
      },
      {
        q: "Do children receive tuina?",
        a: "The pediatric acupuncture page lists pediatric tuina as gentle therapeutic massage for children. Read that page for how children's visits work.",
      },
      {
        q: "What does the practice say tuina is for?",
        a: "To harmonize qi flow, release blockages, and restore balance.",
      },
      {
        q: "Is there a posted tuina price?",
        a: "No.",
      },
    ],
  },
  {
    slug: "nutrition",
    name: "Nutrition",
    serviceType: "Traditional Chinese nutrition",
    h1: "Traditional Chinese Nutrition in Philadelphia",
    title: "Chinese Nutrition Counseling in Philadelphia | Five Points Wellness",
    description:
      "Traditional Chinese nutrition at Five Points Wellness in Fishtown: food as medicine, a constitutional look, and seasonal guidance inside your acupuncture care.",
    lede:
      "Nutrition at Five Points Wellness is traditional Chinese nutrition therapy. The practice describes food as medicine: dietary guidance based on a constitutional assessment and on the season, in support of health and healing.",
    sections: [
      {
        heading: "What this nutrition visit is, and what it is not",
        paragraphs: [
          "Guidance starts from Chinese medicine ideas of constitution and season. The site does not publish meal plans, calorie targets, or a supplement shop. It also does not say this replaces a registered dietitian or a physician's diet order. If you have a medical diet, bring it so Cara can work with what you were already told.",
          discretion,
        ],
      },
      {
        heading: "How food advice shows up in a session",
        paragraphs: [
          "Expect a conversation tied to the same assessment as acupuncture: symptoms, lifestyle, and goals. That assessment is the first step the practice already describes for a new patient. Food guidance, when it is used, comes out of that picture rather than from a generic handout.",
          "Digestive complaints have their own page because IBS, bloating, and reflux are a common reason people ask about food. You can read that page and still book one visit. You do not need a separate nutrition membership. None is published.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will I get a written meal plan?",
        a: "The site says personalized dietary guidance. It does not say a formal meal plan is provided. Ask what you will leave with.",
      },
      {
        q: "Is nutrition a separate program?",
        a: "It is listed with the techniques included in an acupuncture session at the practitioner's discretion.",
      },
      {
        q: "Do you sell herbs or supplements with the nutrition visit?",
        a: "No shop is described on the site.",
      },
      {
        q: "Who gives the guidance?",
        a: "Cara Speer, M.Ac., L.Ac., at Five Points Wellness LLC in Fishtown.",
      },
    ],
  },
  {
    slug: "qigong",
    name: "Qigong",
    serviceType: "Qigong",
    h1: "Qigong in Philadelphia",
    title: "Qigong in Philadelphia | Five Points Wellness",
    description:
      "Qigong at Five Points Wellness in Fishtown: gentle movement, breathing, and meditation taught within Chinese medicine care. No public class schedule is posted.",
    lede:
      "Qigong here is the old practice of gentle movement, breathing, and meditation used to cultivate and balance life energy. The practice says it supports physical vitality, mental clarity, and spiritual well-being through mindful exercise.",
    sections: [
      {
        heading: "No posted class time",
        paragraphs: [
          "The website does not list a weekly qigong class, a studio rental, or a drop-in hour. Until Cara publishes a class, the honest way to read this page is: qigong may be part of care at the office, the same way the other listed practices may be included in a session.",
          discretion,
        ],
      },
      {
        heading: "What the exercises are, according to the practice",
        paragraphs: [
          "Gentle movements, breathing techniques, and meditation. That combination is the whole published method. The site does not name a lineage, a form, or a number of movements. If you need something you can practice at home, ask during the visit what you were actually shown.",
          "Stress and sleep care often overlaps with this kind of practice because both are about settling the nervous system. The stress and sleep page describes acupuncture for that. Qigong, if it is used, is an additional tool, not a second business.",
          "The office is at 2137 E Huntingdon St. Book acupuncture, and ask about qigong when you write or call, so you know whether you are being offered instruction inside a visit or whether a class exists by the time you come.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you have a public qigong class schedule?",
        a: "Not on this website. Ask the office before you assume a group class is running.",
      },
      {
        q: "What does the practice say qigong includes?",
        a: "Gentle movements, breathing techniques, and meditation.",
      },
      {
        q: "Is qigong billed on its own?",
        a: "A separate qigong fee is not published. It is on the list of practices included in an acupuncture session at Cara's discretion.",
      },
      {
        q: "Where would I learn it?",
        a: "At Five Points Wellness LLC, 2137 E Huntingdon St, Philadelphia, PA 19125, if it is part of your visit.",
      },
    ],
    notice:
      "[COLIN/CARA: fill in a class schedule if one exists. The current site does not publish class days or times.]",
  },
];
