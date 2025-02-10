import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const {Schema} = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    desc : {
        type: String,
        require: true,
    },
    img : {
        type: String,
        require: true,
    },
    content : {
        type: String,
        require: true,
    },
    username : {
        type: String,
        require: true,
    },
},
    { timestamps: true }

);

export default mongoose.model("Post", postSchema); 