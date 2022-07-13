import React,{useState,useEffect} from 'react';
import { Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES } from '../store/ProductsSlice';
import { fetchProducts } from '../store/ProductsSlice';
import { useLocation } from 'react-router-dom';
import { Spin } from 'antd';

const { Meta } = Card;
export default function Dashboard() {
  const { data: products,status} = useSelector((state) => state.products);
  let location=useLocation();
  const dispatch=useDispatch();
useEffect(()=>{
  dispatch(fetchProducts(location.state));
},[])
  return (
    <div>
{status!=STATUSES.SUCCESS?<div className='position-absolute top-50 start-50 translate-middle'><Spin /></div>:
<div>
  <h2 className='text-center py-3'>Products</h2>
  <div className='row m-0 p-0 p-4'>
  {Object.values(products.data.products).map((item)=>(
    <div className='col-3 bg-info m-5 p-3 rounded'>
     <h4>Name: {item.name}</h4>
     <div className='fw-bold'>Description</div> 
     <p>{item.description}</p>
     <p>Rs. {item.price}/-</p>
     {console.log(Object.values(products.data.products).map((item)=>(item)))}
    </div>
  ))}
  </div>
  </div>
}
 </div>
  )
}
{/* <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
        <div className='col'>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="www.facebook.com" />
          </Card>
        </div>
        <div className='col'>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="www.whatsapp.com" />
          </Card> */}