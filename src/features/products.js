import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from './api';

const initialState = {
  products: [],
  status: null,
};

export const fetchAllProducts = createAsyncThunk(
  '/products',
  async (user, { rejectWithValue }) => {
    try {
      const products = await axios.get(url + 'products');
      return products.data;
    } catch (err) {
      console.log(err.response.data);
      rejectWithValue(err.response.data);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllProducts.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.status = 'success';
    },
    [fetchAllProducts.rejected]: (state, action) => {
      state.status = 'rejected';
    },
  },
});

export default productSlice.reducer;
