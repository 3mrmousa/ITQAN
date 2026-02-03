import Nav from "./components/shared/Nav";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import Footer from "./components/shared/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
