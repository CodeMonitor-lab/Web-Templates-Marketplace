const express = require("express");

const controller = require("./template.controller");
const validate = require("../../common/middleware/validate");
const auth = require("../../common/middleware/auth");

const {
  createTemplateSchema,
  updateTemplateSchema,
} = require("./template.validation");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| GET ALL TEMPLATES
|--------------------------------------------------------------------------
*/
/**
 * @swagger
 * /templates:
 *   get:
 *     summary: Get all templates
 *     tags:
 *       - Templates
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", controller.getTemplates);

/*
|--------------------------------------------------------------------------
| GET TEMPLATE BY ID
|--------------------------------------------------------------------------
*/
/**
 * @swagger
 * /templates/{id}:
 *   get:
 *     summary: Get template by ID
 *     tags:
 *       - Templates
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/:id", controller.getTemplateById);

/*
|--------------------------------------------------------------------------
| CREATE TEMPLATE
|--------------------------------------------------------------------------
*/
/**
 * @swagger
 * /templates:
 *   post:
 *     summary: Create template
 *     tags:
 *       - Templates
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - slug
 *               - description
 *               - price
 *             properties:
 *               title:
 *                 type: string
 *               slug:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 */
router.post(
  "/",
  auth,
  validate(createTemplateSchema),
  controller.createTemplate
);

/*
|--------------------------------------------------------------------------
| UPDATE TEMPLATE
|--------------------------------------------------------------------------
*/
/**
 * @swagger
 * /templates/{id}:
 *   patch:
 *     summary: Update template
 *     tags:
 *       - Templates
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Updated
 */
router.patch(
  "/:id",
  auth,
  validate(updateTemplateSchema),
  controller.updateTemplate
);

/*
|--------------------------------------------------------------------------
| DELETE TEMPLATE
|--------------------------------------------------------------------------
*/
/**
 * @swagger
 * /templates/{id}:
 *   delete:
 *     summary: Delete template
 *     tags:
 *       - Templates
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete("/:id", auth, controller.deleteTemplate);

module.exports = router;