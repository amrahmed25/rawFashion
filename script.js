const SITE = {
  shippingCost: 6.99,
  freeShipThreshold: 75,
  deliveryTime: "3–5 business days",
  estimatedArrival: "Aug 8 – Aug 10, 2026",
  returnPolicy:
    "Unworn items with tags attached can be returned within 30 days of delivery for a full refund. Worn or altered items are not eligible. Return shipping is free on orders over $75.",
};

const CATEGORIES = [
  "Outerwear",
  "Denim",
  "Knitwear",
  "Basics",
  "Footwear",
  "Accessories",
];
const BRANDS = ["RAW FASHION", "RAW FASHION Studio"];

const PROMO_CODES = {
  WELCOME10: { type: "percent", value: 10, label: "10% off your order" },
  SAVE20: { type: "percent", value: 20, label: "20% off your order" },
  FREESHIP: { type: "freeship", value: 0, label: "Free shipping" },
  RAW5: { type: "flat", value: 5, label: "$5 off your order" },
};

function img(fileName) {
  return "./img/" + fileName;
}

const PRODUCTS = [
  {
    id: "p1",
    name: "Structured Wool Overcoat",
    brand: "RAW FASHION",
    category: "Outerwear",
    price: 320,
    oldPrice: 380,
    discount: 16,
    rating: 4.8,
    salesCount: 640,
    dateAdded: "2026-06-01",
    availability: "in",
    images: [img("raw.jpg"), img("raw.jpg"), img("raw.jpg")],
    description:
      "A boxy, structured overcoat cut from heavyweight wool — built to layer over everything from a suit to a hoodie without losing its shape.",
    specifications: {
      Fit: "Structured, oversized",
      Material: "80% Wool, 20% Polyester",
      "Made In": "Portugal",
      "Model Info": "Model is 6'1\", wearing size M",
      "Care Level": "Dry clean only",
    },
    materials: [
      "80% Wool",
      "20% Polyester shell",
      "Cupro lining",
      "Horn-effect buttons",
    ],
    care: [
      "Dry clean only",
      "Do not tumble dry",
      "Steam to remove wrinkles",
      "Store on a wide hanger",
    ],
    sizeFit: {
      note: "Runs true to size with room for layering — size down for a slimmer line.",
      rows: [
        { label: "XS", chest: "38", length: "40" },
        { label: "S", chest: "40", length: "41" },
        { label: "M", chest: "42", length: "42" },
        { label: "L", chest: "44", length: "43" },
        { label: "XL", chest: "46", length: "44" },
      ],
    },
    styling: [
      "Layer over a crewneck sweater for cold-weather structure.",
      "Leave open with wide-leg trousers for an oversized silhouette.",
      "Belt at the waist for a more tailored line.",
    ],
    variants: {
      colors: ["Charcoal", "Camel"],
      sizes: [
        { label: "XS", mod: 0 },
        { label: "S", mod: 0 },
        { label: "M", mod: 0 },
        { label: "L", mod: 0 },
        { label: "XL", mod: 0 },
      ],
    },
    reviews: [
      {
        name: "Marcus T.",
        rating: 5,
        date: "2026-07-12",
        comment:
          "The wool feels heavy in a good way — holds its shape all day.",
      },
      {
        name: "Priya R.",
        rating: 4,
        date: "2026-06-28",
        comment: "Great coat, runs a little big so I'd size down.",
      },
      {
        name: "Jonah K.",
        rating: 5,
        date: "2026-06-15",
        comment: "Camel colorway is even better in person.",
      },
    ],
  },
  {
    id: "p2",
    name: "Technical Shell Jacket",
    brand: "RAW FASHION Studio",
    category: "Outerwear",
    price: 265,
    oldPrice: 265,
    discount: 0,
    rating: 4.5,
    salesCount: 310,
    dateAdded: "2026-05-18",
    availability: "in",
    images: [img("blackwash.jpg"), img("blackwash.jpg"), img("blackwash.jpg")],
    description:
      "A minimal, weatherproof shell with taped seams — cut clean enough for the street, technical enough for the rain.",
    specifications: {
      Fit: "Regular, articulated",
      Material: "100% Recycled Nylon, DWR coating",
      "Made In": "Vietnam",
      "Model Info": "Model is 5'11\", wearing size M",
      "Care Level": "Machine washable",
    },
    materials: [
      "100% recycled nylon shell",
      "Fully taped seams",
      "DWR water-repellent finish",
      "YKK Aquaguard zippers",
    ],
    care: [
      "Machine wash cold, gentle cycle",
      "Do not bleach",
      "Hang dry only",
      "Reproof with DWR spray as needed",
    ],
    sizeFit: {
      note: "Regular fit, sized to layer over a midweight sweater.",
      rows: [
        { label: "S", chest: "39", length: "27" },
        { label: "M", chest: "42", length: "28" },
        { label: "L", chest: "45", length: "29" },
        { label: "XL", chest: "48", length: "30" },
      ],
    },
    styling: [
      "Pack it down into the internal chest pocket for travel.",
      "Wear over a hoodie for extra warmth without bulk.",
      "Cinch the hem drawcord in wind or rain.",
    ],
    variants: {
      colors: ["Black", "Olive"],
      sizes: [
        { label: "S", mod: 0 },
        { label: "M", mod: 0 },
        { label: "L", mod: 0 },
        { label: "XL", mod: 0 },
      ],
    },
    reviews: [
      {
        name: "Elena M.",
        rating: 5,
        date: "2026-07-02",
        comment: "Genuinely kept me dry in a downpour, packs down tiny.",
      },
      {
        name: "Deshawn W.",
        rating: 4,
        date: "2026-06-10",
        comment: "Great jacket, wish it came in more colors.",
      },
    ],
  },
  {
    id: "p3",
    name: "Raw Selvedge Denim Jean",
    brand: "RAW FASHION",
    category: "Denim",
    price: 145,
    oldPrice: 175,
    discount: 17,
    rating: 4.7,
    salesCount: 820,
    dateAdded: "2026-07-01",
    availability: "in",
    images: [img("blackwash.jpg"), img("blackwash.jpg"), img("blackwash.jpg")],
    description:
      "Unwashed 14oz selvedge denim on a straight-leg cut, made to break in and fade exactly where you wear it.",
    specifications: {
      Fit: "Straight leg, mid-rise",
      Material: "100% Cotton Selvedge Denim, 14oz",
      "Made In": "Japan",
      "Model Info": "Model is 6'0\", wearing size 32",
      "Care Level": "Wash cold, inside out",
    },
    materials: [
      "100% cotton selvedge denim (14oz)",
      "Copper rivets",
      "Leather patch",
    ],
    care: [
      "Wash cold, inside out, sparingly",
      "Hang dry to preserve indigo",
      "Avoid dry cleaning",
      "First wash after 3–6 months of wear for best fades",
    ],
    sizeFit: {
      note: "True to waist size — listed sizes are waist measurement in inches.",
      rows: [
        { label: "28", chest: "-", length: "32" },
        { label: "30", chest: "-", length: "32" },
        { label: "32", chest: "-", length: "34" },
        { label: "34", chest: "-", length: "34" },
        { label: "36", chest: "-", length: "34" },
        { label: "38", chest: "-", length: "34" },
      ],
    },
    styling: [
      "Cuff the hem to show off the selvedge line.",
      "Pairs well with the Heavyweight Cotton Tee for a stripped-back look.",
      "Let raw denim sit unwashed as long as you can for the best fade pattern.",
    ],
    variants: {
      colors: ["Indigo", "Black Wash"],
      sizes: [
        { label: "28", mod: 0 },
        { label: "30", mod: 0 },
        { label: "32", mod: 0 },
        { label: "34", mod: 0 },
        { label: "36", mod: 0 },
        { label: "38", mod: 0 },
      ],
    },
    reviews: [
      {
        name: "Alicia F.",
        rating: 5,
        date: "2026-07-20",
        comment:
          "Stiff out of the box like real selvedge should be. Fading nicely already.",
      },
      {
        name: "Ravi S.",
        rating: 4,
        date: "2026-07-05",
        comment: "Great denim, sizing runs slightly large at the waist.",
      },
      {
        name: "Tom B.",
        rating: 5,
        date: "2026-06-22",
        comment: "My third pair from this line, never disappoints.",
      },
    ],
  },
  {
    id: "p4",
    name: "Relaxed Fit Denim",
    brand: "RAW FASHION Studio",
    category: "Denim",
    price: 120,
    oldPrice: 120,
    discount: 0,
    rating: 4.3,
    salesCount: 260,
    dateAdded: "2026-04-22",
    availability: "out",
    images: [img("blackwash.jpg"), img("blackwash.jpg"), img("blackwash.jpg")],
    description:
      "A roomier, relaxed cut in a washed mid-weight denim for people who want jeans that don't fight back.",
    specifications: {
      Fit: "Relaxed, mid-rise",
      Material: "100% Cotton Denim, 12oz",
      "Made In": "Turkey",
      "Model Info": "Model is 5'10\", wearing size 32",
      "Care Level": "Wash cold, inside out",
    },
    materials: ["100% cotton denim (12oz)", "Stonewashed finish"],
    care: [
      "Wash cold, inside out",
      "Tumble dry low",
      "Do not iron over rivets",
    ],
    sizeFit: {
      note: "Roomy through the hip and thigh — size down if you prefer a slimmer relaxed fit.",
      rows: [
        { label: "28", chest: "-", length: "32" },
        { label: "30", chest: "-", length: "32" },
        { label: "32", chest: "-", length: "32" },
        { label: "34", chest: "-", length: "32" },
        { label: "36", chest: "-", length: "32" },
        { label: "38", chest: "-", length: "32" },
      ],
    },
    styling: [
      "Roll the hem once for a cropped look with boots.",
      "Pairs well with the Cable Knit Cardigan.",
      "Wear with a slim top to balance the relaxed leg.",
    ],
    variants: {
      colors: ["Stone Wash", "Indigo"],
      sizes: [
        { label: "28", mod: 0 },
        { label: "30", mod: 0 },
        { label: "32", mod: 0 },
        { label: "34", mod: 0 },
        { label: "36", mod: 0 },
        { label: "38", mod: 0 },
      ],
    },
    reviews: [
      {
        name: "Nina P.",
        rating: 4,
        date: "2026-05-30",
        comment: "Comfiest jeans I own, wish they'd restock faster.",
      },
      {
        name: "Owen L.",
        rating: 4,
        date: "2026-05-11",
        comment: "Good relaxed cut without looking baggy.",
      },
    ],
  },
  {
    id: "p5",
    name: "Merino Wool Sweater",
    brand: "RAW FASHION",
    category: "Knitwear",
    price: 135,
    oldPrice: 160,
    discount: 16,
    rating: 4.9,
    salesCount: 910,
    dateAdded: "2026-03-14",
    availability: "in",
    images: [
      img("merinocharcoal.png"),
      img("merinocream.jpg"),
      img("merinoforest.png"),
    ],
    description:
      "A fine-gauge merino crewneck — light enough to layer, warm enough to wear alone on all but the coldest days.",
    specifications: {
      Fit: "Regular",
      Material: "100% Merino Wool",
      "Made In": "Italy",
      "Model Info": "Model is 6'0\", wearing size M",
      "Care Level": "Hand wash cold",
    },
    materials: ["100% merino wool, 18-micron"],
    care: [
      "Hand wash cold or use wool cycle",
      "Lay flat to dry",
      "Do not wring or tumble dry",
      "Store folded, not hung",
    ],
    sizeFit: {
      note: "Fine gauge knit with a small amount of stretch — true to size.",
      rows: [
        { label: "XS", chest: "36", length: "25" },
        { label: "S", chest: "38", length: "26" },
        { label: "M", chest: "40", length: "27" },
        { label: "L", chest: "42", length: "28" },
        { label: "XL", chest: "44", length: "29" },
      ],
    },
    styling: [
      "Layer under the Technical Shell Jacket for cold commutes.",
      "Tuck into denim for a cleaner silhouette.",
      "Merino regulates temperature — great for travel packing.",
    ],
    variants: {
      colors: ["Cream", "Charcoal", "Forest"],
      sizes: [
        { label: "XS", mod: 0 },
        { label: "S", mod: 0 },
        { label: "M", mod: 0 },
        { label: "L", mod: 0 },
        { label: "XL", mod: 0 },
      ],
    },
    reviews: [
      {
        name: "Chris D.",
        rating: 5,
        date: "2026-07-18",
        comment: "Softest merino I've worn, zero itch.",
      },
      {
        name: "Fatima A.",
        rating: 5,
        date: "2026-06-30",
        comment: "Forest green is a beautiful color in person.",
      },
      {
        name: "Liam O.",
        rating: 5,
        date: "2026-06-02",
        comment: "Worth the price, holds its shape after many wears.",
      },
    ],
  },
  {
    id: "p6",
    name: "Cable Knit Cardigan",
    brand: "RAW FASHION Studio",
    category: "Knitwear",
    price: 110,
    oldPrice: 110,
    discount: 0,
    rating: 4.2,
    salesCount: 190,
    dateAdded: "2026-07-10",
    availability: "low",
    images: [
      img("heavygrey.png"),
      img("heavyblack.png"),
      img("heavywhite.jpg"),
    ],
    description:
      "A chunky cable-knit cardigan with horn buttons — the kind of piece that becomes a daily uniform in autumn.",
    specifications: {
      Fit: "Relaxed",
      Material: "70% Cotton, 30% Wool",
      "Made In": "Peru",
      "Model Info": "Model is 5'9\", wearing size S",
      "Care Level": "Hand wash cold",
    },
    materials: ["70% cotton", "30% wool", "Horn-effect buttons"],
    care: [
      "Hand wash cold",
      "Lay flat to dry",
      "Do not iron directly on cable pattern",
    ],
    sizeFit: {
      note: "Relaxed, boxy fit — size down for a closer silhouette.",
      rows: [
        { label: "S", chest: "40", length: "24" },
        { label: "M", chest: "43", length: "25" },
        { label: "L", chest: "46", length: "26" },
        { label: "XL", chest: "49", length: "27" },
      ],
    },
    styling: [
      "Wear open over the Heavyweight Cotton Tee.",
      "Button all the way up for a layering piece under the wool overcoat.",
      "Pairs naturally with Relaxed Fit Denim.",
    ],
    variants: {
      colors: ["Oatmeal", "Black"],
      sizes: [
        { label: "S", mod: 0 },
        { label: "M", mod: 0 },
        { label: "L", mod: 0 },
        { label: "XL", mod: 0 },
      ],
    },
    reviews: [
      {
        name: "Sam K.",
        rating: 4,
        date: "2026-07-22",
        comment: "Chunky in the best way, true to size.",
      },
      {
        name: "Grace H.",
        rating: 4,
        date: "2026-07-14",
        comment: "Beautiful cable pattern, wish it restocked sooner.",
      },
    ],
  },
  {
    id: "p7",
    name: "Heavyweight Cotton Tee",
    brand: "RAW FASHION",
    category: "Basics",
    price: 45,
    oldPrice: 45,
    discount: 0,
    rating: 4.6,
    salesCount: 1240,
    dateAdded: "2026-02-20",
    availability: "in",
    images: [
      img("heavywhite.jpg"),
      img("heavyblack.png"),
      img("heavygrey.png"),
    ],

    description:
      "A 240gsm cotton tee that holds its shape wash after wash — the one basic worth buying in every color.",
    specifications: {
      Fit: "Regular, boxy",
      Material: "100% Combed Cotton, 240gsm",
      "Made In": "Portugal",
      "Model Info": "Model is 6'1\", wearing size L",
      "Care Level": "Machine washable",
    },
    materials: ["100% combed cotton (240gsm)", "Pre-shrunk"],
    care: [
      "Machine wash cold",
      "Tumble dry low",
      "Do not bleach",
      "Iron inside out on low heat",
    ],
    sizeFit: {
      note: "Boxy, slightly cropped fit — size up for a more relaxed drape.",
      rows: [
        { label: "XS", chest: "36", length: "26" },
        { label: "S", chest: "38", length: "27" },
        { label: "M", chest: "40", length: "28" },
        { label: "L", chest: "42", length: "29" },
        { label: "XL", chest: "44", length: "30" },
        { label: "XXL", chest: "46", length: "31" },
      ],
    },
    styling: [
      "Layer under the Cable Knit Cardigan.",
      "Tuck into denim for a cleaner line.",
      "Buy two — this fabric holds up to heavy rotation.",
    ],
    variants: {
      colors: ["White", "Black", "Grey"],
      sizes: [
        { label: "XS", mod: 0 },
        { label: "S", mod: 0 },
        { label: "M", mod: 0 },
        { label: "L", mod: 0 },
        { label: "XL", mod: 0 },
        { label: "XXL", mod: 0 },
      ],
    },
    reviews: [
      {
        name: "Hannah G.",
        rating: 5,
        date: "2026-07-15",
        comment:
          "Doesn't go see-through or thin out after washing, unlike every other tee I've owned.",
      },
      {
        name: "Victor M.",
        rating: 4,
        date: "2026-07-01",
        comment: "Great weight, fits a little boxy which I like.",
      },
    ],
  },
  {
    id: "p8",
    name: "Essential Crewneck Sweatshirt",
    brand: "RAW FASHION",
    category: "Basics",
    price: 68,
    oldPrice: 82,
    discount: 17,
    rating: 4.5,
    salesCount: 700,
    dateAdded: "2026-06-25",
    availability: "in",
    images: [img("crewblack.jpg"), img("crewnavy.png"), img("crewsand.png")],
    description:
      "A heavyweight fleece crewneck without the branding — built for daily rotation, not the logo.",
    specifications: {
      Fit: "Regular",
      Material: "80% Cotton, 20% Polyester Fleece",
      "Made In": "Portugal",
      "Model Info": "Model is 6'0\", wearing size M",
      "Care Level": "Machine washable",
    },
    materials: ["80% cotton", "20% polyester fleece", "Ribbed cuffs and hem"],
    care: [
      "Machine wash cold, inside out",
      "Tumble dry low",
      "Do not iron print areas",
    ],
    sizeFit: {
      note: "Regular fit through the body with a slightly dropped shoulder.",
      rows: [
        { label: "XS", chest: "38", length: "25" },
        { label: "S", chest: "40", length: "26" },
        { label: "M", chest: "42", length: "27" },
        { label: "L", chest: "44", length: "28" },
        { label: "XL", chest: "46", length: "29" },
        { label: "XXL", chest: "48", length: "30" },
      ],
    },
    styling: [
      "Layer over the Heavyweight Cotton Tee.",
      "Pairs with Raw Selvedge Denim for an everyday uniform.",
      "Sits well under the Technical Shell Jacket.",
    ],
    variants: {
      colors: ["Black", "Sand", "Navy"],
      sizes: [
        { label: "XS", mod: 0 },
        { label: "S", mod: 0 },
        { label: "M", mod: 0 },
        { label: "L", mod: 0 },
        { label: "XL", mod: 0 },
        { label: "XXL", mod: 0 },
      ],
    },
    reviews: [
      {
        name: "Bianca L.",
        rating: 5,
        date: "2026-06-19",
        comment: "Thick fleece, doesn't pill after washing.",
      },
      {
        name: "Derek N.",
        rating: 4,
        date: "2026-05-25",
        comment: "Sand color is a great neutral, true to size.",
      },
    ],
  },
  {
    id: "p9",
    name: "Leather Chelsea Boot",
    brand: "RAW FASHION",
    category: "Footwear",
    price: 210,
    oldPrice: 210,
    discount: 0,
    rating: 4.6,
    salesCount: 520,
    dateAdded: "2026-01-30",
    availability: "in",
    images: [img("camel.jpg"), img("camel.jpg"), img("camel.jpg")],
    description:
      "Full-grain leather Chelsea boots on a stacked leather sole — built to be resoled, not replaced.",
    specifications: {
      Upper: "Full-Grain Leather",
      Sole: "Stacked Leather with Rubber Grip",
      "Made In": "Portugal",
      "Fit Note": "Fits true to size",
      "Care Level": "Leather condition regularly",
    },
    materials: [
      "Full-grain leather upper",
      "Elastic side panels",
      "Leather-and-rubber sole",
      "Leather lining",
    ],
    care: [
      "Wipe clean with a damp cloth",
      "Condition leather every 2–3 months",
      "Use a shoe tree to preserve shape",
      "Avoid prolonged rain exposure",
    ],
    sizeFit: {
      note: "US sizing — order your regular shoe size.",
      rows: [
        { label: "7", chest: "-", length: "EU 40" },
        { label: "8", chest: "-", length: "EU 41" },
        { label: "9", chest: "-", length: "EU 42" },
        { label: "10", chest: "-", length: "EU 43" },
        { label: "11", chest: "-", length: "EU 44" },
        { label: "12", chest: "-", length: "EU 45" },
      ],
    },
    styling: [
      "Cuff denim to show the ankle for a cleaner line.",
      "Pairs with the Wool Overcoat for a polished cold-weather fit.",
      "Break in gradually over the first two weeks of wear.",
    ],
    variants: {
      colors: ["Black", "Brown"],
      sizes: [
        { label: "7", mod: 0 },
        { label: "8", mod: 0 },
        { label: "9", mod: 0 },
        { label: "10", mod: 0 },
        { label: "11", mod: 0 },
        { label: "12", mod: 0 },
      ],
    },
    reviews: [
      {
        name: "Wanda C.",
        rating: 5,
        date: "2026-06-05",
        comment: "Broke in exactly as expected, true to size.",
      },
      {
        name: "Ilya P.",
        rating: 4,
        date: "2026-05-01",
        comment: "Great leather quality, sole took a couple wears to soften.",
      },
    ],
  },
  {
    id: "p10",
    name: "Canvas Low-Top Sneaker",
    brand: "RAW FASHION Studio",
    category: "Footwear",
    price: 95,
    oldPrice: 95,
    discount: 0,
    rating: 4.2,
    salesCount: 380,
    dateAdded: "2026-05-05",
    availability: "in",
    images: [
      img("canvalowwhite.jpg"),
      img("canvalowblack.jpg"),
      img("canvalowwhite.jpg"),
    ],

    description:
      "A stripped-back canvas low-top on a vulcanized rubber sole — the everyday shoe that goes with everything.",
    specifications: {
      Upper: "Cotton Canvas",
      Sole: "Vulcanized Rubber",
      "Made In": "Vietnam",
      "Fit Note": "Fits true to size",
      "Care Level": "Spot clean",
    },
    materials: [
      "Cotton canvas upper",
      "Vulcanized rubber outsole",
      "Cotton laces",
    ],
    care: [
      "Spot clean with a damp cloth",
      "Air dry only",
      "Use a canvas protector spray to resist stains",
    ],
    sizeFit: {
      note: "US sizing — order your regular shoe size.",
      rows: [
        { label: "7", chest: "-", length: "EU 40" },
        { label: "8", chest: "-", length: "EU 41" },
        { label: "9", chest: "-", length: "EU 42" },
        { label: "10", chest: "-", length: "EU 43" },
        { label: "11", chest: "-", length: "EU 44" },
        { label: "12", chest: "-", length: "EU 45" },
      ],
    },
    styling: [
      "Wear with cuffed denim and no-show socks.",
      "Off-Black colorway pairs with almost anything in the line.",
      "Great for warm-weather everyday rotation.",
    ],
    variants: {
      colors: ["White", "Off-Black"],
      sizes: [
        { label: "7", mod: 0 },
        { label: "8", mod: 0 },
        { label: "9", mod: 0 },
        { label: "10", mod: 0 },
        { label: "11", mod: 0 },
        { label: "12", mod: 0 },
      ],
    },
    reviews: [
      {
        name: "Yara S.",
        rating: 4,
        date: "2026-06-11",
        comment: "Comfortable out of the box, no break-in needed.",
      },
      {
        name: "Peter Q.",
        rating: 4,
        date: "2026-05-20",
        comment: "White pair shows dirt fast but cleans up fine.",
      },
    ],
  },
  {
    id: "p11",
    name: "Canvas Tote Bag",
    brand: "RAW FASHION",
    category: "Accessories",
    price: 58,
    oldPrice: 68,
    discount: 15,
    rating: 4.7,
    salesCount: 460,
    dateAdded: "2026-06-10",
    availability: "in",
    images: [img("totee.jpg"), img("toteeblack.jpg"), img("totee.jpg")],
    description:
      "A heavy-canvas tote with a reinforced base and leather straps — sized to actually carry things.",
    specifications: {
      Dimensions: '16" x 14" x 5"',
      Material: "18oz Cotton Canvas, Leather Straps",
      "Made In": "USA",
      Capacity: 'Fits a 15" laptop',
      "Care Level": "Spot clean",
    },
    materials: [
      "18oz cotton canvas",
      "Full-grain leather straps and base trim",
      "Interior zip pocket",
    ],
    care: [
      "Spot clean with a damp cloth",
      "Do not machine wash",
      "Condition leather straps occasionally",
    ],
    sizeFit: {
      note: "One size, designed to fit most everyday carry needs.",
      rows: [],
    },
    styling: [
      'Fits a 15" laptop plus daily essentials.',
      "Straps are long enough for a comfortable shoulder carry.",
      "Pairs naturally with the Wool Beanie for cooler days.",
    ],
    variants: {
      colors: ["Natural", "Black"],
      sizes: [{ label: "One Size", mod: 0 }],
    },
    reviews: [
      {
        name: "Kayla D.",
        rating: 5,
        date: "2026-07-08",
        comment: "Sturdy canvas, straps haven't stretched at all.",
      },
      {
        name: "Mateo R.",
        rating: 4,
        date: "2026-06-18",
        comment: "Great size, wish it had one more interior pocket.",
      },
    ],
  },
  {
    id: "p12",
    name: "Wool Beanie",
    brand: "RAW FASHION Studio",
    category: "Accessories",
    price: 32,
    oldPrice: 32,
    discount: 0,
    rating: 4.4,
    salesCount: 390,
    dateAdded: "2026-04-02",
    availability: "in",
    images: [img("beanechar.jpg"), img("beanechar.jpg"), img("beanechar.jpg")],
    description:
      "A ribbed merino beanie with a foldover cuff — warm without the itch of standard acrylic knits.",
    specifications: {
      Fit: "One size, ribbed stretch",
      Material: "100% Merino Wool",
      "Made In": "Scotland",
      Capacity: "Fits most head sizes",
      "Care Level": "Hand wash cold",
    },
    materials: ["100% merino wool", "Ribbed knit construction"],
    care: ["Hand wash cold", "Lay flat to dry", "Do not wring"],
    sizeFit: {
      note: "One size, stretch-fit ribbing accommodates most head sizes.",
      rows: [],
    },
    styling: [
      "Fold the cuff for a cleaner, shorter silhouette.",
      "Pairs with the Technical Shell Jacket for cold commutes.",
      "Charcoal and Black colorways work with nearly the whole line.",
    ],
    variants: {
      colors: ["Charcoal", "Camel", "Black"],
      sizes: [{ label: "One Size", mod: 0 }],
    },
    reviews: [
      {
        name: "Simone T.",
        rating: 4,
        date: "2026-06-27",
        comment: "Soft merino, no itch at all.",
      },
      {
        name: "Andre F.",
        rating: 5,
        date: "2026-06-01",
        comment: "Warmer than it looks, great everyday beanie.",
      },
    ],
  },
];

