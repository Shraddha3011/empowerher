export default function EventsPage() {
  return (
    <div className="space-y-8">
      {/* Events Header */}
      <div className="hero bg-gradient-to-r from-primary to-secondary text-primary-content rounded-box shadow-lg">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Events</h1>
            <p className="text-xl">
              Join workshops, webinars, and networking events
            </p>
          </div>
        </div>
      </div>

      {/* Events Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Events */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Events */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center mb-4">
                <h2 className="card-title">Upcoming Events</h2>
                <div className="flex gap-2">
                  <button className="btn btn-ghost btn-sm">All Events</button>
                  <button className="btn btn-ghost btn-sm">My Events</button>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Digital Marketing Workshop",
                    date: "2024-03-25",
                    time: "10:00 AM - 1:00 PM",
                    type: "Workshop",
                    location: "Online",
                    participants: 45,
                    price: "₹999",
                    image: "🎯"
                  },
                  {
                    title: "Business Networking Meetup",
                    date: "2024-03-28",
                    time: "6:00 PM - 8:00 PM",
                    type: "Networking",
                    location: "Mumbai",
                    participants: 30,
                    price: "₹499",
                    image: "🤝"
                  },
                  {
                    title: "Financial Planning Webinar",
                    date: "2024-04-01",
                    time: "2:00 PM - 4:00 PM",
                    type: "Webinar",
                    location: "Online",
                    participants: 120,
                    price: "Free",
                    image: "💰"
                  }
                ].map((event) => (
                  <div key={event.title} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
                    <div className="card-body">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{event.image}</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{event.title}</h3>
                              <p className="text-sm opacity-70">{event.type}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">{event.price}</p>
                              <p className="text-sm opacity-70">{event.participants} participants</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-1">
                              <span className="text-primary">📅</span>
                              <span className="text-sm">{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-primary">⏰</span>
                              <span className="text-sm">{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-primary">📍</span>
                              <span className="text-sm">{event.location}</span>
                            </div>
                          </div>
                          <div className="card-actions justify-end mt-4">
                            <button className="btn btn-primary btn-sm">Register</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Past Events */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Past Events</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Business Strategy Workshop",
                    date: "2024-03-15",
                    type: "Workshop",
                    location: "Delhi",
                    participants: 35,
                    rating: 4.8
                  },
                  {
                    title: "E-commerce Masterclass",
                    date: "2024-03-10",
                    type: "Webinar",
                    location: "Online",
                    participants: 150,
                    rating: 4.6
                  }
                ].map((event) => (
                  <div key={event.title} className="card bg-base-100 shadow-md">
                    <div className="card-body">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{event.title}</h3>
                          <p className="text-sm opacity-70">{event.type} • {event.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm opacity-70">{event.date}</p>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm">{event.rating}</span>
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
              <h2 className="card-title mb-4">Event Categories</h2>
              <div className="space-y-2">
                {[
                  "Workshops",
                  "Webinars",
                  "Networking Events",
                  "Training Sessions",
                  "Mentorship Programs",
                  "Industry Meetups"
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
              <h2 className="card-title mb-4">My Events</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Digital Marketing Workshop",
                    date: "March 25, 2024",
                    status: "Upcoming"
                  },
                  {
                    title: "Business Strategy Workshop",
                    date: "March 15, 2024",
                    status: "Completed"
                  }
                ].map((event) => (
                  <div key={event.title} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm opacity-70">{event.date}</p>
                    </div>
                    <span className={`badge ${event.status === 'Upcoming' ? 'badge-primary' : 'badge-ghost'}`}>
                      {event.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Event Calendar</h2>
              <div className="space-y-4">
                {[
                  {
                    date: "March 25",
                    title: "Digital Marketing Workshop",
                    time: "10:00 AM"
                  },
                  {
                    date: "March 28",
                    title: "Business Networking Meetup",
                    time: "6:00 PM"
                  },
                  {
                    date: "April 1",
                    title: "Financial Planning Webinar",
                    time: "2:00 PM"
                  }
                ].map((event) => (
                  <div key={event.title} className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold">{event.date}</div>
                      <div className="text-xs opacity-70">{event.time}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{event.title}</h3>
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