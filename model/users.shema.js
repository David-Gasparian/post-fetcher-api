
import mongoose from "mongoose";

const userShema = mongoose.Schema({
  name: { type: String},
  email: { type: String, require: true },
  password: { type: String, require: true },
})

export default mongoose.model('users', userShema);