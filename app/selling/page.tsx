"use client";

import Link from "next/link";

export default function StartSellingPage() {
  return (
    <div className="container mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        🚀 Start Selling & Build Your Business
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Learn how to turn your skills into a profitable business and start selling successfully online.
      </p>

      {/* Section 1: Introduction */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">💡 Why Sell Online?</h2>
        <p className="text-gray-700">
          Selling online allows you to reach more customers, grow your income, and scale your business from anywhere. 
          Whether you create **handicrafts, textiles, organic products, or handmade goods**, online platforms give you the tools to succeed.
        </p>
      </div>

      {/* Section 2: Step-by-Step Selling Guide */}
      <div className="mt-10 max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">📌 Step-by-Step Guide to Start Selling</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="p-4 border rounded-lg shadow-sm bg-gray-100">
            <h3 className="font-bold">🛍️ Step 1: Choose Where to Sell</h3>
            <p>
              You can sell on **Amazon, Flipkart, Meesho, Etsy, or Shopify**. Choose a platform that suits your product and audience.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-gray-100">
            <h3 className="font-bold">📸 Step 2: Take Good Product Photos</h3>
            <p>
              High-quality photos attract buyers. Use natural lighting and clear backgrounds to showcase your product.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-gray-100">
            <h3 className="font-bold">💰 Step 3: Set the Right Price</h3>
            <p>
              Calculate your costs, compare competitor prices, and set a price that gives you profit while staying affordable.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-gray-100">
            <h3 className="font-bold">📦 Step 4: Manage Orders & Delivery</h3>
            <p>
              Choose reliable courier partners like **India Post, Delhivery, or Shiprocket** to ship your products safely.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-gray-100">
            <h3 className="font-bold">📢 Step 5: Promote Your Business</h3>
            <p>
              Use **Facebook, Instagram, and WhatsApp** to market your products. Engage with customers and build a brand.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-gray-100">
            <h3 className="font-bold">💳 Step 6: Receive Payments Securely</h3>
            <p>
              Use safe payment methods like **Google Pay, PayPal, Razorpay, or UPI** to receive money from customers.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Business & Financial Tips */}
      <div className="mt-10 max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">💼 Business & Financial Tips</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>✅ Keep a record of sales and expenses using simple tools like **Google Sheets** or **Bookkeeping Apps**.</li>
          <li>✅ Separate business and personal money by opening a **business bank account**.</li>
          <li>✅ Learn basic **financial management** to track profits and reinvest wisely.</li>
          <li>✅ Register your business to get **MSME benefits & government support**.</li>
        </ul>
      </div>

      {/* Section 4: Marketing & Branding */}
      <div className="mt-10 max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">🎯 Marketing & Branding</h2>
        <p className="text-gray-700">
          Your brand is how customers remember you. Follow these simple branding tips:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li>📌 Create a simple **logo and brand name**.</li>
          <li>📌 Post regularly on **Instagram, Facebook, and WhatsApp Business**.</li>
          <li>📌 Run small **advertisements** to attract more customers.</li>
          <li>📌 Encourage **customer reviews** for credibility.</li>
        </ul>
      </div>

      {/* Section 5: Resources for Women Entrepreneurs */}
      <div className="mt-10 max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">👩‍💼 Resources & Support for Women Entrepreneurs</h2>
        <p className="text-gray-700">
          These programs provide funding, mentorship, and training for women:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li>🌱 **PMEGP (Prime Minister’s Employment Generation Program)** - Offers loans for small businesses.</li>
          <li>🚀 **Women Startup Program by NSRCEL (IIM Bangalore)** - Helps women start and grow businesses.</li>
          <li>🏆 **Mahila Udyam Nidhi Scheme** - Financial support for women entrepreneurs.</li>
          <li>🎓 **Digital Marketing & E-commerce Training** - Free courses on Coursera, Udemy, and Google Digital Garage.</li>
        </ul>
        <div className="mt-4">
          <Link href="/resources">
            <button className="btn btn-primary">📚 Explore Resources</button>
          </Link>
        </div>
      </div>

      {/* Section 6: Take Action */}
      <div className="mt-10 max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">🎓 Take the First Step</h2>
        <p className="text-gray-700">
          Ready to start your business? Join our free training program to get expert guidance.
        </p>
        <Link href="/enroll">
          <button className="btn btn-primary mt-4">📢 Enroll in Training</button>
        </Link>
      </div>

      {/* Back Link */}
      <div className="mt-6 text-center">
        <Link href="/dashboard" className="text-blue-500 hover:underline">
          🔙 Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
