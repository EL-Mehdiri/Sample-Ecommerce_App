import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ShopCntextProvider from './context/ShopContext';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <div className="App">
      <ShopCntextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ShopCntextProvider>

    </div>
  );
}

export default App;
