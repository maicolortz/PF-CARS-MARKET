const { Router } = require('express');
// Importar todos los routers;
const router = Router();
const carsMain = require("./cars");
const usersMain = require("./users");
const payment =require("./payment")

router.use("/",payment)
router.use("/cars",carsMain); 
router.use("/users",usersMain); 


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
