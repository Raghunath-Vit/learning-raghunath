const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category");

router.post("/", categoryController.createCategory);
router.get("/", categoryController.getCategory);

module.exports = router;
