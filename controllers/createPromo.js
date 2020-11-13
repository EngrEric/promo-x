const Promo = require("../models/promo");

module.exports = async (req, res) => {
  try {
    const promo = await Promo.create({
      ...req.body,
      validTill: new Date(),
      imageData: req.file,
    });
    res.status(200).send({ promo, status: "success" });
  } catch (error) {
    res.status(500).send({ error });
  }
};
