export type AreaGroup = "philadelphia" | "main-line" | "nearby";

export type Area = {
  slug: string;
  name: string;
  group: AreaGroup;
  /** True only where the Huntingdon Street studio actually sits. */
  atStudio: boolean;
  h1Place: string;
  zips: string;
  distance: string;
  character: string;
  commute: string;
  drive: string;
  transit: string;
  landmarks: string[];
  nearby: string[];
};

export const areas: Area[] = [
  {
    slug: "fishtown",
    name: "Fishtown",
    group: "philadelphia",
    atStudio: true,
    h1Place: "Fishtown, Philadelphia",
    zips: "19125",
    distance: "The studio is in Fishtown. Frankford Avenue and Girard Avenue are about 1.2 miles south.",
    character:
      "Fishtown is the home neighborhood for Five Points Wellness. The studio is on East Huntingdon Street, east of Frankford Avenue, on the edge neighbors also call East Kensington. Frankford Avenue is the commercial spine farther south, with the Girard Avenue intersection as the busier end of that corridor. This is not a Center City suite.",
    commute:
      "If you are already on Frankford Avenue near Girard, go north to Huntingdon and turn east. The 2100 block is a few blocks east of Frankford. People coming from Penn Treaty Park or the river side of Fishtown are south and east of that Girard intersection, still inside the same neighborhood, and then use the same north-then-east finish.",
    drive:
      "Street parking is what the practice tells patients to expect: free street parking readily available. Signs on a given block still control street cleaning. The Fillmore Philadelphia and the Frankford and Girard corner, including Johnny Brenda’s, are the landmarks people name when they describe the southern part of the neighborhood.",
    transit:
      "Huntingdon Station on the Market-Frankford Line is about half a mile west, at Kensington Avenue and Huntingdon Street. From Girard station, ride toward Frankford through Berks and York-Dauphin, get off at Huntingdon, and walk east. The station is ADA accessible and has no parking lot of its own.",
    landmarks: ["Frankford Avenue", "Penn Treaty Park", "The Fillmore Philadelphia", "Frankford and Girard", "Huntingdon Station"],
    nearby: ["east-kensington", "kensington", "northern-liberties", "port-richmond"],
  },
  {
    slug: "east-kensington",
    name: "East Kensington",
    group: "philadelphia",
    atStudio: true,
    h1Place: "East Kensington, Philadelphia",
    zips: "19125",
    distance: "For much of East Kensington the studio is a short walk. Huntingdon Station is about half a mile northwest of the door.",
    character:
      "East Kensington is the name for the blocks east of Kensington Avenue around Trenton Avenue and the north end of Frankford Avenue. The studio at 2137 E Huntingdon St sits on the line people call both East Kensington and Fishtown. There is one door, not two clinics. The Google Business Profile home neighborhood used for the practice is Fishtown.",
    commute:
      "If your block is already on East Huntingdon Street, you are walking. If you are closer to York Street and Frankford Avenue, come north or south to Huntingdon and then east. York-Dauphin station is the El stop south of Huntingdon for that part of the avenue.",
    drive:
      "The same street-parking note applies here as in Fishtown, because it is the same curb: the practice says free street parking is readily available. This page exists so a search for East Kensington does not send you to a different address.",
    transit:
      "Huntingdon Station is the closest Market-Frankford stop, about half a mile from the studio. Walk east from Kensington Avenue along Huntingdon Street. Do not get off at Somerset unless you are coming from farther north in Kensington.",
    landmarks: ["Huntingdon Station", "Trenton Avenue", "Frankford Avenue north of York", "East Huntingdon Street"],
    nearby: ["fishtown", "kensington", "port-richmond", "olde-kensington"],
  },
  {
    slug: "northern-liberties",
    name: "Northern Liberties",
    group: "philadelphia",
    atStudio: false,
    h1Place: "Northern Liberties, Philadelphia",
    zips: "19123",
    distance: "About 1.3 miles from the Piazza and from 2nd Street and Girard Avenue.",
    character:
      "Northern Liberties sits southwest of the studio, around 2nd Street, Liberty Lands Park, and the Piazza. Girard Avenue is its northern edge. The neighborhood is walkable and tight for parking near 2nd Street, which is a different curb situation from Huntingdon Street.",
    commute:
      "The El is the steady trip. Girard Station is the Northern Liberties stop. Ride three stops toward Frankford: Berks, York-Dauphin, then Huntingdon. Walk east on Huntingdon Street. You do not need to go into Center City first.",
    drive:
      "By car, take Girard Avenue east to Frankford Avenue, turn north, then east on Huntingdon. Afternoon traffic on Girard changes the clock more than the mileage does. The studio says free street parking is readily available once you arrive, which is often easier than circling 2nd Street.",
    transit:
      "Market-Frankford Line from Girard Station to Huntingdon, then a half-mile walk east. Northern Liberties is mainly ZIP 19123. The studio you are traveling to is in 19125.",
    landmarks: ["The Piazza", "Liberty Lands Park", "2nd Street", "Girard Station"],
    nearby: ["fishtown", "spring-garden", "south-kensington", "olde-kensington"],
  },
  {
    slug: "port-richmond",
    name: "Port Richmond",
    group: "philadelphia",
    atStudio: false,
    h1Place: "Port Richmond, Philadelphia",
    zips: "19134, with nearby blocks in 19125",
    distance: "About 1.4 miles from Richmond Street and Allegheny Avenue.",
    character:
      "Port Richmond is east of the studio, across the I-95 corridor, along Richmond Street and Allegheny Avenue. Campbell Square is a neighborhood landmark. It is a river-ward grid, not the Frankford Avenue corridor.",
    commute:
      "Allegheny Avenue and Lehigh Avenue are the east-west crossings. From Richmond Street, go west on Allegheny toward Kensington Avenue, then south to Huntingdon and east to the 2100 block. Do not assume East Huntingdon Street itself runs uninterrupted through I-95.",
    drive:
      "Driving time depends on Allegheny and on I-95. The mileage is short. The highway is what makes a 1.4-mile trip feel longer at rush hour. Evening hours at the studio run until 7 PM Monday through Thursday.",
    transit:
      "A transit option is the Market-Frankford Line at Allegheny or Somerset, then south to Huntingdon Station, plus the same walk east that every El rider makes from that station.",
    landmarks: ["Richmond Street", "Allegheny Avenue", "Campbell Square", "The I-95 corridor"],
    nearby: ["fishtown", "east-kensington", "kensington"],
  },
  {
    slug: "kensington",
    name: "Kensington",
    group: "philadelphia",
    atStudio: false,
    h1Place: "Kensington, Philadelphia",
    zips: "19125 and 19134",
    distance: "About half a mile from the Somerset area, and a little over a mile from Kensington and Allegheny.",
    character:
      "Kensington here means the avenue north of the studio: Somerset, McPherson Square at Kensington and Indiana, and Kensington and Allegheny. It is north of East Huntingdon Street, not the same blocks as East Kensington.",
    commute:
      "From Somerset Station, ride one stop south to Huntingdon or walk south and then east on Huntingdon Street. From Kensington and Allegheny, stay on the Market-Frankford Line south, past Somerset, and get off at Huntingdon.",
    drive:
      "Driving, use Kensington Avenue south and turn east on Huntingdon. The studio ZIP is 19125. Much of Kensington farther north is 19134. Sunday the studio is closed.",
    transit:
      "Southbound El toward Center City, but only as far as Huntingdon. Getting off at Berks or Girard overshoots the studio to the south.",
    landmarks: ["Somerset Station", "Kensington and Allegheny", "McPherson Square", "Huntingdon Station"],
    nearby: ["east-kensington", "fishtown", "port-richmond"],
  },
  {
    slug: "olde-kensington",
    name: "Olde Kensington",
    group: "philadelphia",
    atStudio: false,
    h1Place: "Olde Kensington, Philadelphia",
    zips: "19122 and 19125",
    distance: "About 1.1 miles from Front Street and Master Street.",
    character:
      "Olde Kensington is the name used for the blocks west of Front Street around Master and Girard, including American Street. It is not the Kensington Avenue corridor and it is not 2nd Street in Northern Liberties. Neighborhood names overlap here, so this page is for a start west of Front.",
    commute:
      "From Front and Master, go east toward Frankford Avenue or Kensington Avenue, then to Huntingdon Street and east to 2137. Girard Avenue also runs east into the Frankford corridor if you are closer to Girard than to Master.",
    drive:
      "On the El, Girard Station is the nearby stop. Ride to Huntingdon and walk east. The studio is not on Girard Avenue. There is no second office on American Street.",
    transit:
      "About a mile on foot from American Street, depending on the block. Most people drive or ride the El for a visit. ZIP codes used for this area are 19122 and 19125.",
    landmarks: ["Front and Master", "American Street", "Girard Avenue", "Girard Station"],
    nearby: ["south-kensington", "northern-liberties", "fishtown", "east-kensington"],
  },
  {
    slug: "south-kensington",
    name: "South Kensington",
    group: "philadelphia",
    atStudio: false,
    h1Place: "South Kensington, Philadelphia",
    zips: "19122",
    distance: "About 1.3 miles from Front Street and Girard Avenue.",
    character:
      "South Kensington sits south of the studio, toward Girard and Front, between Northern Liberties and the Kensington Avenue grid. The trip starts farther south than Olde Kensington and farther east than a 2nd Street start.",
    commute:
      "Girard Station is already the nearby El stop. Huntingdon is three stops north. If you drive, Frankford Avenue north from Girard is the direct surface street, then east on Huntingdon.",
    drive:
      "The studio is north of Girard, not south of it. Saturday hours are 10 AM to 2 PM if a weekday crossing of Girard is difficult. Sunday the studio is closed.",
    transit:
      "Market-Frankford Line, Girard to Huntingdon, then walk east. South Kensington is mostly ZIP 19122. You are traveling to 19125.",
    landmarks: ["Front and Girard", "Girard Station", "The blocks between Northern Liberties and Kensington Avenue"],
    nearby: ["olde-kensington", "northern-liberties", "spring-garden", "fishtown"],
  },
  {
    slug: "old-city",
    name: "Old City",
    group: "philadelphia",
    atStudio: false,
    h1Place: "Old City, Philadelphia",
    zips: "19106",
    distance: "About 2.6 miles from 2nd and Market.",
    character:
      "Old City is the historic grid around Market Street, 2nd and 3rd Streets, Elfreth’s Alley, and Independence Hall. It is a workday neighborhood for a lot of patients. The studio is not in Old City. There is no treatment room near Independence Hall.",
    commute:
      "The direct trip is one seat on the Market-Frankford Line. Enter at 2nd Street or 5th Street Station and ride toward Frankford. You pass Spring Garden, Girard, Berks, and York-Dauphin before Huntingdon. Walk east from the station.",
    drive:
      "Driving, Delaware Avenue north toward the Frankford Avenue corridor, or I-95 north, both work. Plan on something like 15 to 30 minutes. Midday and evening traffic change the time more than the 2.6 miles do.",
    transit:
      "Monday through Thursday the studio is open until 7 PM, which is the slot many Old City workers use after they leave Market Street. Friday ends at 3 PM. Old City is ZIP 19106.",
    landmarks: ["Independence Hall", "Elfreth’s Alley", "Market Street", "2nd Street Station", "5th Street Station"],
    nearby: ["society-hill", "spring-garden", "northern-liberties", "center-city"],
  },
  {
    slug: "society-hill",
    name: "Society Hill",
    group: "philadelphia",
    atStudio: false,
    h1Place: "Society Hill, Philadelphia",
    zips: "19106",
    distance: "About 3.1 miles from 3rd and Pine.",
    character:
      "Society Hill is south of Old City, around Headhouse Square, Spruce and Pine, and Washington Square. It shares ZIP 19106 with Old City, but the trip starts south of Market, so you are not already on the El.",
    commute:
      "Walk or ride north to 2nd Street Station, then take the Market-Frankford Line to Huntingdon and walk east. That is the Old City ride plus the extra distance up to Market Street.",
    drive:
      "Driving, go north on 2nd or Front, or use Columbus Boulevard along the river, then come inland on Girard Avenue to Frankford Avenue and north to Huntingdon. If you are west of Broad, use the Rittenhouse or Center City page instead.",
    transit:
      "Headhouse Square and Washington Square are the landmarks for the start of this trip, not landmarks near the studio. Saturday hours are 10 AM to 2 PM. The studio is in 19125.",
    landmarks: ["Headhouse Square", "Washington Square", "Spruce and Pine Streets", "2nd Street Station"],
    nearby: ["old-city", "queen-village", "center-city"],
  },
  {
    slug: "queen-village",
    name: "Queen Village",
    group: "philadelphia",
    atStudio: false,
    h1Place: "Queen Village, Philadelphia",
    zips: "19147",
    distance: "About 3.6 miles from 4th and Christian, near Fabric Row.",
    character:
      "Queen Village is the river side of South Philadelphia, south of Society Hill, around South 4th Street and the east end of South Street. Fabric Row is the landmark people name. It is not the Italian Market, which is Bella Vista, farther west at 9th Street.",
    commute:
      "From South 4th, go north through Society Hill to 2nd Street or 5th Street Station and ride the Market-Frankford Line to Huntingdon. Queen Village itself has no El station.",
    drive:
      "Driving, 4th Street, Front Street, or Columbus Boulevard north gets you toward Girard, then to Frankford Avenue and east on Huntingdon. The studio is in Fishtown, ZIP 19125, not on Fabric Row.",
    transit:
      "Bella Vista and Queen Village share ZIP 19147, but the starts are different. This page is the 4th Street start. A 9th Street start is not in the current area set.",
    landmarks: ["Fabric Row on South 4th Street", "The east end of South Street", "Columbus Boulevard"],
    nearby: ["society-hill", "old-city", "center-city"],
  },
  {
    slug: "graduate-hospital",
    name: "Graduate Hospital",
    group: "philadelphia",
    atStudio: false,
    h1Place: "Graduate Hospital, Philadelphia",
    zips: "19146",
    distance: "About 4 miles from 22nd and South.",
    character:
      "Graduate Hospital is south of South Street and west of Broad, toward Schuylkill River Park. It is the longer in-city trip on this list. There is no one-seat ride on the El.",
    commute:
      "Take the Broad Street Line north to City Hall and transfer to the Market-Frankford Line toward Frankford. Get off at Huntingdon and walk east. That transfer is the piece Old City and Northern Liberties do not have.",
    drive:
      "Driving, South Street or Washington Avenue east toward the river, then north on Columbus Boulevard or I-95, reaches the Frankford side of Fishtown. From 22nd and South the distance is about 4 miles.",
    transit:
      "Because the trip is long, Saturday from 10 AM to 2 PM is worth knowing. Weekday evenings run until 7 PM Monday through Thursday. Friday ends at 3 PM. The neighborhood ZIP is 19146.",
    landmarks: ["Schuylkill River Park", "South Street west of Broad", "The blocks between South and Washington"],
    nearby: ["rittenhouse", "center-city", "queen-village"],
  },
  {
    slug: "center-city",
    name: "Center City",
    group: "philadelphia",
    atStudio: false,
    h1Place: "Center City, Philadelphia",
    zips: "19102, 19103, and 19107",
    distance: "About 3 miles from City Hall.",
    character:
      "Center City on this page means City Hall, Market East, Reading Terminal Market, and the stations around Broad and Market. It is not Rittenhouse Square, which is west of Broad and has its own page because the walk to the El is longer.",
    commute:
      "15th Street Station is the Center City stop on the Market-Frankford Line. Ride toward Frankford and get off at Huntingdon. You pass 13th, 11th, 8th, 5th, 2nd, Spring Garden, Girard, Berks, and York-Dauphin. No transfer if you are already on the El.",
    drive:
      "If you arrive at Jefferson Station or Suburban Station, walk to 15th Street Station for that ride. Driving from City Hall is about 3 miles via surface streets or I-95 north. Allow 15 to 30 minutes. Rush hour is what changes the time.",
    transit:
      "A general acupuncture fee is not published. Microneedling prices are published on the microneedling page. Ask when you book if you need any other number. Center City ZIPs people usually mean are 19102, 19103, and 19107.",
    landmarks: ["City Hall", "Reading Terminal Market", "Jefferson Station", "Suburban Station", "15th Street Station"],
    nearby: ["rittenhouse", "old-city", "spring-garden", "graduate-hospital"],
  },
  {
    slug: "rittenhouse",
    name: "Rittenhouse",
    group: "philadelphia",
    atStudio: false,
    h1Place: "Rittenhouse, Philadelphia",
    zips: "19103",
    distance: "About 3.5 miles from Rittenhouse Square.",
    character:
      "Rittenhouse is west of Broad Street, around Rittenhouse Square and Walnut Street. The El does not stop at the square. Center City directions start at City Hall, where the El is already under your feet. This trip starts several blocks west, in ZIP 19103.",
    commute:
      "Go east to 15th Street Station and ride the Market-Frankford Line to Huntingdon, then walk east on Huntingdon Street. That second walk is about half a mile.",
    drive:
      "Driving, cross Broad and work east and north toward Spring Garden or I-95, then to Frankford Avenue and Huntingdon. Evening traffic on Walnut is the variable. The square is about 3.5 miles from 2137 E Huntingdon St.",
    transit:
      "The studio at the end of the ride is the Fishtown practice, not a Rittenhouse office. Call or text (610) 742-5810 to book.",
    landmarks: ["Rittenhouse Square", "Walnut Street", "15th Street Station"],
    nearby: ["center-city", "graduate-hospital", "fairmount"],
  },
  {
    slug: "spring-garden",
    name: "Spring Garden",
    group: "philadelphia",
    atStudio: false,
    h1Place: "Spring Garden, Philadelphia",
    zips: "19123 and 19130",
    distance: "About 1.8 miles from Spring Garden Street and 2nd Street.",
    character:
      "Spring Garden is the corridor along Spring Garden Street, south of Northern Liberties and north of Callowhill, from Broad Street toward the Delaware. Community College of Philadelphia sits at 17th and Spring Garden. It is not Fairmount, which is west of Broad, and it is not the Piazza, which is north of here in Northern Liberties.",
    commute:
      "Spring Garden Station on the Market-Frankford Line is the stop near Front and Spring Garden. Ride north toward Frankford: Girard, Berks, York-Dauphin, then Huntingdon. That is four stops, then the walk east.",
    drive:
      "By car, Spring Garden Street east to the river side, then north, or up 2nd or Front to Girard and across to Frankford Avenue. The mileage from Spring Garden and 2nd is about 1.8 miles. The studio is still in 19125.",
    transit:
      "Do not confuse this El stop with the Broad Street Line’s Spring Garden station, which is a different line at Broad Street. From Broad you would still need to reach the Market-Frankford Line.",
    landmarks: ["Spring Garden Station on the El", "Community College of Philadelphia", "Spring Garden Street", "The Broad Street edge of the neighborhood"],
    nearby: ["northern-liberties", "old-city", "fairmount", "center-city"],
  },
  {
    slug: "fairmount",
    name: "Fairmount",
    group: "philadelphia",
    atStudio: false,
    h1Place: "Fairmount, Philadelphia",
    zips: "19130",
    distance: "About 3.5 miles from Eastern State Penitentiary.",
    character:
      "Fairmount is west of Broad, around Fairmount Avenue, between the Spring Garden corridor and Girard. Eastern State Penitentiary is the landmark on Fairmount Avenue. The Art Museum and the Parkway are the southern edge of this part of the city, not the studio’s neighborhood.",
    commute:
      "The Broad Street Line stops at Fairmount. Ride to City Hall and transfer to the Market-Frankford Line toward Frankford, then get off at Huntingdon and walk east. There is no one-seat El ride from Fairmount Avenue.",
    drive:
      "Driving, Fairmount Avenue or Spring Garden Street east, or Girard Avenue east, eventually meets the Frankford Avenue side of Fishtown. From Eastern State the trip is about 3.5 miles. ZIP 19130 is Fairmount. The studio is 19125.",
    transit:
      "Girard Avenue is the northern reference if you are closer to Brewerytown than to the Parkway. Use the Brewerytown page if you are west of Girard College rather than on Fairmount Avenue.",
    landmarks: ["Eastern State Penitentiary", "Fairmount Avenue", "Fairmount Station on the Broad Street Line", "The Parkway edge"],
    nearby: ["brewerytown", "spring-garden", "center-city", "rittenhouse"],
  },
  {
    slug: "brewerytown",
    name: "Brewerytown",
    group: "philadelphia",
    atStudio: false,
    h1Place: "Brewerytown, Philadelphia",
    zips: "19121",
    distance: "About 3.5 miles from Girard Avenue and 27th Street.",
    character:
      "Brewerytown is the Girard Avenue neighborhood west of Broad and west of Girard College, roughly the 25th to 32nd Street blocks. It is north of Fairmount and east of the river wards. The old brewery buildings and Girard Avenue are the references, not Eastern State.",
    commute:
      "Girard Avenue runs east from here all the way to Frankford Avenue. That is the direct drive: east on Girard, then north on Frankford to Huntingdon, then east to the studio. SEPTA Route 15 runs on Girard Avenue and can drop you at Girard Station for the El north to Huntingdon.",
    drive:
      "There is no El station in Brewerytown itself. The Broad Street Line at Girard is the other option, then a transfer. The neighborhood ZIP is 19121. The studio is about 3.5 miles east, in 19125.",
    transit:
      "Route 15 plus the Market-Frankford Line is the transit version of the Girard Avenue drive. Getting off the El at Girard and walking would leave you far short of Huntingdon Street.",
    landmarks: ["Girard Avenue", "Girard College’s western edge", "The blocks from 25th to 32nd", "Route 15 along Girard"],
    nearby: ["fairmount", "northern-liberties", "east-falls"],
  },
  {
    slug: "bala-cynwyd",
    name: "Bala Cynwyd",
    group: "main-line",
    atStudio: false,
    h1Place: "Bala Cynwyd",
    zips: "19004",
    distance: "About 7 miles from City Avenue and the Bala Cynwyd side of the line to the Fishtown studio.",
    character:
      "Bala Cynwyd is the closest Main Line community to Philadelphia, just west of City Avenue in Lower Merion. It is not Wynnefield, which is the Philadelphia side of that same avenue. There is no Five Points Wellness office in Bala Cynwyd. Residents are seen at the Fishtown studio.",
    commute:
      "The usual drive uses City Avenue to I-76 toward the city, then across to I-95 or to Girard and Frankford, or Kelly Drive if the expressway is jammed. The Cynwyd regional-rail branch serves Bala, but it is not a one-seat ride to Huntingdon Station.",
    drive:
      "Plan on roughly 20 to 40 minutes depending on the Schuylkill Expressway. The mileage is about 7 miles. Parking is at the Fishtown studio, where the practice says free street parking is readily available, not in Bala.",
    transit:
      "A rail trip means Cynwyd or a bus to the city, then the Market-Frankford Line to Huntingdon, then a walk east. Most patients from Bala drive. ZIP 19004 is the Bala code. The studio is Philadelphia 19125.",
    landmarks: ["City Avenue", "The Cynwyd rail branch", "The Montgomery County side of City Avenue"],
    nearby: ["lower-merion", "wynnefield", "merion-station", "belmont-hills"],
  },
  {
    slug: "lower-merion",
    name: "Lower Merion",
    group: "main-line",
    atStudio: false,
    h1Place: "Lower Merion",
    zips: "19004, 19003, 19010, 19035, 19041, 19066, 19072, and 19096 among them",
    distance: "About 7 miles from the City Avenue edge and closer to 12 miles from the Gladwyne or Bryn Mawr end.",
    character:
      "Lower Merion is the township, not a single downtown. Bala Cynwyd, Merion, Narberth, Wynnewood, Ardmore, Haverford, Bryn Mawr, Gladwyne, and Penn Valley each have their own page because the drive is not the same. This page is for a search that names the township. There is no Five Points office anywhere in Lower Merion.",
    commute:
      "Every Lower Merion trip ends at 2137 E Huntingdon St in Fishtown. Pick the town page that matches your station or your main street. A start in Bala is a City Avenue trip. A start in Ardmore or Bryn Mawr is a Lancaster Avenue and I-76 trip.",
    drive:
      "Do not use one mileage for the whole township. Seven miles is a fair figure from City Avenue. Twelve miles is closer to Bryn Mawr. The Schuylkill Expressway is the shared bottleneck either way.",
    transit:
      "Paoli/Thorndale line stops inside the township include Merion, Narberth, Wynnewood, Ardmore, Haverford, and Bryn Mawr. None of them deliver you to Huntingdon Station. You still cross the city and finish on the El or by car.",
    landmarks: ["City Avenue", "Lancaster Avenue", "The Paoli/Thorndale line through the township"],
    nearby: ["bala-cynwyd", "ardmore", "gladwyne", "wynnewood", "narberth"],
  },
  {
    slug: "merion-station",
    name: "Merion Station",
    group: "main-line",
    atStudio: false,
    h1Place: "Merion Station",
    zips: "19066",
    distance: "About 8 miles from Merion Station to the Fishtown studio.",
    character:
      "Merion Station is the first Paoli/Thorndale stop after Overbrook, still in Lower Merion, before Narberth. It is a residential stop, not the Ardmore downtown. There is no Five Points office at Merion Station.",
    commute:
      "The inbound train goes to Suburban Station or 30th Street. From there you still need the Market-Frankford Line to Huntingdon and a walk east. That is a two-seat rail trip plus the walk. Many people drive instead, via Montgomery Avenue or City Avenue to I-76.",
    drive:
      "About 8 miles by car, often 25 to 45 minutes if the expressway is slow. You park in Fishtown, not at Merion station, for the appointment itself.",
    transit:
      "Do not confuse Merion Station with Merion Golf Club or with Wynnefield. The station code people use is ZIP 19066. The studio is Philadelphia 19125.",
    landmarks: ["Merion Station on the Paoli/Thorndale line", "Montgomery Avenue", "The stop between Overbrook and Narberth"],
    nearby: ["bala-cynwyd", "narberth", "overbrook", "wynnewood"],
  },
  {
    slug: "narberth",
    name: "Narberth",
    group: "main-line",
    atStudio: false,
    h1Place: "Narberth",
    zips: "19072",
    distance: "About 9 miles from downtown Narberth to the Fishtown studio.",
    character:
      "Narberth is its own borough with a small downtown on Haverford Avenue and a Paoli/Thorndale station. It is tighter and more of a main street than Merion Station, and it is inbound of Wynnewood. There is no Five Points office in the borough.",
    commute:
      "Inbound regional rail reaches Center City, then you transfer to the El for Huntingdon. Driving, Haverford Avenue or Montgomery Avenue toward City Avenue, or I-76 from the nearest ramp, both end in Fishtown.",
    drive:
      "About 9 miles. Narberth patients who use the train for work still usually drive to a weekday evening appointment, because the return trip after 7 PM is the constraint. The studio is open until 7 PM Monday through Thursday.",
    transit:
      "Penn Valley, next door, has no station of its own and often uses Narberth as the rail point. If you live on Hollow Road, use the Penn Valley page. ZIP 19072 covers Narberth.",
    landmarks: ["Haverford Avenue in Narberth", "Narberth Station", "The borough downtown"],
    nearby: ["penn-valley", "wynnewood", "merion-station", "ardmore"],
  },
  {
    slug: "penn-valley",
    name: "Penn Valley",
    group: "main-line",
    atStudio: false,
    h1Place: "Penn Valley",
    zips: "19072",
    distance: "About 9 miles from the Hollow Road area to the Fishtown studio.",
    character:
      "Penn Valley is a residential part of Lower Merion along Hollow Road, between Gladwyne and Narberth. It does not have its own regional-rail station or a commercial downtown. There is no Five Points office in Penn Valley.",
    commute:
      "The drive is the realistic trip. Hollow Road toward Narberth or toward the expressway, then I-76 east and across the city to Fishtown. People who want a train usually go to Narberth station first, which adds a short drive before the rail portion.",
    drive:
      "About 9 miles, similar to Narberth, but you are starting off the rail line. Do not follow Gladwyne directions if you are on Hollow Road. Gladwyne is farther toward the river and River Road.",
    transit:
      "There is no Penn Valley El stop and no Penn Valley studio. The appointment is at 2137 E Huntingdon St. ZIP 19072 is also used by Narberth, so the street, not the ZIP alone, tells these pages apart.",
    landmarks: ["Hollow Road", "The gap between Gladwyne and Narberth", "Narberth Station as the nearest rail stop"],
    nearby: ["narberth", "gladwyne", "bala-cynwyd"],
  },
  {
    slug: "belmont-hills",
    name: "Belmont Hills",
    group: "main-line",
    atStudio: false,
    h1Place: "Belmont Hills",
    zips: "19004",
    distance: "About 6.5 miles from Belmont Avenue in Belmont Hills to the Fishtown studio.",
    character:
      "Belmont Hills is the small Lower Merion community along Belmont Avenue just west of Manayunk, near the river. It is closer to the city than Ardmore and closer to Manayunk than to the Lancaster Avenue towns. There is no Five Points office in Belmont Hills.",
    commute:
      "Drive Belmont Avenue or Green Lane toward the river roads, then Kelly Drive or I-76 toward the city, and finish at Frankford Avenue and Huntingdon. Manayunk’s Main Street is the nearby commercial strip, but Manayunk is Philadelphia and has its own page.",
    drive:
      "About 6.5 miles. That is shorter than a Bala Cynwyd trip via City Avenue and much shorter than Bryn Mawr. Parking for the visit is on Huntingdon Street in Fishtown.",
    transit:
      "There is no Belmont Hills regional-rail station. Manayunk station is the nearest rail stop, and it still does not reach Huntingdon without a transfer. Mail for Belmont Hills often uses 19004, the same ZIP family as Bala Cynwyd, which is a different hill.",
    landmarks: ["Belmont Avenue", "The streets just west of Manayunk", "The Schuylkill side of Lower Merion"],
    nearby: ["manayunk", "bala-cynwyd", "roxborough"],
  },
  {
    slug: "gladwyne",
    name: "Gladwyne",
    group: "main-line",
    atStudio: false,
    h1Place: "Gladwyne",
    zips: "19035",
    distance: "About 10 miles from Gladwyne to the Fishtown studio.",
    character:
      "Gladwyne is the northwest corner of Lower Merion, along the Schuylkill and River Road, with no regional-rail station in the village. It is more spread out than Narberth or Ardmore. There is no Five Points office in Gladwyne.",
    commute:
      "The drive follows River Road or the local roads out to I-76, then east through the city to Fishtown. Conshohocken is farther up the river. Penn Valley is inland, toward Hollow Road, not along River Road.",
    drive:
      "About 10 miles, and the clock is the expressway plus the local roads before you reach it. A 25-minute trip and a 50-minute trip are both plausible. Book with that range in mind. The studio closes at 7 PM Monday through Thursday and at 3 PM on Friday.",
    transit:
      "Without a station, Gladwyne is a car trip for this appointment. ZIP 19035 is Gladwyne. The studio remains 2137 E Huntingdon St, Philadelphia, PA 19125.",
    landmarks: ["River Road", "The Schuylkill side of Gladwyne", "The northwest corner of Lower Merion"],
    nearby: ["penn-valley", "conshohocken", "bala-cynwyd"],
  },
  {
    slug: "wynnewood",
    name: "Wynnewood",
    group: "main-line",
    atStudio: false,
    h1Place: "Wynnewood",
    zips: "19096",
    distance: "About 9 miles from Wynnewood Station to the Fishtown studio.",
    character:
      "Wynnewood is the Paoli/Thorndale stop between Narberth and Ardmore, with Wynnewood Shopping Center and Montgomery Avenue as the everyday references. It is not Overbrook, the Philadelphia neighborhood one stop inbound. There is no Five Points office in Wynnewood.",
    commute:
      "Inbound rail goes to Center City, then you still transfer to the El for Huntingdon. Driving uses Montgomery Avenue toward City Avenue or the nearest I-76 ramp, then across the city.",
    drive:
      "About 9 miles. Ardmore’s Lancaster Avenue downtown is the next town out, not this page. If you are starting at Suburban Square, use the Ardmore page.",
    transit:
      "Wynnewood Station is the rail landmark. The appointment parking is in Fishtown. ZIP 19096 is Wynnewood. The studio is 19125.",
    landmarks: ["Wynnewood Station", "Wynnewood Shopping Center", "Montgomery Avenue"],
    nearby: ["narberth", "ardmore", "merion-station", "overbrook"],
  },
  {
    slug: "ardmore",
    name: "Ardmore",
    group: "main-line",
    atStudio: false,
    h1Place: "Ardmore",
    zips: "19003",
    distance: "About 10 miles from downtown Ardmore to the Fishtown studio.",
    character:
      "Ardmore is the largest Main Line downtown on this list, around Lancaster Avenue, Ardmore Station, and Suburban Square. It is outbound of Wynnewood and inbound of Haverford. There is no Five Points office on Lancaster Avenue or anywhere else in Ardmore.",
    commute:
      "The Paoli/Thorndale line brings you to Center City. Huntingdon Station is a second ride, on the Market-Frankford Line, plus a walk east. Driving, Lancaster Avenue to I-76, or the local roads to City Avenue, then across Philadelphia to Frankford and Huntingdon.",
    drive:
      "About 10 miles, commonly 30 to 50 minutes. Evening appointments Monday through Thursday end at 7 PM, so the drive back is part of the plan. Friday the studio closes at 3 PM.",
    transit:
      "Do not use Haverford or Bryn Mawr directions if you are starting at Suburban Square. Those stations are farther out the same line. ZIP 19003 is Ardmore.",
    landmarks: ["Lancaster Avenue", "Ardmore Station", "Suburban Square"],
    nearby: ["wynnewood", "haverford", "narberth", "lower-merion"],
  },
  {
    slug: "haverford",
    name: "Haverford",
    group: "main-line",
    atStudio: false,
    h1Place: "Haverford",
    zips: "19041",
    distance: "About 11 miles from Haverford Station to the Fishtown studio.",
    character:
      "Haverford is the Paoli/Thorndale stop between Ardmore and Bryn Mawr. Haverford College is the landmark just west of the station area. This is Montgomery County, not Havertown in Delaware County. There is no Five Points office in Haverford.",
    commute:
      "Rail to Center City, then the El to Huntingdon, is the no-car version and it is a long chain for an evening visit. The drive is Lancaster Avenue or Montgomery Avenue toward I-76, then east to Fishtown.",
    drive:
      "About 11 miles. Havertown is a different place, along West Chester Pike, and has its own page. If your street is in ZIP 19083, you want Havertown, not this page.",
    transit:
      "Haverford Station is the rail point. ZIP 19041 is Haverford. The only treatment address is 2137 E Huntingdon St in Philadelphia.",
    landmarks: ["Haverford Station", "Haverford College", "The stop between Ardmore and Bryn Mawr"],
    nearby: ["ardmore", "bryn-mawr", "havertown"],
  },
  {
    slug: "havertown",
    name: "Havertown",
    group: "nearby",
    atStudio: false,
    h1Place: "Havertown",
    zips: "19083",
    distance: "About 11 miles from Havertown to the Fishtown studio.",
    character:
      "Havertown is in Haverford Township, Delaware County, along West Chester Pike and Township Line Road. It is not the Main Line railroad town of Haverford, even though the township name is similar. There is no Five Points office in Havertown.",
    commute:
      "This is a car trip. West Chester Pike or Township Line Road toward City Avenue, then I-76 or the city streets east to Fishtown. There is no Paoli/Thorndale station in Havertown.",
    drive:
      "About 11 miles, and the route is south of the Main Line tracks. Using Ardmore or Haverford Station directions will send you to the wrong road.",
    transit:
      "Buses on West Chester Pike can reach the 69th Street end of the Market-Frankford Line, and from there the El runs all the way to Huntingdon. That is a real one-line finish once you are on the El, after the bus. ZIP 19083 is Havertown.",
    landmarks: ["West Chester Pike", "Township Line Road", "Haverford Township in Delaware County"],
    nearby: ["haverford", "ardmore", "overbrook"],
  },
  {
    slug: "bryn-mawr",
    name: "Bryn Mawr",
    group: "main-line",
    atStudio: false,
    h1Place: "Bryn Mawr",
    zips: "19010",
    distance: "About 12 miles from Bryn Mawr Station to the Fishtown studio.",
    character:
      "Bryn Mawr is the college town on Lancaster Avenue, outbound of Haverford and inbound of Rosemont. Bryn Mawr Station and the college are the landmarks. There is no Five Points office in Bryn Mawr.",
    commute:
      "The train to Center City is familiar for students and staff, and it still leaves you short of Fishtown. Add the Market-Frankford Line to Huntingdon and the walk east. Driving is Lancaster Avenue to I-76.",
    drive:
      "About 12 miles, often 35 to 55 minutes. Rosemont is the next stop out and shares some of ZIP 19010, so if you are starting at Rosemont Station use that page.",
    transit:
      "Bryn Mawr Station is the rail landmark. The studio phone is (610) 742-5810. The address is only the Huntingdon Street studio.",
    landmarks: ["Bryn Mawr Station", "Lancaster Avenue", "Bryn Mawr College"],
    nearby: ["haverford", "rosemont", "villanova", "ardmore"],
  },
  {
    slug: "rosemont",
    name: "Rosemont",
    group: "main-line",
    atStudio: false,
    h1Place: "Rosemont",
    zips: "19010",
    distance: "About 12 miles from Rosemont Station to the Fishtown studio.",
    character:
      "Rosemont is the small Paoli/Thorndale stop between Bryn Mawr and Villanova, with Rosemont College nearby. It is easy to fold into Bryn Mawr because they share ZIP 19010. The station is its own stop, one outbound from Bryn Mawr. There is no Five Points office in Rosemont.",
    commute:
      "Inbound, you pass Bryn Mawr, Haverford, and Ardmore before Center City. Then the El. That is a long rail chain for a treatment visit. The drive follows the same corridor to I-76 and then east.",
    drive:
      "About 12 miles, a hair farther than a Bryn Mawr start and shorter than Villanova. If your landmark is the university, you are on the Villanova page, not this one.",
    transit:
      "Rosemont Station is the point that makes this page different from Bryn Mawr. The Fishtown studio is still the only address.",
    landmarks: ["Rosemont Station", "Rosemont College", "The stop between Bryn Mawr and Villanova"],
    nearby: ["bryn-mawr", "villanova", "haverford"],
  },
  {
    slug: "villanova",
    name: "Villanova",
    group: "main-line",
    atStudio: false,
    h1Place: "Villanova",
    zips: "19085",
    distance: "About 13 miles from Villanova Station to the Fishtown studio.",
    character:
      "Villanova is the university stop on the Paoli/Thorndale line, outbound of Rosemont. Lancaster Avenue and the campus are the landmarks. It is the farthest Main Line town in this set. There is no Five Points office in Villanova.",
    commute:
      "Rail to Center City plus the El to Huntingdon is a long evening. Most people drive: Lancaster Avenue or I-476 to I-76, then east across the city to Fishtown. About 13 miles, often 40 to 60 minutes.",
    drive:
      "Leave time for the return. Monday through Thursday the studio is open until 7 PM. A 6 PM booking from Villanova is a different plan than a 6 PM booking from Northern Liberties.",
    transit:
      "Villanova Station is the rail point. ZIP 19085 is Villanova. Rosemont, one stop inbound, is 19010. The treatment address does not change: 2137 E Huntingdon St, Philadelphia.",
    landmarks: ["Villanova Station", "Villanova University", "Lancaster Avenue at the campus"],
    nearby: ["rosemont", "bryn-mawr", "haverford"],
  },
  {
    slug: "manayunk",
    name: "Manayunk",
    group: "nearby",
    atStudio: false,
    h1Place: "Manayunk, Philadelphia",
    zips: "19127",
    distance: "About 6 miles from Main Street in Manayunk to the Fishtown studio.",
    character:
      "Manayunk is a Philadelphia neighborhood along the Schuylkill, with Main Street, Venice Island, and the Manayunk Bridge as the landmarks. It is not a Main Line town, even though the drive passes the expressway towns. There is no Five Points office on Main Street.",
    commute:
      "Drive I-76 east or Kelly Drive, then across to Frankford Avenue and Huntingdon. Manayunk Station is on the Manayunk/Norristown line, which goes to Center City, not to the El. You would still transfer to reach Huntingdon.",
    drive:
      "About 6 miles. Belmont Hills is the Lower Merion pocket just up Belmont Avenue. Roxborough is the ridge above Main Street. Those are different starts.",
    transit:
      "The hills mean a walk from the station to Main Street is already steep, and it does not point toward Fishtown. For this appointment, the car or a bus-plus-El combination is the practical choice. ZIP 19127 is Manayunk.",
    landmarks: ["Main Street", "Manayunk Station", "The Manayunk Bridge", "Venice Island"],
    nearby: ["roxborough", "east-falls", "belmont-hills"],
  },
  {
    slug: "roxborough",
    name: "Roxborough",
    group: "nearby",
    atStudio: false,
    h1Place: "Roxborough, Philadelphia",
    zips: "19128",
    distance: "About 7 miles from Ridge Avenue in Roxborough to the Fishtown studio.",
    character:
      "Roxborough is the Philadelphia neighborhood on the ridge above Manayunk, along Ridge Avenue. Gorgas Park and the Ridge Avenue commercial strip are the local references. You are uphill from Main Street, not on it. There is no Five Points office in Roxborough.",
    commute:
      "Ridge Avenue toward the city, then Kelly Drive or the streets across to Girard and Frankford, is the drive. About 7 miles. Manayunk’s Main Street is below you. East Falls is down toward the river in the other direction.",
    drive:
      "Regional rail does not run up the ridge. Manayunk Station is below, and it still requires a transfer to reach the studio. Most Roxborough patients drive to Huntingdon Street.",
    transit:
      "ZIP 19128 is Roxborough. Manayunk is 19127. The studio is 19125, on the other side of the city, in Fishtown.",
    landmarks: ["Ridge Avenue", "Gorgas Park", "The ridge above Manayunk"],
    nearby: ["manayunk", "east-falls", "brewerytown"],
  },
  {
    slug: "east-falls",
    name: "East Falls",
    group: "nearby",
    atStudio: false,
    h1Place: "East Falls, Philadelphia",
    zips: "19129",
    distance: "About 5.5 miles from Midvale Avenue in East Falls to the Fishtown studio.",
    character:
      "East Falls sits along the Schuylkill between Fairmount Park and Manayunk. Kelly Drive, Midvale Avenue, and the Falls Bridge are the landmarks. It is Philadelphia, closer to the studio than any Main Line town, and it is not Fairmount. There is no Five Points office in East Falls.",
    commute:
      "Kelly Drive toward the Art Museum and then across the city is the scenic drive and it can be slow. I-76 is the other option, then out to Fishtown. About 5.5 miles.",
    drive:
      "There is no El in East Falls. A bus to a Broad Street or Market-Frankford connection is the transit version, and it is usually slower than driving for this particular appointment.",
    transit:
      "ZIP 19129 is East Falls. Brewerytown and Fairmount are farther south and have their own pages. The studio address is still East Huntingdon Street in Fishtown.",
    landmarks: ["Kelly Drive", "Midvale Avenue", "The Falls Bridge"],
    nearby: ["manayunk", "brewerytown", "fairmount"],
  },
  {
    slug: "wynnefield",
    name: "Wynnefield",
    group: "nearby",
    atStudio: false,
    h1Place: "Wynnefield, Philadelphia",
    zips: "19131",
    distance: "About 6.5 miles from City Avenue in Wynnefield to the Fishtown studio.",
    character:
      "Wynnefield is the Philadelphia neighborhood on the city side of City Avenue, around 54th Street and St. Joseph’s University. Bala Cynwyd is directly across City Avenue in Montgomery County. There is no Five Points office in Wynnefield.",
    commute:
      "City Avenue to I-76, or City Avenue toward Girard and then east, both aim at Fishtown. About 6.5 miles. You are starting in Philadelphia, ZIP 19131, and finishing in 19125.",
    drive:
      "Do not use Main Line station directions. The nearest Paoli/Thorndale stop is Overbrook, which is its own neighborhood farther southwest. St. Joseph’s and 54th Street are the Wynnefield references.",
    transit:
      "Buses on City Avenue and 54th can connect toward the El, but the drive is the straightforward version. Parking is at the Huntingdon Street studio.",
    landmarks: ["City Avenue", "54th Street", "St. Joseph’s University"],
    nearby: ["bala-cynwyd", "overbrook", "fairmount"],
  },
  {
    slug: "overbrook",
    name: "Overbrook",
    group: "nearby",
    atStudio: false,
    h1Place: "Overbrook, Philadelphia",
    zips: "19151",
    distance: "About 7 miles from Overbrook Station to the Fishtown studio.",
    character:
      "Overbrook is the Philadelphia neighborhood at the city end of the Paoli/Thorndale line, around 63rd Street and City Avenue, before the tracks enter Lower Merion at Merion. Overbrook Station is the landmark. There is no Five Points office in Overbrook.",
    commute:
      "The inbound train is a true regional-rail start, the first stop out of the city stations. You still change in Center City for the Market-Frankford Line to Huntingdon. Driving uses City Avenue or the streets to I-76.",
    drive:
      "About 7 miles. Merion Station is the next stop out and is already Montgomery County. Wynnefield is northeast of here, toward 54th, not this station.",
    transit:
      "Overbrook Station is why this page is separate from Wynnefield. ZIP 19151 is Overbrook. The studio is in Fishtown.",
    landmarks: ["Overbrook Station", "63rd Street and City Avenue", "The first Paoli/Thorndale stop in Philadelphia"],
    nearby: ["wynnefield", "merion-station", "havertown"],
  },
  {
    slug: "conshohocken",
    name: "Conshohocken",
    group: "nearby",
    atStudio: false,
    h1Place: "Conshohocken",
    zips: "19428",
    distance: "About 12 miles from Fayette Street in Conshohocken to the Fishtown studio.",
    character:
      "Conshohocken is the Montgomery County borough on the east bank of the Schuylkill, around Fayette Street. It is a river town on I-76, not a Lancaster Avenue Main Line town. West Conshohocken is the separate borough on the other bank. There is no Five Points office in Conshohocken.",
    commute:
      "I-76 east is the direct drive, then across the city to Fishtown. About 12 miles, and the expressway decides the time. Conshohocken Station is on the Manayunk/Norristown line into Center City, then you still need the El.",
    drive:
      "Gladwyne is downriver and inland. Do not use River Road through Gladwyne if you are starting on Fayette Street. The highway is the Conshohocken move.",
    transit:
      "Both Conshohocken and West Conshohocken use ZIP 19428, so the borough, not the ZIP, is what splits these pages. The studio is Philadelphia 19125.",
    landmarks: ["Fayette Street", "Conshohocken Station", "I-76 along the river"],
    nearby: ["west-conshohocken", "gladwyne", "manayunk"],
  },
  {
    slug: "west-conshohocken",
    name: "West Conshohocken",
    group: "nearby",
    atStudio: false,
    h1Place: "West Conshohocken",
    zips: "19428",
    distance: "About 11 miles from the Matsonford bridge side of West Conshohocken to the Fishtown studio.",
    character:
      "West Conshohocken is the smaller borough on the west bank of the Schuylkill, across the I-76 bridge from Conshohocken’s Fayette Street downtown. Matsonford Road is the crossing. There is no Five Points office on this bank either.",
    commute:
      "Cross into the I-76 eastbound flow and stay with it toward the city, then to Fishtown. You are not starting on Fayette Street. About 11 miles, sometimes a little quicker than the Conshohocken downtown start because you are already at the interchange.",
    drive:
      "The Manayunk/Norristown line’s Conshohocken station is on the other bank. Using it means crossing the river before you even board. Most people from West Conshohocken drive to the appointment.",
    transit:
      "Shared ZIP 19428 with Conshohocken is why these pages have to say which bank. The only studio address is 2137 E Huntingdon St, Philadelphia, PA 19125. Phone (610) 742-5810.",
    landmarks: ["Matsonford Road", "The I-76 bridge", "The west bank opposite Fayette Street"],
    nearby: ["conshohocken", "gladwyne", "bala-cynwyd"],
  },
];

export const areaBySlug = new Map(areas.map((area) => [area.slug, area]));

export const philadelphiaAreas = areas.filter((area) => area.group === "philadelphia");
export const mainLineAreas = areas.filter((area) => area.group === "main-line");
export const nearbyAreas = areas.filter((area) => area.group === "nearby");
