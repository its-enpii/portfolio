import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title for this project."],
    maxlength: [100, "Title cannot be more than 100 characters"],
  },
  category: {
    type: String,
    required: [true, "Please provide a category."],
  },
  description: {
    type: String,
    required: [true, "Please provide a description."],
  },
  image: {
    type: String,
    required: [true, "Please provide an image URL."],
  },
  tags: {
    type: [String],
    default: [],
  },
  link: {
    type: String,
  },
  github: {
    type: String,
  },
  year: {
    type: String,
    default: "2024",
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
