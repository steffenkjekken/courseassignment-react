import { createSlice } from '@reduxjs/toolkit';

const savedCartItems = JSON.parse(localStorage.getItem("products")) || []
const savedCartTotal = JSON.parse(localStorage.getItem("price")) || []

const initialState = {
    products: savedCartItems || [],
    total: savedCartTotal || 0,
  };

console.log(savedCartTotal);

const cartSlice = createSlice({
    name: 'cart',

    initialState,
    
    reducers: {
      addProduct: (state, action) => {
        let isFound = state.products.some((item) => {
            if (action.payload.index === item.index) {
              return true;
            }
            return false;
          });
          if (isFound) {
            let x = state.products.findIndex(
              (item) => item.index === action.payload.index
            );
            state.products[x].amount += action.payload.amount;
            state.total = state.total += action.payload.price * action.payload.amount;
          } else {
            state.products.push(action.payload);
            state.total = state.total + action.payload.price * action.payload.amount;
          }
        console.log(isFound);
        localStorage.setItem('products', JSON.stringify(state.products));
        localStorage.setItem('price', JSON.stringify(state.total));
        console.log(action.payload);
        console.log(cartSlice);
      },    
      removeProduct: (state, action) => {
        state.products = state.products.filter(product => product.index !== action.payload)
        state.total = state.products.reduce((total, product) => total + product.price * product.amount,0);
        localStorage.setItem('products', JSON.stringify(state.products));
        localStorage.setItem('price', JSON.stringify(state.total));
      },
      resetCartTotal: (state) => {
        state.total = 0;
        state.products = []
        localStorage.setItem('products', JSON.stringify(state.products));
        localStorage.setItem('price', JSON.stringify(state.total));
      },
    },
  });
  
  export const { addProduct, removeProduct, resetCartTotal } = cartSlice.actions;
  
  export default cartSlice.reducer;