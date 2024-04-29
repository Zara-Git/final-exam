import React from "react";
import "./CardComponent.css";
import { useDispatch } from "react-redux";
import { deleteCard, selectCard } from "../redux/cardSlice";

const CardComponent = (props) => {
  const { card, color, isActive } = props; 
  console.log("carddetails",card);

  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log("deletenum",card.cardNumber);
    dispatch(deleteCard(card.cardNumber));
  };

  const handleSelect = () => {
    console.log("click", card);
    dispatch(selectCard(card));
  };

  return (
    <article
      className={`card ${isActive ? "active" : ""}`}
      style={{
        backgroundColor: color,
        border: isActive ? "2px solid blue" : "none",
      }} id={color} onClick={handleSelect}
     
     
    >
      <div className="card-header">
        <img
          src="src/assets/image/chip-dark.svg"
          alt="Chip Logo"
          className="chip-logo"
        />
        
      </div>
      <div className="card-body" >
        <p>XXX XXX XXX XXX: {card.cardNumber}</p>
        <p>FIRSTNAME LASTNAME: {card.cardName}</p>
        <p>Valid: {card.validDate}</p>
        <p>cvv: {card.cvv}</p>
       
      </div>
      <button onClick={handleDelete}>Delete Card</button>
     
    </article>
  );
};

export default CardComponent;
