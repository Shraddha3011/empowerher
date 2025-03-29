export default function MessagesPage() {
  const messages = [
    {
      sender: "Mentor Sarah",
      message: "Hi! How can I help you today?",
      time: "10:00 AM",
      isMe: false
    },
    {
      sender: "You",
      message: "I need help with my business plan",
      time: "10:05 AM",
      isMe: true
    },
    {
      sender: "Mentor Sarah",
      message: "I'd be happy to help! What specific aspects would you like to focus on?",
      time: "10:06 AM",
      isMe: false
    },
    {
      sender: "You",
      message: "I'm struggling with the financial projections",
      time: "10:10 AM",
      isMe: true
    },
    {
      sender: "Mentor Sarah",
      message: "Let's break that down. Have you completed the financial planning module?",
      time: "10:12 AM",
      isMe: false
    }
  ];

  return (
    <div className="space-y-8">
      {/* Messages Header */}
      <div className="hero bg-gradient-to-r from-primary to-secondary text-primary-content rounded-box shadow-lg">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Messages</h1>
            <p className="text-xl">
              Connect with mentors and fellow entrepreneurs
            </p>
          </div>
        </div>
      </div>

      {/* Messages Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Contacts List */}
        <div className="lg:col-span-1">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="form-control mb-4">
                <div className="input-group">
                  <input type="text" placeholder="Search contacts..." className="input input-bordered w-full" />
                  <button className="btn btn-square">
                    🔍
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  {
                    name: "Mentor Sarah",
                    role: "Business Mentor",
                    lastMessage: "Great progress on your business plan!",
                    time: "1 hour ago",
                    unread: true
                  },
                  {
                    name: "Priya Patel",
                    role: "Fellow Entrepreneur",
                    lastMessage: "Let's discuss the marketing strategy",
                    time: "2 hours ago",
                    unread: false
                  },
                  {
                    name: "Community Admin",
                    role: "Support Team",
                    lastMessage: "Welcome to the new forum!",
                    time: "3 hours ago",
                    unread: true
                  },
                  {
                    name: "Dr. Sharma",
                    role: "Financial Advisor",
                    lastMessage: "Your financial report is ready",
                    time: "1 day ago",
                    unread: false
                  }
                ].map((contact) => (
                  <div key={contact.name} className="flex items-center gap-4 p-4 bg-base-100 rounded-lg hover:bg-base-300 transition-colors cursor-pointer">
                    <div className="avatar">
                      <div className="w-12 rounded-full bg-primary text-primary-content flex items-center justify-center">
                        {contact.name.charAt(0)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold truncate">{contact.name}</h3>
                        <span className="text-xs opacity-50">{contact.time}</span>
                      </div>
                      <p className="text-sm opacity-70 truncate">{contact.lastMessage}</p>
                      <p className="text-xs opacity-50">{contact.role}</p>
                      {contact.unread && (
                        <div className="badge badge-primary badge-sm mt-1">New</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chat Window */}
        <div className="lg:col-span-3">
          <div className="card bg-base-200 shadow-xl h-[calc(100vh-16rem)]">
            <div className="card-body p-0">
              {/* Chat Header */}
              <div className="p-4 border-b border-base-300">
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full bg-primary text-primary-content flex items-center justify-center">
                      S
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Mentor Sarah</h3>
                    <p className="text-sm opacity-70">Business Mentor</p>
                  </div>
                  <div className="ml-auto">
                    <button className="btn btn-ghost btn-circle">
                      📞
                    </button>
                    <button className="btn btn-ghost btn-circle">
                      🎥
                    </button>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] ${message.isMe ? 'bg-primary text-primary-content' : 'bg-base-100'} rounded-lg p-3`}>
                      <p className="text-sm">{message.message}</p>
                      <p className="text-xs opacity-70 mt-1">{message.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-base-300">
                <div className="flex items-center gap-2">
                  <button className="btn btn-ghost btn-circle">
                    📎
                  </button>
                  <input type="text" placeholder="Type your message..." className="input input-bordered flex-1" />
                  <button className="btn btn-primary btn-circle">
                    ➤
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 