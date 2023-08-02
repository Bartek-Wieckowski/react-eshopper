import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuContextProvider } from "./contexts/MenuContext";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Products from "./pages/Products";
import PageNotFound from "./pages/PageNotFound";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";


function App() {
  return (
    <BrowserRouter>
      <MenuContextProvider>
        <Navbar />
        <Sidebar />
      </MenuContextProvider>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
