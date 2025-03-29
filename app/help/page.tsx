export default function HelpPage() {
  return (
    <div className="space-y-8">
      {/* Help Header */}
      <div className="hero bg-gradient-to-r from-primary to-secondary text-primary-content rounded-box shadow-lg">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Help & Support</h1>
            <p className="text-xl">
              Find answers to common questions and get assistance
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <div className="form-control">
            <div className="input-group">
              <input type="text" placeholder="Search for help..." className="input input-bordered w-full" />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* Help Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Start Guide */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Quick Start Guide</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Getting Started",
                    steps: [
                      "Complete your profile",
                      "Set up your business goals",
                      "Explore available courses",
                      "Connect with mentors"
                    ]
                  },
                  {
                    title: "Using the Platform",
                    steps: [
                      "Navigate through courses",
                      "Track your progress",
                      "Interact with the community",
                      "Access business tools"
                    ]
                  }
                ].map((section) => (
                  <div key={section.title} className="space-y-2">
                    <h3 className="font-semibold">{section.title}</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {section.steps.map((step) => (
                        <li key={step} className="text-sm opacity-70">{step}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "How do I reset my password?",
                    answer: "Click on the 'Forgot Password' link on the login page and follow the instructions sent to your email."
                  },
                  {
                    question: "How can I contact a mentor?",
                    answer: "You can find available mentors in the Community section and send them a connection request."
                  },
                  {
                    question: "What payment methods are accepted?",
                    answer: "We accept all major credit cards, UPI, and bank transfers for Indian users."
                  },
                  {
                    question: "How do I track my course progress?",
                    answer: "Your progress is automatically tracked in the Learning section of your dashboard."
                  }
                ].map((faq) => (
                  <div key={faq.question} className="collapse collapse-arrow bg-base-100">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-medium">
                      {faq.question}
                    </div>
                    <div className="collapse-content">
                      <p className="text-sm opacity-70">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Support Options */}
        <div className="space-y-6">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Contact Support</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-semibold">Email Support</h3>
                    <p className="text-sm opacity-70">support@empowerher.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold">Phone Support</h3>
                    <p className="text-sm opacity-70">+91 1800 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl">💬</div>
                  <div>
                    <h3 className="font-semibold">Live Chat</h3>
                    <p className="text-sm opacity-70">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Community Support</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">👥</div>
                  <div>
                    <h3 className="font-semibold">Community Forums</h3>
                    <p className="text-sm opacity-70">Connect with other entrepreneurs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl">📚</div>
                  <div>
                    <h3 className="font-semibold">Knowledge Base</h3>
                    <p className="text-sm opacity-70">Browse helpful articles</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl">🎥</div>
                  <div>
                    <h3 className="font-semibold">Video Tutorials</h3>
                    <p className="text-sm opacity-70">Watch step-by-step guides</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Submit a Ticket</h2>
              <div className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <input type="text" className="input input-bordered" placeholder="Enter subject" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea className="textarea textarea-bordered h-24" placeholder="Describe your issue"></textarea>
                </div>
                <button className="btn btn-primary w-full">Submit Ticket</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 