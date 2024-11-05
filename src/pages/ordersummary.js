import React from "react";
import { NavLink } from "react-router-dom";

function OrderSummary() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Payment Confirmed!</h2>
        
        <p className="text-gray-700 text-lg mb-6">
          Thank you for your payment. Your order has been successfully placed!
        </p>
        
        <div className="flex flex-col items-center mt-6">
          <p className="text-gray-600 text-sm mb-4">
        We are happy to place your order, enjoy your meal.
          </p>
          
          <NavLink to="/welcome">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition duration-300 shadow-md hover:shadow-lg">
              Order Again
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;