import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
    SUCCESS:'sucess'
});

  const otpSlice = createSlice({
    name: 'otp',
      initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {
            
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchOtp.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchOtp.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.SUCCESS;
        })
        .addCase(fetchOtp.rejected, (state, action) => {
            state.status = STATUSES.ERROR;
        });
    }
  })

  export default otpSlice.reducer;
  export const fetchOtp = createAsyncThunk('userdetails/otp', async (info) => {
    const headers={
        'Content-Type': 'application/json',
        'x-csrf-token': 'cnJmQDIwMjI='
    }
    const res = await fetch('https://ring-ring-food.herokuapp.com/api/user/verify-otp',{method:'post',headers,body:JSON.stringify(info)});
    const data = await res.json();
    return data;
});