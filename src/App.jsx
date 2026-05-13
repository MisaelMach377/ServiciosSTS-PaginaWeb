import { BrowserRouter, Routes, Route } from "react-router-dom";

import BarraSuperior from "./components/BarraSuperior.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./Home.jsx";
import Control360 from "./Control360.jsx";

function App() {
  return (
    <BrowserRouter>
      <BarraSuperior />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/control360" element={<Control360 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
