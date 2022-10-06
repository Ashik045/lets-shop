/* eslint-disable no-unused-vars */
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import MainHome from './component/MainHome/MainHome';
import Navbar from './component/Navbar/Navbar';
import { Context } from './context/context';
import Carts from './pages/Carts/Carts';
import Login from './pages/Login/Login';
import ProductList from './pages/ProductList/ProductList';
import Signup from './pages/Signup/Signup';
import SingleProduct from './pages/SingleProduct/SingleProduct';

function App() {
    const {user} = useContext(Context)
    AOS.init();
    
    return (
        <BrowserRouter>
            <main className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainHome />} />
                    <Route path="/products/:category" element={<ProductList />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/register" element={user ? <MainHome /> : <Signup />} />
                    <Route path="/login" element={user ? <MainHome /> : <Login />} />
                    <Route path="/cart" element={<Carts />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
