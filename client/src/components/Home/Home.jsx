import React from "react";
import './Home.css';
import NavBar from '../NavBar/NavBar.jsx'

export default function Home() {
    return (
        <div className="contenedor-Home">
           <NavBar/>
            <div className="contenedor-Carousel">Carousel</div>
            <div className="contenedor-Home2">
                <div className="contenedor-Filtros">Filtros</div>
                <div className="contenedor-Home3">
                    <div className="contenedor-Cards">Cards</div>
                     <div className="contenedor-Paginado">Paginado</div>
                </div>
            </div>
        </div>
    )
}