export interface User {
  id: string;
  name: string;
  businessName: string;
  role: string;
  location: string;
  bio: string;
  skills: string[];
  interests: string[];
}

export const dummyUser: User = {
  id: "1",
  name: "Priya Sharma",
  businessName: "Priya's Handmade Crafts",
  role: "Entrepreneur",
  location: "Mumbai, India",
  bio: "Passionate about creating unique handmade crafts and empowering women artisans in rural communities. Currently running a successful online store and conducting workshops to share my knowledge.",
  skills: [
    "Handicraft Design",
    "Digital Marketing",
    "E-commerce Management",
    "Workshop Facilitation",
    "Business Planning"
  ],
  interests: [
    "Sustainable Fashion",
    "Women Empowerment",
    "Digital Marketing",
    "Business Growth",
    "Community Building"
  ]
}; 