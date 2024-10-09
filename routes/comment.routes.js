// routes/comment.routes.js

import express from 'express';
import {
  createComment,
  getComments,
  updateComment,
  deleteComment
} from '../controllers/CommentController.js';
import authMiddleware from '../middleware/AuthMiddleware.js';

const router = express.Router();

// Apply auth middleware to routes where authentication is required
router.post('/comments', authMiddleware, createComment); // Update route to '/comments'
router.get('/comments', authMiddleware, getComments); // Update route to '/comments'
router.put('/comments/:id', authMiddleware, updateComment); // Update route to '/comments/:id'
router.delete('/comments/:id', authMiddleware, deleteComment); // Update route to '/comments/:id'

export default router;
