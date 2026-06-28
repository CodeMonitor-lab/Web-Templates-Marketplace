const repository = require("./template.repository");
const { toTemplateResponse } = require("./template.mapper");
const NotFoundError = require("../../shared/errors/NotFoundError");

/*
|--------------------------------------------------------------------------
| Create Template
|--------------------------------------------------------------------------
*/
const createTemplate = async (payload) => {
  const template = await repository.createTemplate(payload);
  return toTemplateResponse(template);
};

/*
|--------------------------------------------------------------------------
| Get Template By ID
|--------------------------------------------------------------------------
*/
const getTemplateById = async (id) => {
  const template = await repository.getTemplateById(id);

  if (!template) {
    throw new NotFoundError("Template not found");
  }

  return toTemplateResponse(template);
};

/*
|--------------------------------------------------------------------------
| Get Templates
|--------------------------------------------------------------------------
*/
const getTemplates = async (query) => {
  const result = await repository.getTemplates({}, query);

  const templates = Array.isArray(result) ? result : [];

  return templates.map(toTemplateResponse);
};

/*
|--------------------------------------------------------------------------
| Update Template
|--------------------------------------------------------------------------
*/
const updateTemplate = async (id, payload) => {
  const template = await repository.updateTemplate(id, payload);

  if (!template) {
    throw new NotFoundError("Template not found");
  }

  return toTemplateResponse(template);
};

/*
|--------------------------------------------------------------------------
| Delete Template
|--------------------------------------------------------------------------
*/
const deleteTemplate = async (id) => {
  const template = await repository.deleteTemplate(id);

  if (!template) {
    throw new NotFoundError("Template not found");
  }

  return true;
};

module.exports = {
  createTemplate,
  getTemplateById,
  getTemplates,
  updateTemplate,
  deleteTemplate,
};