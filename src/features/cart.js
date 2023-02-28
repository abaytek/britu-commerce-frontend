import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  wishList: localStorage.getItem('wishList')
    ? JSON.parse(localStorage.getItem('wishList'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].itemQuantity += 1;
      } else {
        let tempProducts = { ...action.payload, itemQuantity: 1 };
        state.cartItems.push(tempProducts);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      let remainingItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = remainingItems;
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    DecreaseCartQuantity: (state, action) => {
      let itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].itemQuantity > 1) {
        state.cartItems[itemIndex].itemQuantity -= 1;
      } else if (state.cartItems[itemIndex].itemQuantity === 1) {
        let remainingItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = remainingItems;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    getTotal: (state) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, item) => {
          const { itemQuantity, price } = item;
          const itemTotal = itemQuantity * price;
          cartTotal.total += itemTotal;
          cartTotal.quantity += itemQuantity;
          return cartTotal;
        },
        { total: 0, quantity: 0 }
      );
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
    addToWishlist: (state, action) => {
      const itemIndex = state.wishList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        let tempProducts = { ...action.payload };
        state.wishList.push(tempProducts);
      }
      localStorage.setItem('wishList', JSON.stringify(state.wishList));
    },
    removeFromWishlist: (state, action) => {
      const remainingItems = state.wishList.filter(
        (item) => item.id !== action.payload.id
      );
      state.wishList = remainingItems;
      localStorage.setItem('wishList', JSON.stringify(state.wishList));
    },
    removeAllWishlist: (state, action) => {
      state.wishList = [];
      localStorage.clear('wishList');
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  DecreaseCartQuantity,
  getTotal,
  addToWishlist,
  removeFromWishlist,
  removeAllWishlist,
} = cartSlice.actions;
export default cartSlice.reducer;
