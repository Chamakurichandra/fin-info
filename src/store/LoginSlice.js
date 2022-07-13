import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
    SUCCESS:'success'
});

  const loginSlice = createSlice({
    name: 'login',
      initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchLoginDetails.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchLoginDetails.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.SUCCESS;
        })
        .addCase(fetchLoginDetails.rejected, (state, action) => {
            state.status = STATUSES.ERROR;
        });
    }
  })

  export default loginSlice.reducer;
  export const fetchLoginDetails = createAsyncThunk('logindetails/fetch', async (info) => {
    
    const headers={
        'Content-Type': 'application/json',
        'x-csrf-token': 'cnJmQDIwMjI='
    }
    const res = await fetch('https://ring-ring-food.herokuapp.com/api/user/auth',{method:'post',headers,body:JSON.stringify(info)});
    const data = await res.json();
    return data;
});

