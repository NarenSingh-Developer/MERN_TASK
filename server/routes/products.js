const express = require("express")
const router = express.Router();
const productController = require("../controllers/product.controller");

router.get("/", productController.getProduct);
router.get("/:id", productController.getProductById)
router.post("/addproduct", productController.addProduct)

module.exports = router