import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    creator: String,
    title: String,
    description: String, 
    author: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
    likes: {
        type:[String],
        default: [],
    },
    ut: String,
});

const PostModel = mongoose.model("post", postSchema);

export default PostModel;