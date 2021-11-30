import posts from '../../model/posts.shema.js';

class PostsServises {
  static getAll = async () => {
    const result = await posts.find();
    return result;
  }

  static create = async (post) => {
    const result = await posts.create(post);
    return result;
  }

  static delete = async (id) => {
    await posts.deleteMany( {_id: id});
  }

  static updata = async (id, title, body) => {
    await posts.updateOne({_id: id}, {$set: {title, body}});
  }
}

export default PostsServises;