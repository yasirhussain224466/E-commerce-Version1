const Product = require("../Model/ProductModel");
const CatchAsync = require("../Utils/CatchAsync");
const AppError = require("../Utils/ErrorHandler");
const APIFeatures = require("../Utils/ProductFeatures");

// only Admin can access the route of Create, Update and Delete the Product

exports.createProduct = CatchAsync(async (req, res, next) => {
  req.body.user = req.user._id
  const newProduct = await Product.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      product: newProduct,
    },
  });
});

exports.updateProduct = CatchAsync(async (req, res, next) => {
  // const confirmProduct = await Product.findById(req.params.id);
  // if (!confirmProduct) throw new Error("Invalid ID, Product Not found");
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!updatedProduct) {
    return next(new AppError("No Product found with that ID", 404));
  } else {
    res.status(200).json({
      status: "success",
      data: updatedProduct,
    });
  }
});

exports.DeleteProduct = CatchAsync(async (req, res, next) => {
  const deleteProduct = await Product.findByIdAndRemove(req.params.id);
  if (!deleteProduct) {
    return next(new AppError("No Product found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: deleteProduct,
  });
});

exports.getAllProducts = CatchAsync(async (req, res, next) => {
  const productQuery = new APIFeatures(Product.find(), req.query)
    .filter()
    .limitFields()
    .paginate()
    .search()
    .sort();
  const products = await productQuery.query;
  console.log(req.query);
  res.status(200).json({
    status: "success",
    items: `${products.length}`,
    Data: products,
  });
});

exports.getProductDetail = CatchAsync(async (req, res, next) => {
  const productDetails = await Product.findById(req.params.id);
  if (!productDetails) {
    return next(new AppError("No Product found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: productDetails,
  });
});
