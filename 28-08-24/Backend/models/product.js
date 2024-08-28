const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: { 
		type: String, 
		required: true 
	},
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be a positive number"],
  },
  availability: {
    type: String,
    enum: ["available", "not-available"],
    default: "available",
  },
});

module.exports = mongoose.model("Product", ProductSchema);
