import React, {  useEffect } from "react";
import NavBar from '../NavBar/NavBar.jsx';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import Card from "../Card/Card.jsx";
import { getCars } from '../../Redux/Actions';

export default function Home() {

    const dispatch = useDispatch();
    const allCars = useSelector((state) => state.allCars);

    useEffect(() => {
        dispatch(getCars());
    }, [dispatch]);

    return (
        <div className="contenedor">
            <div>
                <NavBar />
            </div>
            <div className="contenedor-Home">
                <div className="contenedor-Home2">
                    <div className="contenedor-Filtros"></div>
                    <div className="contenedor-Home3">
                        <div className="contenedor-Cards">
                            {allCars?.map((el) => {
                                return (
                                    <Card id={el.id} image={el.image} descriptionShort={el.descriptionShort} price={el.price} kilometres={el.kilometres} transmition={el.transmition} year={el.year}/>
                                )
                            })}
                        </div>
                        <div className="contenedor-Paginado">Paginado</div>
                    </div>
                </div>
            </div>

        </div>
    )
}