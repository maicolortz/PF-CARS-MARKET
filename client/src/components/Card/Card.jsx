import React from 'react';
import { Link } from 'react-router-dom';
//import uno from './imagenes/prueba.jpg';
import './Card.css';

function Card({ id, image, descriptionShort, price, kilometres, transmition, year }) {
  return (
    <>
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
      </Link>
    </>
  )
}

export default Card;
