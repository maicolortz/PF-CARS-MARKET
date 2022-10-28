import React from "react";
import FormUpdateUser from "./FormUpdateUser";
import ferrari from "../ferraripre.jpg";
import CardH from "./CardH";
import { useState } from "react";
import { connect } from "react-redux";
import { infoUser, infoUseremail } from "../../Redux/Actions";
import { useEffect } from "react";
import FormUpdateCar from "./FormUpdateCar";
import Swal from "sweetalert2";

export const Dashboard = ({ user }) => {
  useEffect(() => {}, []);
  const estilos = {
    buttonlight:
      "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 py-3 my-3",
      buttonred:
      "text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 py-3 my-3",
    li: "p-3 text-white shadow-xl w-max  hover:text-red-800  font-semibold ease-in duration-300 text-center rounded-3xl cursor-pointer",
    li2: "p-3 text-gray-100 shadow-xl hover:text-red-800  font-semibold ease-in duration-300 text-center rounded-3xl cursor-pointer",
    lisesion:
      " p-3 text-gray-500 shadow-blue-500/500 shadow-xl w-max  hover:text-red-800  font-semibold ease-in duration-300 text-center rounded-3xl cursor-pointer",
    label: "",
    input: "p-2 rounded ",
    contenedorInput: "flex flex-col border-4 w-96",
    labela:"pl-2 pr-8 font-semibold"

  };

  const [caso, setCaso] = useState("");
  const [editar, setEditar] = useState("");
  const [carro , setCarro] = useState(null);

  const editarCar = (e,car) => {
  setCarro(car)
    setCaso(e)

  };
  const opcion = (e) => {
    switch (e) {
      case "FormUpdate":
        return <FormUpdateUser user={user} estilos={estilos}></FormUpdateUser>;

      case "publicaciones":
       
        return (
          user &&
          user?.cars.map((el) => {
            return (
              <CardH
                image={el.image}
                estilos={estilos}
                car={el}
                id={el.id}
                editar={editarCar}
                descriptionShort={el.descriptionShort}
                name={el.name}
              >
                {" "}
              </CardH>
            );
          })
        );

        case "updatecar":
        return <FormUpdateCar car={carro} ></FormUpdateCar>
        case "favoritos":
        return  <CardH
                image={ferrari}
                estilos={estilos.buttonlight}
                id={234}
                editar={editarCar}
                descriptionShort={"ferrari a toda maquina , la vez , ya no la vez"}
                name={"ferrari x50000 "}
              >
                {" "}
              </CardH>
          
      default:
        break;
    }
  };
  const cerrarSesion=(e)=>{
    Swal.fire({
      title: " ¿ Desea Cerrar Sesion ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText:"si",
      showConfirmButton: true,
      timer: 20000
    }).then(resultado => {
      /* if (resultado.value) {
      } else {
         // Swal.fire("*NO se elimina la venta*");
      } */
    })
  }
  return (
    <div class=" flex bg-gradient-to-r from-sky-500   to-sky-800 ">
      <section className=" sticky top-0 w-1/5 h-screen bg-gradient-to-r from-sky-500   to-sky-800  ">
        <div className="w-max flex py-10 m-2 h-max bg-gradient-to-r from-blue-400 via-sky-600 via-sky-400 to-sky-400  rounded-r-full  ">
          <ul className="rounded flex-row p-3">
            <li className=" py-10 text-gray-800 shadow-gray-500/500 w-max   font-semibold ease-in duration-300 text-center rounded-3xl">
              <strong>DASHBOARD</strong>
            </li>

            <li onClick={() => setCaso("FormUpdate")} className={estilos.li}>
              {" "}
              Datos De Usuario
            </li>
            <li onClick={() => setCaso("publicaciones")} className={estilos.li}>
              {" "}
              Mis Publicaciones{" "}
            </li>
            <li onClick={() => setCaso("favoritos")} className={estilos.li}>Favoritos</li>
            <li
              onClick={(e) => cerrarSesion(e)}
              className={estilos.lisesion}
            >
              Cerrar Sesion
            </li>
          </ul>
        </div>
      </section>
      <section className="  flex-col w-screen  bg-gradient-to-r from-sky-400 via-blue-500 via-blue-400 via-sky-700 to-sky-400  bg-gradient-to-tr  ">
        <div class=" sticky top-0 border-b-4 bg-gradient-to-r from-sky-800  to-sky-400 p-3 text-white text-right    p-5 text-xl ">
          {user.firstName + " " + user.lastName}
        </div>
        <section>
          <div>{opcion(caso)}</div>
        </section>
      </section>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    Cars: state.allCars,
    Car: state.car,
    user: state.D_user,
    //temperaments: state.temperaments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    infoUser: (e) => dispatch(infoUseremail(e)),
    /*getCars: () => dispatch(getCars()),
    Model: (e) => dispatch(filterForModel(e)),
    Brand: (e) => dispatch(filterForBrand(e)), */
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
