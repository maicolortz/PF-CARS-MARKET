import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Paginado from "../Paginado/Paginado.jsx";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import Card from "../Card/Card.jsx";
import { getCars } from "../../Redux/Actions";
import Filters from "../filtros/Filters.jsx";

export default function Home() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car);

  //PAGINADO
  const [number, setNumber] = useState(1); //Numeros para los 3 paginados
  const [currentPage, setCurrentPage] = useState(1); //[1]Numero de paginado
  const [carsPerPage, setCarsPerPage] = useState(6); //[3]Cantidad de cars por paginas
  const indexLastCar = currentPage * carsPerPage; //[3]Indice del ultimo car por pagina
  const indexFirstCar = indexLastCar - carsPerPage; //[0]Indice del primer car por pagina
  const currentCarsPerPage = cars.slice(indexFirstCar, indexLastCar); //[0,1,2] Arreglo con los cars por pagina
  const estilos = {
    gradienteazul: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
  }

  //FUNCIONES DEL PAGINADO
  const paginate = (pageNumber) => {
    //Modifica el numero de paginado
    setCurrentPage(pageNumber);
  };

  const numberPaginate = (n) => {
    setNumber(n);
  };

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [cars]);

  return (
    <div className="contenedor">
      <div>
        <NavBar />
      </div>
      <div className="contenedor-Home">
        <div className="contenedor-Home2">
          <div className={estilos.gradienteazul}>
            <Filters />
          </div>
          <div className="contenedor-Home3">
            <div class="grid grid-cols-3 gap-0">
              {currentCarsPerPage?.map((el) => {
                return (
                  <Card
                    id={el.id}
                    image={el.image}
                    descriptionShort={el.descriptionShort}
                    price={el.price}
                    kilometres={el.kilometres}
                    transmition={el.transmition}
                    year={el.year}
                  />
                );
              })}
            </div>
            <div class="mx-6 my-6">
              <Paginado
                allCars={cars.length}
                carsPerPage={carsPerPage}
                paginate={paginate}
                page={currentPage}
                number={number}
                numberPaginate={numberPaginate}
                cars={cars}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
