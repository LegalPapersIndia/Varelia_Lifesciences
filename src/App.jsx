// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import Franchise from "./pages/Franchise";
// import Contact from "./pages/Contact";
// import WhatsAppButton from "./components/WhatsAppButton";
// import NotFound from "./pages/NotFound";
// import ProductDetail from "./pages/ProductDetail";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-grow pt-20 sm:pt-24">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/franchise" element={<Franchise />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/products/:slug" element={<ProductDetail />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </main>
//         <Footer />
//         <WhatsAppButton />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;




import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Capabilities from "./pages/Capabilities";
import Global from "./pages/Global";
import Quality from "./pages/Quality";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 sm:pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/global" element={<Global />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            {/* Purana link kisi ne save kiya ho toh Partners pe chala jaye */}
            <Route path="/franchise" element={<Navigate to="/partners" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;