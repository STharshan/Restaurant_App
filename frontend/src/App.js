import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/home';
import Cart from './pages/Cart/cart';
import Placeorder from './pages/PlaceOrder/placeorder';
import Footer from './components/Footer/footer';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/loginpopup';
import Verify from './pages/Verify/verify';
import MyOrders from './pages/MyOrders/MyOrders';

function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
          <Navbar setShowLogin={setShowLogin}/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<Placeorder />} />
              <Route path="/verify" element={<Verify />} />
              <Route path='/myorders' element={<MyOrders />} />
            </Routes> 
      </div>
      <Footer/>
    </>
  );
}

export default App;
