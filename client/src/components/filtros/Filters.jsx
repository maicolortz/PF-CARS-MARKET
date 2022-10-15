import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  getCars,
  OrderForPrice,
  getCarForCondition,
  filterForModel,
} from "../../Redux/Actions.js";
export const Filters = ({
  getCars,
  OrderForPrice,
  getCarForCondition,
  Cars,
  Car,
  filterForModel
}) => {
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
  let filterForModelmin =e=>{
    e.preventDefault();
    filterForModel()
  }
  useEffect(() => {}, []);
  const [rangomin, setRangomin] = useState(0);
  const [rangomax, setRangomax] = useState(0);
  return (
    <>
      <label> Sort For Price</label>
      <div>
        <select onChange={(e) => orderPrice(e)}>
          <option disabled selected defaultValue>
            order Price
          </option>
          <option value="priceAsc">Minime Price</option>
          <option value="priceDesc">Maxime Price</option>
        </select>
      </div>

      <label> Condition</label>
      <div>
        <select onChange={(e) => filterForCondition(e)}>
          <option disabled selected defaultValue>
            Car Condition
          </option>
          <option value="Usado">Usado</option>
          <option value="Nuevo"> Nuevo</option>
        </select>
      </div>

      <div>
        <h2> Filter for Model</h2>
        <select onChange={(e) => filterForModelmin(e)}>
          <option disabled selected defaultValue>
            year minime
          </option>
          {Car &&
            Car.map((e) => (
              <option value={e.year} key={e.id}>
                {e.year}
              </option>
            ))}
        </select>
        <select onChange={(e) => filterForModel(e)}>
          <option disabled selected defaultValue>
            year maxime
          </option>
          {Car &&
            Car.map((e) => (
              <option value={e.year} key={e.id}>
                {e.year}
              </option>
            ))}
        </select>
      </div>
      
      <br />
      <input
        onChange={(e) => setRangomin(e.target.value)}
        min={2000}
        type={"number"}
        placeholder="write the year"
      ></input>
      <div>
        <div>
          <label>Year Minime</label>
          <br />

          <input
            onChange={(e) => setRangomin(e.target.value)}
            min={2000}
            max={2022}
            type={"range"}
            placeholder="write the year"
          ></input>
          <label>{rangomin}</label>
        </div>
        <div>
          <div>
            <label>Year Maxime</label>
            <br />

            <input
              onChange={(e) => setRangomax(e.target.value)}
              min={2000}
              max={2022}
              type={"range"}
              placeholder="write the year"
            ></input>
            <label>{rangomax}</label>
          </div>
        </div>
        <div>
          <button onClick={(e) => filterclear(e)}>Clear filters</button>
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
    filterForModel:e=>dispatch(filterForModel(e))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
