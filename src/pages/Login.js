import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button } from 'antd';
import { STATUSES } from '../store/LoginSlice';
import { fetchLoginDetails } from '../store/LoginSlice';
import { useDispatch, useSelector } from 'react-redux';
export default function Login() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { data: login, status } = useSelector((state) => state.login);
  const handleLogin = () => {
    if (user.email && user.password) {
      dispatch(fetchLoginDetails({...user,token:login.token}));
    }
  }
  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      navigate('/dashboard',{state:login.token});
    }
  }, [status])
  return (
    <div className='position-absolute top-50 start-50 translate-middle w-25 '>
      <h2 className='text-center'>Login</h2>
      <div ><Input placeholder="Enter Email" value={user.email} onChange={(e) => setUser(pre => ({ ...pre, email: e.target.value }))} /></div>
      <div className='py-3'><Input placeholder="Password" value={user.password} onChange={(e) => setUser(pre => ({ ...pre, password: e.target.value }))} /></div>
      <p className='text-end'><Link to='/forgotPassword '>Forgot Password</Link></p>
      <div className='d-grid'><Button type="primary" onClick={(e) => handleLogin(e)}>Login</Button></div>
      <p className='py-3'>Don't have an account?<Link to='signUp'>SignUp</Link></p>
    </div>
  )
}
