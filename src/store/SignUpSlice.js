import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
    SUCCESS:'success'
});

  const signUpSlice = createSlice({
    name: 'signUp',
      initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchSignDetails.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchSignDetails.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.SUCCESS;
        })
        .addCase(fetchSignDetails.rejected, (state, action) => {
            state.status = STATUSES.ERROR;
        });
    }
  })

  export default signUpSlice.reducer;
  export const fetchSignDetails = createAsyncThunk('userdetails/fetch', async (info) => {
    
    const headers={
        'Content-Type': 'application/json',
        'x-csrf-token': 'cnJmQDIwMjI='
    }
    const res = await fetch('https://ring-ring-food.herokuapp.com/api/user',{method:'post',headers,body:JSON.stringify(info)});
    const data = await res.json();
    return data;
});

