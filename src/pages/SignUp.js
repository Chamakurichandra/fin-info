import React, { useState, useRef,useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Input,Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import { fetchSignDetails } from '../store/SignUpSlice';
import { STATUSES } from '../store/SignUpSlice';
export default function SignUp() {
    const dispatch=useDispatch();
    let navigate=useNavigate();
    const { data: signUp, status } = useSelector((state) => state.signUp);
    const [user, setUser] = useState({});
    const fileInput = useRef('image');
    const handleSignUp = () => {        
        if (user.email && user.fullName && user.mobile && user.image&&user.tandcAccepted) {
            console.log(user);
            dispatch(fetchSignDetails(user));
        }

    }
    useEffect(()=>{
        if(status===STATUSES.SUCCESS){
            navigate('/enter-otp');
        }
    },[status])
    const handleImage = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            console.log('RESULT', reader.result)
            setUser((pre) => ({ ...pre, image: reader.result }))
            fileInput.current.value = null;
        }
        reader.readAsDataURL(file);
    }
  
    return (
        <div className='position-absolute top-50 start-50 translate-middle w-25 '>
            <h2 className='text-center py-3'>SignUp</h2>
            <div ><Input placeholder="Enter Email" value={user.email} onChange={(e) => setUser(pre => ({ ...pre, email: e.target.value }))} /></div>
            <div className='py-3'><Input placeholder="Fullname" value={user.fullName} onChange={(e) => setUser(pre => ({ ...pre, fullName: e.target.value }))} /></div>
            <div ><Input placeholder="Mobile Number" value={user.mobile} onChange={(e) => setUser(pre => ({ ...pre, mobile: e.target.value }))} /></div>
            <div className='py-3'>
                <input ref={fileInput} onChange={(e) => handleImage(e)} type="file" className='d-none' />
                <div className='d-grid '><Button icon={<UploadOutlined />} onClick={() => fileInput.current.click()}>Choose Image</Button></div>
            </div>
            <div className='pb-3'><Checkbox onChange={(e) => setUser(pre => ({ ...pre, tandcAccepted: e.target.checked }))}>Agree to terms and Conditions</Checkbox></div>            
            <div className='d-grid'><Button type="primary" onClick={handleSignUp}>SignUp</Button></div>
            <p>Already Have an account? <Link to='/'>Login</Link> </p>
        </div>
    )
}
