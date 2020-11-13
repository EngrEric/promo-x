const Promo = require("../models/promo");

module.exports = {
  getAll: async (req, res) => {
    const { id } = req.params;
    try {
      const promo = await Promo.find();
      res.status(200).send({ promo, status: "success" });
    } catch (error) {
      res.status(500).send({ error });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const promo = await Promo.findById(id);
      res.status(200).send({ promo, status: "success" });
    } catch (error) {
      res.status(500).send({ error });
    }
  },
};
