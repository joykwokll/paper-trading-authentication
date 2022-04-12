// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const { find, create } = require("../models/purchaseLog");
const PurchaseLog = require("../models/purchaseLog");
const router = express.Router();

router.get("/seed", async (req, res) => {
  const purchaseDetails = [
    { date: "2021-01-22", ticker: "AAPL", quantity: 3, purchasePrice: 5 },
    { date: "2021-01-28", ticker: "GOOGL", quantity: 25, purchasePrice: 51 },
  ];
  await PurchaseLog.deleteMany({});
  await PurchaseLog.insertMany(purchaseDetails);
  res.json(purchaseDetails);
});

// =======================================
//              ROUTES
// =======================================
//Index route
router.get("/", (req, res) => {
  User.find()
    .then((purchaseDetails) => {
      res.json(purchaseDetails);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;