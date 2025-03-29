import { NextResponse } from 'next/server';

type Language = 'en' | 'hi' | 'ta';

interface CourseContent {
  type: string;
  title: string;
  data: {
    url: string;
    transcript: Record<Language, string>;
  };
}

interface Instructor {
  name: string;
  bio: string;
  image: string;
}

interface Course {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  duration: number;
  skillLevel: string;
  category: string;
  prerequisites: string[];
  offlineAvailable: boolean;
  instructor: Instructor;
  price: string;
  rating: number;
  reviews: number;
  students: number;
  content: CourseContent[];
}

const courses: { modules: Course[] } = {
  "modules": [
    {
      "id": "basic-finance-101",
      "title": {
        "en": "Basic Financial Management",
        "hi": "बुनियादी वित्तीय प्रबंधन",
        "ta": "அடிப்படை நிதி மேலாண்மை"
      },
      "description": {
        "en": "Learn the fundamentals of financial management, including budgeting, saving, and basic investment strategies.",
        "hi": "बजट, बचत और बुनियादी निवेश रणनीतियों सहित वित्तीय प्रबंधन की मूल बातें सीखें।",
        "ta": "பட்ஜெட்டிங், சேமிப்பு மற்றும் அடிப்படை முதலீட்டு உத்திகளை உள்ளடக்கிய நிதி மேலாண்மையின் அடிப்படைகளை கற்றுக்கொள்ளுங்கள்."
      },
      "duration": 10,
      "skillLevel": "beginner",
      "category": "finance",
      "prerequisites": [],
      "offlineAvailable": true,
      "instructor": {
        "name": "Dr. Sarah Johnson",
        "bio": "Financial Advisor with 15+ years of experience",
        "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      },
      "price": "₹999",
      "rating": 4.8,
      "reviews": 1250,
      "students": 5000,
      "content": [
        {
          "type": "video",
          "title": "Introduction to Financial Management",
          "data": {
            "url": "https://www.youtube.com/embed/4ZgEabzH07I",
            "transcript": {
              "en": "Welcome to basic financial management. In this course, we'll cover essential concepts...",
              "hi": "बुनियादी वित्तीय प्रबंधन में आपका स्वागत है। इस पाठ्यक्रम में, हम आवश्यक अवधारणाओं को कवर करेंगे...",
              "ta": "அடிப்படை நிதி மேலாண்மைக்கு வரவேற்கிறோம். இந்த படிப்பில், முக்கிய கருத்துக்களை பார்ப்போம்..."
            }
          }
        }
      ]
    },
    {
      "id": "digital-marketing-101",
      "title": {
        "en": "Digital Marketing Fundamentals",
        "hi": "डिजिटल मार्केटिंग की मूल बातें",
        "ta": "டிஜிட்டல் மார்க்கெட்டிங் அடிப்படைகள்"
      },
      "description": {
        "en": "Master the basics of digital marketing, including social media, SEO, and content marketing strategies.",
        "hi": "सोशल मीडिया, एसईओ और कंटेंट मार्केटिंग रणनीतियों सहित डिजिटल मार्केटिंग की मूल बातें सीखें।",
        "ta": "சமூக ஊடகங்கள், SEO மற்றும் உள்ளடக்க மார்க்கெட்டிங் உத்திகளை உள்ளடக்கிய டிஜிட்டல் மார்க்கெட்டிங் அடிப்படைகளை கற்றுக்கொள்ளுங்கள்."
      },
      "duration": 12,
      "skillLevel": "beginner",
      "category": "marketing",
      "prerequisites": [],
      "offlineAvailable": true,
      "instructor": {
        "name": "Mike Chen",
        "bio": "Digital Marketing Expert & Social Media Strategist",
        "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      "price": "₹1299",
      "rating": 4.6,
      "reviews": 980,
      "students": 4200,
      "content": [
        {
          "type": "video",
          "title": "Introduction to Digital Marketing",
          "data": {
            "url": "https://www.youtube.com/embed/3ORsUGVNxGs",
            "transcript": {
              "en": "Welcome to digital marketing fundamentals. Let's explore the world of online marketing...",
              "hi": "डिजिटल मार्केटिंग की मूल बातें में आपका स्वागत है। आइए ऑनलाइन मार्केटिंग की दुनिया का पता लगाएं...",
              "ta": "டிஜிட்டல் மார்க்கெட்டிங் அடிப்படைகளுக்கு வரவேற்கிறோம். ஆன்லைன் மார்க்கெட்டிங் உலகை ஆராய்வோம்..."
            }
          }
        }
      ]
    },
    {
      "id": "web-development-101",
      "title": {
        "en": "Web Development Basics",
        "hi": "वेब डेवलपमेंट की मूल बातें",
        "ta": "வலை மேம்பாட்டு அடிப்படைகள்"
      },
      "description": {
        "en": "Learn HTML, CSS, and JavaScript fundamentals to start your web development journey.",
        "hi": "अपनी वेब डेवलपमेंट यात्रा शुरू करने के लिए HTML, CSS और JavaScript की मूल बातें सीखें।",
        "ta": "உங்கள் வலை மேம்பாட்டு பயணத்தை தொடங்க HTML, CSS மற்றும் JavaScript அடிப்படைகளை கற்றுக்கொள்ளுங்கள்."
      },
      "duration": 15,
      "skillLevel": "beginner",
      "category": "technology",
      "prerequisites": [],
      "offlineAvailable": true,
      "instructor": {
        "name": "Alex Rivera",
        "bio": "Full Stack Developer & Tech Educator",
        "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      "price": "₹1499",
      "rating": 4.9,
      "reviews": 2100,
      "students": 8500,
      "content": [
        {
          "type": "video",
          "title": "Introduction to Web Development",
          "data": {
            "url": "https://www.youtube.com/embed/916GWv2QsxM",
            "transcript": {
              "en": "Welcome to web development basics. Let's start with HTML fundamentals...",
              "hi": "वेब डेवलपमेंट की मूल बातें में आपका स्वागत है। HTML की मूल बातों से शुरू करते हैं...",
              "ta": "வலை மேம்பாட்டு அடிப்படைகளுக்கு வரவேற்கிறோம். HTML அடிப்படைகளுடன் தொடங்குவோம்..."
            }
          }
        }
      ]
    },
    {
      "id": "business-101",
      "title": {
        "en": "Business Management Essentials",
        "hi": "व्यवसाय प्रबंधन की मूल बातें",
        "ta": "வணிக மேலாண்மை அடிப்படைகள்"
      },
      "description": {
        "en": "Learn essential business management concepts, including leadership, strategy, and operations.",
        "hi": "नेतृत्व, रणनीति और संचालन सहित आवश्यक व्यवसाय प्रबंधन अवधारणाओं को सीखें।",
        "ta": "தலைமைத்துவம், உத்தி மற்றும் செயல்பாடுகளை உள்ளடக்கிய முக்கிய வணிக மேலாண்மை கருத்துக்களை கற்றுக்கொள்ளுங்கள்."
      },
      "duration": 14,
      "skillLevel": "intermediate",
      "category": "business",
      "prerequisites": [],
      "offlineAvailable": true,
      "instructor": {
        "name": "Dr. Emily Parker",
        "bio": "Business Strategy Consultant & Professor",
        "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
      },
      "price": "₹1799",
      "rating": 4.7,
      "reviews": 1500,
      "students": 6200,
      "content": [
        {
          "type": "video",
          "title": "Introduction to Business Management",
          "data": {
            "url": "https://www.youtube.com/embed/7SgVBL3Gq8s",
            "transcript": {
              "en": "Welcome to business management essentials. Let's explore key business concepts...",
              "hi": "व्यवसाय प्रबंधन की मूल बातें में आपका स्वागत है। आइए मुख्य व्यवसाय अवधारणाओं का पता लगाएं...",
              "ta": "வணிக மேலாண்மை அடிப்படைகளுக்கு வரவேற்கிறோம். முக்கிய வணிக கருத்துக்களை ஆராய்வோம்..."
            }
          }
        }
      ]
    },
    {
      "id": "health-wellness-101",
      "title": {
        "en": "Health & Wellness Fundamentals",
        "hi": "स्वास्थ्य और कल्याण की मूल बातें",
        "ta": "ஆரோக்கியம் மற்றும் நல்வாழ்வு அடிப்படைகள்"
      },
      "description": {
        "en": "Learn about nutrition, exercise, and mental health for a balanced lifestyle.",
        "hi": "संतुलित जीवनशैली के लिए पोषण, व्यायाम और मानसिक स्वास्थ्य के बारे में जानें।",
        "ta": "சமநிலை வாழ்க்கை முறைக்கான ஊட்டச்சத்து, உடற்பயிற்சி மற்றும் மன ஆரோக்கியம் பற்றி அறியுங்கள்."
      },
      "duration": 8,
      "skillLevel": "beginner",
      "category": "health",
      "prerequisites": [],
      "offlineAvailable": true,
      "instructor": {
        "name": "Dr. Lisa Wong",
        "bio": "Health & Wellness Coach & Nutritionist",
        "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
      },
      "price": "₹799",
      "rating": 4.8,
      "reviews": 850,
      "students": 3800,
      "content": [
        {
          "type": "video",
          "title": "Introduction to Health & Wellness",
          "data": {
            "url": "https://www.youtube.com/embed/2tM1LFFxeKg",
            "transcript": {
              "en": "Welcome to health and wellness fundamentals. Let's explore healthy living...",
              "hi": "स्वास्थ्य और कल्याण की मूल बातें में आपका स्वागत है। आइए स्वस्थ जीवन का पता लगाएं...",
              "ta": "ஆரோக்கியம் மற்றும் நல்வாழ்வு அடிப்படைகளுக்கு வரவேற்கிறோம். ஆரோக்கியமான வாழ்க்கையை ஆராய்வோம்..."
            }
          }
        }
      ]
    }
  ]
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const language = (searchParams.get('language') || 'en') as Language;
    const search = searchParams.get('search') || '';

    let filteredModules = courses.modules;

    // Filter by category
    if (category && category !== 'all') {
      filteredModules = filteredModules.filter(module => module.category === category);
    }

    // Filter by search query
    if (search) {
      const searchLower = search.toLowerCase();
      filteredModules = filteredModules.filter(module => 
        module.title[language].toLowerCase().includes(searchLower) ||
        module.description[language].toLowerCase().includes(searchLower)
      );
    }

    return NextResponse.json({
      modules: filteredModules,
      total: filteredModules.length
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch learning modules' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // In a real app, this would save to a database
    return NextResponse.json({ message: 'Module added successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add learning module' },
      { status: 500 }
    );
  }
} 