import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import MainHome from './component/MainHome/MainHome';
import Navbar from './component/Navbar/Navbar';
import Carts from './pages/Carts/Carts';
import Login from './pages/Login/Login';
import ProductList from './pages/ProductList/ProductList';
import Signup from './pages/Signup/Signup';
import SingleProduct from './pages/SingleProduct/SingleProduct';

function App() {
    AOS.init();
    return (
        <BrowserRouter>
            <main className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainHome />} />
                    <Route path="/productlist" element={<ProductList />} />
                    <Route path="/product" element={<SingleProduct />} />
                    <Route path="/register" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Carts />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
