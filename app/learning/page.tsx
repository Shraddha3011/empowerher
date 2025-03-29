import Link from "next/link";

export default function LearningPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">📚 Unlock Your Potential</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Discover skills that will help you grow as an entrepreneur and leader. Choose where you want to start!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Learning Categories */}
        {[
          { 
            title: "💬 Want to Communicate with Confidence?", 
            link: "/learning/soft-skills/communication-game", 
            description: "Master the art of clear and effective communication in business and daily life." 
          },
          { 
            title: "🎯 Struggling to Negotiate Better Deals?", 
            link: "/learning/soft-skills/negotiation-game", 
            description: "Learn how to negotiate like a pro and get the best outcomes for your business." 
          },
          { 
            title: "📈 Want to Build a Thriving Business?", 
            link: "/learning/business-skills", 
            description: "Gain essential skills in business planning, marketing, and financial management." 
          },
          { 
            title: "🌟 Looking for a Community to Learn With?", 
            link: "/community", 
            description: "Connect with mentors and fellow entrepreneurs for guidance and support." 
          }
        ].map((item, index) => (
          <Link href={item.link} key={index} className="block bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
