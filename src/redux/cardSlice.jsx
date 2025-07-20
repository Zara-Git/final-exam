import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  activeCardId: null,
  color: {
    colorCode: "",
    vendor: "",
  },
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, action) => {
      console.log("cardreducer", action.payload);
      state.cards.push(action.payload);
    },
    deleteCard: (state, action) => {
      console.log("delete", action.payload);
      const idToDelete = action.payload;
      state.cards = state.cards.filter((card) => card.id !== idToDelete);
    },
    selectCard: (state, action) => {
      console.log("num", action.payload);
      state.activeCardId = action.payload;
      console.log("active", state.activeCardId);
    },
  },
});

export const { addCard, deleteCard, selectCard } = cardSlice.actions;
export default cardSlice.reducer;
