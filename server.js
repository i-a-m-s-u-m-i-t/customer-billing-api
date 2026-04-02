const express = require("express");
const mongoose = require("mongoose");
const billingRoutes = require("./routes/billingRoutes");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/billingDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/billing", billingRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
