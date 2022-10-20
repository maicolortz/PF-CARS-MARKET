const { Car, User, Transaction } = require("../db");
const axios = require("axios");
//const user = require("./userJson");
const { Sequelize } = require("sequelize");
const {Op} = require('sequelize')

// async function updateUser() {
//     try { 
//       console.log(user);
//       await User.bulkCreate(user);
//       console.log("User loaded correctly");
//     } catch (error) {
//       console.log(error);
//     }
//   };

  const getAllTransaction = async (req, res) => {
    try {
      const transactions = await Transaction.findAll(
        {
        include: [User]
        //where: {userId:{[Op.not]:null}},
 //       where: { name: { [Op.iLike]: '%'+name+'%'} },
      }
      );
      
      res.status(200).json(transactions);
      
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  };


  const createTransaction = async (req, res) => {
//    try {
      const {
        nroTransaction,
        type,
        amount,
        paymentMethod,
        date,
        userId,
        idTransaction,
        statusTransaction,
      } = req.body
  
      const transactionNew = await Transaction.create({
        nroTransaction,
        type,
        amount,
        paymentMethod,
        date,
        userId,
        idTransaction,
        statusTransaction,

      })
      res.json(transactionNew)
//      res.send("user created");
//    } catch (error) {
    //   res.send(error.message);
    // }
  }
  
  const getTransactionById= async (req, res)=>{

    const found = await Transaction.findByPk(req.params.id, 
        {include: User})
    
    if (!found) {
            return res.status(404).send('Error: user not found')
    }
    
    return res.json(found)

}
 


  module.exports = {
    getAllTransaction,
    createTransaction,
    getTransactionById

  };