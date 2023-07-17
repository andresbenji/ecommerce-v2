import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//@desc  Fetch all products
//@route GET/api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 3;
  const page = Number(req.query.pageNumber) || 1;
  const count = await Product.countDocuments();

  const products = await Product.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({products, page, pages:Math.ceil(count / pageSize)});
});

//@desc  Fetch a product
//@route GET/api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getProducts, getProductById };
