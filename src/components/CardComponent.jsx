import React from "react";
import "./CardComponent.css";
import { useDispatch } from "react-redux";
import { deleteCard } from "../redux/cardSlice";


const CardComponent = (props) => { // Receive the entire card object as a prop
  const { card, color } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCard(card.cardNumber)); // Access cardNumber property of the card object
  };  
  return (
    <article className="card" style={{ backgroundColor: color }}>
      <div className="card-header">
        <img
          src="src/assets/image/chip-dark.svg"
          alt="Chip Logo"
          className="chip-logo"
        />
        <img
          src="src/assets/image/vendor-bitcoin.svg"
          alt="Bitcoin Logo"
          className="bitcoin-logo"
        />
      </div>
      <div className="card-body">
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
