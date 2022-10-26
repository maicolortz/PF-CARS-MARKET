import React from "react";
import ferrari from "./../components/carretera.jpg";

function Dashboard() {
  const estilos = {
    buttonlight:
      "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 ",
    buttonvacio:
      "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
    li: "p-3 text-white shadow-xl hover:text-blue-800  font-semibold ease-in duration-300 text-center rounded-3xl ",
    li2: "p-3 text-gray-100 shadow-xl hover:text-red-800  font-semibold ease-in duration-300 text-center rounded-3xl ",
  };
  return (
    <div class=" flex ">
      <section className="w-1/4 h-screen bg-gradient-to-r from-blue-500  via-blue-500 to-blue-600">
        <div className=" m-2 h-max bg-gradient-to-r from-blue-400 via-blue-600 via-blue-400 to-blue-400  rounded-3xl   ">
          <ul className="rounded ">
            <li className="p-3 text-blue-500  text-center p-10 text-xl ">
              <strong>DASHBOARD</strong>
            </li>

            <li className={estilos.li}> Datos De Usuario</li>
            <li className={estilos.li}>Publicaciones </li>
            <li className={estilos.li}>Favoritos</li>
            <li className={estilos.li2}>Cerrar Sesion</li>
          </ul>
        </div>
      </section>
      <section className="  flex-col w-screen  w-3/4 bg-gradient-to-r from-sky-400 via-blue-500 via-blue-400 via-sky-700 to-sky-400  bg-gradient-to-tr  ">
        <div className=" flex  justify-center w-4/4 p-2x  bg-gradient-to-r from-sky-400  to-sky-300 text-center border-4">
          <div class="flex-justify-center  h-4/4  w-max border-4	">
            <div class="py-4 border-4">Datos de Usuario</div>
          </div>
        </div>
        <div className="h-4/5 text-center bg-gradient-to-r from-sky-400  to-sky-300">
          asdasd
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
