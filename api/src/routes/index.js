const { Router } = require('express');
// Importar todos los routers;
const router = Router();
const carsMain = require("./cars");
const usersMain = require("./users");
const payment =require("./payment")
const consultsMain = require("./consults") 

const axios =require("axios")

axios.defaults.headers.common = {'Authorization': `bearer ${process.env.ACCESS_TOKEN}`}
const transactionsMain = require("./transactions")
router.use("/",payment)
router.use("/cars",carsMain); 
router.use("/users",usersMain); 
router.use("/transactions",transactionsMain); 
router.use("/consults",consultsMain); 
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
