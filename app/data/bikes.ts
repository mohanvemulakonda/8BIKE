export interface BikeSpec {
  label: string;
  value: string;
}

export interface Bike {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: string;
  image: string;
  highlight: string;
  series: "road" | "mountain" | "gravel";
  description: string;
  specs: BikeSpec[];
  features: string[];
}

export interface Series {
  id: string;
  series: string;
  desc: string;
  image: string;
  bikes: Bike[];
}

const roadBikes: Bike[] = [
  {
    id: "carbon-pro-81",
    slug: "carbon-pro-81",
    name: "Carbon Pro 8.1",
    tagline: "Pure race machine.",
    price: "4,299",
    image: "/images/bike-road-black.jpg",
    highlight: "T800 Carbon / 7.8 kg / Shimano Ultegra Di2",
    series: "road",
    description:
      "The Carbon Pro 8.1 is our flagship road machine. Built around a T800 unidirectional carbon frame with race-optimized geometry, it delivers maximum power transfer and aerodynamic efficiency. Every tube profile has been refined through CFD simulation and wind tunnel testing.",
    specs: [
      { label: "Frame", value: "T800 Unidirectional Carbon" },
      { label: "Fork", value: "Full Carbon, Tapered 1-1/8 to 1-1/2" },
      { label: "Groupset", value: "Shimano Ultegra Di2 12-speed" },
      { label: "Wheels", value: "8BIKE Aero 45 Carbon Tubeless" },
      { label: "Brakes", value: "Shimano Ultegra Hydraulic Disc" },
      { label: "Weight", value: "7.8 kg (size M)" },
      { label: "Sizes", value: "XS, S, M, L, XL" },
      { label: "Certification", value: "ISO 4210, CEN Fatigue Rated" },
    ],
    features: [
      "T800 unidirectional carbon, hand-laid layup",
      "Internal cable routing with full integration",
      "Race geometry: 73.5 HTA, 398mm reach (M)",
      "Flat-mount disc brake standard",
      "12mm thru-axle front and rear",
      "Tubeless-ready rim bed",
    ],
  },
  {
    id: "carbon-sport-82",
    slug: "carbon-sport-82",
    name: "Carbon Sport 8.2",
    tagline: "Race DNA. All-day comfort.",
    price: "2,899",
    image: "/images/bike-road-red.jpg",
    highlight: "T700 Carbon / 8.4 kg / Shimano 105 Di2",
    series: "road",
    description:
      "The Carbon Sport 8.2 combines race-bred stiffness with endurance comfort. The T700 carbon frame features compliance zones in the seatstays and a slightly relaxed geometry, making it the perfect machine for long training rides and gran fondos.",
    specs: [
      { label: "Frame", value: "T700 Carbon Monocoque" },
      { label: "Fork", value: "Full Carbon, Tapered" },
      { label: "Groupset", value: "Shimano 105 Di2 12-speed" },
      { label: "Wheels", value: "8BIKE Endurance 30 Alloy Tubeless" },
      { label: "Brakes", value: "Shimano 105 Hydraulic Disc" },
      { label: "Weight", value: "8.4 kg (size M)" },
      { label: "Sizes", value: "XS, S, M, L, XL" },
      { label: "Certification", value: "ISO 4210, CEN Fatigue Rated" },
    ],
    features: [
      "T700 carbon with compliance-tuned seatstays",
      "Endurance geometry for all-day comfort",
      "Internal cable routing",
      "Flat-mount disc brakes",
      "12mm thru-axle front and rear",
      "32mm tire clearance",
    ],
  },
  {
    id: "aero-83",
    slug: "aero-83",
    name: "Aero 8.3",
    tagline: "Slice the wind.",
    price: "3,699",
    image: "/images/bike-road-yellow.jpg",
    highlight: "T800 Carbon / 8.1 kg / Deep-section wheels",
    series: "road",
    description:
      "The Aero 8.3 is purpose-built for speed. Truncated airfoil tube profiles, an integrated cockpit, and deep-section carbon wheels make this the fastest bike in our lineup. Developed in the wind tunnel, proven on the road.",
    specs: [
      { label: "Frame", value: "T800 Aero Carbon, Truncated Airfoil" },
      { label: "Fork", value: "Full Carbon Aero, Tapered" },
      { label: "Groupset", value: "Shimano Ultegra Di2 12-speed" },
      { label: "Wheels", value: "8BIKE Aero 60 Carbon Tubeless" },
      { label: "Brakes", value: "Shimano Ultegra Hydraulic Disc" },
      { label: "Weight", value: "8.1 kg (size M)" },
      { label: "Sizes", value: "S, M, L, XL" },
      { label: "Certification", value: "ISO 4210, CEN Fatigue Rated" },
    ],
    features: [
      "Truncated airfoil tube profiles",
      "Integrated aero cockpit",
      "Deep-section 60mm carbon wheels",
      "Hidden cable routing",
      "Flat-mount disc brakes",
      "12mm thru-axle front and rear",
    ],
  },
];

