import "./App.css";
import GlobalStyles from "./GlobalStyle";
import Home from "./components/Home/Home";
import Typography from "./utils/Typography";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Typography />
      <Home />
    </div>
  );
}

export default App;
