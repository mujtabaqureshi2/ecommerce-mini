import express from 'express';
import { login } from '../controllers/authController';

const router = express.Router();

// POST /login - User login
router.post('/', login);

export default router;
