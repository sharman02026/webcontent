import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { EnergyCycle } from "./pages/EnergyCycle";
import { EnergySolutions } from "./pages/EnergySolutions";
import { AfrPlant } from "./pages/AfrPlant";
import { Values } from "./pages/Values";
import { Support } from "./pages/Support";
import { Contact } from "./pages/Contact";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";

export default function App() {
  return (
    <BrowserRouter basename="/refineenergy">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/energy-cycle" element={<EnergyCycle />} />
          <Route path="/energy-solutions" element={<EnergySolutions />} />
          <Route path="/afr-plant" element={<AfrPlant />} />
          <Route path="/our-values" element={<Values />} />
          <Route path="/support-services" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
