import React from "react";
import NavBar from '../NavBar/NavBar.jsx'
import './Home.css';

export default function Home() {
    return (
        <div className="contenedor">
            <div>
                <NavBar />
            </div>
            <div className="contenedor-Home">
                <div className="contenedor-Home2">
                    <div className="contenedor-Filtros"></div>
                    <div className="contenedor-Home3">
                        <div className="contenedor-Cards">Cards</div>
                        <div className="contenedor-Paginado">Paginado</div>
                    </div>
                </div>
            </div>

        </div>
    )
}