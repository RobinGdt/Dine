import { useEffect } from "react";
import "./App.css";
import GlobalStyles from "./GlobalStyle";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Typography from "./utils/Typography";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Router>
      <GlobalStyles />
      <Typography />
      <Routes>
        <Route path="/Booking" element={<Booking />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
