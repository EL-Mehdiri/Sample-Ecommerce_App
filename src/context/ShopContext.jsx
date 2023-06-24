import { createContext, useState } from "react";
import { PRODUCTS } from "../Products";


export const ShopContext = createContext(null);

const getCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
}


const ShopCntextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getCart());

    const getTotal = () => {
        let totalAmount = 0;
        for (const i in cartItems) {
            if (cartItems[i] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(i));
                totalAmount += cartItems[i] * itemInfo.price

            }
        }
        return totalAmount;
    }

    const addToCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }))
    };
    const removeToCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }))
    };

    const updateCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }

    const contextValue = { cartItems, addToCart, removeToCart, updateCount, getTotal }
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopCntextProvider;
