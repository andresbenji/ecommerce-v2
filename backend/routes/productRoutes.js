import express from "express";
const router = express.Router();
import { getProducts, getProductById, getFeatured } from "../controllers/productController.js";

//route for all products
router.route('/').get(getProducts)

router.get('/featured', getFeatured)

//route for one  product
router.route('/:id').get(getProductById)

export default router;
