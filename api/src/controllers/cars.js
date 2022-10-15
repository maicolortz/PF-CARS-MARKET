const { Car, User } = require("../db");
const axios = require("axios");
const car = require("./bdjson");
const { Sequelize } = require("sequelize");

async function updateCar() {
  try {
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

    await Car.bulkCreate(car);
    console.log("Car loaded correctly");
  } catch (error) {
    console.log(error);
  }
}

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.status(200).json(cars);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
};
const getCarForName = async (req, res) => {
  try {
    const {name}=req.query;
      const infototal = await Car.findAll();
    const filtered=infototal.filter(e=>e.name.toLowerCase()
    .includes(name.toLowerCase()))
    filtered.length
      ? res.status(200).send(filtered)
      : res.status(404).send("not has been founded");
  } catch (error) {
    res.send(error.message);
  }
};

// ordena por precio por query modo= priceAsc, o en su defecto priceDesc
const sortprice = async (req,res)=>{
  var sorted=[]
  const all = await Car.findAll({include: User})
     if (req.query.modo) {
         try{
          let {modo} = req.query
      // En el Front es...
     
          sorted =
             modo === 'priceAsc'
               ? all.sort((a, b) => a.price - b.price)
               : all.sort((a, b) => b.price - a.price)
          }
         catch(error){
             console.log(error)
         } 
       }
  res.json(sorted)
  }
const getCarForCondition=async(req,res)=>{
    try{
        const {condition}=req.query;
        if(condition.toLowerCase()==="nuevo" ||condition.toLowerCase()==="usado" ){

          const infototal = await Car.findAll({ where: { condition: condition } });
          infototal.length
          ? res.status(200).send(infototal)
          : res.status(404).send("not has been founded");
        }else {
          res.send("la condicion deber ser nuevo o usado")
        }
    } catch (error) {
        res.send(error.message);
      }
}
const getCarForBrand = async (req, res) => {
  try {
    const { name } = req.query;
    const infototal = await Car.findAll({ where: { brand: name } });
    infototal.length
      ? res.status(200).send(infototal)
      : res.status(404).send("not has been founded");
  } catch (error) {
    res.send(error.message);
  }
};
const createCar = async (req, res) => {
  try {
    const {
      name,
      brand,
      model,
      year,
      color,
      oil,
      gate,
      kilometres,
      descriptionShort,
      descriptionLong,
      image,
      location,
      price,
      condition,
      transmition,
    } = req.body;

    const car = await Car.create({
      name,
      brand,
      model,
      year,
      color,
      oil,
      gate,
      kilometres,
      descriptionShort,
      descriptionLong,
      image,
      location,
      price,
      condition,
      transmition,
    });
    res.send("created");
  } catch (error) {
    res.send(error.message);
  }
};
const getRangeModel=async (req,res)=>{
	const{min,max}=req.query
	try{
	const range =await Car.findAll({
		where:{
			model:{
			[Op.between]:[min,max]
			}
		}
	})
	res.json(range)
	}catch(error){
	res.status(400).json(error)
	}
}
const getAutoById = async (id) => {
  try {
    let searchAuto = await Car.findByPk(id);

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
      descriptionLong: searchAuto.descriptionLong,
      image: searchAuto.image,
      location: searchAuto.location,
      price: searchAuto.price,
      condition: searchAuto.condition,
      transmition: searchAuto.transmition,
    };
    console.log(searchById);
    return searchById;
  } catch (error) {
    return error;
  }
};

module.exports = {
  updateCar,
  getAllCars,
  getAutoById,
  createCar,
  getCarForName,
  getCarForBrand,
  getCarForCondition,
  sortprice,
  getRangeModel
};
