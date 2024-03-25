const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Oy6CUSEhzH6pqqe9ZPmA1q68KeC6vjviT1HfN2d0bTpeympqwk0aGJYCTKpN7ZVBMsz8Jk2IAH3Xhek3Iw1fSkH00ei6PzNt3"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, respose) => respose.status(200).send("hello world"));
// app.get("/sd", (request, respose) => respose.status(200).send("hello world from swarup"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
});

// App config

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/clone-c68e3/us-central1/api
