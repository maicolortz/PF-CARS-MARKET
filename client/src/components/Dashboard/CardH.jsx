import React from "react";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {useDispatch} from "react-redux"
import { infoUseremail, updateActiveCar } from "../../Redux/Actions";

function CardH({ image, estilos, id, descriptionShort, editar, name, car,email }) {
  const dispatch=useDispatch();

  const navigate = useNavigate();
  
  const pausar = (e) => {
    e.preventDefault();

    Swal.fire({
      title: ` 😃 \n ¿ Desea  ${car.active?"pausar":"activar"} la publicacion ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: `${car.active?"pausar":"activar"}`,
      showConfirmButton: true,
      timer: 20000,
    }).then((resultado) => {
      if (resultado.value) {
        dispatch(infoUseremail(email))
        dispatch(updateActiveCar(car.id, car.active?false:true))
        dispatch(infoUseremail(email))
        Swal.fire({
          title: `Se ${car.active?"Pauso":"Activo"} La Publicacion`,
          text: `Encuentralo en Publicaciones ${car.active?"Pausadas ":""}`,
        });
      }
    });
  };
  const EditarCarro = (e) => {
    e.preventDefault();
    editar("updatecar", car,car.active);
  };
  return (
    <div
      class={car.active?estilos.activo:estilos.noactivo}
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

        <button onClick={(e) => pausar(e)} className={estilos.buttonred}>
          {car.active?"pausar":"activar"}
        </button>
      </div>
    </div>
  );
}

export default CardH;
