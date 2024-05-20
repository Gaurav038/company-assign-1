import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, "Please provide a content"],
    },
    currentDay:{
      type: String,
      required: [true, "Please provide a Day name"],
    }
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models.posts || mongoose.model("posts", postSchema);

export default Post;
