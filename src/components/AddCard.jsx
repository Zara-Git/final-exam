import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../redux/cardSlice";
import { useNavigate } from "react-router-dom";
import AddNewCard from "./AddNewCard";
export const AddCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardName: "",
    validDate: "",
    cvv: "",
    color: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("New card added successfully.");
    const cardWithId = { ...cardInfo, id: Date.now().toString() };
    dispatch(addCard(cardWithId));
    navigate("/addNewCard");
  };

  const getMaskedCardNumber = (number) => {
    return number
      .replace(/\s+/g, "")
      .replace(/.(?=.{4})/g, "*")
      .match(/.{1,4}/g)
      ?.join(" ");
  };

  const getVendorLogo = () => {
    switch (cardInfo.color) {
      case "#7c3aed":
        return "/src/assets/image/vendor-ninja.svg";
      case "#6b7280":
        return "/src/assets/image/vendor-bitcoin.svg";
      case "#fb923c":
        return "/src/assets/image/vendor-blockchain.svg";
      case "#38bdf8":
        return "/src/assets/image/vendor-evil.svg";
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-md mx-auto p-8 rounded-3xl bg-white/80 shadow-lg">
        <h2
          className="text-3xl font-bold text-center mb-8 text-slate-800"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Add a new bank card
        </h2>
        {/* Preview Card */}
        <div
          className="relative w-80 h-52 rounded-xl p-5 mb-8 shadow-md text-white transition-all duration-300 transform hover:scale-105 mx-auto"
          style={{ backgroundColor: cardInfo.color || "#cbd5e1" }}
        >
          <img
            src="/src/assets/image/chip-dark.svg"
            alt="Chip Logo"
            className="w-8 absolute top-4 left-4"
          />
          {getVendorLogo() && (
            <img
              src={getVendorLogo()}
              alt="Vendor Logo"
              className="w-10 absolute top-4 right-4"
            />
          )}
          <div className="text-xs mt-12 text-center space-y-1">
            <p>
              {getMaskedCardNumber(cardInfo.cardNumber) ||
                "**** **** **** ****"}
            </p>
            <p>{cardInfo.cardName || "Cardholder Name"}</p>
            <p>MM/YY: {cardInfo.validDate || "00/00"}</p>
            <p>CVV: {cardInfo.cvv || "***"}</p>
          </div>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="cardNumber"
              className="text-sm text-gray-700 font-medium"
            >
              Card Number
            </label>
            <input
              type="number"
              id="cardNumber"
              name="cardNumber"
              placeholder="XXXX XXXX XXXX XXXX"
              autoComplete="off"
              value={cardInfo.cardNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <input
            type="text"
            name="cardName"
            value={cardInfo.cardName}
            onChange={handleChange}
            placeholder="Cardholder Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <div className="flex gap-4">
            <input
              type="text"
              name="validDate"
              value={cardInfo.validDate}
              onChange={handleChange}
              placeholder="MM/YY"
              className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="number"
              name="cvv"
              value={cardInfo.cvv}
              onChange={handleChange}
              placeholder="CVV"
              className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <select
            name="color"
            value={cardInfo.color}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select Bank</option>
            <option value="#7c3aed">Ninja Bank (Violet)</option>
            <option value="#6b7280">Bitcoin Inc (Gray)</option>
            <option value="#fb923c">Block Chain In (Orange)</option>
            <option value="#38bdf8">Evil Corp (Light Blue)</option>
          </select>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-600 transition hover:scale-105 hover:shadow-lg"
          >
            Add Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCard;
