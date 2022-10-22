const axios = require("axios");

class PaymentService {
  async createPayment() {
    const url = "https://api.mercadopago.com/checkout/preferences";
    /* function filterForBrand(brand) {
      return async function (dispatch) {
        const { data } = await axios.get(`http://localhost:3001/cars`);
        
      };
    } */
    let transation = await axios.get("http://localhost:3001/transactions");
    let user= transation.data
    const body = {
      payer:[{
        payer_email: user? user[user.length-1].email:"nada",

        first_name:user? user[user.length-1].email:"nada",
      },],
      items: [
        {
          title: "Membresia Premium  CARS MARKET",
          description: "Membresia Premium ",
          picture_url:
            "https://es.digitaltrends.com/wp-content/uploads/2022/07/mejores-deportivos.jpeg?p=1",
          category_id: "MEMBRESIA",
          id:user? user[user.length-1].email:"nada",
          quantity: 1,
          unit_price: 1000,
          
          
        },
      ],
      auto_return: "approved",
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "http://localhost:3000/home",
      },
      ///cambiar por heroku
      notification_url:
        "https://090c-45-71-181-138.ngrok.io/notificacion?source_news=webhooks",
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });
    return payment.data;
  }

  async createSubscription() {
    const url = "https://api.mercadopago.com/preapproval";

    const body = {
      reason: "Suscripción de ejemplo",
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        transaction_amount: 1000,
        currency_id: "COP",
      },
      auto_return: "approved",
      back_url: "https://google.com.co",
      payer_email: "test_user_41780143@testuser.com",
    };

    const subscription = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return subscription.data;
  }
}

module.exports = PaymentService;
