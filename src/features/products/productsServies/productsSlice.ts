import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import axios from 'axios'
import {Product} from '../../../type/type'

type InitialState = {
    loading: boolean
    products: Product[]
    error: string
  }
const initialState:InitialState = {
    loading: false,
    products: [],
    error: ''
}
export const fetchProducts = createAsyncThunk('products/fetchProducts', () => {
    return axios
      .get('https://dummyjson.com/products')
      .then(response =>{ 
      return  response.data.products})
      .catch(error => {
        throw error;
      });
  })

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true
    })
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.loading = false
        state.products = action.payload
        state.error = ''
      }
    )
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.products = []
      state.error = action.error.message || 'Something went wrong'
    })
  }
});


export default productsSlice.reducer