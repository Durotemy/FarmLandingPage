import "./App.css";
import Footer from "./components/Footer";
import { NavBar } from "./components/NavBar";
import HomePage from "./Pages";
import BSFProducts from "./Pages/BSFProducts";
import OrganicFertilizers from "./Pages/OrganicFertilizers";
import WasteManagement from "./Pages/WasteManagement";
import Machines from "./Pages/Machines";
import Converters from "./Pages/Converters";
import { CartProvider } from "./context/CartContext";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="overflow-y-scroll no-scrollbar font-sans">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/bsf-products" element={<BSFProducts />} />
            <Route
              path="/organic-fertilizers"
              element={<OrganicFertilizers />}
            />
            <Route path="/waste-management" element={<WasteManagement />} />
            <Route path="/machines" element={<Machines />} />
            <Route path="/converters" element={<Converters />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
