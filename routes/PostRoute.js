// import express from 'express'
// import { createPost, deletePost, getAllPosts, getPost, getTimelinePosts, likePost, updatePost } from '../controllers/PostController.js'
// import authMiddleWare from '../middleware/AuthMiddleware.js'

// const router = express.Router()

// router.post('/',createPost)
// router.get('/:id', getPost)
// router.put('/:id', updatePost)
// router.delete('/:id', deletePost)
// router.put('/:id/like', likePost)
// router.get('/:id/timeline', getTimelinePosts)
// router.get('/getAllPosts', getAllPosts)


// export default router


import express from 'express';
import { createPost, deletePost, getAllPosts, getPost, getTimelinePosts, likePost, updatePost } from '../controllers/PostController.js';
import authMiddleWare from '../middleware/AuthMiddleware.js';

const router = express.Router();

router.get('/getAllPosts', getAllPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.put('/:id/like', likePost);
router.get('/:id/timeline', getTimelinePosts);

export default router;
