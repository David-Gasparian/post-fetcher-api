import status from "../../utils/status_cods.js";
import PostsServises from "../servises/posts.servises.js";
import errorHandler from "../../utils/errorHandler.js";
import config from "../../config/variable_info.js";

const { FORBIDDEN_WORDS } = config;

class PostsControlers {
  getAll = async (req, res) => {
    try {
      const result = await PostsServises.getAll();
      res.status(status.success)
      .json({success: true, data: result});
    } catch(e) {
      errorHandler(res, e.message, status.serverError);
    }
  }

  create = async (req, res) => {
    try {
      const title = req.body.title;
      if(FORBIDDEN_WORDS.includes(title)) {
        return errorHandler(res, `${title} <= this text cannnot be a title`, status.success);
      }
      const result = await PostsServises.create(req.body)
      res.status(status.success)
      .json({success: true, data: result});
    } catch (e) {
      errorHandler(res, e.message, status.serverError);
    }
  }

  delete = (req, res) => {
    try {
      PostsServises.delete(req.query.postId);
      res.status(status.success)
      .json({success: true, data: {}});
    } catch (e) {
      errorHandler(res, e.message, status.serverError);
    }
  }

  update = (req, res) => {
    try {
      PostsServises.updata(req.body.id, req.body.title, req.body.body);
      res.status(status.success)
      .json({success: true, data: {}});
    } catch (e) {
      errorHandler(res, e.message, status.serverError);
    }
  }
}

export default new PostsControlers()