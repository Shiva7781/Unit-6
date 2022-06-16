const mongoose = require("mongoose");
const restaurantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    location: {}
},
{
    versionKey: false,
    timestamps: false
}
);

module.exports = mongoose.model("restaurant",restaurantSchema)