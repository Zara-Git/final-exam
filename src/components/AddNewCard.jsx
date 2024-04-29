import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard, selectCard} from "../redux/cardSlice";
import { Link } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import "./AddCard.css";

export const AddNewCard = () => {
  const cards = useSelector((state) => state.card.cards);
 const activeCard = useSelector((state) => state.card.activeCardId);

  const dispatch = useDispatch();

   const handleDelete = (cardNumber) => {
    dispatch(deleteCard(cardNumber));
  };
 
  const selectedCardId = useSelector((state) => state.card.selectedCard);

  const handleSelect = (cardNumber) => {
    dispatch(selectCard(cardNumber));
  };
   const changeColor=(cardNumber)=>{
    dispatch(changeColor(cardNumber));
   }
  

  const cardComponents = cards.map((card) => (
    <CardComponent
      key={card.cardNumber}
      card={card}
      color={card.color}
      isActive={card.cardNumber === selectedCardId}
      onDelete={() => handleDelete(card.cardNumber)}
      onClick={() => handleSelect(card.cardNumber)}
    />
  ));

  if (activeCard) {
    return (
      <div className="addcard">
        <h2>EWALLET</h2>
        <div className="credit-card" style={{ backgroundColor: activeCard.color }} id={activeCard.color}>
          <div className="credit-card-header">
            <img src="/src/assets/image/chip-dark.svg" alt="Chip Logo" className="chip-logo" />
            {/* <img src="/src/assets/image/vendor-bitcoin.svg" alt="Bitcoin Logo" className="bitcoin-logo" /> */}
          </div>
          <div className="credit-card-body">
            <div className="credit-card-number">CardNumber: {activeCard.cardNumber}</div>
            <div className="credit-card-holder-name">Name: {activeCard.cardName}</div>
            <div className="credit-card-valid-thru">MM/DD: {activeCard.validDate}</div>
            <div className="credit-card-valid-ccv">CVV: {activeCard.cvv}</div>
            <div className="credit-card-vendor">vendor: {activeCard.vendor}</div>
            <div className="credit-card-color">color: {activeCard.color}</div>
          </div>
        </div>
        <div className="cardStack">
        <button className="BTN-ADDCARD">
          <Link to={"/"}>ADD CARD</Link>
        </button>
       
        {cardComponents}
      </div>
      </div>
    );
    
  } else {
    return (
      <div className="cardStack">
        <button className="BTN-ADDCARD">
          <Link to={"/"}>ADD CARD</Link>
        </button>
        {/* <button onClick={handleDelete}>Delete Card</button> */}
        {cardComponents}
      </div>
    );
  }
};
