import React from 'react'

function BienvenidoPanel({estilos}) {
  return (
    <div className='flex flex-col items-center' > 
        <h1 className={estilos.titulo}>Bienvenido!!</h1>
        <h3 className={estilos.mensaje}>Desde Aqui podras <strong className='text-yellow-500'> <br/>Editar</strong> <br/> <strong className='text-blue-800'> Crear </strong>   <br/> o <strong className='text-orange-500'>Pausar</strong> <br/> tus Publicaciones</h3>
    </div>
  )
}

export default BienvenidoPanel