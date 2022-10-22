const { Car, User, Transaction ,TransactionsMercadoPago} = require("../db");
const axios = require("axios");
//const user = require("./userJson");
const { Sequelize } = require("sequelize");
const {Op} = require('sequelize');

  const getAllTransactionMercadoPago = async (req, res) => {
    try {
      const transactions = await TransactionsMercadoPago.findAll()
      res.status(200).json(transactions);
    } catch (error) {
      console.error(error)
    }
  };

  const createTransactionMercadoPago = async (req, res) => {
//    try {
      const {
        nroTransaction,
      } = req.body
  
      const transactionNew = await TransactionsMercadoPago.create({
        nroTransaction,
      })
      res.json(transactionNew)

  }
  
  module.exports = {
    getAllTransactionMercadoPago,
    createTransactionMercadoPago,

  };