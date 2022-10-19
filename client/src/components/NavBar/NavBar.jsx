import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";
import Logo from './Logo CarMarket.png'
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
    let navigate =useNavigate()
    return (
        <nav className="contenedor-NavBar">
            <img src={Logo} alt="img not found" width='120px' className="logo" class="shadow-md shadow-black rounded-md" />
            <Link to ='/'><button onClick={(e)=>navigate("cars/createcar")} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none shadow-md shadow-black font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800">Inicio</button></Link>
            <SearchBar />
            <div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none shadow-md shadow-black font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800">Ingresar</button>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none shadow-md shadow-black font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800">Registrarse</button>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none shadow-md shadow-black font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800" onClick={(e)=>navigate("/createcar")}>Crear Publicación</button>
            </div>
        </nav>
    )
}