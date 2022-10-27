import React from 'react'

function FormUpdateUser({estilos}) {
  return (
    <div className="flex justify-center p-8">
    <div >
      <div
        className=" flex flex-col  p-8 rounded-3xl
         flex-wrap  border-4 text-slate-600 bg-slate-200"
      >
        <div className={estilos.contenedorInput}>
          <span class="px-2">Nombre</span>
          <input className={estilos.input} type={"text"}></input>
        </div>

        <div className={estilos.contenedorInput}>
          <label class="px-2"> Apellido</label>
          <input className={estilos.input} type={"text"}></input>
        </div>
        <div className={estilos.contenedorInput}>
          <label class="px-2"> Telefono</label>
          <input className={estilos.input} type={"number"}></input>
        </div>
        <div className={estilos.contenedorInput}>
          <label class="pl-2 pr-8"> Email</label>
          <input className={estilos.input} type={"email"}></input>
        </div>
        <div className={estilos.contenedorInput}>
          <label class="px-1"> Direccion</label>
          <input className={estilos.input}></input>
        </div>
        <div className={estilos.contenedorInput}>
          <button className={estilos.buttonlight}> Actualizar Datos</button>
           {/*  <button className={estilos.buttonlight}> Editar Datos</button> */}

        </div>
      </div>
    </div>
  </div>
    )
}

export default FormUpdateUser