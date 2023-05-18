import "./App.css";
import Signin from "./Components/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Portal from "./Components/Portal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/portal/*" element={<Portal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
