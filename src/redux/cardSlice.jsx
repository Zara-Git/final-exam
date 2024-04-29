import { createSlice } from "@reduxjs/toolkit";

export const selectedColor = (color) => {
  switch (color) {
    case "WHITE":
      return "#efefef";
    case "GRAY":
      return "#e5e5e5";
    case "RED":
      return "#ae2012";
    case "ORANGE":
      return "#ca6702";
    case "BLUE":
      return "#4cc9f0";
    case "GREEN":
      return "#b5e48c";
    case "PINK":
      return "#ff99c8";
    default:
      return "rgba(255, 174, 52, 2)";
  }
};


const initialState = {
  cards: [],
  activeCardId: null,
  selectedColor: "",
  color: {
    colorCode: "",
    vendor:"",
  },
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, action) => {
      console.log("cardreducer",action.payload);
      state.cards.push(action.payload);
    },
    deleteCard: (state, action) => {
      console.log("delete",action.payload);
      const cardNumberToDelete = action.payload;
      state.cards = state.cards.filter(
        (card) => card.cardNumber !== cardNumberToDelete
      );
    },
    selectCard: (state, action) => {
      console.log("num",action.payload);
      state.activeCardId= action.payload;
      console.log("active", state.activeCardId);
      
    },

    changeColor: (state, action) => {
      state.color.colorCode = selectedColor(action.payload);
      state.cards.forEach((card) => {
        card.backgroundColor = state.color.colorCode;
      });
    },
  },
});

export const { addCard, deleteCard, changeColor, selectCard } =
  cardSlice.actions;
export default cardSlice.reducer;
