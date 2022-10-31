const express = require("express");
const router = express.Router();
const cors = require("cors");
const PaymentController = require("../controllers/PaymentController");
const PaymentService = require("../services/PaymentService");
const mercadopago = require("mercadopago");
const { payment } = require("mercadopago");
const PaymentInstance = new PaymentController(new PaymentService());
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(cors());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const https = require("https");
const axios = require("axios");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const { parse, stringify } = require("flatted");
router.use(bodyParser.json());
mercadopago.configure({
  access_token: process.env.access_token,
  integrator_id: "dev_24c65fb163bf11ea96500242ac130004",
});
router.get("/paymentdate", function (req, res, next) {
  return res.json({
    "/payment": "generates a payment link",
    "/subscription": "generates a subscription link",
  });
});
router.get("/payment", function (req, res) {
  PaymentInstance.getPaymentLink(req, res);
});

///
router.get("/paymentprueba", async function (req, res) {
  const url = "https://api.mercadopago.com/checkout/preferences";
 
  let transation = await axios.get(process.env.LINKDEBACK + "/transactions");
  let user = transation.data;
  const body = {
    items: [
      {
        title: "Membresia Premium  CARS MARKET",
        description: "Membresia Premium ",
        picture_url:
          "https://es.digitaltrends.com/wp-content/uploads/2022/07/mejores-deportivos.jpeg?p=1",
        category_id: "MEMBRESIA",
        id: req.query.email,
        quantity: 1,
        unit_price: 1000,
      },
    ],
    auto_return: "approved",
    back_urls: {
      failure: "/failure",
      pending: "/pending",
      success: process.env.linkfront + "/home",
    },
    ///cambiar por heroku
    notification_url:
      process.env.LINKAUTENTICADO + "/notificacion?source_news=webhooks",
  };

  const payment = await axios.post(url, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  });
  res.json(payment.data);
});
router.get("/success", function (req, res) {
  res.send("success", req.query);
  console.log(req.query);
});
router.get("/subscription", function (req, res, next) {
  PaymentInstance.getSubscriptionLink(req, res);
});

let id;
let transation_id = [];
router.post("/notificacion", async function (req, res, next) {
  console.error("WEBHOOKS-q", JSON.stringify(req.query));
  console.error("WEBHOOKS-b", JSON.stringify(req.body));
  console.error("WEBHOOKS-id", req.query["data.id"]);
  transation_id.push(req.query["data.id"]);
  let d = {
    nroTransaction: req.query["data.id"],
  };
  axios.post(process.env.LINKDEBACK + "/transactionsMercadoPago", d);
  /*  let d = {
    nroTransaction: req.query["data.id"],
    type: "Compra",
    amount: "75000",
    email: "consultasMercadoPago",
    date: "2022/10/18",
    userId: "1",
    idTransaction: "245",
    statusTransaction: "",
  }; */
  //me guarda las consultas de mercadopago en transactions
  //axios.post("http://localhost:3001/transactions", d);
  //let transation = await axios.post("http://localhost:3001/transactions",datos);
  res.sendStatus(200);
});
const getInfototal = async (id) => {
  const dataid = await getInfoMP(id);
  console.log(dataid);
  let d = {
    nroTransaction: id,
    type: "Compra",
    amount: "75000",
    email: "consultasMercadoPago",
    date: "2022/10/18",
    userId: "1",
    idTransaction: "245",
    statusTransaction: "",
  };

  axios.post(process.env.LINKDEBACK + "/transactions", d);
};
const funct = async () => {};
const getInfoMP = async (id) => {
  const apiExterna = await axios.get(
    process.env.LINKDEBACK + "/transMercado/" + id
  );
  return apiExterna;
};
///transaccion/50701776136
router.get("/transMercadoUltimo", async (req, res) => {
  const { data } = await getInfoAPI(transation_id[transation_id.length - 1]);
  res.json(JSON.parse(stringify(data)));
}); ///transMercado/50733196450
router.get("/transMercado/:id", async (req, res) => {
  const data = await getInfoAPI(req.params.id);
  const datos = {
    idMercadopago: req.params.id,
    email: data.data.additional_info.items[0].id,
    status: data.data.status,
  };
  let d = {
    nroTransaction: req.params.id,
    type: "Compra",
    amount: "75000",
    email: data.data.additional_info.items[0].id,
    date: "2022/10/18",
    userId: "1",
    idTransaction: "245",
    statusTransaction: data.data.status,
  };
  axios.post(process.env.LINKDEBACK + "/transactions", d);
  res.jsonp(datos);
  //data.payer --->informacion no sirve
  //data.status---->estado de pago
  //data.items
  //data.data.additional_info.items[0].id--------->  correo
  //console.log(JSON.stringify(data.data.additional_info.items[0].id))
});

const getInfoAPI = async (id) => {
  const apiExterna = await axios.get(
    "https://api.mercadopago.com/v1/payments/" + id
  );
  return apiExterna;
};
router.get("/notificacion", function (req, res) {
  //res.send(id);  /* 'https://api.mercadopago.com/v1/payments/{id}' \
  //  -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' */
  res.send(datos);
});

router.get("");

module.exports = router;