function getProduct(id) {
  return PRODUCTS.find(function (p) {
    return p.id === id;
  });
}
/* ===================== STATE ===================== */
const STATE = {
  cart: [], // {key, productId, color, sizeLabel, sizeMod, qty}
  wishlist: [], // productIds
  promo: null,
  ready: false,
};

const VIEW = {
  color: null,
  sizeLabel: null,
  qty: 1,
  activeImage: 0,
  activeTab: "specs",
  reviewRating: 0,
};

/* ===================== STORAGE ===================== */
async function loadPersisted() {
  try {
    const c = await window.storage.get("raw-fashion-cart", false);
    STATE.cart = c && c.value ? JSON.parse(c.value) : [];
  } catch (e) {
    STATE.cart = [];
  }
  try {
    const w = await window.storage.get("raw-fashion-wishlist", false);
    STATE.wishlist = w && w.value ? JSON.parse(w.value) : [];
  } catch (e) {
    STATE.wishlist = [];
  }
  STATE.ready = true;
}
async function persistCart() {
  try {
    await window.storage.set(
      "raw-fashion-cart",
      JSON.stringify(STATE.cart),
      false,
    );
  } catch (e) {}
}
async function persistWishlist() {
  try {
    await window.storage.set(
      "raw-fashion-wishlist",
      JSON.stringify(STATE.wishlist),
      false,
    );
  } catch (e) {}
}

