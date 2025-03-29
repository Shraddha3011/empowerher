"use client";

import { useRouter } from "next/navigation";

export default function BusinessToolsPage() {
  const router = useRouter();

  const tools = [
    {
      title: "Business Plan Builder",
      description: "Create a professional business plan with guided templates",
      icon: "📝",
      color: "from-blue-500 to-cyan-500",
      link: "/tools/business-plan"
    },
    {
      title: "Financial Calculator",
      description: "Calculate costs, profits, and break-even points",
      icon: "💰",
      color: "from-green-500 to-emerald-500",
      link: "/tools/financial-calculator"
    },
    {
      title: "Inventory Manager",
      description: "Track your stock levels and manage inventory",
      icon: "📦",
      color: "from-purple-500 to-pink-500",
      link: "/tools/inventory-manager"
    },
    {
      title: "Marketing Planner",
      description: "Plan and schedule your marketing campaigns",
      icon: "📢",
      color: "from-orange-500 to-red-500",
      link: "/tools/marketing-planner"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-primary to-secondary text-primary-content rounded-box shadow-lg">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Business Tools</h1>
            <p className="text-xl">Essential tools to help you manage and grow your business</p>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <div key={tool.title} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r rounded-full flex items-center justify-center text-3xl">
                  {tool.icon}
                </div>
                <div>
                  <h2 className="card-title">{tool.title}</h2>
                  <p className="text-sm opacity-70">{tool.description}</p>
                </div>
              </div>
              <div className="card-actions justify-end mt-4">
                <button onClick={() => router.push(tool.link)} className="btn btn-primary">
                  Open Tool
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-base-100 p-6 rounded-box shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Add Expense", icon: "💸", link: "/actions/add-expense" },
            { title: "New Order", icon: "🛍️", link: "/actions/new-order" },
            { title: "Generate Report", icon: "📊", link: "/actions/generate-report" },
            { title: "Contact Support", icon: "💬", link: "/support" }
          ].map((action) => (
            <button
              key={action.title}
              onClick={() => router.push(action.link)}
              className="btn btn-outline h-24 flex flex-col gap-2"
            >
              <span className="text-2xl">{action.icon}</span>
              <span>{action.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-base-100 p-6 rounded-box shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { action: "New order received", time: "2 hours ago", icon: "🛍️" },
            { action: "Inventory updated", time: "5 hours ago", icon: "📦" },
            { action: "Payment received", time: "1 day ago", icon: "💰" },
            { action: "Marketing campaign launched", time: "2 days ago", icon: "📢" }
          ].map((activity) => (
            <div key={activity.action} className="flex items-center gap-4 p-4 bg-base-200 rounded-box">
              <span className="text-2xl">{activity.icon}</span>
              <div className="flex-1">
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm opacity-70">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
