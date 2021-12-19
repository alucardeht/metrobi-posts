import { fetchApi } from "../";
import { Post } from "./PostsTypes";

const PostsService = {
  async getPosts(): Promise<Array<Post> | undefined> {
    return fetchApi({
      url: "/posts",
      method: "get",
    });
  },
};

export default PostsService;
