import express from 'express';
import { createItem, deleteAllItems, getAllItems, updateItem } from '../controller/itemController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/item', createItem);
router.get('/items', getAllItems);
router.patch('/item', updateItem);
router.delete("/items", deleteAllItems);

export default router;
