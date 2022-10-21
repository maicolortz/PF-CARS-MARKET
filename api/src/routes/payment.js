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
const {parse, stringify} = require('flatted');
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
router.get("/payment", function (req, res, next) {
  PaymentInstance.getPaymentLink(req, res);
});
router.get("/success", function (req, res) {
  res.render("success", req.query);
  console.log(req.query);
});
router.get("/subscription", function (req, res, next) {
  PaymentInstance.getSubscriptionLink(req, res);
});

let id;
let transation_id;
router.post("/notificacion", async function (req, res, next) {
  console.error("WEBHOOKS-q", JSON.stringify(req.query));
  console.error("WEBHOOKS-b", JSON.stringify(req.body));
  console.error("WEBHOOKS-id", req.query["data.id"]);
transation_id.push(req.query["data.id"])
  res.sendStatus(200);
});
///transaccion/50701776136
router.get("/transaccion/:id", async (req, res) => {
  const data =await getInfoAPI(req.params.id);
  console.log(data)
  res.json(JSON.parse(stringify(data.data)))    
})

const getInfoAPI = async (id) => {
  const apiExterna = await axios.get(
    "https://api.mercadopago.com/v1/payments/"+id
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
