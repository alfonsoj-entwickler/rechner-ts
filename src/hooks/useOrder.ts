import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
    
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    const addItem = (item: MenuItem) => {
        // console.log(`Adding item ... ${item.name}`);
        const itemExist = order.find(orderItem => orderItem.id === item.id);
        
        if (itemExist) {
            const updateOrder = order.map(orderItem => orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
            setOrder(updateOrder);
        }
        else {
            const newOrder : OrderItem = { ...item, quantity: 1 };
            setOrder([...order, newOrder]);
        }
        
    }

    const removeItem = (id: MenuItem['id']) => {
        //console.log('Deleting ....', id);
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        //console.log('Saving the order ... ');
        setOrder([]);
        setTip(0)
    }
     
    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}