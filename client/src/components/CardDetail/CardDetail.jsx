import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCardDetail} from "../../Redux/Actions";
import { useParams, Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./CardDetail.css";
function CardDetail() {
  const dispatch = useDispatch();
  let { id } = useParams();

  const { loading} = useSelector((state) => state);
  const carsDetail = useSelector((state) => state.carDetail);
  const {
    name,
    image,
    brand,
    model,
    year,
    color,
    oil,
    gate,
    kilometres,
    descriptionLong,
    price,
    condition,
    transmition,
  } = carsDetail;
  const details = [
    { name: "Marca: ", detalle: brand },
    { name: "Modelo: ", detalle: model },
    { name: "Año: ", detalle: year },
    { name: "Color: ", detalle: color },
    { name: "Combustible: ", detalle: oil },
    { name: "Nro de Puertas: ", detalle: gate },
    { name: "Kilometraje: ", detalle: kilometres },
    { name: "Condicion: ", detalle: condition },
    { name: "Trasmision: ", detalle: transmition },
  ];

  //const id = props.match.params.id;

  useEffect(() => {
    dispatch(getCardDetail(id));
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {carsDetail && (
        <div className="2xl:container 2xl:mx-auto lg:py-8 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
          <Link to={"/home"}>
            <button
              title="Regresar al inicio"
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none shadow-md shadow-black rounded-full text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800 font-semibold text-lg leading-4  w-auto py-4 px-4 lg:mt-12 mt-6"
            >
              Regresar
            </button>
          </Link>

          <div className="flex justify-center items-center lg:flex-row flex-col gap-0 mt-6">
            {/* <!-- Detalles --> */}

            <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 border-4 rounded-2xl p-6 pb-12 items-center">
              <div class="flex justify-between items-center">
                <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-medium text-lg leading-4 text-gray-600 ">
                  {carsDetail.brand} / {carsDetail.model} / {carsDetail.color} /{" "}
                  {carsDetail.year}
                </p>
                <a
                  href="#top"
                  title="Añadir a Favoritos"
                  class="md:text-6xl text-gray-300  hover:text-red-500 duration-300"
                >
                  &hearts;
                </a>
              </div>
              <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
                {name}
              </h2>
              <p className=" font-normal pb-7 text-base leading-6 text-gray-600 mt-7">
                {descriptionLong}
              </p>
              <div>
                {details.map((el) => {
                  return (
                    <div className="py-4 border-b border-t border-gray-200 flex items-center justify-between">
                      <p className="text-lg leading-4 font-semibold text-gray-800">
                        {el.name}
                      </p>
                      <div className="flex items-center justify-center">
                        <p className="text-lg leading-none text-gray-600">
                          {el.detalle} {el.name === "Kilometraje: " && "Km"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* <!-- Imagen y Boton Comprar--> */}

            <div className=" w-full sm:w-96 md:w-8/12 lg:w-6/12 flex flex-col p-3 items-center lg:gap-8 sm:gap-6 gap-4">
              <div className=" w-full lg:w-9/12 bg-gray-100 shadow-md shadow-black">
                <img src={image} alt="Wooden Chair Previw" />
              </div>
              <p className=" font-semibold lg:text-3xl text-xl  border-b-2 pb-6 border-gray-200 lg:leading-6 leading-5 mt-6 ">
                Precio: {price}$
              </p>
               <button title="Sabemos que lo quieres comprar"
                className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none shadow-md shadow-black rounded-full text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800 font-semibold text-lg leading-4  w-96 py-5 lg:mt-12 mt-6" >Comprar este auto...</button>
                
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardDetail;
