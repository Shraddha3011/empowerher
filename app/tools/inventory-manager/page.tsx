'use client';

import { useState } from 'react';
import Link from 'next/link';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export default function InventoryManagerPage() {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [itemName, setItemName] = useState<string>('');
  const [itemQuantity, setItemQuantity] = useState<number>(0);
  const [itemPrice, setItemPrice] = useState<number>(0);
  const [editItemId, setEditItemId] = useState<number | null>(null);

  const handleAddOrUpdateItem = () => {
    if (editItemId !== null) {
      // Update existing item
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editItemId
            ? { ...item, name: itemName, quantity: itemQuantity, price: itemPrice }
            : item
        )
      );
      setEditItemId(null);
    } else {
      // Add new item
      const newItem: InventoryItem = {
        id: Date.now(), // Simple unique ID based on timestamp
        name: itemName,
        quantity: itemQuantity,
        price: itemPrice,
      };
      setItems((prevItems) => [...prevItems, newItem]);
    }
    // Reset input fields
    setItemName('');
    setItemQuantity(0);
    setItemPrice(0);
  };

  const handleEditItem = (item: InventoryItem) => {
    setItemName(item.name);
    setItemQuantity(item.quantity);
    setItemPrice(item.price);
    setEditItemId(item.id);
  };

  const handleDeleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">📦 Inventory Manager</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Manage your inventory by adding, updating, or removing items.
      </p>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">{editItemId ? 'Edit Item' : 'Add New Item'}</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Item Name:</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter item name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Quantity:</label>
          <input
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(Number(e.target.value))}
            className="input input-bordered w-full"
            placeholder="Enter quantity"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Price:</label>
          <input
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(Number(e.target.value))}
            className="input input-bordered w-full"
            placeholder="Enter price"
          />
        </div>
        <button onClick={handleAddOrUpdateItem} className="btn btn-primary w-full">
          {editItemId ? 'Update Item' : 'Add Item'}
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Inventory List</h2>
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
          {items.length === 0 ? (
            <p className="text-gray-600 text-center">No items in inventory.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ₹{item.price}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button onClick={() => handleEditItem(item)} className="btn btn-secondary btn-sm">
                      Edit
                    </button>
                    <button onClick={() => handleDeleteItem(item.id)} className="btn btn-error btn-sm">
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link href="/tools" className="text-blue-500 hover:underline">
          Back to Tools
        </Link>
      </div>
    </div>
  );
}