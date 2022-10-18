import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";
import Logo from './Logo CarMarket.png'
import { Link } from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react'

export default function NavBar() {

    const {loginWithRedirect} = useAuth0()
    const {user} = useAuth0()
    console.log(user)
   
    return (
        <nav className="contenedor-NavBar">
            <img src={Logo} alt="img not found" width='120px' className="logo" class="shadow-md shadow-black rounded-md" />
            <Link to='/'><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none shadow-md shadow-black font-medium rounded-full md:px-2 md:text-sm md:py-1.5 xl:px-3 xl:text-base xl:py-2 2xl:text-lg 2xl:px-5 2xl:py-2.5  text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800">Inicio</button></Link>
            <SearchBar />
            <div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none shadow-md shadow-black font-medium rounded-full md:px-2 md:text-sm md:py-1.5 xl:px-3 xl:text-base xl:py-2 2xl:text-lg 2xl:px-5 2xl:py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800">Ingresar</button>
                
                
                <button onClick={()=> loginWithRedirect()} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none shadow-md shadow-black font-medium rounded-full md:px-2 md:text-sm md:py-1.5 xl:px-3 xl:text-base xl:py-2 2xl:text-lg 2xl:px-5 2xl:py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800">Registrarse</button>
    
                
                <Link to='/createcar'>
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none shadow-md shadow-black font-medium rounded-full md:px-2 md:text-sm md:py-1.5 xl:px-3 xl:text-base xl:py-2 2xl:text-lg 2xl:px-5 2xl:py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800">Crear Publicación</button>
                </Link>
            </div>
        </nav>
    )
}