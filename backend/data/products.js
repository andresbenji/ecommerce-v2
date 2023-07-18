const products = [
  {
    name: "PURE N54 Stage 1 Turbo Upgrade",
    image: "/images/turbo1.jpg",
    description:
      " Custom Billet compressor wheel, Upgraded Thrust System, Turbine Modificaions, Upgraded Oil Seals, Capable of 450-500whp with supporting modifications",
    brand: "Pure Turbos",
    category: "Turbos",
    price: 2790.0,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "AWE Tuning BMW F8X M3/M4 Track Edition Catback Exhaust - Diamond Black Tips",
    image: "/images/exhaust1.jpg",
    description:
      "Unified design for OPF euro and non-euro spec cars. 50-state legal catback design. Sick sound with all catalysts intact. Precision-engineered X-pipe to unlock a clean S55 tone. SwitchPath™ utilizes factory valving and retains M-Sport button functionality. 3” CNC mandrel-bent catback configuration. Max gains of 12 hp and 16 ft-lbs of torque at the wheels. Track Edition comes complete with AWE machined mechanical valve simulators",
    brand: "AWE Tuning",
    category: "Exhausts",
    price: 1795.0,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "Kies Motorsports F-B58 340i/440i Charge Pipe",
    image: "/images/chargepipe1.jpg",
    description:
      "Introducing, the all-new charge pipe lineup, from Kies Motorsports! The charge pipe and boost pipe are the pipes that hold pressurized air from your turbo and take it to your engine. Unfortunately, BMW typically makes OEM charge pipes out of plastic or rubber, which is a terrible idea for holding pressurized air. While this is a very cost-effective thing for a manufacturer to do, they typically fail when the plastic starts to age, especially when you start to turn up the boost in your car!",
    brand: "Kies Motorsports",
    category: "Intakes",
    price: 299.99,
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "MST BMW F90 M5 Cold Air Intake System",
    image: "/images/intake1.jpg",
    description:
      "Maximizes airflow to provide gains of 10-12 HP! High quality laser cut heat shield helps block hot engine air. Better throttle response and more exciting sounds. Can be upgraded to the original power programming or Stage 1-3 programming. High-flow air filter, easy to maintain. Direct fit kit",
    brand: "MST",
    category: "Intakes",
    price: 676.0,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: "Seibon Universal GT Style Carbon Fiber Rear Spoiler",
    image: "/images/wing1.jpg",
    description:
      "Seibon packs all products carefully to prevent damage during shipping. However, damage may still occur occasionally. Buyer must inspect the packaging and the products carefully upon receiving them, then accept the shipment and notate any damages and irregularities, such as crushed, torn, punctured, or broken parts on both the packaging and the product, on the freight bill or receipt at the driver's presence. Buyer must retain all cartons, packing materials, and damaged products for the carrier's damage inspector to inspect",
    brand: "Seibon",
    category: "Aero",
    price: 833.0,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: "APEX Flow Formed ARC-8 BMW Wheel",
    image: "/images/wheel1.jpg",
    description:
      "An optimized car setup begins with the perfect wheel and tire fitment. Without model-specific attention to each wheels specifications, maximum performance is compromised. Each size was selected to find the right balance between a clean fit and the most grip possible. The ARC-8's wide range of widths, diameters, offsets and face profiles result in unique fitments ranging from 8 to 10.5 wide. Each wheel combines these features to meet the different brake caliper, strut, and fender clearance needs of each BMW model. Most vehicle models have options for wheels that range from direct-fit to aggressive for specialty applications. Daily drivers and professional racers don't have the same needs, so why should they be forced to buy the same exact fitment?",
    brand: "Apex",
    category: "Wheels",
    price: 449.0,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: "Variant Radon Titanium Brushed Wheels",
    image: "/images/wheel2.jpg",
    description:
      " The Radon features a complex sporty spoke design inspired by the popularity of our FCK-3P a fully forged product in our sixty61 series. This signature wheel has received a ton of interest and is now more obtainable than ever. Due to the utilization of our Cold Vertical Forging technology and our in-house CNC machining center, the Radon is available for most five-lug bolt patterns and offered in a wide range of offset configurations",
    brand: "Variant",
    category: "Wheels",
    price: 524.0,
    countInStock: 25,
    rating: 3.5,
    numReviews: 23,
  },
  {
    name: "PURE B48 Upgrade Turbo",
    image: "/images/turbo2.jpg",
    description:
      " Please note: PURE products have an estimated 4-8 week lead time. PURE Custom Billet Compressor Wheel. Hi-Flow Larger Turbine Wheel. Upgraded Thrust System. CNC Machined. VSR Balanced",
    brand: "Pure Turbos",
    category: "Turbos",
    price: 2500.0,
    countInStock: 3,
    rating: 5,
    numReviews: 10,
  },
  {
    name: "AWE EXHAUST SUITE FOR THE BMW G8X M3/M4",
    image: "/images/exhaust2.jpg",
    description:
      " 50-state emissions-complaint dual 3” exhaust configuration. Available as valved SwitchPath™ or rowdy Track Edition. AWE's first SwitchPath™ exhaust for BMW to incorporate drone-canceling 180 Technology®. SwitchPath™ retains factory valve controls, no additional remote needed. Optional non-resonated performance mid-pipes available separately (for AWE Exhausts only). Bespoke X-pipe unlocks a smooth tone out of the S58. Max gains of 3 hp and 5 lb-ft of torque at the wheels",
    brand: "AWE Tuning",
    category: "Exhausts",
    price: 1995.0,
    countInStock: 7,
    rating: 3,
    numReviews: 7,
  },
  {
    name: "BBS Unlimited CI-R 20x11 ET52.5 (Face 3) Gloss Diamond Black Wheel",
    image: "/images/wheel3.jpg",
    description:
      " BBS Unlimited CI-R 20x11 ET52.5 (Face 3) Gloss Diamond Black Wheel",
    brand: "BBS",
    category: "Wheels",
    price: 890.0,
    countInStock: 4,
    rating: 5,
    numReviews: 17,
  },
  {
    name: "AWE Tuning 2020+ Toyota GR Supra S-FLO Carbon Intake",
    image: "/images/intake2.jpg",
    description:
      " Max gains of 15 hp and 21 lb-ft of torque at the wheels (stage 1 software). 71% increase in filter surface area over stock. 4.5”diameter filter outlet. S-FLO Filter with inverted cone design for increased flow. S-FLO filter is washable and oil-less. Designed, engineered, and tested in-house at AWE. Bespoke CNC laser-cut aluminum support bracket included. Intoxicating turbo spool",
    brand: "AWE Tuning",
    category: "Intakes",
    price: 429.0,
    countInStock: 5,
    rating: 5,
    numReviews: 22,
  },
  {
    name: "KW Coilover Kit V3 BMW M340i XDrive G20 W/ Electronic Dampers",
    image: "/images/coilover1.jpg",
    description:
      " Cutting-edge motorsports technology -or more performance on the road. Like every suspension product developed by KW automotive and manufactured in Germany, the KW Variant 3 Coilover suspension kit also provides a significant improvment on the road. Thanks to the high-quality dampers, springs, and elastomer spring elements, pitching and rolling movements during load changes such as evasive maneuvers, cornering, acceleration, and braking are significantly reduced. The braking distances are also shortened. Thanks to improved support and feedback, drivers not only feel more confident but driving in everyday life is improved. ",
    brand: "KW",
    category: "Coilovers",
    price: 3314.0,
    countInStock: 4,
    rating: 5,
    numReviews: 33,
  },
  


];

export default products;
