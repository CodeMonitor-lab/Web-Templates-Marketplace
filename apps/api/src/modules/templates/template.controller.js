const service = require("./template.service");
const asyncHandler = require("../../common/middleware/asyncHandler");
const { successResponse } = require("../../shared/utils/apiResponse");
const { TEMPLATE_MESSAGES } = require("./template.constants");

/*
|--------------------------------------------------------------------------
| Create Template
|--------------------------------------------------------------------------
*/
const createTemplate = asyncHandler(async (req, res) => {
  const template = await service.createTemplate({
    ...req.body,
    createdBy: req.user?.id,
  });

  return successResponse(res, template, TEMPLATE_MESSAGES.CREATED, 201);
});

/*
|--------------------------------------------------------------------------
| Get Template By ID
|--------------------------------------------------------------------------
*/
const getTemplateById = asyncHandler(async (req, res) => {
  const template = await service.getTemplateById(req.params.id);

  return successResponse(res, template, TEMPLATE_MESSAGES.FETCHED);
});

/*
|--------------------------------------------------------------------------
| Get Templates
|--------------------------------------------------------------------------
*/
const getTemplates = asyncHandler(async (req, res) => {
  const templates = await service.getTemplates(req.query);

  return successResponse(res, templates, TEMPLATE_MESSAGES.LISTED);
});

/*
|--------------------------------------------------------------------------
| Update Template
|--------------------------------------------------------------------------
*/
const updateTemplate = asyncHandler(async (req, res) => {
  const template = await service.updateTemplate(req.params.id, req.body);

  return successResponse(res, template, TEMPLATE_MESSAGES.UPDATED);
});

/*
|--------------------------------------------------------------------------
| Delete Template
|--------------------------------------------------------------------------
*/
const deleteTemplate = asyncHandler(async (req, res) => {
  await service.deleteTemplate(req.params.id);

  return successResponse(res, null, TEMPLATE_MESSAGES.DELETED);
});

module.exports = {
  createTemplate,
  getTemplateById,
  getTemplates,
  updateTemplate,
  deleteTemplate,
};