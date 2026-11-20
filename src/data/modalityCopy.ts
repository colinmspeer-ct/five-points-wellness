/*
 * Visible copy for the single-technique pages (/moxibustion, /cupping, ...).
 * The first sentence of each lede is Cara's own services-list wording.
 * Titles, meta descriptions, Service schema and FAQs still come from modalities.ts.
 */

const included =
  "All of our services are included in an acupuncture session at the practitioner's discretion. You book an acupuncture visit, and Cara decides whether this technique belongs in it.";

const booking =
  "Book online, or call or text (610) 742-5810. If you'd like to ask questions first, you're welcome to schedule a complimentary session.";

export const modalityCopy: Record<string, { lede: string; sections: { heading: string; paragraphs: string[] }[] }> = {
  moxibustion: {
    lede: "Traditional heat therapy using dried mugwort burned on acupuncture points for various effects.",
    sections: [
      {
        heading: "How Moxibustion Fits Into Your Visit",
        paragraphs: [
          included,
          "An acupuncture session is 50 minutes. When moxibustion is used, it happens inside that visit along with anything else Cara chooses for you. She'll explain how the heat is being used and what you should feel.",
        ],
      },
      { heading: "Booking", paragraphs: [booking] },
    ],
  },
  "gua-sha": {
    lede: "Ancient scraping technique using a smooth-edged tool to release muscle tension, improve circulation and promote detoxification through gentle pressure along the skin's surface.",
    sections: [
      {
        heading: "What to Expect",
        paragraphs: [
          "It's common to see some redness where the tool has passed. If you have something coming up and want to know how your skin may look afterward, just ask during the visit.",
          "Please tell Cara if a doctor has told you to avoid scraping, or if the skin in that area is broken.",
          included,
        ],
      },
      {
        heading: "Gua Sha, Cupping, and Facial Cupping",
        paragraphs: [
          "Gua sha strokes the skin with a tool. Cupping uses suction. Facial cupping is a gentler suction method for the face and neck, and cosmetic acupuncture is a needle treatment with its own page.",
          booking,
        ],
      },
    ],
  },
  cupping: {
    lede: "Therapeutic suction therapy that draws blood to targeted areas, helping to release deep muscle tension and improve circulation to reduce pain.",
    sections: [
      {
        heading: "What to Expect",
        paragraphs: [
          "Suction gently lifts the tissue into the cup. Because blood is drawn to the area, round marks are a normal result. If you have an event coming up, let Cara know so you can plan around them.",
          "Cupping is often combined with acupuncture for pain and sports recovery. " + included,
        ],
      },
      {
        heading: "Body Cupping and Facial Cupping",
        paragraphs: [
          "This page covers body cupping for muscle tension and pain. Facial cupping is a separate, gentler technique for the face and neck.",
          booking,
        ],
      },
    ],
  },
  "facial-cupping": {
    lede: "Gentle suction therapy specifically designed for drainage or lifting of the face and neck.",
    sections: [
      {
        heading: "How Facial Cupping Fits Into Your Visit",
        paragraphs: [
          included,
          "Facial cupping is our gentlest option for the face. It can be part of a regular visit rather than booked as a separate service.",
        ],
      },
      {
        heading: "Choosing a Face Treatment",
        paragraphs: [
          "For needles on the face, see facial rejuvenation and cosmetic acupuncture. For collagen induction, see microneedling, which is $350 for a session or $1,200 for four.",
          "Facial rejuvenation acupuncture and microneedling are not performed on the same day. If you're interested in more than one face treatment, ask when you book.",
          booking,
        ],
      },
    ],
  },
  "herbal-liniments": {
    lede: "External-use herbal liniments applied to areas of the body to reduce inflammation, ease pain and promote recovery.",
    sections: [
      {
        heading: "How Liniments Fit Into Your Visit",
        paragraphs: [
          included,
          "A liniment is one part of your care for pain or recovery. It does not replace your surgeon's or physician's instructions.",
        ],
      },
      {
        heading: "Allergies and Questions",
        paragraphs: [
          "If you have an allergy and want to check ingredients before you come in, email fivepointsphila@gmail.com. We typically respond within one business day.",
          booking,
        ],
      },
    ],
  },
  tuina: {
    lede: "Traditional Chinese therapeutic massage to harmonize qi flow, release blockages and restore balance throughout the body.",
    sections: [
      {
        heading: "How Tuina Fits Into Your Visit",
        paragraphs: [
          included,
          "An acupuncture session is 50 minutes. If you're interested in hands-on work, mention it when you book and Cara will let you know whether it suits your plan.",
        ],
      },
      {
        heading: "Tuina for Children",
        paragraphs: [
          "Children may receive pediatric tuina, a gentle therapeutic massage, often when needles are not used. You'll find more on the pediatric acupuncture page.",
          booking,
        ],
      },
    ],
  },
  nutrition: {
    lede: "Traditional Chinese nutrition therapy focusing on food as medicine, providing personalized dietary guidance based on constitutional assessment and seasonal principles to support optimal health and healing.",
    sections: [
      {
        heading: "How Nutrition Fits Into Your Visit",
        paragraphs: [
          "Food guidance grows out of the same assessment as your acupuncture: your symptoms, lifestyle, and goals. " + included,
          "If you already follow a medical diet, bring it with you so Cara can work with what you've been told.",
        ],
      },
      {
        heading: "Digestive Concerns",
        paragraphs: [
          "If you're coming in for IBS, bloating, or reflux, our digestive support page explains how acupuncture can help.",
          booking,
        ],
      },
    ],
  },
  qigong: {
    lede: "Ancient practice combining gentle movements, breathing techniques and meditation to cultivate and balance life energy, promoting physical vitality, mental clarity, and spiritual well-being through mindful exercise.",
    sections: [
      {
        heading: "How Qigong Fits Into Your Visit",
        paragraphs: [
          included,
          "If you'd like something to practice at home, ask during your visit.",
        ],
      },
      {
        heading: "Stress and Sleep",
        paragraphs: [
          "Qigong pairs naturally with care for stress and sleep, since both work on settling the nervous system. See our stress, sleep and general wellness page for more.",
          booking,
        ],
      },
    ],
  },
};
