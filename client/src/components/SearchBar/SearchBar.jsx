import "./SearchBar.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
    getCars,
    OrderForPrice,
    getCarForCondition,
    getCarForName,
} from "../../Redux/Actions.js";
export const SearchBar = ({
  getCarForName,
  OrderForPrice,
  getCarForCondition,
  Cars,
  Car,
}) => {
    const [busqueda, setbusqueda] = useState("");
    
    let getbusqueda = (e) => {
    e.preventDefault();
    getCarForName(busqueda);
    console.log(busqueda)
    // setSort(e.target.value);
  };

  useEffect(() => {

  }, []);

  return (
    <>
      <div className="contenedor-SearchBar">
        <input
          onChange={(e) => setbusqueda(e.target.value)}
          type="text"
          placeholder="¿Que auto buscaba...?"
          className="input-SearchBar"
        />
        <button
        onClick={(e)=>getbusqueda(e)}
          type="submit"
          class="p-2.5 ml-1 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
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
    getCarForName: (e) => dispatch(getCarForName(e)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
