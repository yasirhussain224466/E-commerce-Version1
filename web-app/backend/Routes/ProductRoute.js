const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  DeleteProduct,
  getProductDetail,
} = require("../Controller/ProductController");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/newProduct").post(createProduct);
router
  .route("/product/:id")
  .patch(updateProduct)
  .delete(DeleteProduct)
  .get(getProductDetail);

module.exports = router;
