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
  }

  async getPostsByCreatorId(creatorId) {
    AppState.posts = [];
    const res = await api.get(`api/profiles/${creatorId}/posts`, {
      params: creatorId,
    });
    console.log(res.data);
    AppState.posts = res.data.posts.map((p) => new Post(p));
    AppState.nextPage = res.data.older;
    AppState.previousPage = res.data.newer;
  }

  async createPost(formData) {
    const res = await api.post('api/posts', formData);
    AppState.posts = [new Post(res.data) ,...AppState.posts]
    // AppState.posts.push(new Post(res.data));
  }

  async deletePost(id) {
    const res = await api.delete(`/api/posts/${id}`);
    AppState.posts = AppState.posts.filter(p => p.id !=id)
  }

  // async deleteClassified(id) {
  //   const res = await SandboxApi.delete(`api/classifieds/${id}`);
  //   // CAKE SAUCE strawberry middle 🍓
  //   AppState.classifieds = AppState.classifieds.filter((c) => c.id != id);
  // }
}



//  async getProjectsByCreatorId(creatorId) {
//     AppState.projects = [] // NOTE empty the projects to avoid data flashing
//     const res = await SandboxApi.get('api/projects', {
//       params: {
//         creatorId
//       }
//     })

//     AppState.projects = res.data.map(p => new Project(p))

//   }



  // async createClassified(formData) {
  //   const res = await SandboxApi.post('/api/classifieds', formData)
  //   AppState.classifieds.push(new Classified(res.data))
  //   // AppState.classifieds = [...AppState.classifieds, new Classified(res.data)]
  // }
export const postService = new PostsService();
