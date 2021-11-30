import Jwt from "jsonwebtoken";

import tokenModel from "../../model/token_schema.js";
import config from "../../config/variable_info.js";

const { SECRET } = config;

class TokenServises {
  static createToken = async (payload) => {
    const token = Jwt.sign(payload, SECRET);
    await tokenModel.create({ token });
    return token;
  }

  static getToken = async (token) => {
    const result = await tokenModel.findOne({ token });
    return result;
  }

  static deleteToken = async (token) => {
    await tokenModel.deleteOne({ token });
  }

  static verify = (token, secret) => {
    return Jwt.verify(token, secret);
  }
}

export default TokenServises;
