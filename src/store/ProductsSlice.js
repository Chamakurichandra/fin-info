import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
    SUCCESS:'success'
});

  const productsSlice = createSlice({
    name: 'products',
      initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.SUCCESS;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = STATUSES.ERROR;
        });
    }
  })

  export default productsSlice.reducer;
  export const fetchProducts = createAsyncThunk('product/fetch', async (info) => {
    
    const headers={
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${info}`
    }
    const res = await fetch('https://ring-ring-food.herokuapp.com/api/product/get-list',{method:'post',headers,body:JSON.stringify({
        "latitude": 16.8486792,
        "longitude": 82.1266437,
        "radius": 2,
        "sorts": {
          "rating": -1
        },
        "limit": 10
      })});
    const data = await res.json();
    return data;
});


