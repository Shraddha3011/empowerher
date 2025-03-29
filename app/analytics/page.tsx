export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Analytics Header */}
      <div className="hero bg-gradient-to-r from-primary to-secondary text-primary-content rounded-box shadow-lg">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Analytics</h1>
            <p className="text-xl">
              Track your business growth and performance metrics
            </p>
          </div>
        </div>
      </div>

      {/* Analytics Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Analytics */}
        <div className="lg:col-span-3 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Total Revenue",
                value: "₹45,000",
                change: "+12%",
                trend: "up",
                icon: "💰"
              },
              {
                title: "Active Customers",
                value: "156",
                change: "+8%",
                trend: "up",
                icon: "👥"
              },
              {
                title: "Average Order Value",
                value: "₹2,890",
                change: "+5%",
                trend: "up",
                icon: "🛍️"
              },
              {
                title: "Customer Satisfaction",
                value: "4.8/5",
                change: "+0.2",
                trend: "up",
                icon: "⭐"
              }
            ].map((metric) => (
              <div key={metric.title} className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl">{metric.icon}</div>
                    <div className={`badge ${metric.trend === 'up' ? 'badge-success' : 'badge-error'}`}>
                      {metric.change}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mt-2">{metric.value}</h3>
                  <p className="text-sm opacity-70">{metric.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Revenue Chart */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center mb-4">
                <h2 className="card-title">Revenue Overview</h2>
                <select className="select select-bordered select-sm">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                </select>
              </div>
              <div className="h-64 bg-base-100 rounded-lg flex items-center justify-center">
                <p className="text-lg opacity-70">Revenue Chart Placeholder</p>
              </div>
            </div>
          </div>

          {/* Sales Breakdown */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Sales Breakdown</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    category: "Handmade Crafts",
                    revenue: "₹25,000",
                    percentage: "55%",
                    trend: "up"
                  },
                  {
                    category: "Custom Orders",
                    revenue: "₹12,000",
                    percentage: "27%",
                    trend: "up"
                  },
                  {
                    category: "Workshop Fees",
                    revenue: "₹5,000",
                    percentage: "11%",
                    trend: "down"
                  },
                  {
                    category: "Other",
                    revenue: "₹3,000",
                    percentage: "7%",
                    trend: "up"
                  }
                ].map((item) => (
                  <div key={item.category} className="bg-base-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{item.category}</h3>
                      <span className={`badge ${item.trend === 'up' ? 'badge-success' : 'badge-error'}`}>
                        {item.trend === 'up' ? '↑' : '↓'}
                      </span>
                    </div>
                    <div className="mt-2">
                      <p className="text-lg font-bold">{item.revenue}</p>
                      <p className="text-sm opacity-70">{item.percentage} of total revenue</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Insights */}
        <div className="space-y-6">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Quick Insights</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Top Performing Product",
                    value: "Handmade Jewelry Set",
                    revenue: "₹8,500",
                    trend: "up"
                  },
                  {
                    title: "Most Active Time",
                    value: "2 PM - 5 PM",
                    orders: "45",
                    trend: "up"
                  },
                  {
                    title: "Customer Retention",
                    value: "85%",
                    change: "+5%",
                    trend: "up"
                  }
                ].map((insight) => (
                  <div key={insight.title} className="bg-base-100 p-4 rounded-lg">
                    <h3 className="font-semibold">{insight.title}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-lg">{insight.value}</p>
                      <span className={`badge ${insight.trend === 'up' ? 'badge-success' : 'badge-error'}`}>
                        {insight.trend === 'up' ? '↑' : '↓'}
                      </span>
                    </div>
                    <p className="text-sm opacity-70 mt-1">
                      {insight.revenue || insight.orders || insight.change}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Goals Progress</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Monthly Revenue Target",
                    current: "₹45,000",
                    target: "₹50,000",
                    progress: 90
                  },
                  {
                    title: "Customer Growth",
                    current: "156",
                    target: "200",
                    progress: 78
                  },
                  {
                    title: "Product Launch",
                    current: "8",
                    target: "10",
                    progress: 80
                  }
                ].map((goal) => (
                  <div key={goal.title} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{goal.title}</h3>
                      <span className="text-sm opacity-70">{goal.progress}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <progress className="progress progress-primary w-full" value={goal.progress} max="100"></progress>
                      <span className="text-sm opacity-70">{goal.current}/{goal.target}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Export Data</h2>
              <div className="space-y-2">
                <button className="btn btn-primary w-full">Export Analytics Report</button>
                <button className="btn btn-outline w-full">Download Raw Data</button>
                <button className="btn btn-outline w-full">Schedule Reports</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 