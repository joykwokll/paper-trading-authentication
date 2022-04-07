// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const User = require("../models/Users");
const router = express.Router();

router.get("/seed", async (req, res) => {
    const userDetails = [
        {
            username: "Joy Kwok",
            email:"hi123@gmail.com",
            password:"12345"
        }
    ]
    await User.deleteMany({})
    await User.insertMany(userDetails)
    res.json(userDetails)
})

// =======================================
//              ROUTES
// =======================================
//Index route
router.get("/", (req, res) => {
    User.find()
        .then(userDetails => {
            res.json(userDetails)
        })
        .catch(err => {
            res.json(err)
        })
});


//Create route
router.post("/", async (req,res) => {
    console.log("body",req.body)
    try {
        const createdUser = await User.create(req.body);
        res.status(200).send(createdUser);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
});

module.exports = router;