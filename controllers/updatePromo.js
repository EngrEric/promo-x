const Promo = require("../models/promo");

module.exports = {
  updatePromo: async (req, res) => {
    const { id } = req.params;
    console.log(req.body);
    try {
      await Promo.updateOne({ _id: id }, { $set: { ...req.body } });
      res.status(200).send({ status: "success" });
    } catch (error) {
      res.status(500).send({ error });
    }
  },
  uploaderImage: async (req, res) => {
    const { id } = req.params;
    try {
      await Promo.updateOne({ _id: id }, { $set: { imageData: req.file } });
      res.status(200).json({ status: "success" });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};
