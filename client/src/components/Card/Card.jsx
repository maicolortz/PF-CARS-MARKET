import React from 'react';
import icon1 from './imagenes/la-carretera.png';
import icon2 from './imagenes/mecanico.png';
import icon3 from './imagenes/calendario.png'
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ id, image, descriptionShort, price, kilometres, transmition, year }) {
  return (
    <>
      <div class="px-5 py-20 ">
        <div class="w-96 h-full bg-white drop-shadow-2xl rounded-lg">
          <img class="object-cover rounded-tl-lg rounded-tr-lg h-72 w-96" src={image} alt='Img not found' />
          <div class="px-5 py-4 space-y-2">
            <div class="h-16 mb-4 ">
              <h3 class="text-2xl font-semibold">{descriptionShort}</h3>
            </div>
            <p class="space-x-2 border-t pt-2 border-gray-300 text-gray-700">
              <span class="text-2xl font-medium">Precio: {price}$</span>
            </p>
            <div class="flex flex-col p-4 border-t border-gray-300 text-gray-700">
              <div class="flex-1 pb-4 inline-flex items-center text-xl font-medium">
                <img src={icon1} class="mr-4" alt="" />
                <p>Kilometros: {kilometres}Km</p>
              </div>
              <div class="flex-1  pb-4 inline-flex items-center text-xl font-medium">
                <img src={icon2} class="mr-4" alt="" />
                <p>Trasmision: {transmition}</p>
              </div>
              <div class="flex-1 inline-flex items-center text-xl font-medium">
                <img src={icon3} class="mr-4" alt="" />
                <p>Año: {year}</p>
              </div>
            </div>
            <div class="flex justify-between items-center pt-3 pb-2">
              <Link to={`/cars/${id}`}>
                <button class="px-3 py-2 text-white  bg-blue-900 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-900">
                  Ver detalles
                </button>
              </Link>
              <a href="#top" title="Add to Favorites" class="text-5xl text-gray-300 hover:text-red-500 duration-300">&hearts;</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;


/*

<Link to={`/cars/${id}`}>
        <div className='container-card'>
          <div className='contenedor-igm-card'>
            <img src={image} alt="Mazda MX5"  className='Imagen-card'/>
          </div>
          <div className='Nombre-card'>{descriptionShort}</div>
          <div className='Precio-car'>Precio: {price}$</div>
          <div className='container-card2'>
            <div>Kilometros: {kilometres}Km</div>
            <div>Trasmision: {transmition}</div>
            <div>Año: {year}</div>
          </div>
        </div>
      
 */ 