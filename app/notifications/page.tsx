export default function NotificationsPage() {
  return (
    <div className="space-y-8">
      {/* Notifications Header */}
      <div className="hero bg-gradient-to-r from-primary to-secondary text-primary-content rounded-box shadow-lg">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Notifications</h1>
            <p className="text-xl">
              Stay updated with your latest activities and messages
            </p>
          </div>
        </div>
      </div>

      {/* Notifications Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Notifications */}
        <div className="lg:col-span-2 space-y-6">
          {/* Course Notifications */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center mb-4">
                <h2 className="card-title">Course Updates</h2>
                <button className="btn btn-ghost btn-sm">View All</button>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "New Module Available",
                    course: "Digital Marketing Basics",
                    time: "2 hours ago",
                    type: "course"
                  },
                  {
                    title: "Course Completion",
                    course: "Business Planning Fundamentals",
                    time: "1 day ago",
                    type: "course"
                  },
                  {
                    title: "Assignment Due",
                    course: "Financial Management",
                    time: "2 days ago",
                    type: "course"
                  }
                ].map((notification) => (
                  <div key={notification.title} className="flex items-start gap-4 p-4 bg-base-100 rounded-lg hover:bg-base-300 transition-colors">
                    <div className="avatar">
                      <div className="w-12 rounded-full bg-primary text-primary-content flex items-center justify-center">
                        📚
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{notification.title}</h3>
                      <p className="text-sm opacity-70">{notification.course}</p>
                      <p className="text-xs opacity-50 mt-1">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Community Notifications */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center mb-4">
                <h2 className="card-title">Community Updates</h2>
                <button className="btn btn-ghost btn-sm">View All</button>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "New Forum Post",
                    content: "Discussion about scaling small businesses",
                    time: "3 hours ago",
                    type: "community"
                  },
                  {
                    title: "Mentor Response",
                    content: "Replied to your question about marketing strategies",
                    time: "5 hours ago",
                    type: "community"
                  },
                  {
                    title: "Event Reminder",
                    content: "Upcoming webinar on business growth",
                    time: "1 day ago",
                    type: "community"
                  }
                ].map((notification) => (
                  <div key={notification.title} className="flex items-start gap-4 p-4 bg-base-100 rounded-lg hover:bg-base-300 transition-colors">
                    <div className="avatar">
                      <div className="w-12 rounded-full bg-secondary text-secondary-content flex items-center justify-center">
                        👥
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{notification.title}</h3>
                      <p className="text-sm opacity-70">{notification.content}</p>
                      <p className="text-xs opacity-50 mt-1">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Notification Settings</h2>
              <div className="space-y-4">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Email Notifications</span>
                    <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Push Notifications</span>
                    <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Course Updates</span>
                    <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Community Updates</span>
                    <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <button className="btn btn-primary w-full">Mark All as Read</button>
                <button className="btn btn-outline w-full">Clear All</button>
                <button className="btn btn-outline w-full">Notification History</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Unread Messages</h2>
              <div className="space-y-4">
                {[
                  {
                    sender: "Mentor Sarah",
                    message: "Great progress on your business plan!",
                    time: "1 hour ago"
                  },
                  {
                    sender: "Community Admin",
                    message: "Welcome to the new forum!",
                    time: "3 hours ago"
                  }
                ].map((message) => (
                  <div key={message.sender} className="flex items-start gap-4 p-4 bg-base-100 rounded-lg">
                    <div className="avatar">
                      <div className="w-10 rounded-full bg-accent text-accent-content flex items-center justify-center">
                        {message.sender.charAt(0)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{message.sender}</h3>
                      <p className="text-sm opacity-70">{message.message}</p>
                      <p className="text-xs opacity-50 mt-1">{message.time}</p>
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