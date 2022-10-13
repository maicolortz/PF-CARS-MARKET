import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css"

export default function NavBar() {
    return (
        <div className="contenedor-NavBar">
            <div>Logo</div>
            <button className="btn-NavBar">Inicio</button>
            <SearchBar />
            <div>
                <button className="btn-NavBar">Ingresar</button>
                <button className="btn-NavBar">Registrarse</button>
            </div>
        </div>
    )
}