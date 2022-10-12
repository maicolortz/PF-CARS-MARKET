import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './CardDetail.css';


function CardDetail(props) {

    const dispatch = useDispatch();

    const carDetail = useSelector(state => state.detail);

    const id = props.match.params.id;

    useEffect(() => {

    }, [dispatch, id])


  return (
    <div>
        <div>
            <img src={carDetail.imagen} alt="image not found"/>
            <p>Name: {carDetail.name}</p>
            <p>Marca: {carDetail.marca}</p>
            <p>Modelo: {carDetail.modelo}</p>
            <p>Color: {carDetail.color}</p>
            <p>Año: {carDetail.año}</p>
            <p>Kilometros: {carDetail.kilometros}</p>
            <p>Ubicacion: {carDetail.ubicacion}</p>
            <p>Precio {carDetail.precio}</p>
            <p>Descripcion: {carDetail.descripcionLarga}</p>
        </div>
    </div>
  )
}

export default CardDetail