import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  getCars,
  OrderForPrice,
  getCarForCondition,
  filterForModel,
  filterForBrand,
} from "../../Redux/Actions.js";
export const Filters = ({
  getCars,
  OrderForPrice,
  getCarForCondition,
  Cars,
  Car,
  Model,
  Brand,
}) => {
  const estilos = {
    select:
      "block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    label: "block mb-2 text-base font-medium text-gray-900 dark:text-gray-400",
    button:
      "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    contenedorcolor:
      "text-white  hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    buttonlight:
      "text-white bg-gradient-to-r from-cyan-500 to-cyan-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",
  };
  //console.log(estilos.select)
  let orderPrice = (e) => {
    e.preventDefault();
    OrderForPrice(e.target.value);
    // setSort(e.target.value);
  };
  let filterForCondition = (e) => {
    e.preventDefault();
    getCarForCondition(e.target.value);
    console.log(e.target.value);
  };
  let filterclear = (e) => {
    e.preventDefault();
    getCars();
  };
  let filterForModel = (e) => {
    e.preventDefault();
    console.log(modelmin);
    console.log(modelmax);
    Model([modelmin, modelmax]);
  };
  let filterForBrand = (e) => {
    e.preventDefault();
    Brand(e.target.value);
  };
  function filterRepetidos(base) {
    const datos = Car.map((e) => e[base]);
    const unicos = [...new Set(datos)];
    return unicos;
  }
  useEffect(() => {}, []);
  const [rangomin, setRangomin] = useState(0);
  const [rangomax, setRangomax] = useState(0);
  const [modelmin, setModelmin] = useState(0);
  const [modelmax, setModelmax] = useState(0);
  return (
    <>
      <div >
        <label className={estilos.label}> Sort For Price</label>
        <div>
          <select className={estilos.select} onChange={(e) => orderPrice(e)}>
            <option disabled selected defaultValue>
              order Price
            </option>
            <option value="priceAsc">Minime Price</option>
            <option value="priceDesc">Maxime Price</option>
          </select>
        </div>

        <label className={estilos.label}> Condition</label>
        <div>
          <select
            className={estilos.select}
            onChange={(e) => filterForCondition(e)}
          >
            <option disabled selected defaultValue>
              Car Condition
            </option>
            <option value="Usado">Usado</option>
            <option value="Nuevo"> Nuevo</option>
          </select>
        </div>

        <div>
          <h2 className={estilos.label}> Filter for Model</h2>
          <select
            className={estilos.select}
            onChange={(e) => setModelmin(e.target.value)}
          >
            <option disabled selected defaultValue>
              year minime
            </option>
            {Car &&
              filterRepetidos("year").map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
          </select>
          <select
            className={estilos.select}
            onChange={(e) => setModelmax(e.target.value)}
          >
            <option disabled selected defaultValue>
              year maxime
            </option>
            {Car &&
              filterRepetidos("year").map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
          </select>
          <button
            className={estilos.buttonlight}
            onClick={(e) => filterForModel(e)}
          >
            send range model
          </button>
          <div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Filter For Brand
              </label>
            </div>
            <select
              className={estilos.select}
              onChange={(e) => filterForBrand(e)}
            >
              <option disabled selected defaultValue>
                Brand
              </option>
              {Car &&
                filterRepetidos("brand").map((e) => (
                  <option value={e} key={e}>
                    {e}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <button className={estilos.button} onClick={(e) => filterclear(e)}>
              Clear filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    Cars: state.allCars,
    Car: state.car,
    //temperaments: state.temperaments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    OrderForPrice: (e) => dispatch(OrderForPrice(e)),
    getCarForCondition: (e) => dispatch(getCarForCondition(e)),
    getCars: () => dispatch(getCars()),
    Model: (e) => dispatch(filterForModel(e)),
    Brand: (e) => dispatch(filterForBrand(e)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
