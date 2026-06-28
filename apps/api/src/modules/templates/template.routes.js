const express = require("express");

const controller = require("./template.controller");
const validate = require("../../common/middleware/validate");
const auth = require("../../common/middleware/auth");

const {
  createTemplateSchema,
  updateTemplateSchema,
  templateIdSchema,
} = require("./template.validation");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| GET ALL TEMPLATES
|--------------------------------------------------------------------------
*/
router.get("/", controller.getTemplates);

/*
|--------------------------------------------------------------------------
| GET TEMPLATE BY ID
|--------------------------------------------------------------------------
*/
router.get(
  "/:id",
  validate(templateIdSchema, "params"),
  controller.getTemplateById
);

/*
|--------------------------------------------------------------------------
| CREATE TEMPLATE
|--------------------------------------------------------------------------
*/
router.post(
  "/",
  auth(), // 🔥 IMPORTANT FIX (you missed this earlier)
  validate(createTemplateSchema),
  controller.createTemplate
);

/*
|--------------------------------------------------------------------------
| UPDATE TEMPLATE
|--------------------------------------------------------------------------
*/
router.patch(
  "/:id",
  auth(),
  validate(templateIdSchema, "params"),
  validate(updateTemplateSchema),
  controller.updateTemplate
);

/*
|--------------------------------------------------------------------------
| DELETE TEMPLATE
|--------------------------------------------------------------------------
*/
router.delete(
  "/:id",
  auth(),
  validate(templateIdSchema, "params"),
  controller.deleteTemplate
);

module.exports = router;