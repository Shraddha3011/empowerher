import { dummyUser } from '../../dummy/user';

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="hero bg-gradient-to-r from-primary to-secondary text-primary-content rounded-box shadow-lg">
        <div className="hero-content flex-col md:flex-row gap-8">
          <div className="avatar">
            <div className="w-32 rounded-full bg-base-100 text-primary flex items-center justify-center text-4xl">
              {dummyUser.name.charAt(0)}
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">{dummyUser.name}</h1>
            <p className="text-lg opacity-90">{dummyUser.businessName}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="badge badge-primary">{dummyUser.role}</span>
              <span className="badge badge-secondary">{dummyUser.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Courses Completed", value: "12", icon: "🎓" },
          { label: "Mentor Sessions", value: "8", icon: "👩‍🏫" },
          { label: "Community Posts", value: "24", icon: "💬" },
          { label: "Achievement Points", value: "850", icon: "🏆" }
        ].map((stat) => (
          <div key={stat.label} className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm opacity-70">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Profile Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="lg:col-span-2">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">About Me</h2>
              <p className="text-sm opacity-70">{dummyUser.bio}</p>
              <div className="divider"></div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {dummyUser.skills.map((skill) => (
                      <span key={skill} className="badge badge-primary">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {dummyUser.interests.map((interest) => (
                      <span key={interest} className="badge badge-secondary">{interest}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Section */}
        <div className="space-y-4">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { action: "Completed", course: "Digital Marketing Basics", time: "2 hours ago" },
                  { action: "Posted in", course: "Business Strategy Forum", time: "5 hours ago" },
                  { action: "Attended", course: "Mentor Session", time: "1 day ago" },
                  { action: "Earned", course: "Achievement Badge", time: "2 days ago" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="w-8 rounded-full bg-primary text-primary-content flex items-center justify-center">
                        {activity.action.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-semibold">{activity.action}</span> {activity.course}
                      </p>
                      <p className="text-xs opacity-70">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <button className="btn btn-primary w-full">Edit Profile</button>
                <button className="btn btn-outline w-full">Share Profile</button>
                <button className="btn btn-outline w-full">View Certificates</button>
                <button className="btn btn-outline w-full">Contact Support</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 