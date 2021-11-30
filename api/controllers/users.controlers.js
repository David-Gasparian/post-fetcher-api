import bcrypt from 'bcryptjs';

import status from "../../utils/status_cods.js";
import UsersServises from "../servises/users.services.js";
import errorHandler from "../../utils/errorHandler.js";
import config from "../../config/variable_info.js";
import TokenServises from "../servises/token_services.js";

const { SECRET } = config;

class UsersControlers {

  register = async (req, res) => {
    try {
      const user = await UsersServises.userInfo(req.body.email);
      if(user) {
       return errorHandler(res, `${req.body.email} <= such user alradey exists`, status.success);
      }
      await UsersServises.register(req.body);
      const token = await TokenServises.createToken({email: req.body.email});
      const createdUser = await UsersServises.userInfo(req.body.email);
      res.status(status.success)
      .json({success: true, data: {isAuth: true, email: createdUser.email, name: createdUser.name }, token: token});
    } catch(e) {
      errorHandler(res, e.message, status.serverError);
    }  
  }

  login = async (req, res) => {
    try {
      const user = await UsersServises.userInfo(req.body.email);
      if(!user) {
        return errorHandler(res, `${req.body.email} <= such user not found`, status.success);
      } 
      const validPassword = bcrypt.compareSync(req.body.password, user.password);
      if(!validPassword) {
        return errorHandler(res, 'incorect password', status.success);
      }
      const token = await TokenServises.createToken({email: req.body.email});
      return res.status(status.success)
      .json({success: true, data: {isAuth: true, email: user.email, name: user.name}, token: token});
    } catch(e) {
      errorHandler(res, e.message, status.serverError);
    }
  }

  logout = async (req, res) => {
    try {
      await TokenServises.deleteToken(req.headers.authorization);
      res.status(status.success)
      .json({success: true, data: {isAuth: false, email: '', name: ''}});
    } catch(e) {
      errorHandler(res, e.message, status.serverError);
    }
  }

  auth = async (req, res) => {
    try {
      const decodedData = await TokenServises.getToken(req.headers.authorization)
        if(!decodedData) {
          return res.status(status.success).json({success: true, data: {isAuth: false, email: '', name: '' }});
        }
        const userData = TokenServises.verify(decodedData.token, SECRET);
        const user = await UsersServises.userInfo(userData.email);
        return res.status(status.success)
        .json({success: true, data: {isAuth: true, email: user.email, name: user.name }})
    } catch(e) {
       errorHandler(res, e.message, status.serverError);
    }
  }
}

export default new UsersControlers;







