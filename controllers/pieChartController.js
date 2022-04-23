// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const { find, create } = require("../models/PurchaseLog");
const PieChart = require("../models/PieChart");
const router = express.Router();

router.get("/seed", async (req, res) => {
  const pieChart = [
    {
      username: "Joy Kwok",  
      colour1: "#8884D8",
      colour2: "#9CACF1",
      colour3: "#8DD1E1",
      colour4: "#82CA9D",
      colour5: "#A4DE6C",
      colour6: "#D0ED57",
    },
    {
        username: "Ivan Leong",  
        colour1: "##ADD8E6",
        colour2: "#00FF00",
        colour3: "#FF00FF",
        colour4: "#FFA500",
        colour5: "#7FFD4",
        colour6: "#C0C0C0",
      },
  ];
  await PieChart.deleteMany({});
  await PieChart.insertMany(pieChart);
  res.json(pieChart);
});

// =======================================
//              ROUTES
// =======================================
//Index route
router.get("/", (req, res) => {
  PieChart.find()
    .then((pieChart) => {
      res.json(pieChart);
    })
    .catch((err) => {
      res.json(err);
    });
});

//Update route for pie chart log
router.put("/:username", async (req, res) => {
    const pieChartColour = await PieChart.findOneAndUpdate(
      { username: req.params.username },
      req.body
    );
    // res.json({ message: "Buy Updated" });
    res.json(pieChartColour);
  });
  

module.exports = router;

// 	 {name: 'Group A', value: 400, fill: '#8884d8',},
// 	 {name: 'Group B', value: 300, fill: '#9cacf1',},
//   {name: 'Group C', value: 300, fill: '#8dd1e1'},
//   {name: 'Group D', value: 200, fill: '#82ca9d'},
//   {name: 'Group E', value: 278, fill: '#a4de6c'},
//   {name: 'Group F', value: 189, fill: '#d0ed57'},
