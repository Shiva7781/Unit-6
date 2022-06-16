const mongoose = require("mongoose");

// Step 1 :- creating the schema
const reviewSchema = new mongoose.Schema(
  {
    review: [{ type: String, required: true }],
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
module.exports = mongoose.model("review", reviewSchema);
