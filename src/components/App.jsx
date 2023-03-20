
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "../assets/css/App.css";
import Carrito from "../pages/Carrito";
import Home from "../pages/Home";
import Pizza from "../pages/Pizza";
import Header from "./Header";

function App() {

  const navigate=useNavigate()

  useEffect(()=>{navigate("/Home")},[])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/pizza/:id" element={<Pizza/>} />
        <Route path="/carrito" element={<Carrito/>} />
      </Routes>
    </div>
  );
}

export default App;
