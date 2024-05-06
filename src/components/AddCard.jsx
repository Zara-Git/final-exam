import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addCard,
  changeColor,
  selectedColor,
  deleteCard,
} from "../redux/cardSlice";
import "./AddCard.css";
import { useNavigate } from "react-router-dom";

export const AddCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardName: "",
    validDate: "",
    cvv: "",
    vendor: "",
    color: "",
  });

  const handleChange = (e) => {
    console.log("event", e.target);
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);

    setCardInfo({ ...cardInfo, [name]: value });
  };
  console.log("cardinfo", cardInfo);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("New card added successfully.");

    dispatch(addCard({ ...cardInfo }));
    navigate("/addNewCard");
  };

  return (
    <div className="addcard">
      <h2>Add a new bank card</h2>

      <div
        className="credit-card"
        style={{ backgroundColor: cardInfo.color }}
        id={cardInfo.color}
      >
        <div className="credit-card-header">
          <img
            src="/src/assets/image/chip-dark.svg"
            alt="Chip Logo"
            className="chip-logo"
          />
        </div>
        <div className="credit-card-body">
          <div className="credit-card-number">
            CardNumber:{cardInfo.cardNumber}
          </div>
          <div className="credit-card-holder-name">
            Name: {cardInfo.cardName}
          </div>
          <div className="credit-card-valid-thru">
            MM/DD: {cardInfo.validDate}
          </div>
          <div className="credit-card-valid-ccv">cvv: {cardInfo.cvv}</div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <input
            type="number"
            name="cardNumber"
            placeholder="XXXX XXXX XXXX XXXX"
            maxLength={16}
            value={cardInfo.cardNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cardName"
            placeholder="Name"
            value={cardInfo.cardName}
            onChange={handleChange}
          />
        </div>
        <div className="form-CCV">
          <p>VALID DATE</p>
          <input
            type="text"
            name="validDate"
            placeholder="MM/YY"
            value={cardInfo.validDate}
            onChange={handleChange}
          />
          <input
            type="number"
            name="cvv"
            placeholder="XXX"
            value={cardInfo.cvv}
            onChange={handleChange}
          />
        </div>
        <select onChange={handleChange} name="color" value={cardInfo.color}>
          <option value="WHITE">Select Bank</option>
          <option value="VIOLET">Ninja Bank</option>
          <option value="GRAY">Bitcoin Inc</option>
          <option value="ORANGE">Block Chain In</option>
          <option value="LIGHTBLUE">Evil Corp</option>
        </select>

        <button type="submit" className="BTN-ADDCARD">
          Add Card
        </button>
      </form>
    </div>
  );
};

export default AddCard;
