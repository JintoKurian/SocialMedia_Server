import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: { type: String, required: true },
    likes: [],
    createdAt: {
      type: Date,
      default: new Date(),
    },
    image: String,
    video: String, // Add video field for storing video file path
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("Posts", postSchema);

export default PostModel;



// import mongoose from "mongoose";

// const postSchema = mongoose.Schema(
//   {
//     userId: { type: String, required: true },
//     desc: {type: String, required : true},
//     likes: [],
//     createdAt: {
//       type: Date,
//       default: new Date(),
//     },
//     image: String,
//   },
//   {
//     timestamps: true,
//   }
// );

// var PostModel = mongoose.model("Posts", postSchema);

// export default PostModel;
