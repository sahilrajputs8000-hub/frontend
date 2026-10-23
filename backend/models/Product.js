const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  frontendId: { type: Number, unique: true, sparse: true },
  name: { type: String, required: true, trim: true, maxlength: 120 },
  category: { type: String, required: true, enum: ["Electronics"] },
  price: { type: Number, required: true, min: 0 },
  oldPrice: { type: Number, default: 0, min: 0 },
  stock: { type: Number, default: 0, min: 0 },
  sku: { type: String, trim: true, default: "" },
  imageUrl: { type: String, trim: true, default: "" },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  reviews: { type: Number, default: 0, min: 0 },
  emoji: { type: String, default: "🔌" },
  color: { type: String, default: "#f4f6fb" },
  tag: { type: String, default: "IN STOCK" },
  description: { type: String, default: "", maxlength: 2000 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });
module.exports = mongoose.model("Product", schema);
