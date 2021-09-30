import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  _id: String || Number,
  name: {
    type: String,
    required: true,
  },
  projectImg: {
    type: String,
    required: true,
  },
  technologies: Array,
  description: {
    type: String,
    required: true,
  },
  type: Array,
  githubURL: {
    type: String,
    required: true,
  },
  liveURL: {
    type: String,
  },
});

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
