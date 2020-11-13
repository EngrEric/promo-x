const mongoose = require("mongoose");

const promoSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageData: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    validTill: {
      type: Date,
      required: true,
    },
    totalRedemption: {
      type: String,
      default: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

/**
 * @typedef Promo
 */
const Promo = mongoose.model("Promo", promoSchema);

module.exports = Promo;
