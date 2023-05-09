import React from 'react';

const OrderCard = ({ order }) => {
    console.log('order card', order);
    
    const handleAdd = () => {
        return {
            ...order,
            quantity: order.quantity + 1,

        }
    }
    const handleRemove = () => {
        return {
            ...order,
            quantity: order.quantity - 1,

        }
    }
    return (
        <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
            {/* <h1>{order?.description}</h1> */}
            <div className='rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500 text-white h-8 w-8 font-bold '>
                <p className="text-black"> {order?.quantity} </p>
            </div>
            <div className='h-52 w-52 mx-auto'>
                <img src={order?.image} alt={order?.image} />
            </div>
            <h1 className='font-bold text-center'>{order?.name}</h1>
            <p className='text-center font-semibold mb-3'>Price: {order?.price}$</p>
            <p className='text-center font-semibold mb-3'>
                {

                    (order?.description?.length > 100)
                        ?
                        order?.description?.slice(0, 90)
                        :
                        order?.description

                }
            </p>

            <button onClick={handleAdd} className='bg-indigo-500 rounded-full py-1 px-2 mb-2 flex-1 text-white text-bold'>
                Add Item
            </button>



            <button onClick={handleRemove} className='bg-rose-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
                Remove Item
            </button>

        </div>
    );
};

export default OrderCard;