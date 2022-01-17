const express = require("express")
const router = express.Router();
const products = require("./products")
const categories = require("./categories")

router.use("/product", products)
router.use("/categories", categories)

module.exports = router;