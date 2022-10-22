import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
import {
  getTransaction,
  get_Payment_Link,
  postTransaction,
} from "../../Redux/Actions.js";
export const Premium = ({
  user,
  getTransaction,
  postTransaction,
  transactions,
  get_Payment_Link,
  payment_link,
}) => {
  const [premium, setPremium] = useState(false);
  //const [pay_Link, setPay_Link] = useState("");
  /*  async function createPayment() {
    let { data } = await axios.get("http://localhost:3001/payment");
    console.log(data.init_point);
    setPay_Link(data.init_point);
    return data.init_point;
  } */
  useEffect(() => {
    getTransaction();
    const data = {
      nroTransaction: user.email,
      type: "Compra",
      amount: "75000",
      email: user.email,
      date: "2022/10/18",
      userId: "2",
      idTransaction: "245",
      statusTransaction: "Pendiente",
    };
    postTransaction(data);
    get_Payment_Link();
    listadepremiums()
  }, []);
  const getListaID = async () => {
    const data = await axios.get(
      "http://localhost:3001/transactionsMercadoPago"
    );
    return data;
  };

  const getdataporid = async (id) => {
    const apiExterna = await axios.get(
      "http://localhost:3001/transMercado/" + id
    );
    return apiExterna;
  };

  const listadepremiums = async () => {
    const { data } = await getListaID();
    if (data.length) {
      const d = data.map((e) => e.nroTransaction);
      const dato = await getdataporid(d[d.length - 1]);
      console.log(dato.data.status)
      console.log("---------------")
      console.log(user.email)
      console.log("---------------")
        console.log(dato.data.email)
      console.log("---------------")
      console.log(dato.data.status)
      if (user.email==dato.data.email && dato.data.status=="approved") {
        setPremium(true);
      }
    }
  };
  //const datos=d.map(async e=> await getdataporid(e))
  //console.log(datos.map(e=>e.data))

  const envio = (e) => {
    Swal.fire({
      title: "Unete al Premium, obtendras excelentes beneficios",
    }).then(function () {
      window.location = payment_link.init_point;
    });
  };
  const esPremium = (e) => {};

  const estilos = {
    noPremium:
      "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center mr-2 mb-2",
    Premium:
      "text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center mr-2 mb-2",
  };
  return (
    <div>
      <button
        disabled={premium === true}
        onClick={(e) => envio(e)}
        className={premium === false ? estilos.noPremium : estilos.Premium}
      >
        {premium === false ? "¿Quieres Ser Premium?" : "Premium"}
        {console.log(premium)}
      </button>
      <button onClick={(e) => listadepremiums(e)}>mostrar lista</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    transactions: state.transactions,
    payment_link: state.payment_link,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postTransaction: (e) => dispatch(postTransaction(e)),
    getTransaction: () => dispatch(getTransaction()),
    get_Payment_Link: () => dispatch(get_Payment_Link()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Premium);