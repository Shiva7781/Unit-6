const mongoose = require("mongoose");

// Step 1 :- creating the schema
const categorySchema = new mongoose.Schema(
    {
        category_name: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

// Step 2 : creating the model
module.exports = mongoose.model("category", categorySchema);