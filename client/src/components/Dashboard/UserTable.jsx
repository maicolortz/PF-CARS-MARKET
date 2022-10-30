import React, { useMemo } from "react";
import { useTable } from "react-table";
function UserTable({ users }) {
  const estilo = {
    tabla: "flex  w-max bg-slate-400 text-center m-5",
    td: "px-3 border py-2 border-x-2 border-gray ",
    th: "bg-slate-500 px-3 border py-2 border-x-2 border-white ",
  };
  return (
    <div className={estilo.tabla}>
      {console.log(users)}
      <table className=" table-auto ">
        <thead>
          <tr>
            <th className={estilo.th}>ID</th>
            <th className={estilo.th}>Nombre</th>
            <th className={estilo.th}>Apellido</th>
            <th className={estilo.th}>Telefono</th>
            <th className={estilo.th}>Email</th>
            <th className={estilo.th}>Premium</th>
            <th className={estilo.th}> Numero de<br/> Publicaciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr className={estilo.td} key={user.id}>
                <td className={estilo.td}>{user.id}</td>
                <td className={estilo.td}>{user.firstName}</td>
                <td className={estilo.td}>{user.lastName}</td>
                <td className={estilo.td}>{user.whatsApp}</td>
                <td className={estilo.td}>{user.mail}</td>
                <td className={estilo.td}>{user.premium ? "si" : "no"}</td>
                <td className={estilo.td}>{user.cars.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
