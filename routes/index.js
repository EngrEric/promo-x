const express = require("express");
const router = express.Router();
const uploadParser = require("../uploadParser");

const createPromo = require("../controllers/createPromo");
const deletePromo = require("../controllers/deletePromo");
const { getAll, getOne } = require("../controllers/getPromo");
const updatePromo = require("../controllers/updatePromo");

router.get("/", function (req, res, next) {
  res.status(200).send({ message: "here you go", status: "active" });
});

router.post("/create-promo", uploadParser.single("image"), createPromo);
router.delete("/delete-promo/:id", deletePromo);
router.get("/get-all-promo", getAll);
router.get("/get-one-promo/:id", getOne);
router.put("/update-promo", updatePromo);

module.exports = router;
