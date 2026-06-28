// modules/templates/template.repository.js

const Template = require("./template.model");

/*
|--------------------------------------------------------------------------
| Create Template
|--------------------------------------------------------------------------
*/
const createTemplate = async (payload) => {
  return await Template.create(payload);
};

/*
|--------------------------------------------------------------------------
| Get Template By ID
|--------------------------------------------------------------------------
*/
const getTemplateById = async (id) => {
  return await Template.findById(id).lean();
};

/*
|--------------------------------------------------------------------------
| Get Templates (IMPORTANT FIX)
|--------------------------------------------------------------------------
*/
const getTemplates = async (filter = {}, query = {}) => {
  const templates = await Template.find(filter)
    .sort({ createdAt: -1 })
    .lean();

  return templates; // MUST return array
};

/*
|--------------------------------------------------------------------------
| Update Template
|--------------------------------------------------------------------------
*/
const updateTemplate = async (id, payload) => {
  return await Template.findByIdAndUpdate(id, payload, {
    new: true,
  }).lean();
};

/*
|--------------------------------------------------------------------------
| Delete Template
|--------------------------------------------------------------------------
*/
const deleteTemplate = async (id) => {
  return await Template.findByIdAndDelete(id);
};

module.exports = {
  createTemplate,
  getTemplateById,
  getTemplates,
  updateTemplate,
  deleteTemplate,
};