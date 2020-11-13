const Promo = require("../models/promo");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const promo = await Promo.deleteOne({ _id: id });
    res.status(200).send({ ...promo, status: "success" });
  } catch (error) {
    res.status(500).send({ error });
  }
};
