const { Router } = require('express');
// Importar todos los routers;
const router = Router();
const carsMain = require("./cars");
const usersMain = require("./users");
const payment = require("./payment");
const sendEmail = require("./SendEmail");
const consultsMain = require("./consults")

const axios = require("axios")

axios.defaults.headers.common = { 'Authorization': `bearer ${process.env.ACCESS_TOKEN}` }
const transactionsMain = require("./transactions");
const transactionsMercadoPago = require('./transactionsMercadoPago');
router.use("/", payment)
router.use("/cars", carsMain);
router.use("/users", usersMain);
router.use("/transactions", transactionsMain);
router.use("/consults", consultsMain);
router.use("/transactionsMercadoPago", transactionsMercadoPago)
router.use("/sendEmail", sendEmail);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
