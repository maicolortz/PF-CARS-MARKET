const { Router } = require("express");
const { transporter } = require("../controllers/sendEmail");

const router = Router();

router.post("/", async (req, res) => {
    const { firstName, lastName, emailbuyer, message, emailSeller, phone } = req.body;

    try {
        await transporter.sendMail({
            from: `${firstName} ${lastName}: ${emailbuyer}`,// Quien manda el email
            to: emailSeller,// Email destino
            subject: "Publicaciones Car-Market",//Asunto del correo
            text: `${message}`,
            html: `
            <h2>Correo enviado desde Car-Market</h2>
 
            <span><strong>Nombre: </strong>${firstName} ${lastName}</span><br/>
            <span><strong>Email: </strong>${emailbuyer}</span><br/>
            <span><strong>Telefono: </strong>${phone}</span>
            <hr />
            <h3>Mensaje:</h3>
            <p>${message}</p>
            `
        });
        res.status(200).send(`Correo enviado a: ${emailSeller}`);

    } catch (error) {
        res.status(500).send("Error en el servidor al enviar el correo");
    }
});

module.exports = router;

