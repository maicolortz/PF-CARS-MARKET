const { Router } = require("express");
const { transporter } = require("../controllers/sendEmail");

const router = Router();

router.post("/ForSeller", async (req, res) => {
    const { firstName, lastName, emailbuyer, message, emailSeller, phone, car } = req.body;

    try {
        await transporter.sendMail({
            from: `${firstName} ${lastName}: ${emailbuyer}`,// Quien manda el email
            to: emailSeller,// Email destino
            subject: "Publicaciones Car-Market",//Asunto del correo
            text: `${message}`,
            html: `
            <h2>Correo enviado desde Car-Market</h2>
            <h4>Tiene un pregunta sobre "<strong>${car}</strong>" de:</h4>

            <span><strong>Nombre: </strong>${firstName} ${lastName}</span><br/>
            <span><strong>Email: </strong>${emailbuyer}</span><br/>
            <span><strong>Telefono: </strong>${phone ? phone : "No especificado"}</span>
            <hr />
            <h3>Instrucciones:</h3>
            <p><strong>1. </strong>No responda directectamente este correo, dar click al correo proporcionado.</p>
            <p><strong>2. </strong>Responder consulta a traves del correo o por whatsapp (si se especifico) proporcionados arriba.</p>
            <p><strong>3. </strong>Usar un lenguaje adecuado en la respuesta.</p>
            <p><strong>4. </strong>No proporcionar información personal adicional de no estar seguro.</p>
            <p><strong>5. </strong>En caso de concretar un encuentro para la venta, pautar un lugar seguro con el comprador.</p>
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

router.post("/ForBuyer", async (req, res) => {
    const { firstName, lastName, emailbuyer, message, emailSeller, idSeller, firstNameSeller, lastNameSeller } = req.body;

    try {
        await transporter.sendMail({
            from: `${firstNameSeller} ${lastNameSeller}: ${emailSeller}`,// Quien manda el email
            to: emailbuyer,// Email destino
            subject: "Califica al vendedor (Car-Market)",//Asunto del correo
            text: `${message}`,
            html: `
            <h2>Correo enviado por el vendedor</h2>
 
            <span>Hola, <strong>${firstName} ${lastName}</strong>, <strong>${firstNameSeller} ${lastNameSeller}</strong> 
            te envio un mensaje para que lo califiques a traves del siguiente <a href=http://localhost:3000/sellerRatingForm?id=${idSeller}>link</a>.</span><br/>
            <hr />
            <h3>Mensaje:</h3>
            <p>${message}</p>
            `
        });
        res.status(200).send(`Correo enviado a: ${emailbuyer}`);

    } catch (error) {
        res.status(500).send("Error en el servidor al enviar el correo");
    }
});

module.exports = router;

