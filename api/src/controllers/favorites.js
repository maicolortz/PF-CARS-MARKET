const { Car, User, Transaction,Favourite } = require("../db");
const axios = require("axios");
const { Sequelize } = require("sequelize");
const {Op} = require('sequelize');
//const Favourite = require("../models/Favourite");


const getAllFavorites = async (req, res) => {
    let favorites
    try {
          if (req.query.userId){
            let {userId}=req.query
            favorites = await Favourite.findAll(
              {
                include: [User,Car],
                where: {userId:{[Op.eq]:userId}}
              }
            );
          } else {
                  favorites = await Favourite.findAll(
                    {include: [User,Car]}
                    );
                  } 
          res.status(200).json(favorites);
        } catch (error) {
          res.status(error.status).send(error.message);
        }
};


const createFavourite = async (req, res) => {
//    try {
  const {
          carId,
          userId
        } = req.body;
      const favouriteNew = await Favourite.create({
        userId,
        carId
      });
  favouriteNew.setCars(await Car.findByPk(carId));
  favouriteNew.setUsers(await User.findByPk(userId));

  res.json(favouriteNew);
//      res.send("user created");
//    } catch (error) {
    //   res.send(error.message);
    // }
  }


  const deleteFavourite = async (req,res)=>{
    const{userId, carId}=req.body;
    try{
      const found = await Favourite.findOne({
        where:{[Op.and]:[
          {userId:userId},
          {carId:carId} ]
          }
        });
      await found.destroy();
      res.send("Favorito eliminado");
      //return res.json(found);
    }catch(err){
      res.json(err.message);
    };
  };

  module.exports = {
    getAllFavorites,
    createFavourite,
    deleteFavourite,
  };