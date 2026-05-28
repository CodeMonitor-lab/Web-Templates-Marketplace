// modules/templates/template.repository.js

const Template = require("./template.model");

/*
|--------------------------------------------------------------------------
| Create Template
|--------------------------------------------------------------------------
*/

const createTemplate = async (payload) => {
  return Template.create(payload);
};

/*
|--------------------------------------------------------------------------
| Get Template By ID
|--------------------------------------------------------------------------
*/

const getTemplateById = async (id) => {
  return Template.findById(id)
    .populate("category")
    .populate("createdBy", "name email");
};

/*
|--------------------------------------------------------------------------
| Get Template By Slug
|--------------------------------------------------------------------------
*/

const getTemplateBySlug = async (slug) => {
  return Template.findOne({ slug });
};

/*
|--------------------------------------------------------------------------
| Get Templates
|--------------------------------------------------------------------------
*/

const getTemplates = async (filter = {}, options = {}) => {
  const page = Number(options.page) || 1;
  const limit = Number(options.limit) || 10;

  return Template.find(filter)
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ createdAt: -1 });
};

/*
|--------------------------------------------------------------------------
| Update Template
|--------------------------------------------------------------------------
*/

const updateTemplate = async (id, payload) => {
  return Template.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

/*
|--------------------------------------------------------------------------
| Delete Template
|--------------------------------------------------------------------------
*/

const deleteTemplate = async (id) => {
  return Template.findByIdAndDelete(id);
};

module.exports = {
  createTemplate,
  getTemplateById,
  getTemplateBySlug,
  getTemplates,
  updateTemplate,
  deleteTemplate,
};