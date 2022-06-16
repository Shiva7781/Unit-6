const express = require("express");
const restaurant = require("../model/restaurant");

const Restaurant = require("../models/restaurant");

const router = express.Router();

router.get("/", async (req,res) => {
    try {
        const restaurants = await Restaurant.find({ location: { $near: { $geometry: { type: "Point", coordinates: [ 77.57902753891177,12.963268283597573] } }
    }}).lean().exec();
        res.status(200).send(restaurants)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

router.post("/create", async (req,res) => {
    try {
        const restaurant = await Restaurant.create(req.body);
        return res.status(200).send(restaurant)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.patch("/:id", async (req,res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {new :true}); 
        return res.status(200).send(restaurant)   
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

router.delete("/:id", async (req,res) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id); 
        return res.status(200).send(restaurant);
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

module.exports = router;