import express from "express";
import usersControlers from "../controllers/users.controlers.js";

const routes = express.Router();

// user endpoint

/**
 * @desc    login
 * @route   POST /api/users
 **/

routes.post('/users',  usersControlers.login);

/**
 * @desc    logout
 * @route   DELETE /api/users
 **/

routes.delete('/users', usersControlers.logout);

/**
 * @desc    regiser
 * @route   POST /api/users/auth
 **/

routes.post('/users/auth', usersControlers.register);

/**
 * @desc    check avtorisation
 * @route   GET /api/auth
 **/

routes.get('/auth', usersControlers.auth);


export default routes;
