import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard, selectCard } from "../redux/cardSlice";
import { Link } from "react-router-dom";
import CardComponent from "../components/CardComponent";

const AddNewCard = () => {
  const cards = useSelector((state) => state.card.cards);
  const selectedCardId = useSelector((state) => state.card.activeCardId);
  const activeCard = cards.find((card) => card.id === selectedCardId);
  const dispatch = useDispatch();

  const handleDeleteSelectedCard = () => {
    if (selectedCardId) {
      dispatch(deleteCard(selectedCardId));
    } else {
      alert("Please select a card to delete.");
    }
  };

  const handleSelect = (id) => {
    dispatch(selectCard(id));
  };

  const cardComponents = cards.map((card) => (
    <CardComponent
      key={card.id}
      card={card}
      color={card.color}
      isActive={card.id === selectedCardId}
      onClick={() => handleSelect(card.id)}
    />
  ));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-xl mx-auto p-8 rounded-3xl bg-white/80 shadow-lg my-16">
        <div className="flex flex-col items-center mb-8">
          <h2
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            EWallet
          </h2>
          <div className="flex gap-3 mt-2">
            <Link to="/">
              <button className="px-5 py-2 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition text-sm hover:scale-105 hover:shadow-lg">
                Add Card
              </button>
            </Link>
            <button
              onClick={handleDeleteSelectedCard}
              className="px-5 py-2 rounded-full bg-red-400 text-white font-medium hover:bg-red-500 transition text-sm hover:scale-105 hover:shadow-lg"
            >
              Delete Card
            </button>
          </div>
        </div>
        {activeCard ? (
          <div className="rounded-2xl bg-white border border-indigo-100 p-6 mb-8 shadow-sm text-center">
            <div className="text-lg font-mono tracking-widest text-gray-800 mb-2">
              **** **** **** {activeCard.cardNumber.slice(-4)}
            </div>
            <div className="text-xs text-gray-500 mb-1">
              VALID THRU: {activeCard.validDate || "--/--"}
            </div>
            <div className="uppercase text-base font-semibold text-gray-700">
              {activeCard.cardName}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-400 italic mb-8">
            No card selected as active.
          </p>
        )}
        {/* Card stack with more space and larger white background */}
        <div className="flex justify-center">
          <div className="bg-white rounded-3xl shadow-md p-10 w-full flex flex-col items-center gap-10">
            <div className="flex flex-col gap-6 w-full items-center justify-center">
              {cardComponents.length > 0 ? (
                cardComponents
              ) : (
                <p className="text-center text-gray-400">
                  No cards yet. Add one!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCard;
