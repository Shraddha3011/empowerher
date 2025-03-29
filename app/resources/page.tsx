export default function ResourcesPage() {
  return (
    <div className="space-y-8">
      {/* Resources Header */}
      <div className="hero bg-gradient-to-r from-primary to-secondary text-primary-content rounded-box shadow-lg">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Resources</h1>
            <p className="text-xl">
              Access tools, templates, and guides to help grow your business
            </p>
          </div>
        </div>
      </div>

      {/* Resources Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Resources */}
        <div className="lg:col-span-2 space-y-6">
          {/* Business Templates */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Business Templates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Business Plan Template",
                    description: "Comprehensive template for creating your business plan",
                    icon: "📄",
                    downloads: 234
                  },
                  {
                    title: "Financial Projections",
                    description: "Excel template for financial forecasting",
                    icon: "💰",
                    downloads: 189
                  },
                  {
                    title: "Marketing Strategy",
                    description: "Template for developing your marketing plan",
                    icon: "📢",
                    downloads: 156
                  },
                  {
                    title: "Customer Survey",
                    description: "Template for gathering customer feedback",
                    icon: "📊",
                    downloads: 98
                  }
                ].map((template) => (
                  <div key={template.title} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
                    <div className="card-body">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{template.icon}</div>
                        <div>
                          <h3 className="font-semibold">{template.title}</h3>
                          <p className="text-sm opacity-70">{template.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs opacity-50">⬇️ {template.downloads} downloads</span>
                            <button className="btn btn-primary btn-sm">Download</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Learning Resources */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Learning Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Business Planning Guide",
                    description: "Step-by-step guide to creating your business plan",
                    icon: "📚",
                    type: "PDF"
                  },
                  {
                    title: "Marketing Basics",
                    description: "Essential marketing concepts and strategies",
                    icon: "🎯",
                    type: "Video"
                  },
                  {
                    title: "Financial Management",
                    description: "Guide to managing business finances",
                    icon: "💳",
                    type: "PDF"
                  },
                  {
                    title: "Customer Service",
                    description: "Best practices for customer service",
                    icon: "👥",
                    type: "Video"
                  }
                ].map((resource) => (
                  <div key={resource.title} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
                    <div className="card-body">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{resource.icon}</div>
                        <div>
                          <h3 className="font-semibold">{resource.title}</h3>
                          <p className="text-sm opacity-70">{resource.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="badge badge-outline">{resource.type}</span>
                            <button className="btn btn-primary btn-sm">Access</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div className="space-y-6">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Quick Access</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Recent Downloads",
                    items: [
                      "Business Plan Template",
                      "Financial Projections",
                      "Marketing Strategy"
                    ]
                  },
                  {
                    title: "Saved Resources",
                    items: [
                      "Customer Survey",
                      "Business Planning Guide",
                      "Financial Management"
                    ]
                  }
                ].map((section) => (
                  <div key={section.title} className="space-y-2">
                    <h3 className="font-semibold">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <span className="text-primary">📄</span>
                          <span className="opacity-70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Resource Categories</h2>
              <div className="space-y-2">
                {[
                  "Business Planning",
                  "Financial Management",
                  "Marketing & Sales",
                  "Customer Service",
                  "Legal & Compliance",
                  "Technology & Tools"
                ].map((category) => (
                  <button key={category} className="btn btn-ghost justify-start w-full">
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Popular Resources</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Business Plan Template",
                    downloads: 234,
                    rating: 4.8
                  },
                  {
                    title: "Financial Projections",
                    downloads: 189,
                    rating: 4.6
                  },
                  {
                    title: "Marketing Strategy",
                    downloads: 156,
                    rating: 4.7
                  }
                ].map((resource) => (
                  <div key={resource.title} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{resource.title}</h3>
                      <p className="text-sm opacity-70">⬇️ {resource.downloads} downloads</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm">{resource.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 