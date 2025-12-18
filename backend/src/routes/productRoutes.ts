import express from 'express';
import { getAllProducts, getProductById } from '../controllers/productController';

const router = express.Router();

// GET /products - Get all products
router.get('/', getAllProducts);

// GET /products/:id - Get product by ID
router.get('/:id', getProductById);

export default router;
