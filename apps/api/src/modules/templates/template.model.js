const mongoose = require("mongoose");
const slugify = require("slugify");

const templateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },

    slug: { type: String, unique: true, index: true },

    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },

    thumbnail: { type: String, default: null },
    previewUrl: { type: String, default: null },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    tags: { type: [String], default: [] },

    isPublished: { type: Boolean, default: false },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Template", templateSchema);