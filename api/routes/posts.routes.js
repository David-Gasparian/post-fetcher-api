import express from "express";
import postsControlers from "../controllers/posts.controlers.js";

const routes = express.Router();

// post endpoint

/**
 * @desc    Get all posts
 * @route   GET /api/posts
 **/

routes.get('/posts',  postsControlers.getAll);

/**
 * @desc   Create a new post
 * @route   POST /api/posts
 **/

routes.post('/posts', postsControlers.create);

/**
 * @desc    Delete a post
 * @route   DELETE /api/posts
 **/

routes.delete('/posts', postsControlers.delete);

/**
 * @desc    Change a post
 * @route   PUT /api/posts
 **/

routes.put('/posts', postsControlers.update);

export default routes;