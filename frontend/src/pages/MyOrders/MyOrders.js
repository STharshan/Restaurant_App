import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {

    const {url,token} = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.post(`${url}/api/order/userorders`,{},{headers:{token}});
            console.log('API Response:', response.data);
            setData(response.data.data || []);
            
        } catch (error) {
            console.log(error);
            setData([]);
        }
    };
    
    useEffect(() => {
        console.log('Token:', token);
        if(token){
            fetchOrders();
        }
    }, [token, url])

  return (
    <div className='my-orders'>
      <h2>MyOrders</h2>
      <div className='container'>
        {data.length >0 ? (
            data.map((order,index)=>
                (
                    <div key={index} className='my-orders-order'>
                        <img src={assets.parcel_icon} alt=''/>
                        <p>
                            {order.items?.map((item,index)=>{
                                const isLastItem = index === order.items.length-1;
                                return`${item.name} x ${item.quantity}${isLastItem ? "" : ", "}`;
                            })}    
                        </p>
                        <p>${order.amount}.00</p>
                        <p>Items: {order.items?.length || 0}</p>
                        <p>
                            <span>&#x25cf;</span> <b>{order.status}</b>
                        </p>
                        <button onClick={fetchOrders}>Track Order</button>
                    </div>
                ))
        ) : (
            <p>No orders found.</p>
        )}        
      </div>
    </div>
  );
};

export default MyOrders