/* ===================== HELPERS ===================== */
function money(n) {
  return "$" + n.toFixed(2);
}
function starString(rating) {
  const full = Math.round(rating);
  let s = "";
  for (let i = 0; i < 5; i++) {
    s += i < full ? "★" : "☆";
  }
  return s;
}
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, function (c) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c];
  });
}
function availLabel(a) {
  if (a === "in") return { text: "In Stock", cls: "in" };
  if (a === "low") return { text: "Low Stock — Order Soon", cls: "low" };
  return { text: "Out of Stock", cls: "out" };
}
function badgeText(p) {
  if (p.availability === "out") return { text: "Sold Out", cls: "out" };
  if (p.discount > 0) return { text: "-" + p.discount + "%", cls: "" };
  return null;
}
function cartCount() {
  return STATE.cart.reduce(function (sum, i) {
    return sum + i.qty;
  }, 0);
}
function findCartItem(key) {
  return STATE.cart.find(function (i) {
    return i.key === key;
  });
}
function variantKey(productId, color, sizeLabel) {
  return productId + "|" + color + "|" + sizeLabel;
}

function unitPriceFor(product, sizeLabel) {
  const size = product.variants.sizes.find(function (s) {
    return s.label === sizeLabel;
  });
  const mod = size ? size.mod : 0;
  const base = product.price - (product.price * (product.discount || 0)) / 100;
  return base + mod;
}

function cartTotals() {
  let subtotal = 0;
  STATE.cart.forEach(function (item) {
    const p = getProduct(item.productId);
    if (!p) return;
    subtotal += unitPriceFor(p, item.sizeLabel) * item.qty;
  });
  const qtyTotal = cartCount();
  let bundleDiscount = 0;
  if (qtyTotal >= 5) bundleDiscount = subtotal * 0.05;

  let promoDiscount = 0;
  let freeShipOverride = false;
  if (STATE.promo) {
    const promo = PROMO_CODES[STATE.promo];
    if (promo) {
      if (promo.type === "percent")
        promoDiscount = subtotal * (promo.value / 100);
      else if (promo.type === "flat")
        promoDiscount = Math.min(promo.value, subtotal);
      else if (promo.type === "freeship") freeShipOverride = true;
    }
  }
  const afterDiscount = Math.max(subtotal - bundleDiscount - promoDiscount, 0);
  const shipping =
    afterDiscount >= SITE.freeShipThreshold ||
    freeShipOverride ||
    subtotal === 0
      ? 0
      : SITE.shippingCost;
  const total = afterDiscount + shipping;
  return {
    subtotal: subtotal,
    bundleDiscount: bundleDiscount,
    promoDiscount: promoDiscount,
    shipping: shipping,
    total: total,
    qtyTotal: qtyTotal,
  };
}

/* ===================== ROUTER ===================== */
function parseHash() {
  let hash = location.hash.slice(1) || "/home";
  let path = hash,
    query = "";
  const qIdx = hash.indexOf("?");
  if (qIdx > -1) {
    path = hash.slice(0, qIdx);
    query = hash.slice(qIdx + 1);
  }
  const params = new URLSearchParams(query);
  return { path: path, params: params };
}

