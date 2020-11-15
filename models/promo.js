const mongoose = require("mongoose");

const promoSchema = mongoose.Schema(
  {
    promo_name: {
      type: String,
      required: true,
    },
    promo_text: {
      type: String,
      required: true,
    },
    promo_instruction: {
      type: String,
      required: true,
    },
    imageData: {
      type: Object,
    },
    promo_greeting_text: {
      type: String,
      required: true,
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
