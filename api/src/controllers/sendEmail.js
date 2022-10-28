const nodemailer = require("nodemailer");
const {
    CONFIG_EMAIL,
    CODE_EMAIL
} = process.env;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,//true for 465, false for other ports
    auth: {
        user: CONFIG_EMAIL,//Correo del usuario con la autenticacion en 2 paso
        pass: CODE_EMAIL,//Codigo de google de aplicacion
    }
});
transporter.verify().then(()=>{
    console.log("Todo listo para el envio de correos");
});

module.exports = { transporter };

