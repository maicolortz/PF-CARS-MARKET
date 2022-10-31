
const { Car, User, Consult, Favourite, Review } = require("../db");
const axios = require("axios");
const { car, user } = require("./bdjson");
const { Sequelize, Op } = require("sequelize");

/* async function updateCar() {
  try {
    await User.bulkCreate(user);
    console.log("User loaded correctly");
    await Car.bulkCreate(car);
    console.log("Car loaded correctly");

  } catch (error) {
    console.log(error);
  }
} */


// const getAllCars = async (req, res) => {
//   try {
//     const cars = await Car.findAll({include:User});
//     res.status(200).json(cars);
//   } catch (error) {
//     res.status(error.status).send(error.message);
//   }
// };

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll({ include: User });

    const autosP = cars.filter(a => a.user.premium === true);
    const autosN = cars.filter(a => a.user.premium === false)

    const autos = autosP.concat(autosN)


    res.status(200).json(autos);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
};

const getCarForName = async (req, res) => {
  try {
    const { name } = req.query;
    const infototal = await Car.findAll({ include: User });
    const filtered = infototal.filter(e => e.name.toLowerCase()
      .includes(name.toLowerCase()))
    filtered.length
      ? res.status(200).send(filtered)
      : res.status(200).send("not has been founded");
  } catch (error) {
    res.send(error.message);
  }
};

// ordena por precio por query modo= priceAsc, o en su defecto priceDesc
const sortprice = async (req, res) => {
  var sorted = []
  const all = await Car.findAll({ include: User })
  if (req.query.modo) {
    try {
      let { modo } = req.query
      // En el Front es...

      sorted =
        modo === 'priceAsc'
          ? all.sort((a, b) => a.price - b.price)
          : all.sort((a, b) => b.price - a.price)
    }
    catch (error) {
      console.log(error)
    }
  }
  res.json(sorted)
}
const getCarForCondition = async (req, res) => {
  try {
    const { condition } = req.query;
    if (condition.toLowerCase() === "nuevo" || condition.toLowerCase() === "usado") {

      const infototal = await Car.findAll({ where: { condition: condition } }, { include: User });
      infototal.length
        ? res.status(200).send(infototal)
        : res.status(200).send([]);
    } else {
      res.send("la condicion deber ser nuevo o usado")
    }
  } catch (error) {
    res.send(error.message);
  }
}
const getCarForBrand = async (req, res) => {

  try {
    const { name } = req.query;
    const infototal = await Car.findAll({ where: { brand: name } }, { include: User });
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
      userId,
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
      userId
    }, { include: User });
    res.send("created");
  } catch (error) {
    res.send(error.message);
  }
};

//http://localhost:3001/cars/range?min=2008&max=2010
const getRangeModel = async (req, res) => {
  const { min, max } = req.query;
  try {
    const range = await Car.findAll({
      where: {
        year: {
          [Op.between]: [min, max]
        }
      }
    })

    res.json(range)
  } catch (error) {
    res.status(400).json(error)
  }
}
const getAutoById = async (req, res) => {

  const found = await Car.findByPk(req.params.id, { include: [ {model: User, include: [Review]}, Consult] });

  console.log(found);
  if (!found) {
    return res.status(404).send("Error: user not found");
  }

  return res.json(found);
};


const phisicaldeletionCar = async (req, res) => {
  const { id } = req.params;
  try {
    await Car.destroy({
      where: {
        id,
      },
    })
    res.send("eliminado")
  } catch (err) {
    res.json(err.message)
    return res.json(found);
  };
}

const updateCar = async (req, res) => {
  const { id } = req.params;
  const found = await Car.findByPk(id)
  try {
    for (const property in req.body) {
      if (property !== undefined) {
        found[property] = req.body[property];
      };
    };
    await found.save();
    res.send("Actualizado");
  }
  catch (error) {
    return error;
  };
};

const updateActive = async (req, res) => {

  const { active } = req.query
  const { id } = req.params
  try {
    const modificacion = await Car.findByPk(id)
    modificacion.update({ active: active })
    await modificacion.save()
    res.json(modificacion)
  } catch (error) {

    res.status(400).json(error)
  }
}

module.exports = {
  //updateCar,
  getAllCars,
  getAutoById,
  createCar,
  getCarForName,
  getCarForBrand,
  getCarForCondition,
  sortprice,
  getRangeModel,
  updateCar,
  phisicaldeletionCar,
  updateActive
  // logicaldeletionCar
};
