import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Dashboard from "./Dashboard";

function CardH({ image, estilos, id, descriptionShort, editar, name, car }) {
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const [esconder, setEsconder] = useState("flex");
  const eliminar = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Desea pausar Esta Publicacion?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "pausar",
      showConfirmButton: true,
      timer: 20000,
    }).then((resultado) => {
      if (resultado.value) {
        
        setEsconder("none");
        Swal.fire({
          title: "Se Pauso La Publicacion",
          text:" Encuentrala en Publicaciones Pausadas"
      });
      } else {
        // Swal.fire("*NO se elimina la venta*");
      }
    });
  };
  const EditarCarro = (e) => {
    e.preventDefault();
    editar("updatecar", car);
  };
  return (
    <div
      style={{ display: esconder }}
      class=" flex flex-row  max-w-4xl  justify-start text-black bg-gradient-to-r from-stone-200  to-stone-300 m-3 rounded-b-lg "
    >
      <div class=" rounded-lg shadow-lg bg-white max-w-sm ">
        <img class="rounded-b-lg max-h-48" src={image} alt="" />
      </div>
      <div class="px-2">
        <h5 class=" text-xl font-medium mb-2">{name}</h5>
        <p class=" text-base mb-4">{descriptionShort}</p>

        <button
          onClick={() => navigate("/cars/" + id)}
          className={estilos.buttonlight}
        >
          Detalles
        </button>

        <button onClick={(e) => EditarCarro(e)} className={estilos.buttonlight}>
          Editar
        </button>

        <button onClick={(e) => eliminar(e)} className={estilos.buttonred}>
          Pausar
        </button>
      </div>
    </div>
  );
}

export default CardH;
