const express = require("express");
   const bodyParser = require("body-parser");
   const cors = require('cors');
   const { sendFcmNotification } = require("../notificationLogic");

   const app = express();
   app.use(bodyParser.json());
   app.use(cors());

   app.post("/api/send", async (req, res) => {
     const { to, notificationBody } = req.body;
     console.log(to, notificationBody);
     try {
       const result = await sendFcmNotification(to, notificationBody);
       res.status(200).json({ message: "Notification sent successfully", result: result });
     } catch (error) {
       res.status(500).json({ error: "Error sending notification" });
     }
   });

   app.get("/api", (req, res) => {
     res.status(200).json({ message: "For Testing" });
   });

   module.exports = app;