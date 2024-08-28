const express = require("express");
const router = express.Router();
const authorControllers = require("../controllers/author");

router.post("/", authorControllers.createAuthor);
router.get("/", authorControllers.getAuthor);

router.delete("/:id", authorControllers.deleteAuthor);

router.put("/:id", authorControllers.putAuthor);

router.patch("/:id", authorControllers.patchAuthor);

module.exports = router;