const mountainBikes: Bike[] = [
  {
    id: "trail-force-85",
    slug: "trail-force-85",
    name: "Trail Force 8.5",
    tagline: "Point it down. Trust the bike.",
    price: "3,999",
    image: "/images/lifestyle-mountain.jpg",
    highlight: "6061 Alloy / 150mm travel / Fox 36 / Shimano XT",
    series: "mountain",
    description:
      "The Trail Force 8.5 is our do-it-all trail weapon. 150mm of rear travel paired with a Fox 36 fork eats technical descents while the efficient pedaling platform keeps you competitive on the climbs.",
    specs: [
      { label: "Frame", value: "6061-T6 Aluminum, Hydroformed" },
      { label: "Fork", value: "Fox 36 Performance, 150mm" },
      { label: "Rear Shock", value: "Fox Float DPS, 150mm" },
      { label: "Groupset", value: "Shimano XT 12-speed" },
      { label: "Brakes", value: "Shimano XT 4-piston, 203/180mm" },
      { label: "Wheels", value: "8BIKE Trail 29 Alloy Tubeless" },
      { label: "Weight", value: "14.2 kg (size M)" },
      { label: "Sizes", value: "S, M, L, XL" },
    ],
    features: [
      "150mm front and rear travel",
      "Progressive leverage ratio",
      "ISCG05 chain guide mount",
      "Boost 148mm rear spacing",
      "Internal dropper post routing",
      "Full rubber frame protection",
    ],
  },
  {
    id: "trail-84",
    slug: "trail-84",
    name: "Trail 8.4",
    tagline: "Climb fast. Descend faster.",
    price: "2,799",
    image: "/images/lifestyle-mountain.jpg",
    highlight: "6061 Alloy / 130mm travel / RockShox Pike",
    series: "mountain",
    description:
      "The Trail 8.4 is built for riders who want efficiency on the climb without giving up confidence on the descent. 130mm of travel, a RockShox Pike fork, and progressive geometry make this the ideal mid-travel trail bike.",
    specs: [
      { label: "Frame", value: "6061-T6 Aluminum, Hydroformed" },
      { label: "Fork", value: "RockShox Pike Select, 130mm" },
      { label: "Rear Shock", value: "RockShox Deluxe Select+, 130mm" },
      { label: "Groupset", value: "Shimano SLX 12-speed" },
      { label: "Brakes", value: "Shimano SLX 4-piston, 203/180mm" },
      { label: "Wheels", value: "8BIKE Trail 29 Alloy Tubeless" },
      { label: "Weight", value: "14.8 kg (size M)" },
      { label: "Sizes", value: "S, M, L, XL" },
    ],
    features: [
      "130mm front and rear travel",
      "Progressive trail geometry",
      "Internal cable routing",
      "Boost 148mm rear spacing",
      "Dropper post compatible",
      "Tubeless-ready wheels",
    ],
  },
  {
    id: "xc-race-80",
    slug: "xc-race-80",
    name: "XC Race 8.0",
    tagline: "Every gram counts.",
    price: "4,499",
    image: "/images/lifestyle-mountain.jpg",
    highlight: "Carbon / 100mm travel / Fox 32 SC / SRAM XX",
    series: "mountain",
    description:
      "The XC Race 8.0 is our lightest mountain bike — a full carbon race weapon built for cross-country speed. The Fox 32 Step-Cast fork and SRAM XX drivetrain deliver maximum efficiency for racers who count every gram.",
    specs: [
      { label: "Frame", value: "T700 Carbon Monocoque" },
      { label: "Fork", value: "Fox 32 Step-Cast Factory, 100mm" },
      { label: "Rear Shock", value: "Fox Float SL, 100mm" },
      { label: "Groupset", value: "SRAM XX Eagle AXS 12-speed" },
      { label: "Brakes", value: "SRAM Level Ultimate, 180/160mm" },
      { label: "Wheels", value: "8BIKE XC Carbon 29 Tubeless" },
      { label: "Weight", value: "10.4 kg (size M)" },
      { label: "Sizes", value: "S, M, L, XL" },
    ],
    features: [
      "Full carbon frame and fork",
      "100mm efficient XC travel",
      "Remote lockout compatible",
      "Boost 148mm rear spacing",
      "Lightweight carbon wheels",
      "Race-optimized geometry",
    ],
  },
  {
    id: "enduro-86",
    slug: "enduro-86",
    name: "Enduro 8.6",
    tagline: "No holding back.",
    price: "4,799",
    image: "/images/lifestyle-mountain.jpg",
    highlight: "6061 Alloy / 170mm travel / Fox 38 / Shimano Saint",
    series: "mountain",
    description:
      "The Enduro 8.6 is built for riders who send it. 170mm of travel, a Fox 38 fork, and Shimano Saint brakes give you the confidence to push your limits on the most aggressive terrain.",
    specs: [
      { label: "Frame", value: "6061-T6 Aluminum, Gravity Tubing" },
      { label: "Fork", value: "Fox 38 Factory, 170mm" },
      { label: "Rear Shock", value: "Fox Float X2, 170mm" },
      { label: "Groupset", value: "Shimano XT 12-speed" },
      { label: "Brakes", value: "Shimano Saint 4-piston, 203/203mm" },
      { label: "Wheels", value: "8BIKE Enduro 29 Alloy Tubeless" },
      { label: "Weight", value: "15.6 kg (size M)" },
      { label: "Sizes", value: "S, M, L, XL" },
    ],
    features: [
      "170mm front and rear travel",
      "High-pivot suspension design",
      "ISCG05 chain guide mount",
      "Super Boost 157mm rear spacing",
      "Full rubber frame protection",
      "Enduro race geometry",
    ],
  },
];

