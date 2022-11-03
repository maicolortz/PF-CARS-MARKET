const { Router } = require("express");
const { transporter } = require("../controllers/sendEmail");

const router = Router();

router.post("/ForSeller", async (req, res) => {
    const { firstName, lastName, emailbuyer, message, emailSeller, phone, car } = req.body;

    try {
        await transporter.sendMail({
            from: `${firstName} ${lastName}: ${emailbuyer}`,// Quien manda el email
            to: emailSeller,// Email destino
            subject: "Publicaciones Cars-Market",//Asunto del correo
            text: `${message}`,
            html: `
            <h2>Correo enviado desde Cars-Market</h2>
            <h4>Tiene un pregunta sobre "<strong>${car}</strong>" de:</h4>

            <span><strong>Nombre: </strong>${firstName} ${lastName}</span><br/>
            <span><strong>Email: </strong>${emailbuyer}</span><br/>
            <span><strong>Telefono: </strong>${phone ? phone : "No especificado"}</span>
            
            <hr />
            <h3>Instrucciones:</h3>
            <p><strong>1. </strong>No responda directectamente este correo, dar click al correo proporcionado.</p>
            <p><strong>2. </strong>Guarda este correo para no perder las instrucciones.</p>
            <p><strong>3. </strong>Responder la consulta a traves del correo o por el teléfono (si se especifico) proporcionados arriba.</p>
            <p><strong>4. </strong>Usar un lenguaje adecuado a la hora de dar una respuesta.</p>
            <p><strong>5. </strong>No proporcionar información personal adicional de no estar seguro.</p>
            <p><strong>6. </strong>En caso de concretar un encuentro para la venta, pautar un lugar seguro con el comprador.</p>
            <p><strong>7. </strong>Una vez concretada la venta, debera dirigirse a su perfil de usuario en nuestra pagina web, ir 
            a "mis publicaciones", y dar click en "vendido" para sacar la publicación del vehiculo vendido.</p>
            <p><strong>8. </strong>Una vez le de click en "vendido" sera redirigido a un formulario donde debera llenarlo con los datos 
            del comprador para que le califique.</p>
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

router.post("/copyOfMailBuyer", async (req, res) => {
    const { firstName, lastName, emailbuyer, message, emailSeller, phone, car } = req.body;

    try {
        await transporter.sendMail({
            from: `${firstName} ${lastName}: ${emailbuyer}`,// Quien manda el email
            to: emailbuyer,// Email destino
            subject: "Publicaciones Cars-Market",//Asunto del correo
            text: `${message}`,
            html: `
            <h2>Esto es una copia de su su mensaje al vendedor sobre ${car}</h2>
            <p><strong>Por favor, NO responder directectamente este correo!!!</strong></p>
            <p><strong>Su mensaje ha sido enviado exitosamente al vendedor, pronto se contactara con usted</strong></p>
            
            <hr />
            <span><strong>Nombre: </strong>${firstName} ${lastName}</span><br/>
            <span><strong>Email: </strong>${emailbuyer}</span><br/>
            <span><strong>Telefono: </strong>${phone ? phone : "No especificado"}</span>
            <hr />
            <h3>Mensaje:</h3>
            <p>${message}</p>
            <hr />
            `
        });
        res.status(200).send(`Copia de correo enviado a: ${emailbuyer}`);

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
            subject: "Califica al vendedor (Cars-Market)",//Asunto del correo
            text: `${message}`,
            html: `
            <h2>Correo enviado por el vendedor</h2>
 
            <span>Hola, <strong>${firstName} ${lastName}</strong>, <strong>${firstNameSeller} ${lastNameSeller}</strong> 
            te envio un mensaje para que lo califiques a traves del siguiente <a href=http://localhost:3000/sellerRatingForm?id=${idSeller}>link</a>.</span><br/>
            
            <hr />
            <h3>Instrucciones:</h3>
            <p><strong>1. </strong>No responda directectamente este correo.</p>
            <p><strong>2. </strong>Guarda este correo para no perder las instrucciones.</p>
            <p><strong>3. </strong>Respondale directamente al vendedor sobre el correo con el cual se estuvo comunicando con él.</p>
            <p><strong>4. </strong>Usar un lenguaje adecuado a la hora de dar una respuesta.</p>
            <p><strong>5. </strong>Debe tener su sesión iniciada, antes de darle click al link, de lo contrario no le dejara llenar el formulario.</p>
            <p><strong>6. </strong>Es importante llenar el formulario para tener un feedback del proceso compra/venta.</p>
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

router.post("/ForAdmin", async (req, res) => {
    const { idUser, firstName, lastName, emailUser, message } = req.body;
    const emailAdmin = "pancracio3nov@gmail.com";

    try {
        await transporter.sendMail({
            from: `${firstName} ${lastName}`,// Quien manda el email
            to: emailAdmin,// Email del administrador
            subject: "Usuario bloqueado (Cars-Market)",//Asunto del correo
            text: `${message}`,
            html: `
            <h2>Correo enviado por el usuario</h2>
  
            <hr />
            <span><strong>ID Usuario: </strong>${idUser}</span><br/>
            <span><strong>Nombre: </strong>${firstName} ${lastName}</span><br/>
            <span><strong>Email: </strong>${emailUser}</span><br/>
            <hr />

            <h3>Mensaje:</h3>
            <p>${message}</p>
            `
        });
        res.status(200).send(`Correo enviado a: ${emailAdmin}`);

    } catch (error) {
        res.status(500).send("Error en el servidor al enviar el correo");
    }
});

router.post("/ForUnlockUser", async (req, res) => {
    const { firstName, lastName, emailUser } = req.body;

    try {
        await transporter.sendMail({
            from: "Admin Car-Market",// Quien manda el email
            to: emailUser,// Email del usuario a desbloquear
            subject: "Usuario desbloqueado (Car-Market)",//Asunto del correo
            text: "",
            html: `
            <h2>Correo enviado desde Car-Market</h2>
  
            <hr />
            <h3>Mensaje:</h3>
            <p>Hola, <strong>${firstName} ${lastName}</strong>, le notificamos que su cuenta <strong>${emailUser}<strong> ha sido desbloqueada</p>
            <hr />

            `
        });
        res.status(200).send(`Correo enviado a: ${emailUser}`);

    } catch (error) {
        res.status(500).send("Error en el servidor al enviar el correo");
    }
});

module.exports = router;

