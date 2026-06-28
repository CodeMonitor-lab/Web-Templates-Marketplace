const toTemplateResponse = (template) => {
  if (!template) return null;

  return {
    id: template._id,
    title: template.title,
    slug: template.slug,
    description: template.description,
    price: template.price,
    thumbnail: template.thumbnail,
    previewUrl: template.previewUrl,
    category: template.category,
    tags: template.tags,
    isPublished: template.isPublished,
    createdBy: template.createdBy,
    createdAt: template.createdAt,
    updatedAt: template.updatedAt,
  };
};

module.exports = {
  toTemplateResponse,
};