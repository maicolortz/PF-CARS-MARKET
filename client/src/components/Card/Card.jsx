import React from 'react'
import {Link} from 'react-dom'
import uno from './imagenes/prueba.jpg'

function Card(/*parametros que me voy a traer desde el home */) {
  return (
    <>
    <Link /*ruta detail */>
        <div>
            <img src={uno} alt="Mazda MX5"/>
            <h3>Descripcion corta del auto</h3>
            <h2>Precio del auto</h2>
                <div>
                    <h4>Kilometraje con dibujo</h4> 
                    <h4>Transmicion del auto</h4>
                </div>
        </div>
    </Link>    
    </>
  )
}

export default Card