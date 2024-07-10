import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const productSlice = createSlice({
    name: 'product',
    initialState:{
        data:[]
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            console.log(action)
            state.data = action.payload
        })
    }
})

export const {setProducts} = productSlice.actions
export default productSlice.reducer

export const fetchProducts = createAsyncThunk('products/fetch', async() => {
    const { data } = await axios.get('https://fakestoreapi.com/products')
    return data
})