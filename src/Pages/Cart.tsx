import { useCart } from "../context/CartContext";
import { BsTrash, BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const getTotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
      return sum + price * item.quantity;
    }, 0);
  };

  return (
    <div className="w-11/12 mx-auto p-4 mb-24 relative">
      <div className="mb-4 w-full flex justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-green-700 font-semibold shadow hover:bg-green-100 hover:text-green-900 transition-colors border border-green-200"
        >
          <BsArrowLeftCircleFill className="text-xl" />
          Back to Home
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center bg-white rounded-lg shadow-lg p-4 hover:shadow-2xl transition-all duration-300 ease-in-out animate-product-fade-in"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-40 object-cover rounded-lg border-2 border-green-100 mr-8 shadow-md"
                />
                <div className="flex-1">
                  <p className="font-semibold text-lg text-gray-800 mb-1">
                    {item.name}
                  </p>
                  <p className="text-green-600 font-bold mb-2">{item.price}</p>
                  <div className="flex items-center mt-2 bg-gray-100 rounded-lg w-fit px-2 py-1">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300 text-lg font-bold"
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                    >
                      -
                    </button>
                    <span className="px-4 text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300 text-lg font-bold"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="ml-6 text-red-500 hover:text-red-700 transition-colors p-2 rounded-full bg-red-50 hover:bg-red-100 shadow-sm"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove from cart"
                >
                  <BsTrash size={22} />
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <div className="text-xl font-bold">
              Total: ${getTotal().toFixed(2)}
            </div>
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 animate-bounce"
              onClick={() => setShowModal(true)}
            >
              Checkout
            </button>
          </div>
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center relative animate-scale-in">
                <div className="flex flex-col items-center">
                  <svg
                    className="w-20 h-20 text-green-500 mb-4 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2l4-4M7.5 21h9a2.5 2.5 0 002.5-2.5v-13A2.5 2.5 0 0016.5 3h-9A2.5 2.5 0 005 5.5v13A2.5 2.5 0 007.5 21z"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-green-700 mb-2">
                    Checkout Successful!
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Thank you for shopping with SolaFarms.
                    <br />
                    Your order is being processed and you will receive a
                    confirmation soon.
                  </p>
                  <button
                    className="mt-2 px-6 py-2 bg-green-600 text-white rounded-lg font-semibold shadow hover:bg-green-700 transition-all duration-200"
                    onClick={() => {
                      setShowModal(false);
                      navigate("/");
                      setTimeout(() => {
                        clearCart();
                      }, 1000);
                    }}
                  >
                    Close
                  </button>
                </div>
                <div className="absolute top-2 right-4">
                  <button
                    onClick={() => {
                      setShowModal(false);
                    }}
                    className="text-gray-400 hover:text-red-400 text-2xl font-bold"
                  >
                    &times;
                  </button>
                </div>
              </div>
              <style>{`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                .animate-fade-in { animation: fade-in 0.3s ease; }
                @keyframes scale-in { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                .animate-scale-in { animation: scale-in 0.4s cubic-bezier(0.4,0,0.2,1); }
              `}</style>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
