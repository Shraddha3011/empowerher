'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NewOrderPage() {
  const [productName, setProductName] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [deliveryAddress, setDeliveryAddress] = useState<string>('');
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');

  const handlePlaceOrder = () => {
    // Here you would typically send the order data to your backend or state management
    const newOrder = {
      productName,
      quantity,
      deliveryAddress,
    };

    // Simulate placing the order (you can replace this with actual logic)
    console.log('Order placed:', newOrder);
    setConfirmationMessage('Order placed successfully!');

    // Reset input fields
    setProductName('');
    setQuantity(1);
    setDeliveryAddress('');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🛍️ Place a New Order</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Fill in the details below to place your order for daily essentials.
      </p>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter product name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="input input-bordered w-full"
            min="1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Delivery Address:</label>
          <input
            type="text"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter delivery address"
          />
        </div>
        <button onClick={handlePlaceOrder} className="btn btn-primary w-full">
          Place Order
        </button>

        {confirmationMessage && (
          <div className="mt-4 text-green-600 text-center">
            {confirmationMessage}
          </div>
        )}
      </div>

      <div className="mt-6 text-center">
        <Link href="/actions" className="text-blue-500 hover:underline">
          Back to Actions
        </Link>
      </div>
    </div>
  );
}