'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MarketLinkagePage() {
  const [productName, setProductName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [suppliers, setSuppliers] = useState<string[]>([]);
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');

  const handleSearchSuppliers = () => {
    // Simulate searching for suppliers based on product details
    const foundSuppliers = [
      'Supplier A - Contact: 1234567890',
      'Supplier B - Contact: 0987654321',
      'Supplier C - Contact: 1122334455',
    ]; 
    setSuppliers(foundSuppliers);
    setConfirmationMessage('Suppliers found for your product!');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🛍️ Market Linkage Guide</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Everything you need to start, grow, and scale your online business.
      </p>

      {/* Section 1: Onboarding to Marketplaces */}
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-center">🌍 Sell on Leading Marketplaces</h2>
        <p className="text-gray-600 text-center mb-4">
          Register your business and start selling on top platforms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="https://sell.amazon.in" target="_blank">
            <div className="p-4 bg-yellow-100 text-yellow-800 rounded-lg text-center cursor-pointer hover:bg-yellow-200 transition-all">
              🛒 Sell on Amazon
            </div>
          </Link>
          <Link href="https://supplier.meesho.com" target="_blank">
            <div className="p-4 bg-pink-100 text-pink-800 rounded-lg text-center cursor-pointer hover:bg-pink-200 transition-all">
              🛍️ Sell on Meesho
            </div>
          </Link>
          <Link href="https://seller.flipkart.com" target="_blank">
            <div className="p-4 bg-blue-100 text-blue-800 rounded-lg text-center cursor-pointer hover:bg-blue-200 transition-all">
              📦 Sell on Flipkart
            </div>
          </Link>
          <Link href="https://www.shopify.com/in" target="_blank">
            <div className="p-4 bg-green-100 text-green-800 rounded-lg text-center cursor-pointer hover:bg-green-200 transition-all">
              🏪 Start a Shopify Store
            </div>
          </Link>
        </div>
      </div>

      {/* Section 2: Find Suppliers */}
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">🔍 Find Suppliers</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
            placeholder="Enter a brief description of your product"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select a category</option>
            <option value="agriculture">Agriculture</option>
            <option value="handicrafts">Handicrafts</option>
            <option value="textiles">Textiles</option>
            <option value="food">Food Products</option>
          </select>
        </div>
        <button onClick={handleSearchSuppliers} className="btn btn-primary w-full">
          Find Suppliers
        </button>

        {confirmationMessage && (
          <div className="mt-4 text-green-600 text-center">
            {confirmationMessage}
          </div>
        )}
      </div>

      {/* Section 3: Logistics & Delivery */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-center">🚚 Shipping & Fulfillment</h2>
        <p className="text-gray-600 text-center mb-4">
          Choose a reliable logistics partner to deliver your products safely.
        </p>
        <ul className="list-disc ml-8 text-gray-700">
          <li><Link href="https://www.delhivery.com" target="_blank">Delhivery</Link></li>
          <li><Link href="https://www.shiprocket.in" target="_blank">Shiprocket</Link></li>
          <li><Link href="https://www.ecomexpress.in" target="_blank">Ecom Express</Link></li>
        </ul>
      </div>

      {/* Section 4: Payment Gateways */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-center">💳 Payment Gateways</h2>
        <p className="text-gray-600 text-center mb-4">
          Set up secure payments for your online business.
        </p>
        <ul className="list-disc ml-8 text-gray-700">
          <li><Link href="https://razorpay.com" target="_blank">Razorpay</Link></li>
          <li><Link href="https://www.payu.in" target="_blank">PayU</Link></li>
          <li><Link href="https://stripe.com" target="_blank">Stripe</Link></li>
        </ul>
      </div>

      {/* Section 5: Marketing & Branding */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-center">📢 Marketing & Branding</h2>
        <p className="text-gray-600 text-center mb-4">
          Promote your business and attract more customers.
        </p>
        <ul className="list-disc ml-8 text-gray-700">
          <li>Use <Link href="https://ads.google.com" target="_blank">Google Ads</Link> for paid promotions.</li>
          <li>Leverage social media platforms like Instagram & Facebook.</li>
        </ul>
      </div>

      {/* Section 6: Legal & Compliance */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-center">📜 Legal & Compliance</h2>
        <p className="text-gray-600 text-center mb-4">
          Ensure your business meets all legal requirements.
        </p>
        <ul className="list-disc ml-8 text-gray-700">
          <li>Register for GST at <Link href="https://www.gst.gov.in" target="_blank">gst.gov.in</Link></li>
          <li>Get a business PAN card for tax compliance.</li>
        </ul>
      </div>

      {/* Back to Tools */}
      <div className="mt-6 text-center">
        <Link href="/tools" className="text-blue-500 hover:underline">
          🔙 Back to Tools
        </Link>
      </div>
    </div>
  );
}
