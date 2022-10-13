import React from "react";
import './SearchBar.css'

export default function SearchBar(){
    return(
        <div className="contenedor-SearchBar">
            <input type="text" placeholder="   Que auto buscaba..." className="input-SearchBar"/>
            <button className="btn-SearBar">Buscar</button>
        </div>
    )   
}