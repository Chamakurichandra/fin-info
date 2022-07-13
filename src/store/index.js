import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from './SignUpSlice';
import EnterOtp from './OtpSlice';
import passwordSlice from './PasswordSlice';
import LoginSlice from './LoginSlice';
import ProductsSlice from './ProductsSlice';
export const store = configureStore({
    reducer: {signUp: signUpReducer,verifyOtp:EnterOtp,password:passwordSlice,login:LoginSlice,products:ProductsSlice},
  })
