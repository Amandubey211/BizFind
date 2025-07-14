// backend/index.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Expanded database of 50 businesses
const businesses = [
  {
    id: 1,
    name: "TechNova Solutions",
    category: "Technology",
    description: "Pioneering new technologies for a brighter future.",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "GreenLeaf Organics",
    category: "Food & Beverage",
    description: "Fresh, organic produce delivered to your doorstep.",
    imageUrl:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop",
  },
  // {
  //   id: 3,
  //   name: "Quantum-Leap Fitness",
  //   category: "Health & Wellness",
  //   description: "State-of-the-art gym and personal training services.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1549060279-7e168f91c2b5?q=80&w=2070&auto=format&fit=crop",
  // },
  {
    id: 4,
    name: "Artisan Corner Cafe",
    category: "Cafes",
    description: "Cozy spot for specialty coffee and homemade pastries.",
    imageUrl:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "CodeWizards Academy",
    category: "Education",
    description: "Empowering the next generation of software developers.",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Summit Adventures",
    category: "Travel & Tourism",
    description: "Guided tours for thrill-seekers and nature lovers.",
    imageUrl:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "The Gilded Page",
    category: "Retail",
    description: "A curated collection of rare books and manuscripts.",
    imageUrl:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Innovate Hub",
    category: "Coworking Space",
    description: "A collaborative environment for startups and freelancers.",
    imageUrl:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "AquaZen Spa",
    category: "Beauty & Spa",
    description: "Escape the city and find your tranquility.",
    imageUrl:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Pawsitive Connections",
    category: "Pet Services",
    description: "Professional pet grooming and daycare services.",
    imageUrl:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1894&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "ByteBuilders",
    category: "Technology",
    description: "Custom software solutions for growing businesses.",
    imageUrl:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "The Daily Grind",
    category: "Cafes",
    description: "Your daily dose of exceptional coffee and community.",
    imageUrl:
      "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: 13,
    name: "Velocity Gym",
    category: "Health & Wellness",
    description: "High-intensity training for maximum results.",
    imageUrl:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop",
  },
  {
    id: 14,
    name: "LearnSphere",
    category: "Education",
    description: "Online courses taught by industry experts.",
    imageUrl:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 15,
    name: "Wanderlust Travel Co.",
    category: "Travel & Tourism",
    description: "Curated travel experiences you'll never forget.",
    imageUrl:
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1931&auto=format&fit=crop",
  },
  {
    id: 16,
    name: "The Book Nook",
    category: "Retail",
    description: "A cozy corner for book lovers to unite.",
    imageUrl:
      "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 17,
    name: "Serenity Salon",
    category: "Beauty & Spa",
    description: "Luxury salon services for hair and nails.",
    imageUrl:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop",
  },
  // {
  //   id: 18,
  //   name: "The Pet Palace",
  //   category: "Pet Services",
  //   description: "Where every pet is treated like royalty.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1583337130417-2346a5be24c1?q=80&w=2070&auto=format&fit=crop",
  // },
  {
    id: 19,
    name: "Fusion Bistro",
    category: "Food & Beverage",
    description: "A melting pot of global flavors and spices.",
    imageUrl:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 20,
    name: "DataDriven Inc.",
    category: "Technology",
    description: "Harnessing the power of data for business intelligence.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 21,
    name: "Mindful Movements",
    category: "Health & Wellness",
    description: "Yoga and meditation for a balanced life.",
    imageUrl:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
  },
  {
    id: 22,
    name: "Global Getaways",
    category: "Travel & Tourism",
    description: "Affordable packages to exotic destinations.",
    imageUrl:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 23,
    name: "The Style Hub",
    category: "Retail",
    description: "Your destination for contemporary fashion.",
    imageUrl:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 24,
    name: "The Groom Room",
    category: "Pet Services",
    description: "Expert grooming for happy, healthy pets.",
    imageUrl:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1962&auto=format&fit=crop",
  },

  {
    id: 28,
    name: "The Spice Route",
    category: "Food & Beverage",
    description: "Authentic flavors from across Asia.",
    imageUrl:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 29,
    name: "Momentum Fitness",
    category: "Health & Wellness",
    description: "Keep your fitness journey moving forward.",
    imageUrl:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 30,
    name: "CloudNine SaaS",
    category: "Technology",
    description: "Scalable software solutions for the modern enterprise.",
    imageUrl:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2231&auto=format&fit=crop",
  },

  {
    id: 32,
    name: "The Dog Den",
    category: "Pet Services",
    description: "A fun and safe environment for your furry friends.",
    imageUrl:
      "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?q=80&w=1935&auto=format&fit=crop",
  },
  {
    id: 33,
    name: "The Learning Curve",
    category: "Education",
    description: "Tutoring services for all ages and subjects.",
    imageUrl:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
  },
  // {
  //   id: 34,
  //   name: "Azure Day Spa",
  //   category: "Beauty & Spa",
  //   description: "Experience bliss with our signature spa packages.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1596178065887-1198b614c8b2?q=80&w=2070&auto=format&fit=crop",
  // },
  {
    id: 35,
    name: "Taco Tuesday",
    category: "Food & Beverage",
    description: "Every day is Taco Tuesday at our vibrant eatery.",
    imageUrl:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 36,
    name: "Peak Performance",
    category: "Health & Wellness",
    description: "Unlock your potential with our elite training programs.",
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 37,
    name: "Digital Dreams",
    category: "Technology",
    description: "Creative digital agency specializing in web design.",
    imageUrl:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 38,
    name: "The Cozy Cup",
    category: "Cafes",
    description: "A warm and inviting space for coffee and conversation.",
    imageUrl:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 39,
    name: "Adventure Awaits",
    category: "Travel & Tourism",
    description: "Unique adventure travel for the modern explorer.",
    imageUrl:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1887&auto=format&fit=crop",
  },

  {
    id: 44,
    name: "The Zen Den",
    category: "Health & Wellness",
    description: "A sanctuary for relaxation and rejuvenation.",
    imageUrl:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
  },
  {
    id: 45,
    name: "Future Skills",
    category: "Education",
    description: "Preparing you for the jobs of tomorrow.",
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 46,
    name: "Roam Wild",
    category: "Travel & Tourism",
    description: "Off-the-beaten-path tours for the intrepid traveler.",
    imageUrl:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 47,
    name: "The Gadget Grove",
    category: "Retail",
    description: "The latest and greatest in tech and gadgets.",
    imageUrl:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2232&auto=format&fit=crop",
  },
  {
    id: 48,
    name: "The Pampered Pup",
    category: "Pet Services",
    description: "Gourmet treats and spa services for dogs.",
    imageUrl:
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1935&auto=format&fit=crop",
  },
  {
    id: 49,
    name: "The Burger Barn",
    category: "Food & Beverage",
    description: "Gourmet burgers and craft beers in a rustic setting.",
    imageUrl:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 50,
    name: "Glamour & Glow",
    category: "Beauty & Spa",
    description: "Professional makeup and skincare services.",
    imageUrl:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
  },
];

app.get("/api/businesses", (req, res) => {
  res.json(businesses);
});

app.get("/api", (req, res) => {
  res.send("Backend server is running!");
});

// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
module.exports = app;
