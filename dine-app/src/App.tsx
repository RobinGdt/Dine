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
    <Router basename="/Dine">
      <GlobalStyles />
      <Typography />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
