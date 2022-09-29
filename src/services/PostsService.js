import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { api } from "./AxiosService.js"

class PostsService{

  async getPosts(){
    const res = await api.get('api/posts',{
      params:{
        page:1
      }
    })
console.log(res.data.posts);
AppState.posts = res.data.posts.map(p => new Post(p))
console.log(AppState.posts);
  }
}
export const postService = new PostsService()