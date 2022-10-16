import React from 'react'
import './LandingPage.css'
import auto from './autoLanding.png'
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
    <div className='fondo__landing'>
        <div className='prueba'>
            <div className="text__presentation">
                <h1 className='texto'>Bienvenidos a la mejor pagina para comprar o vender tu auto</h1>
            </div>
            <img src={auto} alt="fotoauto" className='auto' />
            
            <Link to='/home' className="fancy" href="#">
                <span className="top-key"></span>
                 <span className="text">Ingresa para ver nuestros autos</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
            </Link>
        </div>
    </div>
  )
}

export default LandingPage