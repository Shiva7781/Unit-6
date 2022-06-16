const mongoose = require("mongoose");

// Step 1 :- creating the schema
const orderSchema = new mongoose.Schema(
  {
    product_id: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    }],
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

// Step 2 : creating the model
module.exports = mongoose.model("order", orderSchema);