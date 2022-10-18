const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const carsMain = require("./cars");
const usersMain = require("./users");

const router = Router();

router.use("/cars",carsMain); 
router.use("/users",usersMain); 


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
