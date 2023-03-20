import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { pizzaContext } from "../context/PizzaContextProvider";
import "../assets/css/Header.css"

export default function Header() {

const{ shopCartTotal }=useContext(pizzaContext);

  return (
    <>
      <div className="container-fluid header w-100 m-0 p-2">
        
 
        <div className="navbar-brand menu d-flex justify-content-around align-items-center gap-5">
          <NavLink
            to="/Home"
            style={{ fontSize: "2vw" }}
            className={({ isActive }) =>
              (isActive && "active-class text-decoration-none text-white pe-4") ||
              "text-decoration-none text-white pe-4"
            }
          >
            🍕<strong className="header">Pizzería Mamma Mía!</strong>
          </NavLink>

          <NavLink
            to="/carrito"
            style={{ fontSize: "2vw" }}
            className={({ isActive }) =>
              (isActive &&
                "active-class text-decoration-none text-white ps-4 header") ||
              "text-decoration-none text-white ps-4"
            }
          >
            🛒${shopCartTotal?shopCartTotal.toLocaleString():0}
          </NavLink>
        </div>
      </div>
    </>
  );
}
