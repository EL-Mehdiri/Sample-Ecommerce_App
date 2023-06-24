import { useContext } from 'react';
import { PRODUCTS } from '../../Products'
import { ShopContext } from "../../context/ShopContext";
import { CartItem } from './Cart-item';
import './Cart.css'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, getTotal } = useContext(ShopContext);
    const totalAmount = getTotal();
    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1>Your cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>

            {totalAmount > 0 ?
                <div className="checkout" >
                    <p>Subtotal: ${totalAmount}</p>
                    <button onClick={() => navigate('/')}>Continue Shopping</button>
                    <button>Checkout</button>
                </div>
                : <h3 style={{ opacity: '0.7' }}>Your cart is empty</h3>}
        </div>
    )
}

export default Cart;