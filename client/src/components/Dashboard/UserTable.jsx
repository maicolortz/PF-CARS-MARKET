import Swal from "sweetalert2";

function UserTable({ users, estilos }) {
  const estilo = {
    tabla: "flex flex-vwrap  w-max bg-slate-400 text-center m-5",
    td: " ",
    th: "bg-slate-500 px-3 border py-2 border-x-2 border-white ",
  };
  const bloquear = (e, user) => {
    e.preventDefault();

    Swal.fire({
      title: `👀 \n ¿ Desea  ${user.active ? "bloquear" : "desbloquear"} a ${
        user.firstName
      } ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: `${user.active ? "bloquear" : "desbloquear"}`,
      showConfirmButton: true,
      confirmButtonColor: "#1d4ed8",
      timer: 20000,
    }).then((resultado) => {
      if (resultado.value) {
        /*   dispatch(getCars())
      dispatch(updateActiveCar(car.id, car.active?false:true))
      dispatch(infoUseremail(email)) */
        Swal.fire({
          title: `Se ${user.active ? "Bloqueo" : "Desbloqueo"}  a ${
            user.firstName
          } `,
        });
        /*   dispatch(infoUseremail(email))
      dispatch(getCars()) */
      }
    });
  };
  return (
    <div className={estilo.tabla}>
      {console.log(users)}
      <table className=" table-auto ">
        <thead>
          <tr>
            <th className={estilos.tabletitulo}>ID</th>
            <th className={estilos.tabletitulo}>Nombre</th>
            <th className={estilos.tabletitulo}>Apellido</th>
            <th className={estilos.tabletitulo}>Telefono</th>
            <th className={estilos.tabletitulo}>Email</th>
            <th className={estilos.tabletitulo}>Premium</th>
            <th className={estilos.tabletitulo}>
              {" "}
              Numero de
              <br /> Publicaciones
            </th>
            <th className={estilos.tabletitulo}>Bloquear</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <>
                <tr className={estilo.td} key={user.id}>
                  <td className={estilos.tableitem}>{user.id}</td>
                  <td className={estilos.tableitem}>{user.firstName}</td>
                  <td className={estilos.tableitem}>{user.lastName}</td>
                  <td className={estilos.tableitem}>{user.whatsApp}</td>
                  <td className={estilos.tableitem}>{user.mail}</td>
                  <td className={estilos.tableitem}>
                    {user.premium ? "si" : "no"}
                  </td>
                  <td className={estilos.tableitem}>{user.cars.length}</td>

                  <button
                    className={estilos.buttonBloquear}
                    onClick={(e) => bloquear(e, user)}
                  >
                    Bloquear
                  </button>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
