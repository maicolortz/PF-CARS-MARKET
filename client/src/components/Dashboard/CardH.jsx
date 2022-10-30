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
      confirmButtonColor: "#1d4ed8",
      timer: 20000,
    }).then((resultado) => {
      if (resultado.value) {

        setEsconder("none");
        Swal.fire({
          title: "Se Pauso La Publicacion",
          text: " Encuentrala en Publicaciones Pausadas"
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

  const CarroVendido = () => {
    Swal.fire({
      title: '¿Logro vender el vehiculo?',
      text: 'En caso de confirmar sera redirigido a un formulario para que llene algunos datos del comprador y asi pueda calificar su venta.',
      icon: 'warning',
      confirmButtonColor: "#1d4ed8",
      cancelButtonColor: "#1d4ed8",
      showCancelButton: true,
      confirmButtonText: "Si, continuar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      result.isConfirmed && navigate("/BuyerForm");
    })
  }

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
        <button onClick={() => CarroVendido()} className={estilos.buttonred}>
          Vendido
        </button>
      </div>
    </div>
  );
}

export default CardH;
