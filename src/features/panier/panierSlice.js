import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const panierSlice = createSlice({
  name: "panier",
  initialState,
  reducers: {
    resetPanier: () => {
      return [];
    },
    setPanier: (_, action) => {
      return action.payload;
    },
    addPanier: (state, action) => {
      state.push(action.payload);
    },
    removePanier: (state, action) => {
      return state.filter((elt) => elt.id !== action.payload);
    },
    updatePanier: (state, action) => {
      const tmp = state.filter((elt) => elt.id !== action.payload.id);
      tmp.push(action.payload);
      return tmp;
    },
  },
});

export const { setPanier, addPanier, removePanier, updatePanier, resetPanier } =
  panierSlice.actions;
export default panierSlice.reducer;
