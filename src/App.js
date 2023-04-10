import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Product from './pages/ProductPage';
import Contact from './pages/ContactPage';
import Home from './pages/Home';
import Cart from "./pages/CheckoutPage";
import CheckoutSuccess from "./pages/CheckoutSuccessPage";

function App() {
  return (
    <>
    <Layout>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:id" element={<Product/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Checkout" element={<CheckoutSuccess/>}/>
      <Route path="*" element={<p>Not Found</p>}/>
    </Routes>
    </Layout>
    </>
  );
}

export default App;
