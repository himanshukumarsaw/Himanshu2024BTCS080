import { Routes, Route, useLocation } from "react-router";
import Home from "./features/Home/Home.jsx";
import About from "./features/About/About.jsx";
import Contact from "./features/Contact/Contact.jsx";
import Navbar from "./features/shared/Navabar.jsx";

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
