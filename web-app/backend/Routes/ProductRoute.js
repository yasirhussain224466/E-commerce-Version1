const express = require("express");
const { protect, restrictTo } = require("../Controller/AuthController");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  DeleteProduct,
  getProductDetail,
} = require("../Controller/ProductController");
const router = express.Router();

router.route("/products").get(protect, getAllProducts);
router
  .route("/newProduct")
  .post(protect, restrictTo("admin", "lead-guide"), createProduct);
router
  .route("/product/:id")
  .patch(protect, restrictTo("admin", "lead-guide"), updateProduct)
  .delete(protect, restrictTo("admin", "lead-guide"), DeleteProduct)
  .get(getProductDetail);

module.exports = router;
