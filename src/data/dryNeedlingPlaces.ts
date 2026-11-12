export type DryPlace = {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  lede: string;
  trip: string[];
  faqs: { q: string; a: string }[];
};

const fee =
  "A separate dry needling price is not published. The services list says the hands-on methods, including orthopedic dry needling, are included in an acupuncture session at the practitioner's discretion. Book an appointment and ask what the visit will include.";

export const dryNeedlingPlaces: DryPlace[] = [
  {
    slug: "dry-needling-fishtown",
    name: "Fishtown",
    h1: "Dry Needling in Fishtown, Philadelphia",
    title: "Dry Needling in Fishtown, Philadelphia | Five Points Wellness",
    description:
      "Orthopedic dry needling in Fishtown at Five Points Wellness LLC, 2137 E Huntingdon St. Cara Speer, L.Ac. Trigger points and motor points. Call or text (610) 742-5810.",
    lede:
      "Dry needling in Fishtown is at the Five Points Wellness office, 2137 E Huntingdon St, Philadelphia, PA 19125. Licensed acupuncturist Cara Speer, M.Ac., L.Ac., uses it for muscular pain, trigger points, and movement dysfunction, inside acupuncture-based care.",
    trip: [
      "The office is in Fishtown, on the Fishtown and East Kensington edge. Frankford Avenue and Girard Avenue are about 1.2 miles south. Huntingdon Station on the Market-Frankford Line is about half a mile west, at Kensington Avenue and Huntingdon Street. Walk east on Huntingdon Street to the 2100 block.",
      "From the Frankford Avenue corridor, ride the El north from Girard through Berks and York-Dauphin to Huntingdon. The practice says free street parking is readily available. Hours are by appointment: Monday through Thursday 9 AM–7 PM, Friday 9 AM–3 PM, Saturday 10 AM–2 PM, Sunday closed.",
    ],
    faqs: [
      {
        q: "Where is dry needling in Fishtown?",
        a: "Five Points Wellness LLC, 2137 E Huntingdon St, Philadelphia, PA 19125. Call or text (610) 742-5810.",
      },
      {
        q: "Which El stop is closest for a dry needling visit?",
        a: "Huntingdon Station is about half a mile away. Walk east on Huntingdon Street. The station is ADA accessible and has no station parking.",
      },
      {
        q: "Is dry needling priced separately?",
        a: fee,
      },
      {
        q: "Does dry needling hurt?",
        a: "Most patients tolerate treatment well. Sensations vary and may include a brief twitch, pressure, or dull ache when a trigger point is stimulated.",
      },
    ],
  },
  {
    slug: "dry-needling-east-kensington",
    name: "East Kensington",
    h1: "Dry Needling in East Kensington, Philadelphia",
    title: "Dry Needling in East Kensington | Five Points Wellness",
    description:
      "East Kensington dry needling at 2137 E Huntingdon St, the Fishtown and East Kensington edge. Cara Speer, L.Ac., at Five Points Wellness. Text (610) 742-5810.",
    lede:
      "If you call the neighborhood East Kensington, the dry needling office is already on your side of the city. 2137 E Huntingdon St is the Fishtown and East Kensington edge, in ZIP 19125.",
    trip: [
      "Many blocks in East Kensington are a short walk to the door. Huntingdon Station is about half a mile northwest. From the station, walk east on Huntingdon Street. York-Dauphin is the next El stop south if you are coming from that part of Frankford Avenue.",
      "This is the same treatment room as Fishtown dry needling, not a second clinic. The Google Business Profile neighborhood for the practice is Fishtown. East Kensington and Fishtown overlap on this block.",
    ],
    faqs: [
      {
        q: "Is dry needling in East Kensington or Fishtown?",
        a: "The office is at 2137 E Huntingdon St, on the edge neighbors call both. The listing's home neighborhood is Fishtown. It is one office.",
      },
      {
        q: "Can I walk from East Kensington?",
        a: "Yes for many nearby blocks. Huntingdon Station is about half a mile if you would rather ride the El and walk east.",
      },
      {
        q: "How long is a dry needling visit?",
        a: "Treatments typically last between 20 and 60 minutes, depending on your needs and whether dry needling is combined with acupuncture, cupping, or manual work.",
      },
      {
        q: "Is soreness normal after dry needling?",
        a: "Yes. Mild soreness similar to a workout may occur and typically resolves within 24–48 hours.",
      },
    ],
  },
  {
    slug: "dry-needling-kensington",
    name: "Kensington",
    h1: "Dry Needling in Kensington, Philadelphia",
    title: "Dry Needling in Kensington, Philadelphia | Five Points Wellness",
    description:
      "Kensington dry needling is a short ride south to Five Points Wellness, 2137 E Huntingdon St. About half a mile from Somerset. Call (610) 742-5810.",
    lede:
      "Kensington patients come south toward Huntingdon Street for dry needling. Somerset is about half a mile north of the office. Kensington and Allegheny is a little over a mile north.",
    trip: [
      "From Somerset Station, ride one stop south to Huntingdon, or walk south and then east on Huntingdon Street to 2137 E Huntingdon St. From Kensington and Allegheny, ride the Market-Frankford Line south past Somerset to Huntingdon, then walk east.",
      "ZIPs people use for this trip are 19125 and 19134. The office itself is in 19125. Sunday is closed. Monday through Thursday the office is open until 7 PM, by appointment.",
    ],
    faqs: [
      {
        q: "How far is dry needling from Kensington and Allegheny?",
        a: "A little over a mile south. Take the Market-Frankford Line to Huntingdon Station, then walk east on Huntingdon Street.",
      },
      {
        q: "How far is it from Somerset?",
        a: "Somerset Station is about half a mile north of Huntingdon Station. The office is east of that station.",
      },
      {
        q: "What does the practice use dry needling for?",
        a: "Muscular pain, trigger points, and movement dysfunction, including neck and shoulder pain, back pain, sciatica patterns, hip and knee trouble, sports injuries, headaches, and TMJ-related pain.",
      },
      {
        q: "How many dry needling sessions will I need?",
        a: "Some patients experience relief after one session, while chronic conditions often benefit from a series of treatments.",
      },
    ],
  },
  {
    slug: "dry-needling-northern-liberties",
    name: "Northern Liberties",
    h1: "Dry Needling in Northern Liberties, Philadelphia",
    title: "Dry Needling in Northern Liberties | Five Points Wellness",
    description:
      "Northern Liberties to dry needling at Five Points Wellness: El from Girard to Huntingdon, about 1.3 miles. 2137 E Huntingdon St. (610) 742-5810.",
    lede:
      "Northern Liberties is southwest of the office, about 1.3 miles from the Piazza and from 2nd and Girard to 2137 E Huntingdon St. The Market-Frankford Line runs the whole way.",
    trip: [
      "Board at Girard Station and ride three stops toward Frankford: Berks, York-Dauphin, then Huntingdon. Walk east on Huntingdon Street. By car, take Girard Avenue east to Frankford Avenue, turn north, then east on Huntingdon.",
      "Northern Liberties is mainly ZIP 19123. You are traveling to 19125. The practice says free street parking is readily available at the office, which is often easier than parking near 2nd Street.",
    ],
    faqs: [
      {
        q: "How do I get to dry needling from Northern Liberties without a car?",
        a: "Take the Market-Frankford Line from Girard Station three stops to Huntingdon, then walk east. The straight-line distance is about 1.3 miles.",
      },
      {
        q: "Is dry needling the same office as acupuncture?",
        a: "Yes. Five Points Wellness LLC, 2137 E Huntingdon St. Dry needling is performed within acupuncture-based musculoskeletal care.",
      },
      {
        q: "Can dry needling be combined with other treatment?",
        a: "Yes. It is often combined with acupuncture, cupping, gua sha, and other supportive therapies.",
      },
      {
        q: "Is there a dry needling fee listed for Northern Liberties patients?",
        a: fee,
      },
    ],
  },
  {
    slug: "dry-needling-port-richmond",
    name: "Port Richmond",
    h1: "Dry Needling in Port Richmond, Philadelphia",
    title: "Dry Needling in Port Richmond, Philadelphia | Five Points Wellness",
    description:
      "Port Richmond dry needling is about 1.4 miles west of Richmond and Allegheny, at Five Points Wellness on E Huntingdon St. Call (610) 742-5810.",
    lede:
      "Port Richmond sits east of the office, across the I-95 corridor. Richmond and Allegheny is about 1.4 miles from 2137 E Huntingdon St. The usual drive is west on Allegheny Avenue, then south to Huntingdon.",
    trip: [
      "Use Allegheny Avenue or Lehigh Avenue to cross toward Kensington Avenue. Do not assume East Huntingdon Street runs straight through I-95. From Richmond Street, go west on Allegheny, then south to Huntingdon and east to the 2100 block.",
      "On the El, Allegheny or Somerset, then south to Huntingdon Station, plus the walk east. Port Richmond is largely ZIP 19134. The office is in 19125. Evening hours run to 7 PM Monday through Thursday.",
    ],
    faqs: [
      {
        q: "How far is the dry needling office from Port Richmond?",
        a: "About 1.4 miles from Richmond and Allegheny to 2137 E Huntingdon St. Driving time depends on Allegheny Avenue and I-95.",
      },
      {
        q: "Which street should I take across I-95?",
        a: "Allegheny Avenue or Lehigh Avenue. Huntingdon Street may not cross the highway without a break.",
      },
      {
        q: "Is dry needling safe?",
        a: "When performed with sterile technique by a licensed practitioner, dry needling is generally considered safe and well tolerated.",
      },
      {
        q: "Who does the treatment?",
        a: "Cara Speer, M.Ac., L.Ac., a licensed acupuncturist at Five Points Wellness LLC. Call or text (610) 742-5810.",
      },
    ],
  },
  {
    slug: "dry-needling-olde-kensington",
    name: "Olde Kensington",
    h1: "Dry Needling in Olde Kensington, Philadelphia",
    title: "Dry Needling in Olde Kensington | Five Points Wellness",
    description:
      "Olde Kensington dry needling is about 1.1 miles east of Front and Master, at Five Points Wellness, 2137 E Huntingdon St. Text (610) 742-5810.",
    lede:
      "Olde Kensington, west of Front Street around Master and Girard, is about 1.1 miles from dry needling at 2137 E Huntingdon St. Travel east toward Frankford Avenue, then to East Huntingdon Street.",
    trip: [
      "From Front and Master, go east toward Frankford Avenue or Kensington Avenue, then to Huntingdon Street and east to 2137. On the El, Girard Station is the nearby stop. Ride to Huntingdon and walk east. The office is not on Girard Avenue.",
      "ZIPs for this area are 19122 and 19125. There is no second office closer to American Street or Front Street. Saturday hours are 10 AM–2 PM. Sunday is closed.",
    ],
    faqs: [
      {
        q: "How far is dry needling from Front and Master?",
        a: "About 1.1 miles east. Drive toward Frankford Avenue and then to East Huntingdon Street, or ride from Girard Station to Huntingdon.",
      },
      {
        q: "Is American Street close enough to walk?",
        a: "It is about a mile, depending on the block. Most people drive or take the El for a visit that runs 20 to 60 minutes.",
      },
      {
        q: "Does dry needling hurt?",
        a: "Most patients tolerate treatment well. Sensations vary and may include a brief twitch, pressure, or dull ache when a trigger point is stimulated.",
      },
      {
        q: "What is the phone number?",
        a: "Call or text (610) 742-5810. Email fivepointsphila@gmail.com. The practice usually replies to email within one business day.",
      },
    ],
  },
  {
    slug: "dry-needling-south-kensington",
    name: "South Kensington",
    h1: "Dry Needling in South Kensington, Philadelphia",
    title: "Dry Needling in South Kensington | Five Points Wellness",
    description:
      "South Kensington dry needling is about 1.3 miles north of Front and Girard, at Five Points Wellness on E Huntingdon St. Cara Speer, L.Ac.",
    lede:
      "South Kensington sits south of the office, toward Girard and Front. Front and Girard is about 1.3 miles from 2137 E Huntingdon St. Come north on Frankford Avenue or ride from Girard Station.",
    trip: [
      "Girard Station is the nearby El stop. Huntingdon is three stops north. If you drive, take Frankford Avenue north from Girard, then east on Huntingdon. This trip starts farther south than Olde Kensington, and farther east than a 2nd Street start in Northern Liberties.",
      "South Kensington is mostly ZIP 19122. The office is in 19125, north of Girard. The practice says free street parking is readily available around the office.",
    ],
    faqs: [
      {
        q: "How long is the trip from South Kensington?",
        a: "Front and Girard is about 1.3 miles away. The El from Girard Station to Huntingdon is three stops, then a walk east.",
      },
      {
        q: "Is the dry needling office south of Girard?",
        a: "No. It is north of Girard, at 2137 E Huntingdon St.",
      },
      {
        q: "Is soreness normal afterward?",
        a: "Yes. Mild soreness similar to a workout may occur and typically resolves within 24–48 hours.",
      },
      {
        q: "Can I text to ask which stop to use?",
        a: "Yes. Text (610) 742-5810. Use Huntingdon Station, then walk east.",
      },
    ],
  },
  {
    slug: "dry-needling-old-city",
    name: "Old City",
    h1: "Dry Needling for Old City, Philadelphia",
    title: "Dry Needling for Old City, Philadelphia | Five Points Wellness",
    description:
      "Old City patients ride the Market-Frankford Line from 2nd or 5th Street to Huntingdon for dry needling at Five Points Wellness in Fishtown. About 2.6 miles.",
    lede:
      "Old City is about 2.6 miles from dry needling at Five Points Wellness. The direct trip is the Market-Frankford Line from 2nd Street or 5th Street Station to Huntingdon, with no transfer.",
    trip: [
      "Ride toward Frankford and get off at Huntingdon, after Spring Garden, Girard, Berks, and York-Dauphin. Walk east on Huntingdon Street to 2137 E Huntingdon St. Driving, Delaware Avenue up toward Frankford Avenue, or I-95 north, both reach the office. Allow roughly 15 to 30 minutes. Traffic changes the time more than the mileage does.",
      "The office is not in Old City. There is no treatment room near Independence Hall. Monday through Thursday appointments run until 7 PM, which is the slot many people use after leaving Market Street. Old City is ZIP 19106. The office is 19125.",
    ],
    faqs: [
      {
        q: "Can I take the subway from Old City to dry needling?",
        a: "Yes. The Market-Frankford Line from 2nd Street or 5th Street Station goes directly to Huntingdon Station. Then walk east.",
      },
      {
        q: "How far is Old City from the office?",
        a: "About 2.6 miles from 2nd and Market to 2137 E Huntingdon St.",
      },
      {
        q: "How many sessions are typical?",
        a: "Some patients experience relief after one session, while chronic conditions often benefit from a series of treatments.",
      },
      {
        q: "Is Friday open after work in Old City?",
        a: "Friday appointments end at 3 PM. Monday through Thursday the office is open until 7 PM, by appointment.",
      },
    ],
  },
  {
    slug: "dry-needling-society-hill",
    name: "Society Hill",
    h1: "Dry Needling for Society Hill, Philadelphia",
    title: "Dry Needling for Society Hill, Philadelphia | Five Points Wellness",
    description:
      "Society Hill to dry needling in Fishtown is about 3.1 miles, via 2nd Street Station to Huntingdon. Five Points Wellness, 2137 E Huntingdon St.",
    lede:
      "Society Hill is south of Old City. From about 3rd and Pine, the office is about 3.1 miles away. Go north to the Market-Frankford Line, or drive up 2nd Street, Front Street, or Delaware Avenue.",
    trip: [
      "Society Hill is not on the El. Walk or ride north to 2nd Street Station and take the Market-Frankford Line to Huntingdon, then walk east. Driving, go north on 2nd or Front, or use Columbus Boulevard, then come inland on Girard Avenue to Frankford Avenue and north to Huntingdon.",
      "Headhouse Square and Washington Square are the landmarks for the start of this trip. If you are west of Broad Street, use the Rittenhouse or Center City page instead. Society Hill is ZIP 19106. The office is 19125.",
    ],
    faqs: [
      {
        q: "How far is Society Hill from dry needling?",
        a: "About 3.1 miles from 3rd and Pine to 2137 E Huntingdon St.",
      },
      {
        q: "Which SEPTA stop should I use?",
        a: "Go north to 2nd Street Station, then ride the Market-Frankford Line to Huntingdon and walk east.",
      },
      {
        q: "Can dry needling be combined with cupping?",
        a: "Yes. The practice says it is often combined with acupuncture, cupping, gua sha, and other supportive therapies.",
      },
      {
        q: "Is Saturday open?",
        a: "Yes, 10 AM–2 PM, by appointment. Sunday is closed.",
      },
    ],
  },
  {
    slug: "dry-needling-center-city",
    name: "Center City",
    h1: "Dry Needling for Center City, Philadelphia",
    title: "Dry Needling for Center City Philadelphia | Five Points Wellness",
    description:
      "Center City to dry needling: Market-Frankford Line from 15th Street to Huntingdon, about 3 miles from City Hall. Five Points Wellness, Cara Speer, L.Ac.",
    lede:
      "Center City is about 3 miles from dry needling at Five Points Wellness. Ride the Market-Frankford Line from 15th Street Station to Huntingdon Station, then walk east on Huntingdon Street.",
    trip: [
      "From 15th Street, ride toward Frankford and get off at Huntingdon. You pass 13th, 11th, 8th, 5th, 2nd, Spring Garden, Girard, Berks, and York-Dauphin. If you arrive at Jefferson Station or Suburban Station, walk to 15th Street Station for that ride. Driving from City Hall is about 3 miles. Allow 15 to 30 minutes.",
      "This page is for City Hall, Market East, and Broad and Market. Rittenhouse Square, west of Broad, has its own page because the walk to the El is longer. A general visit fee is not published. Ask when you book.",
    ],
    faqs: [
      {
        q: "How do I get to dry needling from City Hall?",
        a: "Take the Market-Frankford Line from 15th Street Station to Huntingdon, then walk east. City Hall is about 3 miles from the office.",
      },
      {
        q: "Which Center City ZIP codes does this page mean?",
        a: "19102, 19103, and 19107. The office is in 19125.",
      },
      {
        q: "Is the dry needling office in Center City?",
        a: "No. It is in Fishtown at 2137 E Huntingdon St. This page is for people who travel from Center City.",
      },
      {
        q: "Does dry needling hurt?",
        a: "Most patients tolerate treatment well. Sensations vary and may include a brief twitch, pressure, or dull ache when a trigger point is stimulated.",
      },
    ],
  },
  {
    slug: "dry-needling-rittenhouse",
    name: "Rittenhouse",
    h1: "Dry Needling for Rittenhouse, Philadelphia",
    title: "Dry Needling for Rittenhouse, Philadelphia | Five Points Wellness",
    description:
      "From Rittenhouse Square, reach 15th Street Station and take the El to Huntingdon for dry needling at Five Points Wellness. About 3.5 miles.",
    lede:
      "Rittenhouse is west of Broad Street. Rittenhouse Square is about 3.5 miles from 2137 E Huntingdon St. The El does not stop at the square. Go east to 15th Street Station, then ride to Huntingdon.",
    trip: [
      "After Huntingdon Station, walk east on Huntingdon Street about half a mile. Driving, cross Broad and work east and north toward Spring Garden or I-95, then to Frankford Avenue and Huntingdon. Evening traffic on Walnut Street changes the drive.",
      "Center City directions start at City Hall, where the El is already underfoot. This page starts at the square, in ZIP 19103. The office at the end of the trip is the same Fishtown practice: Five Points Wellness LLC.",
    ],
    faqs: [
      {
        q: "How far is Rittenhouse Square from dry needling?",
        a: "About 3.5 miles to 2137 E Huntingdon St.",
      },
      {
        q: "Is there a direct subway from Rittenhouse?",
        a: "Not from the square. Reach 15th Street Station, then take the Market-Frankford Line to Huntingdon.",
      },
      {
        q: "How long do treatments last?",
        a: "Typically 20 to 60 minutes, depending on whether dry needling is combined with acupuncture, cupping, or manual work.",
      },
      {
        q: "Who is the practitioner?",
        a: "Cara Speer, M.Ac., L.Ac., at Five Points Wellness LLC. Call or text (610) 742-5810.",
      },
    ],
  },
  {
    slug: "dry-needling-graduate-hospital",
    name: "Graduate Hospital",
    h1: "Dry Needling for Graduate Hospital, Philadelphia",
    title: "Dry Needling for Graduate Hospital | Five Points Wellness",
    description:
      "Graduate Hospital to dry needling in Fishtown is about 4 miles. Broad Street Line to City Hall, then the El to Huntingdon. Five Points Wellness.",
    lede:
      "Graduate Hospital is south of South Street and west of Broad, about 4 miles from the office near 22nd and South. There is no one-seat El ride. You transfer, or you drive.",
    trip: [
      "Ride the Broad Street Line to City Hall and transfer to the Market-Frankford Line toward Frankford. Get off at Huntingdon and walk east. Driving, South Street or Washington Avenue east, then north on Columbus Boulevard or I-95, reaches Fishtown.",
      "This is the longer trip among the nearby neighborhoods on this site. Saturday from 10 AM to 2 PM is worth knowing. Weekday evenings run until 7 PM Monday through Thursday. Friday ends at 3 PM. Graduate Hospital is ZIP 19146. The office is 19125.",
    ],
    faqs: [
      {
        q: "How do I get there from Graduate Hospital by transit?",
        a: "Broad Street Line to City Hall, transfer to the Market-Frankford Line, ride to Huntingdon, then walk east.",
      },
      {
        q: "How far is it?",
        a: "About 4 miles from 22nd and South to 2137 E Huntingdon St.",
      },
      {
        q: "Is soreness normal after treatment?",
        a: "Yes. Mild soreness similar to a workout may occur and typically resolves within 24–48 hours.",
      },
      {
        q: "Is Schuylkill River Park near the office?",
        a: "No. The park is in Graduate Hospital, about 4 miles from the Fishtown office.",
      },
    ],
  },
  {
    slug: "dry-needling-queen-village",
    name: "Queen Village",
    h1: "Dry Needling for Queen Village, Philadelphia",
    title: "Dry Needling for Queen Village, Philadelphia | Five Points Wellness",
    description:
      "Queen Village to dry needling in Fishtown is about 3.6 miles from Fabric Row. Five Points Wellness, 2137 E Huntingdon St. Call (610) 742-5810.",
    lede:
      "Queen Village is south of Society Hill along the river side. 4th and Christian, near Fabric Row, is about 3.6 miles from dry needling at 2137 E Huntingdon St.",
    trip: [
      "From South 4th Street, go north toward 2nd Street Station or 5th Street Station and take the Market-Frankford Line to Huntingdon. Driving, 4th Street, Front Street, or Columbus Boulevard north gets you toward Girard, then Frankford Avenue and east on Huntingdon.",
      "Queen Village and Bella Vista share ZIP 19147, but the trips differ. Queen Village starts near 4th Street. Bella Vista starts at the Italian Market on 9th Street. The office is in 19125.",
    ],
    faqs: [
      {
        q: "How far is Queen Village from the office?",
        a: "About 3.6 miles from 4th and Christian to 2137 E Huntingdon St.",
      },
      {
        q: "How do I use SEPTA from Queen Village?",
        a: "Go north to 2nd Street or 5th Street Station and take the Market-Frankford Line to Huntingdon. Queen Village does not have an El station.",
      },
      {
        q: "Is dry needling safe?",
        a: "When performed with sterile technique by a licensed practitioner, dry needling is generally considered safe and well tolerated.",
      },
      {
        q: "Is Fabric Row the office?",
        a: "No. Fabric Row is in Queen Village, about 3.6 miles south. Treatment is at 2137 E Huntingdon St.",
      },
    ],
  },
  {
    slug: "dry-needling-bella-vista",
    name: "Bella Vista",
    h1: "Dry Needling for Bella Vista, Philadelphia",
    title: "Dry Needling for Bella Vista, Philadelphia | Five Points Wellness",
    description:
      "From the Italian Market in Bella Vista, dry needling at Five Points Wellness is about 3.6 miles north in Fishtown. Call or text (610) 742-5810.",
    lede:
      "Bella Vista is the Italian Market neighborhood. 9th and Christian is about 3.6 miles from 2137 E Huntingdon St. Travel north and then east. This is not the river route a Queen Village trip uses.",
    trip: [
      "From 9th Street, go north toward South Street or Lombard, then east to 5th Street or 2nd Street Station. Ride the Market-Frankford Line to Huntingdon and walk east. Driving, the same first move is north and east until you can pick up Spring Garden, Girard, or I-95 toward Fishtown.",
      "The mileage is similar to Queen Village, about 3.6 miles, but the start is 9th Street rather than 4th. Bella Vista is ZIP 19147. The office is ZIP 19125. Free street parking is what the practice tells patients to expect at Huntingdon Street.",
    ],
    faqs: [
      {
        q: "How far is the Italian Market from dry needling?",
        a: "9th and Christian is about 3.6 miles from 2137 E Huntingdon St.",
      },
      {
        q: "Which El station should I use?",
        a: "Go east to 5th Street or 2nd Street Station, then ride to Huntingdon.",
      },
      {
        q: "Can it be combined with acupuncture?",
        a: "Yes. Dry needling at this office is part of acupuncture-based care and is often combined with acupuncture, cupping, and gua sha.",
      },
      {
        q: "Do I pass Queen Village on the way?",
        a: "Only if the route drops east to 4th Street. A 9th Street start can go north first and meet the El at 5th or 2nd.",
      },
    ],
  },
];
