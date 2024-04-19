import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard } from "../redux/cardSlice";
import { Link, useNavigate } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import AddCard from "./AddCard";

export const AddNewCard = () => {
  
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const cards = useSelector((state) => state.card.cards);

  // function handleDelete(cardNumber) {
  //   dispatch(deleteCard(cardNumber));
  // }
  
  // const handleSelect = (id) => {
  //   dispatch(selectCardById(id)); // Dispatch the selectCardById action with the selected card id
  // };

  const cardComponents = cards.map((card, id) => {
    return(
    <CardComponent
      key={id}
      card={card}
      color={card.color}
      onDelete={() => handleDelete(card.cardNumber)}
      // onSelect={() => handleSelect(card.cardNumber)} // Pass the selected card id to the handleSelect function
    />
    )
});

  return (
    <div >
      <button className="BTN-ADDCARD">
        <Link to={"/"}>
        ADD CARD
        </Link>
      </button>
     
      {/* <button onClick={handleDelete} className="BTN-DELETECARD">
        DELETE CARD
      </button> */}
      {cardComponents}
    </div>
  );
};
