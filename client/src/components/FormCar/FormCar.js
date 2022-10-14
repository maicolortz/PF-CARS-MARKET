import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postCar, getCars } from "../../Redux/Actions";
import './FormCar.css';



function FormCar() {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        name: "",
        brand: "",
        model: "",
        color: "",
        year: "",
        kilometres: "",
        location: "",
        price: "",
        descriptionLong: "",
        descriptionShort: "",
        image: "",
    })

    const [errors, setErrors] = useState({});



    function validate(state) {
        let errors = {};

        if(!state.name){
            errors.name = "Se requiere un titulo"
        } else if (!/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g.test(state.name)) {
            errors.name = "El titulo no puede tener caracteres especiales"
        }
        if(!state.brand){
            errors.brand = "Se requiere marca del auto"
        }
        if(!state.model){
            errors.model = "Se requiere modelo del auto"
        }
        if(!state.color){
            errors.color = "Se requiere un color"
        }
        if(!state.year){
            errors.year = "Se requiere año del auto"
        } else if(state.year < 1900 || state.year > 2024) {
            errors.year = "Año invalido"
        }
        if(!state.kilometres){
            errors.kilometros = "Se requiere kilometros del auto"
        }
        if(!state.location){
            errors.location = "Se requiere ubicacion"
        }
        if(!state.price){
            errors.price = "Indicar precio de venta"
        }
        if(!state.image){
            errors.image = "Se requiere imagen del auto"
        }
        return errors;
    }

        const handleChange = (e) => {
            setState({...state, [e.target.name]: e.target.value});
            setErrors(validate({...state, [e.target.name]: e.target.value}));
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            dispatch(postCar(state))
            setState({
                name: "",
                brand: "",
                model: "",
                color: "",
                year: "",
                kilometres: "",
                location: "",
                price: "",
                descriptionLong: "",
                descriptionShort: "",
                image: "",
            })
        }

    useEffect(() => {
        dispatch(getCars());
    }, [dispatch])

    return (

        <div>
            <div>
                <h1>Publica tu auto</h1>
            </div>

            <div>
                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <label>Titulo:</label>
                        <input type="text" name="name" value={state.name} onChange={e => handleChange(e)}/>
                        {errors.name && (<p>{errors.name}</p>)}
                    </div>

                    <div>
                        <label>Marca:</label>
                        <input type="text" name="brand" value={state.brand} onChange={e => handleChange(e)}/>
                        {errors.brand && (<p>{errors.brand}</p>)}
                    </div>

                    <div>
                        <label>Modelo:</label>
                        <input type="text" name="model" value={state.model} onChange={e => handleChange(e)}/>
                        {errors.model && (<p>{errors.model}</p>)}
                    </div>

                    <div>
                        <label>Color:</label>
                        <input type="text" name="color" value={state.color} onChange={e => handleChange(e)}/>
                        {errors.color && (<p>{errors.color}</p>)}
                    </div>

                    <div>
                        <label>Año:</label>
                        <input type="text" name="year" value={state.year} onChange={e => handleChange(e)}/>
                        {errors.year && (<p>{errors.year}</p>)}
                    </div>

                    <div>
                        <label>Kilometros:</label>
                        <input type="number" name="kilometres" value={state.kilometres} onChange={e => handleChange(e)}/>
                        {errors.kilometres && (<p>{errors.kilometres}</p>)}
                    </div>

                    <div>
                        <label>Ubicacion:</label>
                        <input type="text" name="location" value={state.location} onChange={e => handleChange(e)}/>
                        {errors.location && (<p>{errors.location}</p>)}
                    </div>

                    <div>
                        <label>Precio:</label>
                        <input type="number" name="price" value={state.price} onChange={e => handleChange(e)}/>
                        {errors.price && (<p>{errors.price}</p>)}
                    </div>

                    <div>
                        <label>Imagen:</label>
                        <input type="text" name="image" value={state.image} onChange={e => handleChange(e)}/>
                        {errors.image && (<p>{errors.image}</p>)}
                    </div>

                    <div>
                        <label>Descripcion:</label>
                        <input type="text" name="descriptionLong" value={state.descriptionLong} onChange={e => handleChange(e)}/>
                    </div>

                    <div>
                        <label>Descripcion:</label>
                        <input type="text" name="descriptionShort" value={state.descriptionShort} onChange={e => handleChange(e)}/>
                    </div>

                    <button type='submit'>Publicar</button>

                </form>
            </div>
        </div>
    )
}

export default FormCar