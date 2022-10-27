import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";


function CardH({ image, estilos, id, descriptionShort, editar }) {
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  const envio = (e) => {
    e.preventDefault();
    
  };
  return (
    <div class="flex flex-row  max-w-4xl justify-start text-black bg-gradient-to-r from-stone-200  to-stone-300 m-3 rounded-b-lg ">
      <div class=" rounded-lg shadow-lg bg-white max-w-sm ">
        <img class="rounded-b-lg" src={image} alt="" />
      </div>
      <div class="px-2">
        <h5 class=" text-xl font-medium mb-2">Ferrari</h5>
        <p class=" text-base mb-4">{descriptionShort}</p>
        <Link to={`/cars/${id}`}>
          <button className={estilos.buttonlight}>Detalles</button>
        </Link>
        
          <button onClick={()=>editar("updatecar")} className={estilos.buttonlight}>Editar</button>
      </div>
    </div>
  );
}

export default CardH;
