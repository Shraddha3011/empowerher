'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SupportPage() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the support request to your backend
    const supportRequest = {
      name,
      email,
      message,
    };

    // Simulate sending the support request (you can replace this with actual logic)
    console.log('Support request submitted:', supportRequest);
    setConfirmationMessage('Your message has been sent successfully!');

    // Reset input fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🆘 Support</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        We're here to help! Please fill out the form below for any assistance.
      </p>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="textarea textarea-bordered w-full"
              placeholder="Enter your message"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>

        {confirmationMessage && (
          <div className="mt-4 text-green-600 text-center">
            {confirmationMessage}
          </div>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold">How do I reset my password?</h3>
              <p>If you forgot your password, click on the 'Forgot Password' link on the login page.</p>
            </li>
            <li>
              <h3 className="font-semibold">How can I contact support?</h3>
              <p>You can contact us through this support form or email us at support@empowerher.com.</p>
            </li>
            <li>
              <h3 className="font-semibold">What payment methods are accepted?</h3>
              <p>We accept all major credit cards, UPI, and bank transfers for Indian users.</p>
            </li>
            <li>
              <h3 className="font-semibold">How do I track my order?</h3>
              <p>You can track your order status in the 'My Orders' section of your profile.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
