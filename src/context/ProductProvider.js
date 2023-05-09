import { collection, getDocs } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from "../Firebase/firebase.config";

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
    const [items, setItem] = useState([]);

    const fetchData = async () => {
        const collectionRef = collection(db, "1");
        const docSnap = await getDocs(collectionRef);

        let products = [];
        docSnap.docs.forEach((doc) => {
            products.push({ ...doc.data(), id: doc.id, quantity: 1 });
        });

        setItem(products);
    };

    useEffect(() => {
        fetchData();
    }, [])




    const [count, setCount] = useState(0);
    const [orders, setOrder] = useState([]);

    const increment = (productId) => {
        setCount(count + 1);
        // setOrder([...orders, `Product ${count + 1}`])
        const product = items.find(item => item.id === productId);
        const newOrder = { ...product, quantity: 1 };
        setOrder([...orders, newOrder]);
    };

    const value = {
        items, setCount, increment, count, orders
    }

    return (
        <PRODUCT_CONTEXT.Provider value={value}>{children}</PRODUCT_CONTEXT.Provider>
    )
};

export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
}


export default ProductProvider;