function render() {
  const app = document.getElementById("app");
  const route = parseHash();
  const path = route.path;
  const params = route.params;
  let html = "";

  document.querySelectorAll(".nav-links a").forEach(function (a) {
    a.classList.toggle("active", a.getAttribute("data-route") === path);
  });
  document.getElementById("mobileMenu").classList.remove("open");

  if (path === "/home") html = pageHome();
  else if (path === "/products") html = pageProducts(params);
  else if (path === "/categories") html = pageCategories();
  else if (path.indexOf("/product/") === 0)
    html = pageProductDetail(path.split("/product/")[1]);
  else if (path === "/cart") html = pageCart();
  else if (path === "/wishlist") html = pageWishlist();
  else if (path === "/search") html = pageSearch(params);
  else if (path === "/about") html = pageAbout();
  else if (path === "/contact") html = pageContact();
  else if (path === "/checkout") html = pageCheckout();
  else if (path.indexOf("/confirmation/") === 0)
    html = pageConfirmation(path.split("/confirmation/")[1]);
  else html = page404();

  app.innerHTML = html;
  window.scrollTo(0, 0);
  updateNavBadges();
  bindReveals();
  afterRenderHooks(path, params);
}

function updateNavBadges() {
  const cb = document.getElementById("cartBadge");
  const wb = document.getElementById("wishBadge");
  const cc = cartCount();
  const wc = STATE.wishlist.length;
  cb.style.display = cc > 0 ? "flex" : "none";
  cb.textContent = cc;
  wb.style.display = wc > 0 ? "flex" : "none";
  wb.textContent = wc;
}

function bindReveals() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  els.forEach(function (el) {
    io.observe(el);
  });
}

function afterRenderHooks(path, params) {
  if (path.indexOf("/product/") === 0) {
    const id = path.split("/product/")[1];
    const p = getProduct(id);
    if (p) {
      VIEW.color = p.variants.colors[0];
      VIEW.sizeLabel = p.variants.sizes[0].label;
      VIEW.qty = 1;
      VIEW.activeImage = 0;
      VIEW.activeTab = "specs";
      VIEW.reviewRating = 0;
      updateProductDetailPricing(p);
    }
  }
  if (path === "/products") {
    const sidebar = document.getElementById("filterSidebar");
    if (sidebar) sidebar.classList.remove("open");
  }
}
/* ===================== PRODUCT CARD ===================== */
function productCard(p) {
  const badge = badgeText(p);
  const isWished = STATE.wishlist.indexOf(p.id) > -1;
  return (
    "" +
    '<div class="product reveal">' +
    '<div class="product-image" onclick="App.nav(\'/product/' +
    p.id +
    "')\">" +
    '<img src="' +
    p.images[0] +
    '" alt="' +
    escapeHtml(p.name) +
    '">' +
    (badge
      ? '<span class="product-badge ' +
        badge.cls +
        '">' +
        badge.text +
        "</span>"
      : "") +
    '<button class="wish-toggle ' +
    (isWished ? "active" : "") +
    '" onclick="event.stopPropagation();App.toggleWishlist(\'' +
    p.id +
    '\')" aria-label="Toggle wishlist">' +
    '<svg viewBox="0 0 24 24" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>' +
    "</button>" +
    "</div>" +
    "<div onclick=\"App.nav('/product/" +
    p.id +
    '\')" style="cursor:pointer;">' +
    '<div class="product-brand">' +
    escapeHtml(p.brand) +
    "</div>" +
    '<div class="product-name">' +
    escapeHtml(p.name) +
    "</div>" +
    '<div class="stars">' +
    starString(p.rating) +
    ' <span class="rating-count">(' +
    p.reviews.length +
    ")</span></div>" +
    '<div class="product-price-row">' +
    '<span class="price">' +
    money(unitPriceFor(p, p.variants.sizes[0].label)) +
    "</span>" +
    (p.discount > 0
      ? '<span class="price-old">' +
        money(p.price + p.variants.sizes[0].mod) +
        "</span>"
      : "") +
    "</div>" +
    "</div>" +
    "</div>"
  );
}

/* ===================== HOME ===================== */
function pageHome() {
  const bestSellers = PRODUCTS.slice()
    .sort(function (a, b) {
      return b.salesCount - a.salesCount;
    })
    .slice(0, 4);
  const catImages = {
    Outerwear: img("cat-outerwear"),
    Denim: img("cat-denim"),
    Knitwear: img("cat-knitwear"),
    Basics: img("cat-basics"),
    Footwear: img("cat-footwear"),
    Accessories: img("cat-accessories"),
  };

  return (
    "" +
    '<section class="hero">' +
    '<div class="blob blob-1"></div>' +
    '<div class="blob blob-2"></div>' +
    '<h1 class="hero-headline reveal"><div>Fuel</div><div class="line-2">The Work</div></h1>' +
    '<p class="hero-sub reveal">Brutalist basics and considered outerwear — built without the trend cycle, made to actually last.</p>' +
    '<div class="hero-actions reveal">' +
    '<button class="btn" onclick="App.nav(\'/products\')"><span>Shop All Products</span></button>' +
    '<a class="link-arrow" onclick="App.nav(\'/categories\')">Browse Categories ' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>' +
    "</a>" +
    "</div>" +
    "</section>" +
    '<div class="divider"><h2 class="reveal">Best Sellers</h2></div>' +
    '<section class="section">' +
    '<div class="section-head">' +
    '<h2 class="reveal">Top Rated This Month</h2>' +
    '<a class="link-arrow" onclick="App.nav(\'/products?sort=bestselling\')">View All ' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>' +
    "</a>" +
    "</div>" +
    '<div class="product-grid">' +
    bestSellers.map(productCard).join("") +
    "</div>" +
    "</section>" +
    '<section class="section" style="padding-top:0;">' +
    '<div class="section-head"><h2 class="reveal">Shop By Category</h2></div>' +
    '<div class="cat-grid">' +
    CATEGORIES.map(function (c) {
      return (
        '<div class="cat-tile reveal" onclick="App.nav(\'/products?category=' +
        encodeURIComponent(c) +
        "')\">" +
        '<img src="' +
        catImages[c] +
        '" alt="' +
        c +
        '">' +
        '<div class="cat-label">' +
        c +
        "</div>" +
        "</div>"
      );
    }).join("") +
    "</div>" +
    "</section>" +
    '<section class="campaign">' +
    '<div class="campaign-left"><h2 class="reveal">Built on real<br>fabric weights,<br>not marketing copy</h2></div>' +
    '<div class="campaign-right reveal">' +
    "<div>" +
    '<p style="margin-bottom:20px;">Every material and full fiber composition is listed on the product page — no vague "premium fabric" claims, just the actual weave and weight.</p>' +
    '<a class="link-arrow" onclick="App.nav(\'/about\')">Our Standards ' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>' +
    "</a>" +
    "</div>" +
    "</div>" +
    "</section>"
  );
}

/* ===================== CATEGORIES ===================== */
function pageCategories() {
  const catImages = {
    Outerwear: img("cat-outerwear"),
    Denim: img("cat-denim"),
    Knitwear: img("cat-knitwear"),
    Basics: img("cat-basics"),
    Footwear: img("cat-footwear"),
    Accessories: img("cat-accessories"),
  };
  return (
    "" +
    '<div class="breadcrumb"><a onclick="App.nav(\'/home\')">Home</a> / Categories</div>' +
    '<section class="section">' +
    '<div class="section-head"><h2 class="reveal">Shop By Category</h2></div>' +
    '<div class="cat-grid">' +
    CATEGORIES.map(function (c) {
      const count = PRODUCTS.filter(function (p) {
        return p.category === c;
      }).length;
      return (
        '<div class="cat-tile reveal" onclick="App.nav(\'/products?category=' +
        encodeURIComponent(c) +
        "')\">" +
        '<img src="' +
        catImages[c] +
        '" alt="' +
        c +
        '">' +
        '<div class="cat-label">' +
        c +
        '<br><span style="font-family:Satoshi;font-size:11px;letter-spacing:0.08em;font-weight:500;text-transform:uppercase;opacity:0.8;">' +
        count +
        " products</span></div>" +
        "</div>"
      );
    }).join("") +
    "</div>" +
    "</section>"
  );
}

