import React from 'react';
import { Input,Button } from 'antd';
export default function ForgotPassword() {
    return (
        <div className='position-absolute top-50 start-50 translate-middle w-25 '>
            <h2 className='text-center'>Forgot Password</h2>
            <div ><Input placeholder="Enter Email" /></div>
            <div className='d-grid'><Button type="primary">Submit</Button></div>
        </div>
    )
}
