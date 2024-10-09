import mongoose from "mongoose";

const videoPostSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: {type: String, required : true},
    likes: [],
    createdAt: {
      type: Date,
      default: new Date(),
    },
    video: String,
  },
  {
    timestamps: true,
  }
);

var videoPostModel = mongoose.model("Posts", videoPostSchema);

export default videoPostModel;
