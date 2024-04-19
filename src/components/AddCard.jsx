import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Ta bort useSelector eftersom den inte används här
import { addCard, vendorColor } from "../redux/cardSlice"
import "./AddCard.css";
import { useNavigate } from "react-router-dom";

export const AddCard = () => {
  const dispatch = useDispatch(); // Ta bort useSelector eftersom den inte används här
  const navigate = useNavigate();
  // const [selectedColor, setSelectedColor] = useState("");
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardName: "",
    validDate: "",
    cvv: "",
    vendor: "",
    color: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCardInfo({ ...cardInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  //  alert("New card added successfully.");
    const color = vendorColor(cardInfo.vendor);
    dispatch(addCard({ ...cardInfo, color }));
    navigate("/addNewCard");
  };


  return (
    <div className="addcard">
      <h2>Add a new bank card</h2>

      <div className="credit-card" style={{ backgroundColor: cardInfo.color }}>
        <div className="credit-card-header">
          <img
            src="/src/assets/image/chip-dark.svg" // Uppdatera sökvägen för bilden
            alt="Chip Logo"
            className="chip-logo"
          />
          <img
            src="/src/assets/image/vendor-bitcoin.svg" // Uppdatera sökvägen för bilden
            alt="Bitcoin Logo"
            className="bitcoin-logo"
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
          <div className="credit-card-valid-ccv">CVV: {cardInfo.cvv}</div>
          {/* <div className="credit-card-color">Color: {cardInfo.color}</div> */}
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
        <select onChange={handleChange} name="vendor" value={cardInfo.vendor}>
        
          <option value="WHITE">WHITE</option>
          <option value="GRAY">GRAY</option>
          <option value="RED">RED</option>
          <option value="ORANGE">ORANGE</option>
          <option value="BLUE">BLUE</option>
          <option value="GREEN">GREEN</option>
          <option value="PINK">PINK</option>
        </select>

        <button type="submit" className="BTN-ADDCARD">
          Add Card
        </button>
      </form>
    </div>
  );
};

export default AddCard;
