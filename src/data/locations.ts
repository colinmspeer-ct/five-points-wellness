export type PlacePage = {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  lede: string;
  distance: string;
  zips: string;
  landmarks: string[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
};

const parking =
  "The practice says free street parking is readily available around 2137 E Huntingdon St. Signs on individual blocks still control street cleaning and any permit rules, so check the posted signs when you arrive.";

export const locations: PlacePage[] = [
  {
    slug: "acupuncture-fishtown",
    name: "Fishtown",
    h1: "Acupuncture in Fishtown, Philadelphia",
    title: "Acupuncture in Fishtown, Philadelphia | Five Points Wellness",
    description:
      "Acupuncture in Fishtown with Cara Speer, L.Ac., at Five Points Wellness LLC, 2137 E Huntingdon St. Near the Huntingdon El stop. Call or text (610) 742-5810.",
    lede:
      "Five Points Wellness LLC is the Fishtown office of licensed acupuncturist Cara Speer, M.Ac., L.Ac. This is the neighborhood page for the practice: 2137 E Huntingdon St, Philadelphia, PA 19125, on the Fishtown and East Kensington edge.",
    distance: "The office is in Fishtown. Frankford Avenue and Girard Avenue, the heart of the Frankford Avenue corridor, is about 1.2 miles south.",
    zips: "19125",
    landmarks: [
      "Frankford Avenue",
      "Penn Treaty Park",
      "The Fillmore Philadelphia",
      "Frankford and Girard, including Johnny Brenda's",
      "Market-Frankford Line stations at Girard, Berks, York-Dauphin, and Huntingdon",
    ],
    sections: [
      {
        heading: "The Fishtown acupuncture office on East Huntingdon Street",
        paragraphs: [
          "Patients who live or work in Fishtown are coming to a neighborhood office, not a downtown suite. Five Points Wellness sits on East Huntingdon Street, east of Frankford Avenue. People who think of this block as East Kensington are describing the same corner of the city. The practice uses Fishtown as its home neighborhood.",
          "An acupuncture visit here is by appointment. Monday through Thursday the hours are 9 AM–7 PM, Friday 9 AM–3 PM, and Saturday 10 AM–2 PM. Sunday is closed. Call or text (610) 742-5810, or book through the patient portal.",
        ],
      },
      {
        heading: "Getting to acupuncture in Fishtown by SEPTA and by car",
        paragraphs: [
          "Huntingdon Station on the Market-Frankford Line is about half a mile from the door, at Kensington Avenue and Huntingdon Street. From the Frankford Avenue corridor, ride north from Girard. The stops in between are Berks and York-Dauphin, then Huntingdon. Walk east on Huntingdon Street to the 2100 block. The station is ADA accessible and does not have its own parking lot.",
          "Driving from Girard and Frankford, go north on Frankford Avenue to Huntingdon and turn east. " + parking,
        ],
      },
      {
        heading: "Who comes from Fishtown",
        paragraphs: [
          "The same care offered at the office is what Fishtown patients book: acupuncture, orthopedic dry needling, and the Chinese medicine techniques Cara adds when they fit the visit. Microneedling is booked as its own service. Pediatric acupuncture, including Shonishin, is on its own page because the visit is set up for children.",
        ],
      },
    ],
    faqs: [
      {
        q: "Where is the acupuncture office in Fishtown?",
        a: "Five Points Wellness LLC is at 2137 E Huntingdon St, Philadelphia, PA 19125, on the Fishtown and East Kensington edge.",
      },
      {
        q: "Which El stop is closest?",
        a: "Huntingdon Station on the Market-Frankford Line is about half a mile away. Walk east on Huntingdon Street from Kensington Avenue.",
      },
      {
        q: "Is there parking in Fishtown for an appointment?",
        a: "The practice says free street parking is readily available. Check the signs on the block where you park.",
      },
      {
        q: "Which ZIP code is the Fishtown office in?",
        a: "The office ZIP code is 19125.",
      },
    ],
  },
  {
    slug: "acupuncture-east-kensington",
    name: "East Kensington",
    h1: "Acupuncture in East Kensington, Philadelphia",
    title: "Acupuncture in East Kensington, Philadelphia | Five Points Wellness",
    description:
      "East Kensington acupuncture at the Five Points Wellness office on E Huntingdon St. Many neighbors can walk. Cara Speer, L.Ac. Call or text (610) 742-5810.",
    lede:
      "If you describe your neighborhood as East Kensington, the Five Points Wellness office is already on your side of the city. 2137 E Huntingdon St is the Fishtown and East Kensington edge, in ZIP 19125.",
    distance: "For much of East Kensington the office is a short walk or a few minutes by car. Huntingdon Station is about half a mile northwest of the door.",
    zips: "19125",
    landmarks: [
      "Huntingdon Station on the Market-Frankford Line",
      "Frankford Avenue north of York Street",
      "Trenton Avenue",
      "East Huntingdon Street",
    ],
    sections: [
      {
        heading: "Why East Kensington has its own acupuncture page",
        paragraphs: [
          "Fishtown and East Kensington share this corner of Philadelphia, and the boundaries are informal. This page is for neighbors who look up acupuncture from the blocks east of Kensington Avenue, around Trenton Avenue and the north end of Frankford Avenue, rather than from the Girard Avenue end of Fishtown.",
          "You do not travel across town. You walk or take a very short ride to 2137 E Huntingdon St. The visit itself is the same practice: licensed acupuncturist Cara Speer, M.Ac., L.Ac., by appointment.",
        ],
      },
      {
        heading: "Walking and the Huntingdon El stop",
        paragraphs: [
          "Huntingdon Station is the closest Market-Frankford Line stop, about half a mile from the office, and it is ADA accessible. From the station, walk east on Huntingdon Street. York-Dauphin is the next stop south if you are coming from that part of the avenue.",
          parking,
        ],
      },
    ],
    faqs: [
      {
        q: "Is Five Points Wellness in East Kensington or Fishtown?",
        a: "The office is at 2137 E Huntingdon St, on the edge neighbors call both Fishtown and East Kensington. The Google Business Profile home neighborhood used for this site is Fishtown.",
      },
      {
        q: "Can I walk to an acupuncture appointment from East Kensington?",
        a: "Many blocks in East Kensington are a short walk from 2137 E Huntingdon St. Huntingdon Station is about half a mile away if you would rather ride the El.",
      },
      {
        q: "What is the ZIP code?",
        a: "The office is in 19125, which covers this part of East Kensington and Fishtown.",
      },
      {
        q: "How do I book?",
        a: "Book online, or call or text (610) 742-5810. Hours are by appointment, Monday through Thursday 9 AM–7 PM, Friday 9 AM–3 PM, and Saturday 10 AM–2 PM.",
      },
    ],
  },
  {
    slug: "acupuncture-kensington",
    name: "Kensington",
    h1: "Acupuncture in Kensington, Philadelphia",
    title: "Acupuncture in Kensington, Philadelphia | Five Points Wellness",
    description:
      "Acupuncture for Kensington, Philadelphia, a short ride south to Five Points Wellness at 2137 E Huntingdon St. Cara Speer, L.Ac. Call or text (610) 742-5810.",
    lede:
      "Kensington patients reach Five Points Wellness by coming south toward Huntingdon Street. The office is at 2137 E Huntingdon St, Philadelphia, PA 19125, about half a mile from Somerset and a little over a mile from Kensington and Allegheny.",
    distance: "About 0.5 miles from the Somerset area and about 1.1 miles from Kensington & Allegheny.",
    zips: "19125 and 19134",
    landmarks: [
      "Somerset Station",
      "Kensington and Allegheny",
      "McPherson Square at Kensington and Indiana",
      "Huntingdon Station",
    ],
    sections: [
      {
        heading: "From Kensington Avenue south to the office",
        paragraphs: [
          "Kensington runs north of the office along Kensington Avenue. If you are near Somerset Station, you are about half a mile north of Huntingdon Station. Ride one stop south, or walk south and then east on Huntingdon Street to 2137.",
          "From Kensington and Allegheny, the ride is longer: about a mile south on the Market-Frankford Line, past Somerset, to Huntingdon. Driving, use Kensington Avenue south and turn east on Huntingdon.",
        ],
      },
      {
        heading: "Care Kensington patients book",
        paragraphs: [
          "The practice treats pain and injury, stress and sleep, and the other concerns listed on the condition pages. Orthopedic dry needling is part of musculoskeletal care. Cupping, gua sha, tuina, moxibustion, herbal liniments, nutrition guidance, and qigong may be included in an acupuncture session when Cara decides they fit. They are not separate storefront services with their own published prices.",
          parking,
        ],
      },
    ],
    faqs: [
      {
        q: "How far is the office from Kensington and Allegheny?",
        a: "Kensington & Allegheny is a little over a mile north. Take the Market-Frankford Line south to Huntingdon Station, then walk east on Huntingdon Street.",
      },
      {
        q: "How far is it from Somerset?",
        a: "Somerset Station is about half a mile north of Huntingdon Station. The office is east of Huntingdon Station on East Huntingdon Street.",
      },
      {
        q: "Which ZIP codes around Kensington does the office serve?",
        a: "The office itself is in 19125. Patients also come from 19134, the ZIP that covers much of Kensington north of here.",
      },
      {
        q: "Is Sunday open for Kensington appointments?",
        a: "Sunday is closed. Saturday appointments are 10 AM–2 PM, by appointment.",
      },
    ],
  },
  {
    slug: "acupuncture-northern-liberties",
    name: "Northern Liberties",
    h1: "Acupuncture in Northern Liberties, Philadelphia",
    title: "Acupuncture in Northern Liberties | Five Points Wellness",
    description:
      "Northern Liberties acupuncture patients ride the El from Girard to Huntingdon or drive out Girard Avenue to Five Points Wellness. Cara Speer, L.Ac., in 19125.",
    lede:
      "Northern Liberties is southwest of the office, about 1.3 miles from the Piazza and from 2nd and Girard to 2137 E Huntingdon St. The Market-Frankford Line runs the whole way.",
    distance: "About 1.3 miles from the Piazza and from 2nd Street and Girard Avenue.",
    zips: "19123",
    landmarks: [
      "The Piazza",
      "Liberty Lands Park",
      "2nd Street",
      "Girard Avenue",
      "Girard Station on the Market-Frankford Line",
    ],
    sections: [
      {
        heading: "El and driving directions from Northern Liberties",
        paragraphs: [
          "Board the Market-Frankford Line at Girard Station. Ride three stops toward Frankford: Berks, York-Dauphin, then Huntingdon. Walk east on Huntingdon Street to the office. Girard Station is the Northern Liberties stop; you do not need to go into Center City first.",
          "By car, take Girard Avenue east to Frankford Avenue, turn north, then turn east on Huntingdon Street. Afternoon traffic on Girard changes the clock, so the El is often the steadier trip.",
        ],
      },
      {
        heading: "What the visit is",
        paragraphs: [
          "Cara Speer, M.Ac., L.Ac., practices at Five Points Wellness LLC. Acupuncture sessions are listed as 50 minutes. A complimentary session is available if you want to ask whether care is a fit before you commit. That offer is a conversation, booked in the same portal, not a published treatment menu.",
          parking + " Northern Liberties patients who are used to tight parking near 2nd Street usually find the Huntingdon blocks easier, which is the practice's own description of parking at the office.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I get to the office from Northern Liberties without a car?",
        a: "Take the Market-Frankford Line from Girard Station three stops to Huntingdon, then walk east on Huntingdon Street. The trip is about 1.3 miles in a straight line.",
      },
      {
        q: "Which ZIP code is Northern Liberties?",
        a: "Northern Liberties is mainly 19123. The office you are traveling to is in 19125.",
      },
      {
        q: "Is the Piazza within walking distance of the acupuncture office?",
        a: "The Piazza is about 1.3 miles away, a long walk and an easy El ride. Most people ride from Girard Station.",
      },
      {
        q: "Can I book on the way home from Northern Liberties?",
        a: "Yes. Use the online portal or call or text (610) 742-5810. Email fivepointsphila@gmail.com if you prefer; the practice usually replies within one business day.",
      },
    ],
  },
  {
    slug: "acupuncture-port-richmond",
    name: "Port Richmond",
    h1: "Acupuncture in Port Richmond, Philadelphia",
    title: "Acupuncture in Port Richmond, Philadelphia | Five Points Wellness",
    description:
      "Port Richmond patients cross toward Kensington Avenue for acupuncture at Five Points Wellness, 2137 E Huntingdon St. About 1.5 miles. Call (610) 742-5810.",
    lede:
      "Port Richmond sits east of the office, across the I-95 corridor. Richmond and Allegheny is about 1.4 miles from 2137 E Huntingdon St. The usual trip is west on Allegheny Avenue, then south to Huntingdon.",
    distance: "About 1.4 miles from Richmond Street and Allegheny Avenue.",
    zips: "19134, with nearby blocks in 19125",
    landmarks: [
      "Richmond Street",
      "Allegheny Avenue",
      "Campbell Square",
      "The I-95 corridor between Port Richmond and Kensington",
    ],
    sections: [
      {
        heading: "Driving from Port Richmond",
        paragraphs: [
          "Allegheny Avenue and Lehigh Avenue are the straightforward east-west crossings. From Richmond Street, go west on Allegheny toward Kensington Avenue, then south to Huntingdon Street and east to the 2100 block. Do not assume East Huntingdon Street itself runs uninterrupted through I-95. Use Allegheny or Lehigh.",
          "A transit option is the Market-Frankford Line at Allegheny or Somerset, then south to Huntingdon Station and a walk east. That is a short ride plus the same half-mile walk every El rider makes from the station.",
        ],
      },
      {
        heading: "Port Richmond visits",
        paragraphs: [
          "People come from Port Richmond for the same reasons as the rest of the practice: pain, sleep, stress, digestion, women's health, sports recovery, and the other condition pages. Say where you are traveling from when you book if you need a time that works around the drive.",
          parking,
        ],
      },
    ],
    faqs: [
      {
        q: "How far is Five Points Wellness from Port Richmond?",
        a: "Richmond and Allegheny is about 1.4 miles from 2137 E Huntingdon St. Driving time depends on I-95 and Allegheny Avenue traffic.",
      },
      {
        q: "Which street should I take across I-95?",
        a: "Use Allegheny Avenue or Lehigh Avenue rather than assuming Huntingdon Street crosses the highway without a break.",
      },
      {
        q: "What ZIP codes are you describing?",
        a: "Port Richmond is largely 19134. The office is in 19125.",
      },
      {
        q: "Is there evening acupuncture after work in Port Richmond?",
        a: "Monday through Thursday the office is open until 7 PM, by appointment. Friday ends at 3 PM.",
      },
    ],
  },
  {
    slug: "acupuncture-olde-kensington",
    name: "Olde Kensington",
    h1: "Acupuncture in Olde Kensington, Philadelphia",
    title: "Acupuncture in Olde Kensington, Philadelphia | Five Points Wellness",
    description:
      "Olde Kensington acupuncture is about a mile east of Front and Master, at Five Points Wellness on E Huntingdon St. Cara Speer, L.Ac. Text (610) 742-5810.",
    lede:
      "Olde Kensington, the blocks west of Front Street around Master and Girard, is about 1.1 miles from the Five Points Wellness office. You travel east toward Frankford Avenue and then to East Huntingdon Street.",
    distance: "About 1.1 miles from Front Street and Master Street.",
    zips: "19122 and 19125",
    landmarks: [
      "Front Street and Master Street",
      "American Street",
      "Girard Avenue",
      "Girard Station",
    ],
    sections: [
      {
        heading: "Directions from Olde Kensington",
        paragraphs: [
          "From Front and Master, go east toward Frankford Avenue or Kensington Avenue, then north or south as needed to Huntingdon Street and east to 2137. Girard Avenue also runs east into the Frankford Avenue corridor if you are closer to Girard than to Master.",
          "On the El, Girard Station is the nearby stop. Ride to Huntingdon and walk east. The office is not on Girard Avenue itself.",
        ],
      },
      {
        heading: "A neighborhood name with soft edges",
        paragraphs: [
          "Olde Kensington, South Kensington, and Northern Liberties are used differently by neighbors and by real-estate listings. If you live west of Front Street and north of Girard, this is the page meant for you. The clinical care does not change with the nickname. You still see Cara Speer at 2137 E Huntingdon St.",
          parking,
        ],
      },
    ],
    faqs: [
      {
        q: "How far is the office from Front and Master?",
        a: "About 1.1 miles east. Drive toward Frankford Avenue and then to East Huntingdon Street, or ride the El from Girard to Huntingdon.",
      },
      {
        q: "Which ZIP codes cover Olde Kensington?",
        a: "19122 and parts of 19125. The office is in 19125.",
      },
      {
        q: "Is American Street close enough to walk?",
        a: "It is a walk of about a mile, depending on your block. Most people drive or use the El for a 50-minute acupuncture visit.",
      },
      {
        q: "Do you have a second office closer to Olde Kensington?",
        a: "No. Care is at the Huntingdon Street office only.",
      },
    ],
  },
  {
    slug: "acupuncture-south-kensington",
    name: "South Kensington",
    h1: "Acupuncture in South Kensington, Philadelphia",
    title: "Acupuncture in South Kensington, Philadelphia | Five Points Wellness",
    description:
      "South Kensington to Fishtown acupuncture is about 1.3 miles, from Front and Girard north to Five Points Wellness. Book with Cara Speer, L.Ac.",
    lede:
      "South Kensington sits south of the office, toward Girard and Front. Front and Girard is about 1.3 miles from 2137 E Huntingdon St. Come north on Frankford Avenue or ride the El from Girard Station.",
    distance: "About 1.3 miles from Front Street and Girard Avenue.",
    zips: "19122",
    landmarks: [
      "Front Street and Girard Avenue",
      "Girard Station",
      "The blocks between Northern Liberties and Kensington Avenue",
    ],
    sections: [
      {
        heading: "North from Girard to Huntingdon",
        paragraphs: [
          "South Kensington patients are already near Girard Station. The ride to Huntingdon is three stops. If you drive, Frankford Avenue north from Girard is the direct surface street, then east on Huntingdon.",
          "This page is separate from Olde Kensington because the trip starts farther south, closer to Girard, rather than up at Master Street. It is also separate from Northern Liberties, which is farther toward 2nd Street.",
        ],
      },
      {
        heading: "Parking when you arrive",
        paragraphs: [parking, "Saturday hours are 10 AM–2 PM if a weekday on Girard is hard to cross. Sunday the office is closed."],
      },
    ],
    faqs: [
      {
        q: "How long is the trip from South Kensington?",
        a: "Front and Girard is about 1.3 miles from the office. The El from Girard Station to Huntingdon is three stops, then a walk east.",
      },
      {
        q: "What ZIP code is South Kensington?",
        a: "Most of this area is 19122. You are traveling to 19125.",
      },
      {
        q: "Is the office south of Girard?",
        a: "No. The office is north of Girard, on East Huntingdon Street.",
      },
      {
        q: "Can I text to ask which stop to use?",
        a: "Yes. Text (610) 742-5810. Use Huntingdon Station, then walk east.",
      },
    ],
  },
  {
    slug: "acupuncture-old-city",
    name: "Old City",
    h1: "Acupuncture in Old City, Philadelphia",
    title: "Acupuncture for Old City, Philadelphia | Five Points Wellness",
    description:
      "Old City patients take the Market-Frankford Line from 2nd or 5th Street to Huntingdon for acupuncture at Five Points Wellness in Fishtown.",
    lede:
      "Old City is about 2.6 miles from the office. The direct trip is the Market-Frankford Line from 2nd Street or 5th Street Station all the way to Huntingdon, with no transfer.",
    distance: "About 2.6 miles from 2nd and Market.",
    zips: "19106",
    landmarks: [
      "Independence Hall and the historic district",
      "Elfreth's Alley",
      "Market Street",
      "2nd Street Station and 5th Street Station",
    ],
    sections: [
      {
        heading: "One-seat ride from Old City",
        paragraphs: [
          "Enter the Market-Frankford Line at 2nd Street or 5th Street and ride toward Frankford. You will pass Spring Garden, Girard, Berks, and York-Dauphin before Huntingdon. Get off at Huntingdon and walk east on Huntingdon Street to 2137 E Huntingdon St.",
          "Driving, Delaware Avenue up to the Frankford Avenue corridor, or I-95 north to the Girard or Allegheny exits, both work. Midday and evening traffic on I-95 changes the time more than the mileage does. Plan on something in the range of 15 to 30 minutes, not a fixed commute.",
        ],
      },
      {
        heading: "Booking from Old City",
        paragraphs: [
          "The office is not in Old City. There is no second treatment room near Independence Hall. Evening hours run to 7 PM Monday through Thursday, which is the slot many Old City workers use after leaving Market Street.",
          parking,
        ],
      },
    ],
    faqs: [
      {
        q: "Can I take the subway from Old City to the acupuncture office?",
        a: "Yes. The Market-Frankford Line from 2nd Street or 5th Street Station goes directly to Huntingdon Station. Then walk east.",
      },
      {
        q: "How far is Old City from Five Points Wellness?",
        a: "About 2.6 miles from 2nd and Market to 2137 E Huntingdon St.",
      },
      {
        q: "What ZIP code is Old City?",
        a: "Old City is 19106. The office is in 19125.",
      },
      {
        q: "Do you treat patients who work near Independence Hall?",
        a: "Yes. Book around your workday. Thursday evenings are open until 7 PM. Friday appointments end at 3 PM.",
      },
    ],
  },
  {
    slug: "acupuncture-society-hill",
    name: "Society Hill",
    h1: "Acupuncture in Society Hill, Philadelphia",
    title: "Acupuncture for Society Hill, Philadelphia | Five Points Wellness",
    description:
      "Society Hill to Fishtown acupuncture is about 3 miles, via 2nd Street Station to Huntingdon or a drive up Front or 2nd. Five Points Wellness, Cara Speer, L.Ac.",
    lede:
      "Society Hill is south of Old City, about 3.1 miles from the office if you start near 3rd and Pine. You travel north to the Market-Frankford Line or drive up 2nd Street, Front Street, or Delaware Avenue.",
    distance: "About 3.1 miles from 3rd and Pine.",
    zips: "19106",
    landmarks: [
      "Headhouse Square",
      "Washington Square",
      "Spruce and Pine Streets",
      "2nd Street Station, after a short ride or walk north",
    ],
    sections: [
      {
        heading: "From Headhouse Square to Huntingdon Street",
        paragraphs: [
          "Society Hill is not on the El. Walk or ride north to 2nd Street Station and take the Market-Frankford Line to Huntingdon. That is the same one-seat ride Old City uses, plus the trip up to Market Street.",
          "Driving, go north on 2nd or Front, or use Columbus Boulevard along the river, then come inland on Girard Avenue to Frankford Avenue and north to Huntingdon. Headhouse Square and Washington Square are the landmarks patients name when they describe the start of the trip.",
        ],
      },
      {
        heading: "Same office, different drive than Center City",
        paragraphs: [
          "Society Hill traffic is a river-ward and south-of-Market trip. It is not the City Hall transfer. If you are west of Broad Street, use the Rittenhouse or Center City page instead. Those routes start at 15th Street Station.",
          parking,
        ],
      },
    ],
    faqs: [
      {
        q: "How far is Society Hill from the office?",
        a: "About 3.1 miles from 3rd and Pine to 2137 E Huntingdon St.",
      },
      {
        q: "Which SEPTA stop do Society Hill patients use?",
        a: "Go north to 2nd Street Station on the Market-Frankford Line, then ride to Huntingdon and walk east.",
      },
      {
        q: "What ZIP code is Society Hill?",
        a: "Society Hill is in 19106, the same ZIP as Old City. The office is in 19125.",
      },
      {
        q: "Is Saturday acupuncture available?",
        a: "Yes, 10 AM–2 PM, by appointment. Sunday is closed.",
      },
    ],
  },
  {
    slug: "acupuncture-center-city",
    name: "Center City",
    h1: "Acupuncture for Center City, Philadelphia",
    title: "Acupuncture for Center City Philadelphia | Five Points Wellness",
    description:
      "Center City patients take the El from 15th Street to Huntingdon for acupuncture at Five Points Wellness in Fishtown. About 3 miles from City Hall.",
    lede:
      "Center City is about 3 miles from Five Points Wellness. The direct transit trip is the Market-Frankford Line from 15th Street Station to Huntingdon Station, then a walk east on Huntingdon Street.",
    distance: "About 3 miles from City Hall.",
    zips: "19102, 19103, and 19107",
    landmarks: [
      "City Hall",
      "Reading Terminal Market",
      "Jefferson Station and Suburban Station, for the walk over to the El",
      "15th Street Station",
    ],
    sections: [
      {
        heading: "From City Hall and Market East to Fishtown",
        paragraphs: [
          "15th Street Station is the Center City stop on the Market-Frankford Line. Ride toward Frankford and get off at Huntingdon. You pass 13th, 11th, 8th, 5th, 2nd, Spring Garden, Girard, Berks, and York-Dauphin on the way. There is no transfer if you are already on the El.",
          "If you arrive at Jefferson Station or Suburban Station, walk to 15th Street Station for that ride. Driving from City Hall, surface streets or I-95 north both reach the office. Allow 15 to 30 minutes. The mileage is about 3 miles, and rush hour is what changes the time.",
        ],
      },
      {
        heading: "Center City is not the Rittenhouse page",
        paragraphs: [
          "This page is for City Hall, Market East, and the blocks around Broad and Market. If you are starting at Rittenhouse Square, west of Broad along Walnut Street, the walk to the El is longer and the landmarks are different, so that neighborhood has its own page.",
          "Appointments are with Cara Speer, M.Ac., L.Ac. A general acupuncture price is not published on the site. Microneedling prices are published on the microneedling and booking pages. Ask when you book if you need any other fee before you come in.",
          parking,
        ],
      },
    ],
    faqs: [
      {
        q: "How do I get to Five Points Wellness from City Hall?",
        a: "Take the Market-Frankford Line from 15th Street Station to Huntingdon, then walk east on Huntingdon Street. City Hall is about 3 miles from the office.",
      },
      {
        q: "Which Center City ZIP codes are you talking about?",
        a: "19102, 19103, and 19107 are the Center City ZIPs patients usually mean. The office is in 19125.",
      },
      {
        q: "Can I come after work in Center City?",
        a: "Monday through Thursday appointments run until 7 PM. Friday ends at 3 PM, which is early for a downtown workday.",
      },
      {
        q: "Is the office inside Center City?",
        a: "No. The office is in Fishtown at 2137 E Huntingdon St. This page is for patients who travel from Center City.",
      },
    ],
  },
  {
    slug: "acupuncture-rittenhouse",
    name: "Rittenhouse",
    h1: "Acupuncture for Rittenhouse, Philadelphia",
    title: "Acupuncture for Rittenhouse, Philadelphia | Five Points Wellness",
    description:
      "From Rittenhouse Square, walk or ride to 15th Street Station and take the El to Huntingdon for acupuncture at Five Points Wellness. About 3.5 miles.",
    lede:
      "Rittenhouse is west of Broad Street. Rittenhouse Square is about 3.5 miles from 2137 E Huntingdon St. The transit trip adds a walk or bus to 15th Street Station, then the Market-Frankford Line.",
    distance: "About 3.5 miles from Rittenhouse Square.",
    zips: "19103",
    landmarks: [
      "Rittenhouse Square",
      "Walnut Street",
      "15th Street Station, after you cross toward Broad",
    ],
    sections: [
      {
        heading: "Getting from the Square to Huntingdon Station",
        paragraphs: [
          "The El does not stop at Rittenhouse Square. Go east to 15th Street Station and ride the Market-Frankford Line to Huntingdon, then walk east on Huntingdon Street. That second walk at the far end is about half a mile.",
          "Driving, cross Broad Street and work east and north toward Spring Garden or I-95, then to Frankford Avenue and Huntingdon. The square is about 3.5 miles from the office. Evening traffic on Walnut and on I-95 is the variable.",
        ],
      },
      {
        heading: "Why this is not the Center City page",
        paragraphs: [
          "Center City directions start at City Hall and 15th Street, where the El is already under your feet. Rittenhouse starts several blocks west, in ZIP 19103, with Walnut Street as the main reference. The acupuncture office at the end of the trip is the same Fishtown practice.",
          parking,
        ],
      },
    ],
    faqs: [
      {
        q: "How far is Rittenhouse Square from the office?",
        a: "About 3.5 miles to 2137 E Huntingdon St.",
      },
      {
        q: "Is there a direct subway from Rittenhouse?",
        a: "Not from the square itself. Reach 15th Street Station, then take the Market-Frankford Line to Huntingdon.",
      },
      {
        q: "What ZIP code is Rittenhouse?",
        a: "19103. The office is in 19125.",
      },
      {
        q: "Who is the acupuncturist?",
        a: "Cara Speer, M.Ac., L.Ac., at Five Points Wellness LLC. Call or text (610) 742-5810.",
      },
    ],
  },
  {
    slug: "acupuncture-graduate-hospital",
    name: "Graduate Hospital",
    h1: "Acupuncture for Graduate Hospital, Philadelphia",
    title: "Acupuncture for Graduate Hospital, Philadelphia | Five Points Wellness",
    description:
      "Graduate Hospital to Fishtown acupuncture is about 4 miles. Take the Broad Street Line to City Hall and transfer to the El, or drive. Five Points Wellness.",
    lede:
      "Graduate Hospital is south of South Street and west of Broad, about 4 miles from the office if you start near 22nd and South. There is no one-seat El ride. You transfer, or you drive.",
    distance: "About 4 miles from 22nd and South.",
    zips: "19146",
    landmarks: [
      "Schuylkill River Park",
      "South Street west of Broad",
      "The Graduate Hospital blocks between South and Washington",
    ],
    sections: [
      {
        heading: "Transit with a transfer",
        paragraphs: [
          "The Broad Street Line is the north-south subway for this neighborhood. Ride to City Hall and transfer to the Market-Frankford Line toward Frankford. Get off at Huntingdon and walk east. That transfer at City Hall is the piece Northern Liberties and Old City do not have.",
          "Driving, South Street or Washington Avenue east toward the river, then north on Columbus Boulevard or I-95, reaches the Frankford Avenue side of Fishtown. From 22nd and South the distance is about 4 miles.",
        ],
      },
      {
        heading: "Planning the visit",
        paragraphs: [
          "Because the trip is the longest of the nearby neighborhoods on this site, Saturday from 10 AM to 2 PM is worth knowing about. Weekday evenings run until 7 PM Monday through Thursday. Friday ends at 3 PM.",
          parking,
        ],
      },
    ],
    faqs: [
      {
        q: "How do I get to the office from Graduate Hospital by transit?",
        a: "Take the Broad Street Line to City Hall, transfer to the Market-Frankford Line, and ride to Huntingdon Station. Then walk east.",
      },
      {
        q: "How far is it?",
        a: "About 4 miles from 22nd and South to 2137 E Huntingdon St.",
      },
      {
        q: "What ZIP code is Graduate Hospital?",
        a: "19146. The office is in 19125.",
      },
      {
        q: "Is Schuylkill River Park near the acupuncture office?",
        a: "No. The park is a landmark in Graduate Hospital, about 4 miles from the Fishtown office.",
      },
    ],
  },
  {
    slug: "acupuncture-queen-village",
    name: "Queen Village",
    h1: "Acupuncture for Queen Village, Philadelphia",
    title: "Acupuncture for Queen Village, Philadelphia | Five Points Wellness",
    description:
      "Queen Village patients come north from Fabric Row and South Street to Five Points Wellness in Fishtown, about 3.6 miles. Cara Speer, L.Ac.",
    lede:
      "Queen Village is south of Society Hill along the river side of South Philadelphia. 4th and Christian, near Fabric Row, is about 3.6 miles from 2137 E Huntingdon St.",
    distance: "About 3.6 miles from 4th and Christian.",
    zips: "19147",
    landmarks: [
      "Fabric Row on South 4th Street",
      "The east end of South Street",
      "Columbus Boulevard",
    ],
    sections: [
      {
        heading: "North from Fabric Row",
        paragraphs: [
          "From South 4th Street, go north through Society Hill toward 2nd Street Station or 5th Street Station and take the Market-Frankford Line to Huntingdon. Driving, 4th Street, Front Street, or Columbus Boulevard north gets you to Girard Avenue, then to Frankford Avenue and east on Huntingdon.",
          "Queen Village and Bella Vista share ZIP 19147, but they are not the same trip. Queen Village starts near 4th Street and the river. Bella Vista starts at the Italian Market on 9th Street. Use the page that matches where you actually begin.",
        ],
      },
      {
        heading: "At the office",
        paragraphs: [
          "You are booking Cara Speer at Five Points Wellness LLC, 2137 E Huntingdon St, Philadelphia, PA 19125. Call or text (610) 742-5810. The portal also schedules a complimentary session if you want to talk before a first treatment.",
          parking,
        ],
      },
    ],
    faqs: [
      {
        q: "How far is Queen Village from the acupuncture office?",
        a: "About 3.6 miles from 4th and Christian to 2137 E Huntingdon St.",
      },
      {
        q: "How do I use SEPTA from Queen Village?",
        a: "Go north to 2nd Street or 5th Street Station and take the Market-Frankford Line to Huntingdon. Queen Village itself does not have an El station.",
      },
      {
        q: "What ZIP code is Queen Village?",
        a: "19147. The office is in 19125.",
      },
      {
        q: "Is Fabric Row near the office?",
        a: "Fabric Row is in Queen Village, about 3.6 miles south of the office. It is a landmark for the start of the trip, not a nearby storefront.",
      },
    ],
  },
  {
    slug: "acupuncture-bella-vista",
    name: "Bella Vista",
    h1: "Acupuncture for Bella Vista, Philadelphia",
    title: "Acupuncture for Bella Vista, Philadelphia | Five Points Wellness",
    description:
      "From the Italian Market in Bella Vista, acupuncture at Five Points Wellness is about 3.6 miles north and east in Fishtown. Call or text (610) 742-5810.",
    lede:
      "Bella Vista is the Italian Market neighborhood. 9th and Christian is about 3.6 miles from the Five Points Wellness office. You travel north and then east. You do not follow the river the way a Queen Village trip does.",
    distance: "About 3.6 miles from 9th and Christian.",
    zips: "19147",
    landmarks: [
      "The 9th Street Italian Market",
      "South 9th Street and Christian Street",
      "The blocks west of Queen Village and east of Broad",
    ],
    sections: [
      {
        heading: "From the Italian Market to East Huntingdon Street",
        paragraphs: [
          "From 9th Street, go north toward South Street or Lombard, then east to 5th Street or 2nd Street Station for the Market-Frankford Line. Ride to Huntingdon and walk east. If you drive, the same first move is north and east until you can pick up Spring Garden, Girard, or I-95 toward Fishtown.",
          "The mileage is similar to Queen Village, about 3.6 miles, but the starting point is 9th Street rather than 4th Street. That is why the directions are not copied from the Queen Village page.",
        ],
      },
      {
        heading: "Services people from Bella Vista ask about",
        paragraphs: [
          "Acupuncture is the main visit. Orthopedic dry needling is used for muscle and movement pain. Cosmetic acupuncture and microneedling are different services with their own pages. Pediatric care, including needle-free Shonishin for younger children, is booked as pediatric acupuncture.",
          parking,
        ],
      },
    ],
    faqs: [
      {
        q: "How far is the Italian Market from Five Points Wellness?",
        a: "9th and Christian is about 3.6 miles from 2137 E Huntingdon St.",
      },
      {
        q: "Which El station should Bella Vista patients use?",
        a: "Go east to 5th Street or 2nd Street Station, then ride the Market-Frankford Line to Huntingdon.",
      },
      {
        q: "What ZIP code is Bella Vista?",
        a: "19147, shared with Queen Village. The office is in 19125.",
      },
      {
        q: "Do I pass Queen Village on the way?",
        a: "Only if your route drops east to 4th Street. A 9th Street start can go north first and meet the El at 5th or 2nd without following Fabric Row.",
      },
    ],
  },
];
