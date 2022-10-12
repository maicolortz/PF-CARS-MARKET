import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './FormCar.css';



function FormCar() {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        name: "",
        marca: "",
        modelo: "",
        color: "",
        año: "",
        kilometros: "",
        ubicacion: "",
        precio: "",
        descripcionLarga: "",
        imagen: "",
    })

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch()
        setState({
            name: "",
            marca: "",
            modelo: "",
            color: "",
            año: "",
            kilometros: "",
            ubicacion: "",
            precio: "",
            descripcionLarga: "",
            imagen: "",
        })
    }

    function validate(state) {
        let errors = {};

        if(!state.name){
            errors.name = "Se requiere un titulo"
        } else if (!/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g.test(state.name)) {
            errors.name = "El titulo no puede tener caracteres especiales"
        }
        if(!state.marca){
            errors.marca = "Se requiere marca del auto"
        }
        if(!state.modelo){
            errors.modelo = "Se requiere modelo del auto"
        }
        if(!state.color){
            errors.color = "Se requiere un color"
        }
        if(!state.año){
            errors.año = "Se requiere año del auto"
        } else if(state.año < 1900 || state.año > 2024) {
            errors.año = "Año invalido"
        }
        if(!state.kilometros){
            errors.kilometros = "Se requiere kilometros del auto"
        }
        if(!state.ubicacion){
            errors.ubicacion = "Se requiere ubicacion"
        }
        if(!state.precio){
            errors.precio = "Indicar precio de venta"
        }
        if(!state.imagen){
            errors.imagen = "Se requiere imagen del auto"
        }
        return errors;
    }

        const handleChange = (e) => {
            setState({...state, [e.target.name]: e.target.value});
            setErrors(validate({...state, [e.target.name]: e.target.value}));
        }


    useEffect(() => {

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
                        <input type="text" name="marca" value={state.marca} onChange={e => handleChange(e)}/>
                        {errors.marca && (<p>{errors.marca}</p>)}
                    </div>

                    <div>
                        <label>Modelo:</label>
                        <input type="text" name="modelo" value={state.modelo} onChange={e => handleChange(e)}/>
                        {errors.modelo && (<p>{errors.modelo}</p>)}
                    </div>

                    <div>
                        <label>Color:</label>
                        <input type="text" name="color" value={state.color} onChange={e => handleChange(e)}/>
                        {errors.color && (<p>{errors.color}</p>)}
                    </div>

                    <div>
                        <label>Año:</label>
                        <input type="text" name="año" value={state.año} onChange={e => handleChange(e)}/>
                        {errors.año && (<p>{errors.año}</p>)}
                    </div>

                    <div>
                        <label>Kilometros:</label>
                        <input type="number" name="kilometros" value={state.kilometros} onChange={e => handleChange(e)}/>
                        {errors.kilometros && (<p>{errors.kilometros}</p>)}
                    </div>

                    <div>
                        <label>Ubicacion:</label>
                        <input type="text" name="ubicacion" value={state.ubicacion} onChange={e => handleChange(e)}/>
                        {errors.ubicacion && (<p>{errors.ubicacion}</p>)}
                    </div>

                    <div>
                        <label>Precio:</label>
                        <input type="number" name="precio" value={state.precio} onChange={e => handleChange(e)}/>
                        {errors.precio && (<p>{errors.precio}</p>)}
                    </div>

                    <div>
                        <label>Imagen:</label>
                        <input type="text" name="image" value={state.imagen} onChange={e => handleChange(e)}/>
                        {errors.imagen && (<p>{errors.imagen}</p>)}
                    </div>

                    <div>
                        <label>Descripcion:</label>
                        <input type="text" name="descripcionLarga" value={state.descripcionLarga} onChange={e => handleChange(e)}/>
                    </div>

                    <button type='submit'>Publicar</button>

                </form>
            </div>
        </div>
    )
}

export default FormCar