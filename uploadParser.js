const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  api_key: "985264156683484",
  api_secret: "-7vVzNdpJvTrqgDYTWEdqyseRXw",
  cloud_name: "eazox-com",
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    allowedFormats: ["jpg", "png"],
    folder: "image",
    transformation: [{ crop: "limit", height: 500, width: 500 }],
  },
});

module.exports = multer({ storage: storage });
