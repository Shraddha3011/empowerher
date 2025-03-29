import { useState } from "react";

const products = [
  { id: 1, name: "Tomatoes", price: 20 },
  { id: 2, name: "Onions", price: 15 },
  { id: 3, name: "Potatoes", price: 10 },
];

export default function NegotiationGame() {
  const [wallet, setWallet] = useState(50);
  const [message, setMessage] = useState("");

  const handleBargain = (product, offer) => {
    if (offer >= product.price) {
      setWallet(wallet - offer);
      setMessage(`✅ You bought ${product.name} for ₹${offer}!`);
    } else {
      setMessage(`❌ Seller rejected ₹${offer}. Try a better price!`);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold text-green-700">🛍️ Bargaining Challenge</h2>
      <p className="text-gray-600">Try to negotiate the best price!</p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">💰 Your Wallet: ₹{wallet}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 bg-gray-100 rounded-lg shadow">
            <h4 className="text-lg font-bold">{product.name}</h4>
            <p>Market Price: ₹{product.price}</p>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => handleBargain(product, product.price - 5)}
            >
              Offer ₹{product.price - 5}
            </button>
          </div>
        ))}
      </div>

      {message && <p className="mt-4 text-yellow-600">{message}</p>}
    </div>
  );
}
