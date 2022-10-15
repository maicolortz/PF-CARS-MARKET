import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCardDetail } from "../../Redux/Actions";
import { useParams } from 'react-router-dom';
import './CardDetail.css';


function CardDetail() {

  const dispatch = useDispatch();

  let { id } = useParams();

  const carsDetail = useSelector(state => state.carDetail);

  //const id = props.match.params.id;

  useEffect(() => {
    dispatch(getCardDetail(id))
  }, [dispatch, id])


  return (

    <div>
      {carsDetail && (<div>
        <img src={carsDetail.image} alt="img not found" />
        <p>Name: {carsDetail.name}</p>
        <p>Marca: {carsDetail.brand}</p>
        <p>Modelo: {carsDetail.model}</p>
        <p>Color: {carsDetail.color}</p>
        <p>Año: {carsDetail.year}</p>
        <p>Kilometros: {carsDetail.kilometres}</p>
        <p>Ubicacion: {carsDetail.location}</p>
        <p>Precio {carsDetail.price}</p>
        <p>Descripcion: {carsDetail.descriptionLong}</p>
      </div>
      )}
    </div>
  )
}

export default CardDetail