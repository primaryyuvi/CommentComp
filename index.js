const express = require("express");
const bodyParser = require("body-parser");
const {
    sendFcmNotification,
} = require("./notificationLogic");

const app = express();
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
  const { to, notificationBody } = req.body;
  try {
    const result = await sendFcmNotification(to, notificationBody);
    res.status(200).json({ message: "Notification sent successfully", result: result });
  } catch (error) {
    res.status(500).json({ error: "Error sending notification" });
  }
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "For Testing" });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
