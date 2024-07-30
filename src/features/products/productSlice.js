import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://online-json-server-api.up.railway.app/project/66a7670d1d2cd3eb11451c08/desserts');
  console.log("API response data:", response.data); // Log the response data
  return response.data.data; // Extract the array from the `data` property
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [], // Ensure initial state is an empty array
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log("Fulfilled action payload:", action.payload); // Log the payload
        state.status = 'succeeded';
        state.items = Array.isArray(action.payload) ? action.payload : []; // Ensure payload is an array
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
