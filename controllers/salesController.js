// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const { find, create } = require("../models/purchaseLog");
const SalesLog = require("../models/salesLog");
const router = express.Router();

router.get("/seed", async (req, res) => {
  const salesDetails = [
    { date: "2021-02-22", ticker: "AAPL", quantity: 3, salesPrice: 15 },
    { date: "2021-02-28", ticker: "GOOGL", quantity: 25, salesPrice: 100 },
  ];
  await SalesLog.deleteMany({});
  await SalesLog.insertMany(salesDetails);
  res.json(salesDetails);
});

// =======================================
//              ROUTES
// =======================================
//Index route
router.get("/", (req, res) => {
  User.find()
    .then((salesDetails) => {
      res.json(salesDetails);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;