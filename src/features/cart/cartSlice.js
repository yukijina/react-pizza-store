import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],

  // Test
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: "Meditterranean",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //paload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuentity(state, action) {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuentity(state, action) {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuentity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// react recommend this function in slice, rather than directly add function in useSelector in the Cart component
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

// it is called as useSelector(getCurrentQuantityById(2));
// return to function
// useSelector expects a function takes only one argument= Redux state.
// so we don't write (state, id).
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
