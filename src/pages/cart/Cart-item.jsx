import React, { useContext } from 'react';
import { ShopContext } from "../../context/ShopContext";


export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeToCart, updateCount } = useContext(ShopContext);

    return (
        <div className='cartItem'>
            <img src={productImage} alt="product" />
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeToCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCount(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}>+</button>

                </div>
            </div>
        </div>
    )
}

