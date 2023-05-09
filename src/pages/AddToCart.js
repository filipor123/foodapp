import React from 'react';
import OrderCard from '../components/OrderCard';
import { useProducts } from '../context/ProductProvider';

const AddToCart = () => {
    const { orders } = useProducts();
    console.log('selected product', orders);
    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                {
                    (orders.length > 0)
                        ?
                        orders.map(order => <OrderCard order={order} key={order.id}></OrderCard>)
                        :
                        <p className='text-center font-semibold mb-3'>YOUR ORDER LIST IS EMPTY</p>
                }
            </div>
        </div>
    );
};

export default AddToCart;