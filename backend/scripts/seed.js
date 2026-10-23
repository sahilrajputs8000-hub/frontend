require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/Product");
// These are editable starter listings, not verified retail offers. Replace names, prices,
// stock, images and descriptions with your own actual inventory in /admin.html.
const products = [
  { frontendId: 1, name: "Wired Earphones", category: "Electronics", price: 299, oldPrice: 399, stock: 10, sku: "ELEC-001", emoji: "🎧", color: "#e9edff", tag: "STARTER LISTING", description: "Add your exact brand, model, warranty and product details before selling." },
  { frontendId: 2, name: "Bluetooth Speaker", category: "Electronics", price: 999, oldPrice: 1299, stock: 8, sku: "ELEC-002", emoji: "🔊", color: "#e8eff8", tag: "STARTER LISTING", description: "Replace this sample listing with your actual speaker specifications." },
  { frontendId: 3, name: "Wireless Mouse", category: "Electronics", price: 499, oldPrice: 599, stock: 12, sku: "ELEC-003", emoji: "🖱️", color: "#edf0f7", tag: "STARTER LISTING", description: "Add connection type, compatibility and other verified details." },
  { frontendId: 4, name: "USB-C Charger", category: "Electronics", price: 699, oldPrice: 799, stock: 6, sku: "ELEC-004", emoji: "🔌", color: "#e5f5ed", tag: "STARTER LISTING", description: "Enter the correct wattage, supported devices and safety certifications." },
  { frontendId: 5, name: "USB Keyboard", category: "Electronics", price: 799, oldPrice: 999, stock: 5, sku: "ELEC-005", emoji: "⌨️", color: "#f2eafa", tag: "STARTER LISTING", description: "Replace with your actual keyboard model and specifications." },
  { frontendId: 6, name: "Smart Watch", category: "Electronics", price: 1499, oldPrice: 1799, stock: 4, sku: "ELEC-006", emoji: "⌚", color: "#fff1d9", tag: "STARTER LISTING", description: "Add verified battery, compatibility and feature details for your product." }
];
(async () => {
  try {
    if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI missing in .env");
    await mongoose.connect(process.env.MONGODB_URI);
    for (const product of products) {
      await Product.findOneAndUpdate({ frontendId: product.frontendId }, { $set: product }, { upsert: true, new: true, runValidators: true });
    }
    await Product.updateMany({ frontendId: { $gt: products.length } }, { $set: { isActive: false } });
    console.log(`Starter catalog ready (${products.length} electronics listings). Listings 1–6 were reset to starter data; older listings above 6 were hidden.`);
  } catch (error) { console.error("Seed failed:", error.message); process.exitCode = 1; }
  finally { await mongoose.disconnect(); }
})();