const gravelBikes: Bike[] = [
  {
    id: "endurance-83",
    slug: "endurance-83",
    name: "Endurance 8.3",
    tagline: "No road is the wrong road.",
    price: "2,899",
    image: "/images/lifestyle-gravel.jpg",
    highlight: "T700 Carbon / GRX 810 / 45mm clearance",
    series: "gravel",
    description:
      "The Endurance 8.3 is our premium gravel bike. The T700 carbon frame with vibration-damping layup, Shimano GRX 810 groupset, and 45mm tire clearance make it equally capable on gravel roads, fire trails, and long-distance bikepacking routes.",
    specs: [
      { label: "Frame", value: "T700 Carbon, Gravel Geometry" },
      { label: "Fork", value: "Full Carbon, Gravel-Specific" },
      { label: "Groupset", value: "Shimano GRX 810 2x11" },
      { label: "Wheels", value: "8BIKE Gravel 700c Alloy Tubeless" },
      { label: "Brakes", value: "Shimano GRX Hydraulic Disc" },
      { label: "Weight", value: "9.2 kg (size M)" },
      { label: "Tire Clearance", value: "45mm (700c) / 50mm (650b)" },
      { label: "Sizes", value: "XS, S, M, L, XL" },
    ],
    features: [
      "T700 carbon with vibration-damping layup",
      "45mm tire clearance (700c)",
      "Rack and fender mounts",
      "3-pack cage mounts on downtube",
      "Tubeless-ready wheels",
      "Flat-mount disc brakes",
    ],
  },
  {
    id: "allroad-81",
    slug: "allroad-81",
    name: "AllRoad 8.1",
    tagline: "Commute. Explore. Repeat.",
    price: "1,899",
    image: "/images/lifestyle-gravel.jpg",
    highlight: "6061 Alloy / GRX 600 / 40mm tubeless",
    series: "gravel",
    description:
      "The AllRoad 8.1 is the most versatile bike in our lineup. Built around a durable 6061 aluminum frame with Shimano GRX 600 components, it handles daily commutes, weekend gravel rides, and everything in between.",
    specs: [
      { label: "Frame", value: "6061-T6 Aluminum, Gravel Geometry" },
      { label: "Fork", value: "Full Carbon, Gravel-Specific" },
      { label: "Groupset", value: "Shimano GRX 600 2x11" },
      { label: "Wheels", value: "8BIKE AllRoad 700c Alloy Tubeless" },
      { label: "Brakes", value: "Shimano GRX 400 Hydraulic Disc" },
      { label: "Weight", value: "10.1 kg (size M)" },
      { label: "Tire Clearance", value: "40mm (700c)" },
      { label: "Sizes", value: "XS, S, M, L, XL" },
    ],
    features: [
      "Durable 6061 aluminum frame",
      "40mm tire clearance",
      "Full rack and fender mounts",
      "Internal cable routing",
      "Flat-mount disc brakes",
      "12mm thru-axle front and rear",
    ],
  },
  {
    id: "adventure-82",
    slug: "adventure-82",
    name: "Adventure 8.2",
    tagline: "Built for the long way round.",
    price: "2,499",
    image: "/images/lifestyle-gravel.jpg",
    highlight: "T700 Carbon / GRX 812 / Rack mounts / 50mm clearance",
    series: "gravel",
    description:
      "The Adventure 8.2 is built for those who take the long way home. The T700 carbon frame with full bikepacking mounts, 50mm tire clearance, and a Shimano GRX 812 1x groupset means you can go further with less.",
    specs: [
      { label: "Frame", value: "T700 Carbon, Adventure Geometry" },
      { label: "Fork", value: "Full Carbon, 3-Pack Mounts" },
      { label: "Groupset", value: "Shimano GRX 812 1x11" },
      { label: "Wheels", value: "8BIKE Adventure 700c Alloy Tubeless" },
      { label: "Brakes", value: "Shimano GRX Hydraulic Disc" },
      { label: "Weight", value: "9.8 kg (size M)" },
      { label: "Tire Clearance", value: "50mm (700c) / 2.1in (650b)" },
      { label: "Sizes", value: "XS, S, M, L, XL" },
    ],
    features: [
      "T700 carbon with touring durability",
      "50mm tire clearance",
      "Full rack, fender, and cargo mounts",
      "3-pack cage mounts on fork and frame",
      "1x drivetrain simplicity",
      "Dynamo hub compatible",
    ],
  },
];

export const lineup: Series[] = [
  {
    id: "road",
    series: "Road",
    desc: "Race-bred carbon frames for climbers, sprinters, and everyone who lives for the tarmac.",
    image: "/images/bike-road-black.jpg",
    bikes: roadBikes,
  },
  {
    id: "mountain",
    series: "Mountain",
    desc: "From cross-country speed to full enduro aggression. Pick your line.",
    image: "/images/lifestyle-mountain.jpg",
    bikes: mountainBikes,
  },
  {
    id: "gravel",
    series: "Gravel",
    desc: "Where the pavement ends, the ride begins. Carbon and alloy builds for every surface.",
    image: "/images/lifestyle-gravel.jpg",
    bikes: gravelBikes,
  },
];

export const allBikes: Bike[] = [...roadBikes, ...mountainBikes, ...gravelBikes];

export function getBikeBySlug(slug: string): Bike | undefined {
  return allBikes.find((b) => b.slug === slug);
}

export function getSeriesById(id: string): Series | undefined {
  return lineup.find((s) => s.id === id);
}
