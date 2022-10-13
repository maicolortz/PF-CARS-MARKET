const { Car, User } = require("../db");
const axios = require("axios");
const car = require("./bdjson");

async function updateCar(){
    try{
    //    var countries = (await axios("https://restcountries.com/v3/all")).data
    //         .map(e =>({
    //         id: e.cca3,
    //         name: e.name.common, 
    //         flag: e.flags[1],
    //         continent: e.region,
    //         capital: e.capital? e.capital[0] : "Don't have capital",            
    //         subregion: e.subregion,
    //         area: e.area, 
    //         population: e.population
    //         }))
            
        // const dbCountries = await Countries.findAll();
        // if(dbCountries.length) return null

        await Car.bulkCreate(car) 
        console.log("Car loaded correctly")
    }catch(error){
        console.log(error)
    }
}

const getAllCars = async (req,res)=>{
    try {
        const cars = await Car.findAll()
        res.status(200).json(cars)
    } catch (error) {
        res.status(error.status).send(error.message)
    }
}


const getAutoById = async (id) => {
    try {
        let searchAuto = await Car.findByPk(id)

        let searchById = {
            id: searchAuto.id,
            name: searchAuto.name,
            brand: searchAuto.brand,
            model: searchAuto.model,
            year: searchAuto.year,
            color: searchAuto.color,
            oil: searchAuto.oil,
            gate: searchAuto.gate,
            kilometres: searchAuto.kilometres,
            descripcionLong: searchAuto.descripcionLong,
            image: searchAuto.image,
            location: searchAuto.location,
            price: searchAuto.price,
            condition: searchAuto.condition,
            transmition: searchAuto.transmition,
        }
       console.log(searchById);
       return searchById;
      

    }catch(error){
        return error
    }
}



module.exports = {
    updateCar, getAllCars, getAutoById
}

