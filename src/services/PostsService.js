import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { api, postApi } from "./AxiosService.js"

class PostsService{

  async getPosts(page  ){
    const res = await postApi.get(page)
console.log(res.data);
AppState.posts = res.data.posts.map(p => new Post(p))
AppState.nextPage = res.data.older
AppState.previousPage = res.data.newer
console.log('next',AppState.nextPage,'previous',AppState.previousPage);
  }
}
export const postService = new PostsService()