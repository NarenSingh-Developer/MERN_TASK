const express = require("express")
const router = express.Router();
const categoriesController = require("../controllers/categories.controller");

router.get("/", categoriesController.getCategory)
router.post("/addcategory", categoriesController.addCategory)

module.exports = router