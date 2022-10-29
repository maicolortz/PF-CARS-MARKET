import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../Redux/Actions";

function FormUpdateUser({ estilos, user }) {
  const [activo, setActivo] = useState(true);
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: user.firstName,
    email: user.mail,
    direccion: user.address,
    telefono: user.whatsApp,
    apellido: user.lastName,
  });
  function handleSubmit(e) {
    e.preventDefault();
    setActivo(!activo);
    dispatch(
      updateUser(user.id, {
        firstName: values.name,
        lastName: values.apellido,
        mail: values.email,
        whatsApp: values.telefono,
        address: values.direccion,
      })
    );
    console.log(values);
  }
  function handleChange(e) {
    const { target } = e;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  }
  return (
    <div className="flex justify-center p-8">
      <div>
        <div
          className=" flex flex-col  p-8 rounded-3xl
         flex-wrap  border-4 text-slate-600 bg-slate-200"
        >
          <div className={estilos.contenedorInput}>
            <span className={estilos.labela}>Nombre</span>
            <input
              id="name"
              name="name"
              type={"text"}
              value={values.name}
              onChange={handleChange}
              disabled={activo}
              className={estilos.input}
            ></input>
          </div>

          <div className={estilos.contenedorInput}>
            <label className={estilos.labela}> Apellido</label>
            <input
              id="apellido"
              name="apellido"
              type={"text"}
              value={values.apellido}
              onChange={handleChange}
              disabled={activo}
              className={estilos.input}
            ></input>
          </div>
          <div className={estilos.contenedorInput}>
            <label className={estilos.labela}> Telefono</label>
            <input
              id="telefono"
              name="telefono"
              type={"tel"}
              value={values.telefono}
              onChange={handleChange}
              disabled={activo}
              className={estilos.input}
            ></input>
          </div>
          <div className={estilos.contenedorInput}>
            <label className={estilos.labela}> Email</label>
            <input
              value={user.mail}
              disabled={activo}
              className={estilos.input}
            ></input>
          </div>
          <div className={estilos.contenedorInput}>
            <label className={estilos.labela}> Direccion</label>
            <input
              id="direccion"
              name="direccion"
              type={"text"}
              value={values.direccion}
              onChange={handleChange}
              disabled={activo}
              className={estilos.input}
            ></input>
          </div>
          <div className={estilos.contenedorInput}>
            {activo === true ? (
              <button
                onClick={() => setActivo(!activo)}
                className={estilos.buttonlight}
              >
                {" "}
                Editar Datos
              </button>
            ) : (
              <button
                onClick={(e) => handleSubmit(e)}
                className={estilos.buttonlight}
              >
                {" "}
                Actualizar Datos
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormUpdateUser;
