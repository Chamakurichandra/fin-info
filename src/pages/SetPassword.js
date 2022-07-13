import React, { useState,useEffect } from 'react';
import { Input,Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate,useLocation } from 'react-router-dom';
import { fetchPassword } from '../store/PasswordSlice';
import { STATUSES } from '../store/PasswordSlice';
export default function SetPassword() {
  let navigate=useNavigate();
  let location=useLocation();
  console.log(location.state);
  const [password,setPassword]=useState({});
  const { data: signUp,} = useSelector((state) => state.signUp);
  const { data: otp,} = useSelector((state) => state.verifyOtp);
  const {status} = useSelector((state) => state.password);
  console.log(otp);
  const dispatch=useDispatch();
  const handlePassword=()=>{
    if (password.password) {
      dispatch(fetchPassword({...password,email:signUp.data.email,otp:location.state}));
  }
  }
  useEffect(()=>{
    if(status===STATUSES.SUCCESS){
        navigate('/');
    }
    console.log(status);
},[status])
  return (
    <div className='position-absolute top-50 start-50 translate-middle w-25 '>
    <h2 className='text-center'>Set New Password</h2>
    <div className='py-3'><Input placeholder="Enter Password" value={password.password} onChange={(e)=>setPassword(pre => ({ ...pre, password: e.target.value }))}/></div>
    <div className='d-grid'><Button type="primary" onClick={(e)=>handlePassword(e)}>Submit</Button></div>
    </div>
  )
}
