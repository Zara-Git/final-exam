
import { useSelector, useDispatch } from "react-redux";
import { deleteCard } from "../redux/cardSlice";
import { Link, useNavigate } from "react-router-dom";
import CardComponent from "../components/CardComponent";


export const AddNewCard = () => {
  const cards = useSelector((state) => state.card.cards);

  const cardComponents = cards.map((card, id) => {
    return (
      <CardComponent
        key={id}
        card={card}
        color={card.color}
        onDelete={() => handleDelete(card.cardNumber)}
      />
    );
  });

  return (
    <div>
      <button className="BTN-ADDCARD">
        <Link to={"/"}>ADD CARD</Link>
      </button>
      {cardComponents}
    </div>
  );
};
