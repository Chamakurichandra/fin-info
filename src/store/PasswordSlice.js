import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
    SUCCESS:'success'
});

  const passwordSlice = createSlice({
    name: 'password',
      initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPassword.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchPassword.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.SUCCESS;
        })
        .addCase(fetchPassword.rejected, (state, action) => {
            state.status = STATUSES.ERROR;
        });
    }
  })

  export default passwordSlice.reducer;
  export const fetchPassword = createAsyncThunk('password/fetch', async (info) => {
    
    const headers={
        'Content-Type': 'application/json',
        'x-csrf-token': 'cnJmQDIwMjI='
    }
    const res = await fetch('https://ring-ring-food.herokuapp.com/api/user/set-password',{method:'post',headers,body:JSON.stringify(info)});
    const data = await res.json();
    return data;
});