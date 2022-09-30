import { AppState } from '../AppState.js';
import { Post } from '../models/Post.js';
import { api, postApi } from './AxiosService.js';

class PostsService {
  async getPosts(page) {
    const res = await postApi.get(page);
    console.log(res.data);
    AppState.posts = res.data.posts.map((p) => new Post(p));
    AppState.nextPage = res.data.older;
    AppState.previousPage = res.data.newer;
    console.log('next', AppState.nextPage, 'previous', AppState.previousPage);
  }
  


  async createPost(formData){
    const res = await api.post('api/posts',formData)
 AppState.posts.push(new Post(res.data))
  }
}


  // async createClassified(formData) {
  //   const res = await SandboxApi.post('/api/classifieds', formData)
  //   AppState.classifieds.push(new Classified(res.data))
  //   // AppState.classifieds = [...AppState.classifieds, new Classified(res.data)]
  // }
export const postService = new PostsService();
