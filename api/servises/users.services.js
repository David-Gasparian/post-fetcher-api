import bcrypt from 'bcryptjs';
import users from '../../model/users.shema.js';


class PostsServises {
  static userInfo = async (email) => {
    const result = await users.findOne({ email });
    return result;
  }

  static register = async (user) => {
   const hashPassword =  bcrypt.hashSync(user.password, 7);
   return await users.create({email: user.email, password: hashPassword, name: user.name});
  }
}

export default PostsServises;
