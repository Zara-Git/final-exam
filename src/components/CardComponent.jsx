import React from "react";
import chipIcon from "/src/assets/image/chip-dark.svg";
import contactlessIcon from "/src/assets/image/contactless.svg";
import mastercardLogo from "/src/assets/image/mastercard.svg";

// Map vendor logos to colors
const vendorLogos = {
  "#7c3aed": "/src/assets/image/vendor-ninja.svg",
  "#6b7280": "/src/assets/image/vendor-bitcoin.svg",
  "#fb923c": "/src/assets/image/vendor-blockchain.svg",
  "#38bdf8": "/src/assets/image/vendor-evil.svg",
};

const CardComponent = ({ card, onDelete, onClick, isActive }) => {
  const { cardNumber, cardName, color } = card;

  const getMaskedCardNumber = (number) => {
    return number
      .replace(/\s+/g, "")
      .replace(/.(?=.{4})/g, "*")
      .match(/.{1,4}/g)
      .join(" ");
  };

  return (
    <div
      onClick={onClick}
      className={`w-[360px] h-[220px] rounded-2xl p-5 text-white shadow-md relative transition-all duration-300 cursor-pointer
    ${
      isActive
        ? "ring-4 ring-blue-500 border-2 border-blue-500 scale-105 shadow-xl"
        : "hover:scale-105 hover:shadow-2xl hover:z-20 hover:ring-2 hover:ring-indigo-300"
    }
  `}
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center gap-3 mb-6">
        <img src={chipIcon} alt="chip" className="w-10" />
        <img src={contactlessIcon} alt="contactless" className="w-6" />
      </div>

      <div className="text-xl tracking-widest font-mono mb-4">
        {getMaskedCardNumber(cardNumber)}
      </div>

      <div className="text-sm tracking-wider font-semibold">
        VALID THRU: <span className="ml-1">01/28</span>
      </div>
      <div className="uppercase text-sm font-bold mt-1">{cardName}</div>

      {color && vendorLogos[color] && (
        <img
          src={vendorLogos[color]}
          alt="Vendor Logo"
          className="absolute top-4 right-4 w-10"
        />
      )}

      <img
        src={mastercardLogo}
        alt="Mastercard"
        className="absolute bottom-3 right-4 w-10"
      />
    </div>
  );
};

export default CardComponent;
