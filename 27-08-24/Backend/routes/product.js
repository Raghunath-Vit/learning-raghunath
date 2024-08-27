var express = require('express');
var router = express.Router();
const productControllers=require('../controllers/products');

router.get('/', productControllers.getProducts);

router.get("/:id",productControllers.getIdProducts)

router.post("/",productControllers.createProduct);

router.delete("/:id",productControllers.deleteProduct);

router.put("/:id",productControllers.putProducts);

router.get("/productsearch/:name",productControllers.getNameProducts);

// Find products by availability
router.get("/availability/:availability", productControllers.findProductsByAvailability);

// Find products greater than a certain price
router.get("/price/:price", productControllers.findProductsGreaterThanPrice);

module.exports = router;
