import React from "react";

function Dashboard() {
  const estilos = {
    buttonlight:
      "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 ",
    buttonvacio:
      "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
      li:"p-3 text-gray-300 shadow-xl hover:text-white  font-semibold ease-in duration-300 text-center rounded-3xl "
  };
  return (
    <div class=" flex ">
      <section className="w-1/4 h-screen bg-gradient-to-r from-blue-500  via-blue-500 to-blue-600  ">
        <div className=" m-2 h-max bg-gradient-to-r from-blue-400 via-blue-600 via-blue-400 to-blue-400  rounded-3xl  ">
            <ul className="rounded ">
                <li className="p-3 text-blue-500  text-center p-10 text-xl " >  <strong>
                  DASHBOARD
                  </strong>
                  </li>
                
                <li className={estilos.li}>Perfil</li>
                <li className={estilos.li}>Publicaciones </li>
                <li className={estilos.li}>hola</li>
                <li className={estilos.li}>hola</li>

            </ul>
             </div>
      </section>
      <section className=" w-3/4 bg-gradient-to-r from-blue-400 via-blue-100 to-blue-200 via-blue-200 to-blue-300 to-blue-400 via-blue-400  to-cyan-200 via-cyan-50  to-green-100 via-cyan-50  to-yellow-100 via-cyan-50 to-blue-300 bg-gradient-to-tr">
        <div>

        </div>
      </section>
    </div>
  );
}

export default Dashboard;
