const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const carsall = require("./cars");
const payment =require("./payment")
const router = Router();

router.use("/cars",carsall); 
router.use("/",payment)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
