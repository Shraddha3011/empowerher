import { NextResponse } from 'next/server';

type Language = 'en' | 'hi' | 'ta';

interface TranslatedText {
  en: string;
  hi: string;
  ta: string;
}

interface Product {
  id: number;
  title: TranslatedText;
  seller: TranslatedText;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  category: TranslatedText;
  description: TranslatedText;
  stock: number;
  sales: number;
  location: string;
  tags: string[];
  specifications: Record<string, string>;
}

const products: Product[] = [
  {
    id: 1,
    title: {
      en: "Handmade Jewelry Set",
      hi: "हस्तनिर्मित आभूषण सेट",
      ta: "கைவினை ஆபரணங்கள் தொகுப்பு"
    },
    seller: {
      en: "Priya's Crafts",
      hi: "प्रिया की क्राफ्ट्स",
      ta: "பிரியாவின் கைவினைப்பொருட்கள்"
    },
    price: "₹2,499",
    rating: 4.8,
    reviews: 24,
    image: "/images/products/jewelry.jpg",
    category: {
      en: "Handmade Crafts",
      hi: "हस्तनिर्मित शिल्प",
      ta: "கைவினைப்பொருட்கள்"
    },
    description: {
      en: "Beautiful handcrafted jewelry set with traditional designs",
      hi: "पारंपरिक डिज़ाइन के साथ सुंदर हस्तनिर्मित आभूषण सेट",
      ta: "பாரம்பரிய வடிவமைப்புகளுடன் அழகிய கைவினை ஆபரணங்கள் தொகுப்பு"
    },
    stock: 5,
    sales: 12,
    location: "Mumbai, India",
    tags: ["jewelry", "handmade", "traditional", "accessories"],
    specifications: {
      material: "Silver and semi-precious stones",
      weight: "150g",
      dimensions: "Box size: 15x10x5cm"
    }
  },
  {
    id: 2,
    title: {
      en: "Digital Marketing Course",
      hi: "डिजिटल मार्केटिंग कोर्स",
      ta: "டிஜிட்டல் சந்தைப்படுத்தல் படிப்பு"
    },
    seller: {
      en: "Business Academy",
      hi: "बिजनेस अकादमी",
      ta: "வணிக அகாதமி"
    },
    price: "₹1,999",
    rating: 4.6,
    reviews: 18,
    image: "/images/products/digital-marketing.jpg",
    category: {
      en: "Digital Products",
      hi: "डिजिटल उत्पाद",
      ta: "டிஜிட்டல் பொருட்கள்"
    },
    description: {
      en: "Learn digital marketing in simple language",
      hi: "सरल भाषा में डिजिटल मार्केटिंग सीखें",
      ta: "எளிய மொழியில் டிஜிட்டல் சந்தைப்படுத்தல் கற்றுக்கொள்ளுங்கள்"
    },
    stock: 100,
    sales: 45,
    location: "Online",
    tags: ["course", "digital", "marketing", "education"],
    specifications: {
      duration: "8 weeks",
      level: "Beginner",
      format: "Video lessons + PDF materials"
    }
  },
  {
    id: 3,
    title: {
      en: "Business Consulting",
      hi: "व्यवसाय परामर्श",
      ta: "வணிக ஆலோசனை"
    },
    seller: {
      en: "Expert Advisors",
      hi: "विशेषज्ञ सलाहकार",
      ta: "நிபுணர் ஆலோசகர்கள்"
    },
    price: "₹3,999",
    rating: 4.9,
    reviews: 32,
    image: "/images/products/consulting.jpg",
    category: {
      en: "Professional Services",
      hi: "पेशेवर सेवाएं",
      ta: "தொழில்முறை சேவைகள்"
    },
    description: {
      en: "Get expert advice for your small business",
      hi: "अपने छोटे व्यवसाय के लिए विशेषज्ञ सलाह प्राप्त करें",
      ta: "உங்கள் சிறு வணிகத்திற்கான நிபுணர் ஆலோசனையைப் பெறுங்கள்"
    },
    stock: 1,
    sales: 8,
    location: "Delhi, India",
    tags: ["consulting", "business", "expert", "advice"],
    specifications: {
      duration: "1 hour per session",
      sessions: "4 sessions",
      mode: "Online/Offline"
    }
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const language = searchParams.get('language') as Language || 'en';
  const search = searchParams.get('search');

  let filteredProducts = [...products];

  if (category && category !== 'All Categories') {
    filteredProducts = filteredProducts.filter(product => 
      product.category[language] === category
    );
  }

  if (search) {
    filteredProducts = filteredProducts.filter(product =>
      product.title[language].toLowerCase().includes(search.toLowerCase()) ||
      product.description[language].toLowerCase().includes(search.toLowerCase())
    );
  }

  return NextResponse.json({
    products: filteredProducts,
    total: filteredProducts.length
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  // In a real application, you would save this to a database
  return NextResponse.json({ message: 'Product added successfully' });
} 