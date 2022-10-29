import React from "react";
import FormUpdateUser from "./FormUpdateUser";
import CardH from "./CardH";
import { useState } from "react";
import { connect } from "react-redux";
import { infoUseremail } from "../../Redux/Actions";
import FormUpdateCar from "./FormUpdateCar";
import {  useNavigate } from "react-router-dom";
import BienvenidoPanel from "./BienvenidoPanel";

export const Dashboard = ({ user, infoUser }) => {
  const navigate = useNavigate();

  const estilos = {
    buttonlight:
      "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 py-3 my-3",
    buttonred:
      "text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 py-3 my-3",
    mensaje:
      " text-3xl tex-center p-3 text-white  shadow-blue-500 shadow-md w-max    font-semibold ease-in duration-300 text-center rounded-3xl ",
    titulo:
      " text-8xl tex-center p-3 text-white w-max    font-semibold ease-in duration-300 text-center rounded-3xl ",
    li: "p-3 text-white  shadow-blue-500 shadow-md w-max  hover:text-blue-800  font-semibold ease-in duration-300 text-center rounded-3xl cursor-pointer",
    li2: "p-3 text-red-100 shadow-md hover:text-red-800  font-semibold ease-in duration-300 text-center rounded-3xl cursor-pointer",
    li3: " text-lg p-4 text-blue-800  shadow-xl w-max shadow-blue-800 hover:text-yellow-800  font-semibold ease-in duration-300 text-center rounded-3xl cursor-pointer",
    lisesion:
      " p-3 my-5 text-blue-500 shadow-blue-800 shadow-md w-max  hover:text-blue-800  font-semibold ease-in duration-300 text-center rounded-3xl cursor-pointer",
    label: "",
    input: "p-2 rounded ",
    contenedorInput: "flex flex-col border-4 w-96",
    labela: "pl-2 pr-8 font-semibold",
    activo:
      " flex flex-row  max-w-4xl  justify-start text-black bg-gradient-to-r from-stone-200  to-stone-300 m-3 rounded-b-lg ",
    noactivo:
      " flex flex-row  max-w-4xl  justify-start text-black bg-gradient-to-r from-yellow-200  to-yellow-300 m-3 rounded-b-lg ",
  };
  const [pauso, setPauso] = useState(null);
  const [caso, setCaso] = useState("");
  const [carro, setCarro] = useState(null);

  const editarCar = (e, car, pauso) => {
    setCarro(car);
    setCaso(e);
    setPauso(pauso);
  };
  const opcion = (e) => {
    switch (e) {
      case "":
        return <BienvenidoPanel estilos={estilos}></BienvenidoPanel>;
      case "FormUpdate":
        return <FormUpdateUser user={user} estilos={estilos}></FormUpdateUser>;

      case "publicaciones":
        return (
          user &&
          user?.cars
            .filter((e) => e.active)
            .map((el) => {
              return (
                <CardH
                  image={el.image}
                  estilos={estilos}
                  car={el}
                  id={el.id}
                  editar={editarCar}
                  descriptionShort={el.descriptionShort}
                  name={el.name}
                  email={user.mail}
                >
                  {" "}
                </CardH>
              );
            })
        );
      case "publicaciones pausadas":
        return (
          user &&
          user?.cars
            .filter((e) => e.active == false)
            .map((el) => {
              return (
                <CardH
                  email={user.mail}
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
        return <FormUpdateCar car={carro}></FormUpdateCar>;
      case "favoritos":
        return (
          <h1>hola</h1>
          
        );

      default:
        break;
    }
  };
  const cerrarSesion = (e) => {
    navigate("/home");
  };
  return (
    <div class=" flex bg-gradient-to-r from-sky-500   to-sky-800 ">
      <section className=" sticky top-0 w-1/5 h-screen bg-gradient-to-r from-sky-500   to-sky-800  ">
        <div className="w-max flex py-10 m-2 h-max bg-gradient-to-r from-blue-400 via-sky-600 via-sky-400 to-sky-400  rounded-r-full  ">
          <ul className="rounded flex-row p-3">
            <li className=" py-10 text-gray-800 shadow-gray-500/500 w-max   font-semibold ease-in duration-300 text-center rounded-3xl">
              <strong>DASHBOARD</strong>
            </li>

            <li onClick={() => setCaso("FormUpdate")} className={caso=="FormUpdate"?estilos.li3:estilos.li}>
              {" "}
              Datos De Usuario
            </li>
            <li onClick={() => setCaso("publicaciones")} className={caso=="publicaciones"?estilos.li3:estilos.li}>
              {" "}
              Mis Publicaciones{" "}
            </li>
            <li onClick={() => setCaso("favoritos")} className={caso=="favoritos"?estilos.li3:estilos.li}>
              Favoritos
            </li>
            <li
              onClick={() => setCaso("publicaciones pausadas")}
              className={caso=="publicaciones pausadas"?estilos.li3:estilos.li}
            >
              Publicaciones <br /> Pausadas
            </li>
            <li onClick={(e) => cerrarSesion(e)} className={estilos.lisesion}>
              Volver a Home
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
