const Product = require("../Model/ProductModel");

exports.createProduct = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      items: `${products.length}`,
      Data: products,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateProduct = async (req, res, next) => {
  const ConfirmProduct = await Product.findById(req.params.id);
  if (!ConfirmProduct) {
    res.status(500).json({
      status: "fail",
      message: "No Product found with that ID",
    });
  }
  const updateProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!updateProduct) {
    res.status(500).json({
      status: "fail",
      message: "No Product found with that ID",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: updateProduct,
    });
  }
};

exports.DeleteProduct = async (req, res, next) => {
  const deleteProduct = await Product.findByIdAndRemove(req.params.id);
  if (!deleteProduct) {
    res.status(500).json({
      status: "fail",
      message: "No Product found with that ID",
    });
  }
  res.status(204).json({
    status: "success",
    data: deleteProduct,
  });
};

exports.getProductDetail = async (req, res, next) => {
  const productDetail = await Product.findById(req.params.id);
  if (!productDetail) {
    res.status(500).json({
      status: "fail",
      message: "No Product found with that ID",
    });
  }
  res.status(200).json({
    status: "success",
    data: productDetail,
  });
};
