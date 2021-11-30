import mongoose from "mongoose";

const tokenShema = new mongoose.Schema({
  token: { type: String, require: true },
})

export default mongoose.model('token', tokenShema);