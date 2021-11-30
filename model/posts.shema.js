import mongoose from "mongoose";

const postShema = mongoose.Schema({
  title: { type: String, require: true },
  body: { type: String, require: true },
})

export default mongoose.model('posts', postShema);