import { React, useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCardDetail, postConsults, getConsults } from "../../Redux/Actions";
import { useParams, Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import './CardDetail.css';
import img from '../Card/imagenes/Imagen_Default.png';
import NavBar from '../NavBar/NavBar';
import { useAuth0 } from '@auth0/auth0-react';
import Swal from 'sweetalert2';
import perfilImg from '../Card/imagenes/usuario.png'


const estilos = {
  button_contactar_vendedor: "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none shadow-md shadow-black rounded-full text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800 font-semibold text-lg leading-4  w-96 py-5 lg:mt-12 mt-6",
  button_regresar_inicio: "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none shadow-md shadow-black rounded-full text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800 font-semibold text-lg leading-4  w-auto py-4 px-4 lg:mt-12 mt-6"
}
function CardDetail() {

  const dispatch = useDispatch();
  const history = useNavigate();
  let { id } = useParams();

  const [render, setRender] = useState("")
  const [state, setState] = useState({
    userId: "",
    description: "",
    carId: ""
  });

  // const { user } = useAuth0();

  const users = useSelector((state) => state.allUsers)
  const consults = useSelector((state) => state.consult)
 
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value, });
  }

  const handleOnSubmit = (e) => {
   // e.preventDefault();
    dispatch(postConsults(state))
    if (user) {
      const buscadoAuth = user.email
      users.find(el => {
        if (el.mail === buscadoAuth) {
          setState({
            userId: el.id,
            description: "",
            carId: id
          })
        }
      })
    }
  }
    

  const { loading } = useSelector((state) => state);
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
    userId,
    user,
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

  useEffect(() => {
    dispatch(getCardDetail(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

useEffect(() => {
    dispatch(getConsults())
  }, [dispatch, id, user]);

  // useEffect(() => {
  //   if (user) {
  //     const buscadoAuth = user.email
  //     users.find(el => {
  //       if (el.mail === buscadoAuth) {
  //         setState({
  //           userId: el.id,
  //           description: "",
  //           carId: id
  //         })
  //       }
  //     })
  //   }
  // }, [user, id]);

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const [heart, setHeart] = useState(false)

  const RedirectRegister = () => {

    if (!isAuthenticated) {

      Swal.fire({
        title: 'Usuario no registrado!!!',
        text: 'Registrese para añadir este auto a sus favoritos.',
        icon: 'warning',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 20000
      })

      loginWithRedirect();
    }
    else {
      if (heart) {
        setHeart(false)
      } else {
        setHeart(true)
        Swal.fire({
          title: 'Añadido correctamente!!!',
          text: 'Se ha añadido este auto a sus favoritos.',
          icon: 'success',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000
        })
      }
      /* si isAuthenticated es verdadero añadir este carro a los favoritos de ese usuario (ejecutar un dispatch) */
    }

  }

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <NavBar />
      {/* {console.log(user)} */}
      <div class="pt-16">
        {carsDetail && (
          <div className="2xl:container 2xl:mx-auto lg:py-8 lg:px-20 md:py-12 md:px-6 py-9 px-4  ">


            <div className="flex justify-center items-center lg:flex-row flex-col gap-0 mt-6">
              {/* <!-- Detalles --> */}

              <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 border-4 rounded-2xl p-6 pb-12 items-center">
                <div class="flex justify-between items-center">
                  <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-medium text-lg leading-4 text-gray-600 ">
                    {carsDetail.brand} / {carsDetail.model} / {carsDetail.color} /{" "}
                    {carsDetail.year}
                  </p>
                  <button onClick={() => RedirectRegister()}
                    title="Añadir a Favoritos"
                    class={
                      heart
                        ? "text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-red-500  duration-300"
                        : "text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-gray-300  hover:text-red-500 duration-300"
                    }>
                    &hearts;
                  </button>
                </div>
                <h2 className="font-semibold lg:text-4xl text-3xl leading-10 text-gray-800 mt-4">
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

              <div className=" w-full sm:w-96 md:w-8/12 lg:w-6/12 flex flex-col sm:pt-6 p-3 items-center lg:gap-8 sm:gap-6 gap-4">
                <article className=' w-full lg:w-9/12'>
                  <div class="flex gap-5">
                    <img class="w-20 h-20 rounded-full" src={perfilImg} alt={perfilImg} />
                    <div class="flex flex-col justify-between py-3 w-auto font-medium text-black">
                      <div>
                        <p className='text-2xl leading-8 font-semibold text-gray-800'> {`${user && user.firstName} ${user && user.lastName}`}</p>
                      </div>
                      <div class="flex gap-1">
                        <svg aria-hidden="true" class="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      </div>
                    </div>
                  </div>
                </article>
                <div className=" w-full lg:w-9/12 bg-gray-100 shadow-md shadow-black">
                  <img src={image ? image : img} alt="Wooden Chair Previw" />
                </div>
                <p className=" font-semibold lg:text-3xl text-xl  border-b-2 pb-6 border-gray-200 lg:leading-6 leading-5 mt-6 ">
                  Precio: {price}$
                </p>
                <div className='flex'>
                  {isAuthenticated &&
                    <button title="Sabemos que lo quieres comprar"
                      className={estilos.button_regresar_inicio}
                      onClick={() => history("/Contact")}
                    >Contacta al vendedor</button>
                  }
                  <Link to={"/home"}>
                    <button
                      title="Regresar al inicio"
                      className={estilos.button_regresar_inicio}>
                      Regresar
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <form onSubmit={(e) => handleOnSubmit(e)}>
        <div>
            {consults.map(el => {
              if (el.cars[0].id === id) {
                return <div>
                  <div>
                    {el.users[0].firstName} {el.users[0].lastName}
                    </div>
                  <div>
                    {el.description}
                  </div>
                </div>
              }
            })}
          </div>
          <label>Consulta al vendedor</label>
          <textarea type="text" name='description' value={state.description} onChange={handleChange} />
          <button type='submit'>Consultar</button>
        </form>
      </div>
    </div>
  );
}

export default CardDetail;
