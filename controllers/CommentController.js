// controllers/CommentController.js

import Comment from '../models/Comment.js';

// Controller function to create a new comment
export const createComment = async (req, res) => {
    const { postId, userId, text } = req.body; // Extract userId directly
    // const userId = req.body._id; // Remove this line
  
    try {
      const comment = await Comment.create({ postId, userId, text });
      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create comment', error: error.message });
    }
  };
  

// Controller function to get all comments for a post
export const getComments = async (req, res) => {
  const { postId } = req.query;

  try {
    const comments = await Comment.find({ postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get comments', error: error.message });
  }
};

// Controller function to update a comment
export const updateComment = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  try {
    const updatedComment = await Comment.findByIdAndUpdate(id, { text }, { new: true });
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update comment', error: error.message });
  }
};

// Controller function to delete a comment
export const deleteComment = async (req, res) => {
  const { id } = req.params;

  try {
    await Comment.findByIdAndDelete(id);
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete comment', error: error.message });
  }
};
