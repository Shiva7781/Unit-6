const mongoose = require("mongoose");

// Step 1 :- creating the schema
const brandSchema = new mongoose.Schema(
    {
        brand_name: { type: String, required: true },
        product_id: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
            required: true,
        }],
    },
    {
        timestamps: true,
        versionKey: false
    }
);

// Step 2 : creating the model
module.exports = mongoose.model("brand", brandSchema);