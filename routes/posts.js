import express from 'express';
import {getPost, createPost,updatePost,deletePost,likePost,signup,dislikePost,favoritePost,commentPost,test} from '../controller/posts.js'
const router = express.Router();

router.get('/',getPost);
router.post('/',createPost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);
router.patch('/:id/likePost',likePost);
router.patch('/:id/dislikePost', dislikePost);
router.patch('/:id/favoritePost', favoritePost);
router.patch('/:id/commentPost', commentPost);
router.post('/',signup);
router.get('/test',test);

export default router;