/* ===================== PRODUCTS LISTING ===================== */
function pageProducts(params) {
  const category = params.get("category");
  const brand = params.get("brand");
  const availability = params.get("availability");
  const minRating = parseFloat(params.get("rating") || "0");
  const sort = params.get("sort") || "newest";
  const maxPrice = parseFloat(params.get("maxPrice") || "100");

  let list = PRODUCTS.slice();
  if (category)
    list = list.filter(function (p) {
      return p.category === category;
    });
  if (brand)
    list = list.filter(function (p) {
      return p.brand === brand;
    });
  if (availability)
    list = list.filter(function (p) {
      return p.availability === availability;
    });
  if (minRating)
    list = list.filter(function (p) {
      return p.rating >= minRating;
    });
  list = list.filter(function (p) {
    return unitPriceFor(p, p.variants.sizes[0].label) <= maxPrice;
  });

  if (sort === "newest")
    list.sort(function (a, b) {
      return new Date(b.dateAdded) - new Date(a.dateAdded);
    });
  else if (sort === "bestselling")
    list.sort(function (a, b) {
      return b.salesCount - a.salesCount;
    });
  else if (sort === "rating")
    list.sort(function (a, b) {
      return b.rating - a.rating;
    });
  else if (sort === "price-asc")
    list.sort(function (a, b) {
      return (
        unitPriceFor(a, a.variants.sizes[0].label) -
        unitPriceFor(b, b.variants.sizes[0].label)
      );
    });
  else if (sort === "price-desc")
    list.sort(function (a, b) {
      return (
        unitPriceFor(b, b.variants.sizes[0].label) -
        unitPriceFor(a, a.variants.sizes[0].label)
      );
    });

  function catCheck(c) {
    return category === c ? "checked" : "";
  }
  function brandCheck(b) {
    return brand === b ? "checked" : "";
  }
  function availCheck(a) {
    return availability === a ? "checked" : "";
  }
  function ratingCheck(r) {
    return minRating === r ? "checked" : "";
  }

  return (
    "" +
    '<div class="breadcrumb"><a onclick="App.nav(\'/home\')">Home</a> / Products' +
    (category ? " / " + category : "") +
    "</div>" +
    '<section class="section" style="padding-top:24px;">' +
    '<div class="section-head">' +
    "<h2>" +
    (category || "All Products") +
    "</h2>" +
    '<button class="btn btn-outline btn-sm mobile-filter-toggle" onclick="App.toggleFilters()"><span>Filters</span></button>' +
    "</div>" +
    '<div class="products-layout">' +
    '<aside class="filters" id="filterSidebar">' +
    '<div class="filter-group">' +
    '<div class="filter-title">Category</div>' +
    CATEGORIES.map(function (c) {
      return (
        '<label class="filter-row"><input type="radio" name="fcat" onclick="App.setFilter(\'category\',\'' +
        c +
        "')\" " +
        catCheck(c) +
        ">" +
        c +
        "</label>"
      );
    }).join("") +
    (category
      ? '<div class="clear-filters" onclick="App.setFilter(\'category\',null)">Clear category</div>'
      : "") +
    "</div>" +
    '<div class="filter-group">' +
    '<div class="filter-title">Brand</div>' +
    BRANDS.map(function (b) {
      return (
        '<label class="filter-row"><input type="radio" name="fbrand" onclick="App.setFilter(\'brand\',\'' +
        b +
        "')\" " +
        brandCheck(b) +
        ">" +
        b +
        "</label>"
      );
    }).join("") +
    (brand
      ? '<div class="clear-filters" onclick="App.setFilter(\'brand\',null)">Clear brand</div>'
      : "") +
    "</div>" +
    '<div class="filter-group">' +
    '<div class="filter-title">Price — up to ' +
    money(maxPrice) +
    "</div>" +
    '<input type="range" min="10" max="100" step="5" value="' +
    maxPrice +
    '" style="width:100%;padding:0;" oninput="App.setFilter(\'maxPrice\',this.value)">' +
    "</div>" +
    '<div class="filter-group">' +
    '<div class="filter-title">Availability</div>' +
    '<label class="filter-row"><input type="radio" name="favail" onclick="App.setFilter(\'availability\',\'in\')" ' +
    availCheck("in") +
    ">In Stock</label>" +
    '<label class="filter-row"><input type="radio" name="favail" onclick="App.setFilter(\'availability\',\'low\')" ' +
    availCheck("low") +
    ">Low Stock</label>" +
    '<label class="filter-row"><input type="radio" name="favail" onclick="App.setFilter(\'availability\',\'out\')" ' +
    availCheck("out") +
    ">Out of Stock</label>" +
    (availability
      ? '<div class="clear-filters" onclick="App.setFilter(\'availability\',null)">Clear</div>'
      : "") +
    "</div>" +
    '<div class="filter-group">' +
    '<div class="filter-title">Rating</div>' +
    [4, 3]
      .map(function (r) {
        return (
          '<label class="filter-row"><input type="radio" name="frating" onclick="App.setFilter(\'rating\',\'' +
          r +
          "')\" " +
          ratingCheck(r) +
          ">" +
          r +
          "+ Stars</label>"
        );
      })
      .join("") +
    (minRating
      ? '<div class="clear-filters" onclick="App.setFilter(\'rating\',null)">Clear</div>'
      : "") +
    "</div>" +
    '<div class="clear-filters" style="margin-top:16px;font-weight:700;" onclick="App.nav(\'/products\')">Clear All Filters</div>' +
    "</aside>" +
    "<div>" +
    '<div class="filter-toolbar">' +
    '<span class="result-count">' +
    list.length +
    " product" +
    (list.length === 1 ? "" : "s") +
    "</span>" +
    '<select class="sort-select" onchange="App.setFilter(\'sort\',this.value)">' +
    '<option value="newest" ' +
    (sort === "newest" ? "selected" : "") +
    ">Sort: Newest</option>" +
    '<option value="bestselling" ' +
    (sort === "bestselling" ? "selected" : "") +
    ">Sort: Best Selling</option>" +
    '<option value="rating" ' +
    (sort === "rating" ? "selected" : "") +
    ">Sort: Highest Rated</option>" +
    '<option value="price-asc" ' +
    (sort === "price-asc" ? "selected" : "") +
    ">Sort: Price Low to High</option>" +
    '<option value="price-desc" ' +
    (sort === "price-desc" ? "selected" : "") +
    ">Sort: Price High to Low</option>" +
    "</select>" +
    "</div>" +
    (list.length
      ? '<div class="product-grid">' + list.map(productCard).join("") + "</div>"
      : '<div class="empty-state"><h3>No products match</h3><p>Try clearing a filter or two.</p><br><button class="btn btn-outline btn-sm" onclick="App.nav(\'/products\')"><span>Clear All Filters</span></button></div>') +
    "</div>" +
    "</div>" +
    "</section>"
  );
}
function pageProductDetail(id) {
  const p = getProduct(id);
  if (!p) return page404();
  const avail = availLabel(p.availability);
  const isWished = STATE.wishlist.indexOf(p.id) > -1;
  const related = PRODUCTS.filter(function (r) {
    return r.category === p.category && r.id !== p.id;
  }).slice(0, 4);
  const avgRating = p.rating;
  const reviewCount = p.reviews.length;

  return (
    "" +
    '<div class="breadcrumb"><a onclick="App.nav(\'/home\')">Home</a> / <a onclick="App.nav(\'/products\')">Products</a> / <a onclick="App.nav(\'/products?category=' +
    encodeURIComponent(p.category) +
    "')\">" +
    p.category +
    "</a> / " +
    p.name +
    "</div>" +
    '<div class="pd-layout">' +
    "<div>" +
    '<div class="pd-main-image" id="pdMainImage"><img src="' +
    p.images[0] +
    '" alt="' +
    escapeHtml(p.name) +
    '" id="pdMainImg"></div>' +
    '<div class="pd-thumbs" id="pdThumbs">' +
    p.images
      .map(function (im, idx) {
        return (
          '<div class="pd-thumb ' +
          (idx === 0 ? "active" : "") +
          '" data-idx="' +
          idx +
          '" onclick="App.setImage(' +
          idx +
          ')"><img src="' +
          im +
          '" alt=""></div>'
        );
      })
      .join("") +
    "</div>" +
    "</div>" +
    "<div>" +
    '<div class="pd-brand">' +
    escapeHtml(p.brand) +
    "</div>" +
    '<h1 class="pd-name">' +
    escapeHtml(p.name) +
    "</h1>" +
    '<div class="pd-rating-row"><span class="stars">' +
    starString(p.rating) +
    '</span><span class="rating-count">' +
    p.rating.toFixed(1) +
    " · " +
    reviewCount +
    " reviews</span></div>" +
    '<div class="pd-price-row" id="pdPriceRow">' +
    priceRowHtml(p) +
    "</div>" +
    '<div class="pd-availability ' +
    avail.cls +
    '" id="pdAvail">' +
    avail.text +
    "</div>" +
    '<p class="pd-desc">' +
    escapeHtml(p.description) +
    "</p>" +
    '<div class="variant-block">' +
    '<span class="variant-label">Color: <span id="pdColorLabel">' +
    p.variants.colors[0] +
    "</span></span>" +
    '<div class="variant-options" id="pdColorOpts">' +
    p.variants.colors
      .map(function (c, idx) {
        return (
          '<button class="variant-opt ' +
          (idx === 0 ? "selected" : "") +
          '" data-color="' +
          escapeHtml(c) +
          '" onclick="App.selectColor(this,\'' +
          escapeHtml(c).replace(/'/g, "\\'") +
          "')\">" +
          c +
          "</button>"
        );
      })
      .join("") +
    "</div>" +
    "</div>" +
    '<div class="variant-block">' +
    '<span class="variant-label">Size</span>' +
    '<div class="variant-options" id="pdSizeOpts">' +
    p.variants.sizes
      .map(function (s, idx) {
        return (
          '<button class="variant-opt ' +
          (idx === 0 ? "selected" : "") +
          '" data-size="' +
          escapeHtml(s.label) +
          '" onclick="App.selectSize(this,\'' +
          escapeHtml(s.label).replace(/'/g, "\\'") +
          "')\">" +
          s.label +
          "</button>"
        );
      })
      .join("") +
    "</div>" +
    "</div>" +
    '<div class="variant-block">' +
    '<span class="variant-label">Quantity</span>' +
    '<div class="qty-stepper">' +
    '<button onclick="App.stepQty(-1)">−</button>' +
    '<span id="pdQty">1</span>' +
    '<button onclick="App.stepQty(1)">+</button>' +
    "</div>" +
    "</div>" +
    '<div class="pd-actions">' +
    '<button class="btn" id="pdAddBtn" onclick="App.addToCart(\'' +
    p.id +
    "')\" " +
    (p.availability === "out" ? "disabled" : "") +
    "><span>" +
    (p.availability === "out" ? "Sold Out" : "Add to Cart") +
    "</span></button>" +
    '<button class="btn btn-outline ' +
    (isWished ? "active" : "") +
    '" id="pdWishBtn" onclick="App.toggleWishlist(\'' +
    p.id +
    "')\"><span>" +
    (isWished ? "♥ In Wishlist" : "♡ Add to Wishlist") +
    "</span></button>" +
    "</div>" +
    '<div class="pd-meta-row">' +
    "<span>Delivery: " +
    SITE.deliveryTime +
    "</span>" +
    "<span>Free shipping over $" +
    SITE.freeShipThreshold +
    "</span>" +
    "<span>30-day returns</span>" +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="tabs-nav" id="pdTabsNav">' +
    tabButton("specs", "Specifications") +
    tabButton("materials", "Materials & Care") +
    tabButton("fit", "Size & Fit") +
    tabButton("styling", "Styling Tips") +
    tabButton("shipping", "Shipping & Returns") +
    tabButton("reviews", "Reviews (" + reviewCount + ")") +
    "</div>" +
    '<div id="pdTabPanel">' +
    tabPanelSpecs(p) +
    "</div>" +
    (related.length
      ? '<div class="divider"><h2 class="reveal">You May Also Like</h2></div>' +
        '<section class="related-section"><div class="product-grid">' +
        related.map(productCard).join("") +
        "</div></section>"
      : "")
  );
}

function priceRowHtml(p) {
  const unit = unitPriceFor(p, p.variants.sizes[0].label);
  const oldUnit = p.price + p.variants.sizes[0].mod;
  return (
    '<span class="pd-price">' +
    money(unit) +
    "</span>" +
    (p.discount > 0
      ? '<span class="pd-old-price">' +
        money(oldUnit) +
        '</span><span class="pd-discount-badge">-' +
        p.discount +
        "%</span>"
      : "")
  );
}

function tabButton(key, label) {
  return (
    '<button class="tab-btn ' +
    (VIEW.activeTab === key ? "active" : "") +
    '" data-tab="' +
    key +
    '" onclick="App.setTab(\'' +
    key +
    "')\">" +
    label +
    "</button>"
  );
}

function tabPanelSpecs(p) {
  const rows = Object.keys(p.specifications)
    .map(function (k) {
      return "<tr><td>" + k + "</td><td>" + p.specifications[k] + "</td></tr>";
    })
    .join("");
  return (
    '<div class="tab-panel"><table class="spec-table">' +
    rows +
    "</table></div>"
  );
}
function tabPanelMaterials(p) {
  return (
    '<div class="tab-panel">' +
    '<h3 style="font-size:0.9rem;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:12px;">Composition</h3>' +
    "<ul>" +
    p.materials
      .map(function (i) {
        return "<li>" + i + "</li>";
      })
      .join("") +
    "</ul>" +
    '<h3 style="font-size:0.9rem;text-transform:uppercase;letter-spacing:0.06em;margin:28px 0 12px;">Care Instructions</h3>' +
    "<ul>" +
    p.care
      .map(function (i) {
        return "<li>" + i + "</li>";
      })
      .join("") +
    "</ul>" +
    "</div>"
  );
}
function tabPanelFit(p) {
  const sf = p.sizeFit;
  const hasRows = sf.rows && sf.rows.length > 0;
  return (
    '<div class="tab-panel">' +
    '<p style="font-size:14px;color:var(--grey);margin-bottom:24px;max-width:520px;">' +
    sf.note +
    "</p>" +
    (hasRows
      ? '<table class="spec-table"><tr><td><strong>Size</strong></td><td><strong>Chest / Waist</strong></td><td><strong>Length</strong></td></tr>' +
        sf.rows
          .map(function (r) {
            return (
              "<tr><td>" +
              r.label +
              "</td><td>" +
              r.chest +
              "</td><td>" +
              r.length +
              "</td></tr>"
            );
          })
          .join("") +
        "</table>"
      : "") +
    "</div>"
  );
}
function tabPanelStyling(p) {
  return (
    '<div class="tab-panel"><ol class="step-list">' +
    p.styling
      .map(function (u) {
        return "<li>" + u + "</li>";
      })
      .join("") +
    "</ol></div>"
  );
}
function tabPanelShipping() {
  return (
    '<div class="tab-panel">' +
    '<table class="spec-table">' +
    "<tr><td>Delivery Time</td><td>" +
    SITE.deliveryTime +
    "</td></tr>" +
    "<tr><td>Shipping Cost</td><td>Free over $" +
    SITE.freeShipThreshold +
    ", otherwise $" +
    SITE.shippingCost.toFixed(2) +
    "</td></tr>" +
    "<tr><td>Estimated Arrival</td><td>" +
    SITE.estimatedArrival +
    "</td></tr>" +
    "</table>" +
    '<p style="margin-top:24px;font-size:14px;color:var(--grey);">' +
    SITE.returnPolicy +
    "</p>" +
    "</div>"
  );
}
function tabPanelReviews(p) {
  const reviews = p.reviews;
  return (
    '<div class="tab-panel">' +
    '<div class="rating-summary">' +
    '<div class="rating-big">' +
    p.rating.toFixed(1) +
    "</div>" +
    '<div><div class="stars" style="font-size:18px;">' +
    starString(p.rating) +
    '</div><div class="rating-count">Based on ' +
    reviews.length +
    " reviews</div></div>" +
    "</div>" +
    '<div id="reviewList">' +
    reviews
      .map(function (r) {
        return (
          '<div class="review-card">' +
          '<div class="review-head"><span class="review-name">' +
          escapeHtml(r.name) +
          '</span><span class="review-date">' +
          r.date +
          "</span></div>" +
          '<div class="stars" style="margin-bottom:6px;">' +
          starString(r.rating) +
          "</div>" +
          '<div class="review-comment">' +
          escapeHtml(r.comment) +
          "</div>" +
          "</div>"
        );
      })
      .join("") +
    "</div>" +
    '<form class="review-form" onsubmit="App.submitReview(event,\'' +
    p.id +
    "')\">" +
    '<h3 style="font-size:1rem;margin-bottom:16px;">Write a Review</h3>' +
    '<div class="form-row"><label>Your Rating</label><div class="star-input" id="reviewStarInput">' +
    [1, 2, 3, 4, 5]
      .map(function (n) {
        return (
          '<span data-star="' +
          n +
          '" onclick="App.setReviewStar(' +
          n +
          ')">★</span>'
        );
      })
      .join("") +
    "</div></div>" +
    '<div class="form-row"><label>Name</label><input type="text" required placeholder="Your name"></div>' +
    '<div class="form-row"><label>Review</label><textarea rows="3" required placeholder="What did you think?"></textarea></div>' +
    '<button class="btn btn-sm" type="submit"><span>Submit Review</span></button>' +
    "</form>" +
    "</div>"
  );
}

function tabPanelHtml(key, p) {
  if (key === "specs") return tabPanelSpecs(p);
  if (key === "materials") return tabPanelMaterials(p);
  if (key === "fit") return tabPanelFit(p);
  if (key === "styling") return tabPanelStyling(p);
  if (key === "shipping") return tabPanelShipping(p);
  if (key === "reviews") return tabPanelReviews(p);
  return "";
}

function updateProductDetailPricing(p) {
  const row = document.getElementById("pdPriceRow");
  if (row) row.innerHTML = priceRowHtml(p);
}
/* ===================== CART ===================== */
function pageCart() {
  if (!STATE.cart.length) {
    return (
      '<div class="empty-state" style="padding:140px 20px;"><h3>Your cart is empty</h3><p>Looks like you haven\'t added anything yet.</p><br>' +
      '<button class="btn" onclick="App.nav(\'/products\')"><span>Shop Products</span></button></div>'
    );
  }
  const t = cartTotals();
  return (
    "" +
    '<div class="breadcrumb"><a onclick="App.nav(\'/home\')">Home</a> / Cart</div>' +
    '<div class="cart-layout">' +
    "<div>" +
    '<h1 style="font-size:2rem;margin-bottom:24px;">Shopping Cart (' +
    t.qtyTotal +
    ")</h1>" +
    '<div id="cartItemsList">' +
    STATE.cart.map(cartItemHtml).join("") +
    "</div>" +
    "</div>" +
    '<div class="order-summary">' +
    '<h3 style="font-size:1.1rem;text-transform:uppercase;margin-bottom:20px;">Order Summary</h3>' +
    '<div id="summaryBody">' +
    orderSummaryBody(t) +
    "</div>" +
    '<button class="btn btn-block" style="margin-top:20px;" onclick="App.nav(\'/checkout\')"><span>Proceed to Checkout</span></button>' +
    '<div class="shipping-note">Free shipping on orders over $' +
    SITE.freeShipThreshold +
    ". Estimated delivery: " +
    SITE.deliveryTime +
    ".</div>" +
    "</div>" +
    "</div>"
  );
}

function cartItemHtml(item) {
  const p = getProduct(item.productId);
  if (!p) return "";
  const unit = unitPriceFor(p, item.sizeLabel);
  return (
    '<div class="cart-item" data-key="' +
    item.key +
    '">' +
    '<div class="cart-item-img" onclick="App.nav(\'/product/' +
    p.id +
    '\')" style="cursor:pointer;"><img src="' +
    p.images[0] +
    '" alt=""></div>' +
    "<div>" +
    '<div class="cart-item-name" onclick="App.nav(\'/product/' +
    p.id +
    '\')" style="cursor:pointer;">' +
    escapeHtml(p.name) +
    "</div>" +
    '<div class="cart-item-variant">' +
    (item.color ? item.color + " · " : "") +
    item.sizeLabel +
    "</div>" +
    '<div class="cart-item-price">' +
    money(unit) +
    "</div>" +
    "</div>" +
    '<div class="cart-item-actions">' +
    '<div class="qty-stepper">' +
    "<button onclick=\"App.updateCartQty('" +
    item.key +
    "',-1)\">−</button>" +
    "<span>" +
    item.qty +
    "</span>" +
    "<button onclick=\"App.updateCartQty('" +
    item.key +
    "',1)\">+</button>" +
    "</div>" +
    '<span class="remove-link" onclick="App.removeFromCart(\'' +
    item.key +
    "')\">Remove</span>" +
    "</div>" +
    "</div>"
  );
}

function orderSummaryBody(t) {
  let html =
    '<div class="summary-row"><span>Subtotal</span><span>' +
    money(t.subtotal) +
    "</span></div>";
  if (t.bundleDiscount > 0)
    html +=
      '<div class="summary-row"><span>Bundle Savings (5+ items)</span><span>−' +
      money(t.bundleDiscount) +
      "</span></div>";
  if (t.promoDiscount > 0)
    html +=
      '<div class="summary-row"><span>Promo (' +
      STATE.promo +
      ")</span><span>−" +
      money(t.promoDiscount) +
      "</span></div>";
  html +=
    '<div class="summary-row"><span>Shipping</span><span>' +
    (t.shipping === 0 ? "FREE" : money(t.shipping)) +
    "</span></div>";
  html +=
    '<div class="summary-row total"><span>Total</span><span>' +
    money(t.total) +
    "</span></div>";
  html +=
    '<div class="promo-row"><input type="text" id="promoInput" placeholder="Promo code" value="' +
    (STATE.promo || "") +
    '">' +
    '<button class="btn btn-sm" onclick="App.applyPromo()"><span>Apply</span></button></div>' +
    '<div id="promoMsg"></div>';
  return html;
}

/* ===================== WISHLIST ===================== */
function pageWishlist() {
  const items = STATE.wishlist.map(getProduct).filter(Boolean);
  if (!items.length) {
    return (
      '<div class="empty-state" style="padding:140px 20px;"><h3>Your wishlist is empty</h3><p>Save products you love for later.</p><br>' +
      '<button class="btn" onclick="App.nav(\'/products\')"><span>Shop Products</span></button></div>'
    );
  }
  return (
    "" +
    '<div class="breadcrumb"><a onclick="App.nav(\'/home\')">Home</a> / Wishlist</div>' +
    '<section class="section" style="padding-top:24px;">' +
    '<h1 style="font-size:2rem;margin-bottom:36px;">Your Wishlist (' +
    items.length +
    ")</h1>" +
    '<div class="product-grid">' +
    items.map(productCard).join("") +
    "</div>" +
    "</section>"
  );
}

/* ===================== SEARCH ===================== */
function pageSearch(params) {
  const q = (params.get("q") || "").trim();
  let results = [];
  if (q) {
    const qLower = q.toLowerCase();
    results = PRODUCTS.filter(function (p) {
      if (p.name.toLowerCase().indexOf(qLower) > -1) return true;
      if (p.category.toLowerCase().indexOf(qLower) > -1) return true;
      if (p.brand.toLowerCase().indexOf(qLower) > -1) return true;
      if (
        p.variants.colors.some(function (c) {
          return c.toLowerCase().indexOf(qLower) > -1;
        })
      )
        return true;
      return false;
    });
  }
  return (
    "" +
    '<div class="search-hero wrap">' +
    '<input type="text" class="search-input-lg" id="searchInputLg" placeholder="Search products, categories, colors…" value="' +
    escapeHtml(q) +
    '" oninput="App.doSearch(this.value)" autofocus>' +
    '<div class="search-suggest">' +
    CATEGORIES.map(function (c) {
      return "<span onclick=\"App.doSearch('" + c + "')\">" + c + "</span>";
    }).join("") +
    "</div>" +
    "</div>" +
    '<section class="section">' +
    (q
      ? results.length
        ? '<div class="result-count" style="margin-bottom:24px;">' +
          results.length +
          " result" +
          (results.length === 1 ? "" : "s") +
          ' for "' +
          escapeHtml(q) +
          '"</div>' +
          '<div class="product-grid">' +
          results.map(productCard).join("") +
          "</div>"
        : '<div class="empty-state"><h3>No results for "' +
          escapeHtml(q) +
          '"</h3><p>Try a category name, brand, or color.</p></div>'
      : '<div class="empty-state" style="padding:40px 20px;"><p>Start typing to search the catalog.</p></div>') +
    "</section>"
  );
}

/* ===================== ABOUT ===================== */
function pageAbout() {
  return (
    "" +
    '<section class="hero" style="min-height:60vh;">' +
    '<div class="blob blob-1"></div>' +
    '<h1 class="hero-headline reveal" style="font-size:clamp(2.5rem,9vw,7rem);"><div>Built On</div><div class="line-2">The Fabric</div></h1>' +
    '<p class="hero-sub reveal">Raw Fashion started with a simple complaint: clothing that looked good on a hanger and fell apart after five washes. We\'ve been fixing that ever since.</p>' +
    "</section>" +
    '<section class="section">' +
    '<div class="section-head"><h2 class="reveal">Our Story</h2></div>' +
    '<p style="max-width:700px;font-size:16px;color:var(--grey);margin-bottom:20px;">Raw Fashion was founded by a small team of pattern makers and a textile engineer who got tired of vague "premium fabric" claims hiding thin, low-weight materials. We work directly with mills, publish the full fiber composition on every product page, and cut every piece to hold its shape past the first season.</p>' +
    '<p style="max-width:700px;font-size:16px;color:var(--grey);">No filler synthetics to cut cost. No trend-driven drops that fall apart by spring. Just fabric and construction built to outlast the hanger it came on.</p>' +
    "</section>" +
    '<div class="divider"><h2 class="reveal">Mission & Vision</h2></div>' +
    '<section class="section">' +
    '<div class="value-grid">' +
    '<div class="value-card reveal"><h3>Mission</h3><p>Make clothing honest again — full transparency on fabric, fit, and origin, no exceptions.</p></div>' +
    '<div class="value-card reveal"><h3>Vision</h3><p>A wardrobe built on pieces that earn a permanent place in rotation, not a single season.</p></div>' +
    "<div class=\"value-card reveal\"><h3>Standard</h3><p>If we wouldn't wear it ourselves for a decade, it doesn't go on the rack.</p></div>" +
    "</div>" +
    "</section>" +
    '<section class="section" style="padding-top:0;">' +
    '<div class="section-head"><h2 class="reveal">Quality Standards</h2></div>' +
    '<div class="value-grid">' +
    '<div class="value-card reveal"><h3>Mill-Direct Sourcing</h3><p>Every fabric is sourced directly from mills we\'ve worked with for years, checked against weight and composition claims.</p></div>' +
    '<div class="value-card reveal"><h3>Small-Batch Construction</h3><p>Manufactured in small runs under strict quality control, not mass-produced fast-fashion volume.</p></div>' +
    '<div class="value-card reveal"><h3>Full Disclosure Labels</h3><p>Exact fiber composition and country of origin for every piece. No vague "blend" labeling, ever.</p></div>' +
    "</div>" +
    "</section>" +
    '<section class="campaign">' +
    '<div class="campaign-left"><h2 class="reveal">Premium materials,<br>sourced on purpose</h2></div>' +
    '<div class="campaign-right reveal"><p>We use Creapure-grade selvedge denim, merino wool from ethically managed flocks, and full-grain leather instead of bonded or corrected-grain substitutes. It costs more. We think it\'s worth it.</p></div>' +
    "</section>" +
    '<div class="divider"><h2 class="reveal">Why Raw Fashion</h2></div>' +
    '<section class="section">' +
    '<div class="value-grid">' +
    '<div class="value-card reveal"><h3>Designed By Wearers</h3><p>Every piece is worn in-house by the team through a full season before it ever reaches a customer.</p></div>' +
    '<div class="value-card reveal"><h3>No Compromise Sourcing</h3><p>We pay more for fabric that actually holds up to daily wear and repeated washing.</p></div>' +
    '<div class="value-card reveal"><h3>Real Customer Support</h3><p>A real person answers every message — see our <span style="text-decoration:underline;cursor:pointer;" onclick="App.nav(\'/contact\')">contact page</span>.</p></div>' +
    "</div>" +
    "</section>"
  );
}

/* ===================== CONTACT ===================== */
function pageContact() {
  return (
    "" +
    '<div class="breadcrumb"><a onclick="App.nav(\'/home\')">Home</a> / Contact</div>' +
    '<div class="contact-layout">' +
    "<div>" +
    '<h1 style="font-size:2.4rem;margin-bottom:16px;">Get In Touch</h1>' +
    '<p style="color:var(--grey);font-size:15px;margin-bottom:20px;">Questions about an order, a product, or just want to talk formulation? We read every message.</p>' +
    '<form id="contactForm" onsubmit="App.submitContact(event)">' +
    '<div class="form-grid">' +
    '<div class="form-row"><label>Name</label><input type="text" required placeholder="Your full name"></div>' +
    '<div class="form-row"><label>Email</label><input type="email" required placeholder="you@email.com"></div>' +
    "</div>" +
    '<div class="form-grid">' +
    '<div class="form-row"><label>Phone</label><input type="tel" placeholder="(555) 000-0000"></div>' +
    '<div class="form-row"><label>Subject</label>' +
    "<select><option>Order Question</option><option>Product Question</option><option>Return / Refund</option><option>Wholesale</option><option>Other</option></select>" +
    "</div>" +
    "</div>" +
    '<div class="form-row"><label>Message</label><textarea rows="5" required placeholder="How can we help?"></textarea></div>' +
    '<button class="btn btn-block" type="submit"><span>Send Message</span></button>' +
    "</form>" +
    "</div>" +
    "<div>" +
    '<div class="contact-info-row">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
    "<div><h4>Customer Support</h4><p>1-800-555-0199 · support@rawfashion.example</p></div>" +
    "</div>" +
    '<div class="contact-info-row">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' +
    "<div><h4>Business Hours</h4><p>Mon–Fri 9:00–18:00 ET<br>Sat 10:00–15:00 ET · Closed Sundays</p></div>" +
    "</div>" +
    '<div class="contact-info-row">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>' +
    "<div><h4>Location</h4><p>412 Foundry Street, Suite 6<br>Austin, TX 78701</p></div>" +
    "</div>" +
    '<h4 style="font-size:12px;text-transform:uppercase;letter-spacing:0.08em;margin-top:24px;">Follow Us</h4>' +
    '<div class="social-row">' +
    '<a href="#" onclick="return false;"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/></svg></a>' +
    '<a href="#" onclick="return false;"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>' +
    '<a href="#" onclick="return false;"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12a10 10 0 1 0-11.5 9.87v-6.98H8v-2.9h2.5V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87H16.4l-.44 2.9H13.6v6.98A10 10 0 0 0 22 12Z"/></svg></a>' +
    "</div>" +
    '<div id="contactSuccessMsg"></div>' +
    "</div>" +
    "</div>"
  );
}

function page404() {
  return '<div class="empty-state" style="padding:160px 20px;"><h3>Page Not Found</h3><p>That page doesn\'t exist.</p><br><button class="btn" onclick="App.nav(\'/home\')"><span>Back Home</span></button></div>';
}
/* ===================== CHECKOUT ===================== */
function pageCheckout() {
  if (!STATE.cart.length) {
    return (
      '<div class="empty-state" style="padding:140px 20px;"><h3>Your cart is empty</h3><p>Add something before checking out.</p><br>' +
      '<button class="btn" onclick="App.nav(\'/products\')"><span>Shop Products</span></button></div>'
    );
  }
  const t = cartTotals();
  return (
    "" +
    '<div class="breadcrumb"><a onclick="App.nav(\'/home\')">Home</a> / <a onclick="App.nav(\'/cart\')">Cart</a> / Checkout</div>' +
    '<form id="checkoutForm" onsubmit="App.submitCheckout(event)">' +
    '<div class="checkout-layout">' +
    "<div>" +
    '<div class="checkout-section">' +
    "<h3>Shipping Information</h3>" +
    '<div class="form-grid">' +
    '<div class="form-row"><label>First Name</label><input type="text" required></div>' +
    '<div class="form-row"><label>Last Name</label><input type="text" required></div>' +
    "</div>" +
    '<div class="form-row"><label>Address</label><input type="text" required placeholder="Street address"></div>' +
    '<div class="form-grid">' +
    '<div class="form-row"><label>City</label><input type="text" required></div>' +
    '<div class="form-row"><label>ZIP Code</label><input type="text" required></div>' +
    "</div>" +
    '<div class="form-grid">' +
    '<div class="form-row"><label>State</label><input type="text" required></div>' +
    '<div class="form-row"><label>Country</label><input type="text" required value="United States"></div>' +
    "</div>" +
    "</div>" +
    '<div class="checkout-section">' +
    "<h3>Billing Details</h3>" +
    '<label class="filter-row" style="margin-bottom:16px;"><input type="checkbox" checked onclick="App.toggleBillingSame(this)"> Same as shipping address</label>' +
    '<div id="billingFields" style="display:none;">' +
    '<div class="form-row"><label>Billing Address</label><input type="text" placeholder="Street address"></div>' +
    '<div class="form-grid">' +
    '<div class="form-row"><label>City</label><input type="text"></div>' +
    '<div class="form-row"><label>ZIP Code</label><input type="text"></div>' +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="checkout-section">' +
    "<h3>Payment Method</h3>" +
    '<div class="payment-options" id="paymentOptions">' +
    paymentOpt("card", "Credit / Debit Card", true) +
    paymentOpt("paypal", "PayPal", false) +
    paymentOpt("cod", "Cash on Delivery", false) +
    "</div>" +
    '<div id="cardFields" style="margin-top:16px;">' +
    '<div class="form-row"><label>Card Number</label><input type="text" required placeholder="1234 5678 9012 3456" maxlength="19"></div>' +
    '<div class="form-grid">' +
    '<div class="form-row"><label>Expiry</label><input type="text" required placeholder="MM/YY"></div>' +
    '<div class="form-row"><label>CVV</label><input type="text" required placeholder="123" maxlength="4"></div>' +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="order-summary">' +
    '<h3 style="font-size:1.1rem;text-transform:uppercase;margin-bottom:20px;">Order Summary</h3>' +
    '<div style="max-height:280px;overflow-y:auto;margin-bottom:12px;">' +
    STATE.cart
      .map(function (item) {
        const p = getProduct(item.productId);
        if (!p) return "";
        return (
          '<div class="mini-cart-item"><div class="mci-name">' +
          escapeHtml(p.name) +
          " × " +
          item.qty +
          '<div class="mci-variant">' +
          (item.color ? item.color + " · " : "") +
          item.sizeLabel +
          "</div></div><span>" +
          money(unitPriceFor(p, item.sizeLabel) * item.qty) +
          "</span></div>"
        );
      })
      .join("") +
    "</div>" +
    '<div id="checkoutSummaryBody">' +
    orderSummaryBody(t) +
    "</div>" +
    '<button class="btn btn-block" type="submit" style="margin-top:20px;"><span>Place Order</span></button>' +
    "</div>" +
    "</div>" +
    "</form>"
  );
}

function paymentOpt(key, label, selected) {
  return (
    '<label class="payment-opt ' +
    (selected ? "selected" : "") +
    '" data-pay="' +
    key +
    '" onclick="App.selectPayment(\'' +
    key +
    "')\">" +
    '<input type="radio" name="paymethod" ' +
    (selected ? "checked" : "") +
    ' style="width:auto;padding:0;"> ' +
    label +
    "</label>"
  );
}

/* ===================== CONFIRMATION ===================== */
function pageConfirmation(orderId) {
  return (
    '<div class="confirm-wrap">' +
    '<div class="confirm-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>' +
    '<h1 style="font-size:2.2rem;">Order Confirmed</h1>' +
    '<p style="color:var(--grey);margin-top:14px;">Thanks for your order. A confirmation email is on its way.</p>' +
    '<div class="order-num">' +
    escapeHtml(orderId) +
    "</div>" +
    '<p style="color:var(--grey);font-size:14px;">Estimated arrival: ' +
    SITE.estimatedArrival +
    "</p>" +
    '<div style="margin-top:36px;display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">' +
    '<button class="btn" onclick="App.nav(\'/products\')"><span>Continue Shopping</span></button>' +
    '<button class="btn btn-outline" onclick="App.nav(\'/home\')"><span>Back to Home</span></button>' +
    "</div>" +
    "</div>"
  );
}

/* ===================== APP ACTIONS ===================== */
const App = {
  nav: function (path) {
    location.hash = path;
  },

  toggleMobileMenu: function () {
    document.getElementById("mobileMenu").classList.toggle("open");
  },

  toggleFilters: function () {
    const el = document.getElementById("filterSidebar");
    if (el) el.classList.toggle("open");
  },

  setFilter: function (key, value) {
    const route = parseHash();
    const params = route.params;
    if (value === null || value === undefined || value === "")
      params.delete(key);
    else params.set(key, value);
    const qs = params.toString();
    location.hash = "/products" + (qs ? "?" + qs : "");
  },

  toggleWishlist: function (productId) {
    const idx = STATE.wishlist.indexOf(productId);
    if (idx > -1) {
      STATE.wishlist.splice(idx, 1);
      App.toast("Removed from wishlist");
    } else {
      STATE.wishlist.push(productId);
      App.toast("Added to wishlist");
    }
    persistWishlist();
    render();
  },

  setImage: function (idx) {
    const path = parseHash().path;
    const id = path.split("/product/")[1];
    const p = getProduct(id);
    if (!p) return;
    VIEW.activeImage = idx;
    document.getElementById("pdMainImg").src = p.images[idx];
    document.querySelectorAll(".pd-thumb").forEach(function (t) {
      t.classList.toggle(
        "active",
        parseInt(t.getAttribute("data-idx"), 10) === idx,
      );
    });
  },

  selectColor: function (el, color) {
    VIEW.color = color;
    document.getElementById("pdColorLabel").textContent = color;
    document
      .querySelectorAll("#pdColorOpts .variant-opt")
      .forEach(function (b) {
        b.classList.toggle("selected", b === el);
      });
  },

  selectSize: function (el, sizeLabel) {
    VIEW.sizeLabel = sizeLabel;
    document.querySelectorAll("#pdSizeOpts .variant-opt").forEach(function (b) {
      b.classList.toggle("selected", b === el);
    });
    const path = parseHash().path;
    const id = path.split("/product/")[1];
    const p = getProduct(id);
    if (p) updateProductDetailPricing(p);
  },

  stepQty: function (delta) {
    VIEW.qty = Math.max(1, Math.min(20, VIEW.qty + delta));
    document.getElementById("pdQty").textContent = VIEW.qty;
  },

  addToCart: function (productId) {
    const p = getProduct(productId);
    if (!p || p.availability === "out") return;
    const color = VIEW.color || p.variants.colors[0];
    const sizeLabel = VIEW.sizeLabel || p.variants.sizes[0].label;
    const key = variantKey(productId, color, sizeLabel);
    const existing = findCartItem(key);
    if (existing) existing.qty += VIEW.qty;
    else
      STATE.cart.push({
        key: key,
        productId: productId,
        color: color,
        sizeLabel: sizeLabel,
        qty: VIEW.qty,
      });
    persistCart();
    updateNavBadges();
    App.toast(p.name + " added to cart");
  },

  updateCartQty: function (key, delta) {
    const item = findCartItem(key);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      STATE.cart = STATE.cart.filter(function (i) {
        return i.key !== key;
      });
    }
    persistCart();
    render();
  },

  removeFromCart: function (key) {
    STATE.cart = STATE.cart.filter(function (i) {
      return i.key !== key;
    });
    persistCart();
    App.toast("Item removed");
    render();
  },

  applyPromo: function () {
    const input = document.getElementById("promoInput");
    const code = input.value.trim().toUpperCase();
    const msgEl = document.getElementById("promoMsg");
    if (!code) {
      STATE.promo = null;
    } else if (PROMO_CODES[code]) {
      STATE.promo = code;
      msgEl.innerHTML =
        '<div class="promo-msg ok">"' +
        code +
        '" applied — ' +
        PROMO_CODES[code].label +
        "</div>";
    } else {
      STATE.promo = null;
      msgEl.innerHTML = '<div class="promo-msg err">Invalid promo code</div>';
    }
    const t = cartTotals();
    const summaryEl =
      document.getElementById("summaryBody") ||
      document.getElementById("checkoutSummaryBody");
    if (summaryEl) summaryEl.innerHTML = orderSummaryBody(t);
    if (PROMO_CODES[code]) {
      const newMsgEl = document.getElementById("promoMsg");
      if (newMsgEl)
        newMsgEl.innerHTML =
          '<div class="promo-msg ok">"' +
          code +
          '" applied — ' +
          PROMO_CODES[code].label +
          "</div>";
    }
  },

  setTab: function (key) {
    VIEW.activeTab = key;
    const path = parseHash().path;
    const id = path.split("/product/")[1];
    const p = getProduct(id);
    if (!p) return;
    document.querySelectorAll(".tab-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-tab") === key);
    });
    document.getElementById("pdTabPanel").innerHTML = tabPanelHtml(key, p);
  },

  setReviewStar: function (n) {
    VIEW.reviewRating = n;
    document.querySelectorAll("#reviewStarInput span").forEach(function (s) {
      s.classList.toggle(
        "filled",
        parseInt(s.getAttribute("data-star"), 10) <= n,
      );
    });
  },

  submitReview: function (evt, productId) {
    evt.preventDefault();
    const p = getProduct(productId);
    if (!p) return;
    const form = evt.target;
    const name =
      form.querySelector("input[type=text]").value.trim() || "Anonymous";
    const comment = form.querySelector("textarea").value.trim();
    const rating = VIEW.reviewRating || 5;
    p.reviews.unshift({
      name: name,
      rating: rating,
      date: new Date().toISOString().slice(0, 10),
      comment: comment,
    });
    p.rating =
      p.reviews.reduce(function (s, r) {
        return s + r.rating;
      }, 0) / p.reviews.length;
    VIEW.reviewRating = 0;
    App.toast("Review submitted — thank you!");
    document.getElementById("pdTabPanel").innerHTML = tabPanelHtml(
      "reviews",
      p,
    );
  },

  doSearch: function (q) {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    location.hash = "/search" + (q ? "?" + params.toString() : "");
  },

  toggleBillingSame: function (cb) {
    document.getElementById("billingFields").style.display = cb.checked
      ? "none"
      : "block";
  },

  selectPayment: function (key) {
    document.querySelectorAll(".payment-opt").forEach(function (o) {
      o.classList.toggle("selected", o.getAttribute("data-pay") === key);
    });
    const cardFields = document.getElementById("cardFields");
    if (cardFields)
      cardFields.style.display = key === "card" ? "block" : "none";
  },

  submitCheckout: function (evt) {
    evt.preventDefault();
    const orderId = "ODY-" + Math.floor(100000 + Math.random() * 900000);
    STATE.cart = [];
    STATE.promo = null;
    persistCart();
    App.nav("/confirmation/" + orderId);
  },

  submitContact: function (evt) {
    evt.preventDefault();
    const el = document.getElementById("contactSuccessMsg");
    if (el)
      el.innerHTML =
        '<div class="promo-msg ok" style="margin-top:16px;font-size:13px;">Thanks — your message has been sent. We\'ll reply within one business day.</div>';
    evt.target.reset();
  },

  subscribeNewsletter: function (evt) {
    evt.preventDefault();
    App.toast("Subscribed! Check your inbox to confirm.");
    document.getElementById("newsletterEmail").value = "";
  },

  toast: function (msg) {
    const t = document.getElementById("toast");
    document.getElementById("toastMsg").textContent = msg;
    t.classList.add("show");
    clearTimeout(App._toastTimer);
    App._toastTimer = setTimeout(function () {
      t.classList.remove("show");
    }, 2200);
  },
};

/* ===================== INIT ===================== */
async function init() {
  await loadPersisted();
  window.addEventListener("hashchange", render);
  if (!location.hash) location.hash = "/home";
  render();
}
init();
