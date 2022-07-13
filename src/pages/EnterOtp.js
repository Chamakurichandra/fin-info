import React,{useState,useEffect} from 'react';
import {Button ,Input} from 'antd';
import { fetchOtp } from '../store/OtpSlice';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import { STATUSES } from '../store/OtpSlice';
export default function EnterOtp() {
    let navigate=useNavigate();
    const dispatch=useDispatch();
const [input,setInput]=useState({});
    const {data:signUp} = useSelector((state) => state.signUp);
    const {status} = useSelector((state) => state.verifyOtp);
    const handleOtp = () => { 
        if (input.otp) {
            dispatch(fetchOtp({...input,email:signUp.data.email}));
        }
    }
    useEffect(()=>{
        if(status===STATUSES.SUCCESS){
            navigate('/setPassword',{state:input.otp});
        }
    },[status])
  return (
    <div>
       <div className='position-absolute top-50 start-50 translate-middle w-25 '>
        <p>We have sent a four digit code to {signUp&&signUp.data.email} </p>
    <h2 className='text-center'>Enter OTP</h2>
    <div className='py-3'><Input placeholder="Enter OTP" value={input.otp} onChange={(e)=>setInput(pre => ({ ...pre, otp: e.target.value }))}/></div>
    <div className='d-grid'><Button type="primary" onClick={(e)=>handleOtp(e)}>Submit</Button></div>
      </div>
    </div>
  )
}
