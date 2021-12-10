const express = require("express");
const mqtt = require("mqtt");
const url = require("./url");

app = express();

const client = mqtt.connect(url.broker);

client.subscribe("stal/cv"); // temperature sensor

let temperature;

client.on("message", function (topic, payload, packet) {
  if (topic === "stal/cv") {
    temperature = payload;
    console.log(topic + " temperature: " + payload + " °C");
  }
});

// //--------------------------------------------------------------------

function sendLastTemperature(res) {
  res.send(temperature);
}

app.get("/:typeRequest", function (req, res) {
  const typeRequest = req.params.typeRequest;
  res.set("Access-Control-Allow-Origin", "*");

  if (typeRequest === "get-last-temperature") {
    sendLastTemperature(res);
  }
});

// app.get("/:typeRequest/:numberOfDays", function (req, res) {
//   const typeRequest = req.params.typeRequest;
//   res.set("Access-Control-Allow-Origin", "*");

//   if (typeRequest === "get-last-number-days-measurements") {
//     const numberOfDays = req.params.numberOfDays;
//     sendLastNumberOfDaysMeasurements(res, numberOfDays);
//   }
// });

//--------------------------------------------------------------------
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
