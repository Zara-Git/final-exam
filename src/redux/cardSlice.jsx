import { createSlice } from "@reduxjs/toolkit";

export const vendorColor = (vendor) => {
  switch (vendor) {
    case "WHITE":
      return "#ffffff";
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
  selectedVendor: "",
  color: {
    colorCode: "",
  },
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    deleteCard: (state, action) => {
      const cardNumberToDelete = action.payload;
      state.cards = state.cards.filter(
        (card) => card.cardNumber !== cardNumberToDelete
      );
    },
    changeColor(state, action) {
      state.color.colorCode = vendorColor(action.payload);
      state.cards.forEach((card) => {
        card.backgroundColor = state.color.colorCode;
      });
    },
  },
});

export const { addCard, deleteCard, changeColor } = cardSlice.actions;

export default cardSlice.reducer;
