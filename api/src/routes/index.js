const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const carsall = require("./cars");

const router = Router();

router.use("/cars",carsall); 



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
