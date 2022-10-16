import React from 'react';
import icon1 from './imagenes/la-carretera.png';
import icon2 from './imagenes/mecanico.png';
import icon3 from './imagenes/calendario.png'
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ id, image, descriptionShort, price, kilometres, transmition, year }) {
  return (
    <>
      <div class="px-5 py-8 ">
        <div class="md:w-40 h-full lg:w-52 xl:w-64 2xl:w-80  bg-white  shadow-2xl rounded-lg">
          <img class=" rounded-tl-lg rounded-tr-lg md:h-40 w-96 xl:h-60 2xl:h-64" src={image} alt='Img not found' />
          <div class="px-5 py-4 space-y-2">
            <div class="h-16 mb-1 md:mb-2  ">
              <h3 class="md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold">{descriptionShort}</h3>
            </div>
            <p class="space-x-2 border-t pt-2 border-gray-300 text-gray-700">
              <span class="md:text-base xl:text-lg 2xl:text-xl lg:mb-1 font-medium">Precio: {price}$</span>
            </p>
            <div class="flex flex-col p-2 border-t border-gray-300 text-gray-700">
              <div class="flex-1 pb-2 md:text-sm lg:text-lg  inline-flex items-center  font-medium">
                <img src={icon1} class="mr-4" alt="" />
                <p>Kilometros: {kilometres}Km</p>
              </div>
              <div class="flex-1 pb-2 md:text-sm lg:text-lg  inline-flex items-center  font-medium">
                <img src={icon2} class="mr-4" alt="" />
                <p>Trasmision: {transmition}</p>
              </div>
              <div class="flex-1 md:text-sm lg:text-lg   inline-flex items-center  font-medium">
                <img src={icon3} class="mr-4" alt="" />
                <p>Año: {year}</p>
              </div>
            </div>
            <div class="flex justify-between pt-0 px-6 pb-2">
              <Link to={`/cars/${id}`}>
                <button class="px-3 py-2 text-white  bg-blue-900 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg lg:text-base xl:text-xl  text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-900">
                  Ver detalles
                </button>
              </Link>
              <a href="#top" title="Add to Favorites" class="md:text-5xl text-gray-300  hover:text-red-500 duration-300">&hearts;</a>
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