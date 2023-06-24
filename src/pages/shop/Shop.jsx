import { PRODUCTS } from '../../Products'
import Product from './Product';
import "./Shop.css"

const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Ridmani Shop</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => <Product data={product} />)}
            </div>

        </div>
    )
}

export default Shop;