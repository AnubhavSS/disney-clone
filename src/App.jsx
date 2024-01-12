import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import HeaderS from "./components/HeaderS";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <HeaderS/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
