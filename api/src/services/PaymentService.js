const axios = require("axios");

class PaymentService {
  async createPayment() {
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: "test_user_41780143@testuser.com",
      items: [
        {
          title: "Membresia Premium  CARS MARKET",
          description: "Membresia Premium CARS MARKET",
          picture_url: "https://es.digitaltrends.com/wp-content/uploads/2022/07/mejores-deportivos.jpeg?p=1",
          category_id: "MEMBRESIA",
          quantity: 1,
          unit_price: 10000
        }
      ],
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "http://localhost:3000/home"
      }
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
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
        transaction_amount: 10000,
        currency_id: "COP"
      },
      back_url: "https://google.com.co",
      payer_email: "test_user_41780143@testuser.com"
    };

    const subscription = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    return subscription.data;
  }
}

module.exports = PaymentService;
