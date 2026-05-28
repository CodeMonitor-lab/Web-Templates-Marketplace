// src/modules/users/user.routes.js

const express = require("express");

const router = express.Router();

const userController = require("./user.controller");
const authMiddleware = require("../../common/middleware/auth");

/*
|--------------------------------------------------------------------------
| CREATE USER (PUBLIC)
|--------------------------------------------------------------------------
*/
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     responses:
 *       201:
 *         description: User created successfully
 */
router.post("/", userController.createUser);

/*
|--------------------------------------------------------------------------
| GET PROFILE
|--------------------------------------------------------------------------
*/
/**
 * @swagger
 * /users/profile:
 *   get:
 *     summary: Get logged-in user profile
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 */
router.get(
  "/profile",
  authMiddleware,
  userController.getProfile
);

/*
|--------------------------------------------------------------------------
| UPDATE PROFILE
|--------------------------------------------------------------------------
*/
/**
 * @swagger
 * /users/profile:
 *   put:
 *     summary: Update user profile
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 */
router.put(
  "/profile",
  authMiddleware,
  userController.updateProfile
);

/*
|--------------------------------------------------------------------------
| GET ALL USERS
|--------------------------------------------------------------------------
*/
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 */
router.get(
  "/",
  authMiddleware,
  userController.getAllUsers
);

/*
|--------------------------------------------------------------------------
| GET USER BY ID
|--------------------------------------------------------------------------
*/
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 */
router.get(
  "/:id",
  authMiddleware,
  userController.getUserById
);

/*
|--------------------------------------------------------------------------
| DELETE USER
|--------------------------------------------------------------------------
*/
/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete user
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     security:
 *       - bearerAuth: []
 */
router.delete(
  "/:id",
  authMiddleware,
  userController.deleteUser
);

module.exports = router;