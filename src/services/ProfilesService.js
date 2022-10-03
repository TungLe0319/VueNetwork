import { AppState } from '../AppState.js';
import { Account } from '../models/Account.js';
import { api } from './AxiosService.js';
class ProfilesService {
  async getProfileById(id) {
    const res = await api.get(`/api/profiles/${id}`);
    console.log(res.data);
    AppState.activeProfile = new Account(res.data);
  }

  async getProfilesBySearchTerm(term) {
    // AppState.profiles = []
    const res = await api.get('/api/profiles', {
      params: {
        query: term,
      
      },
    });
   
    (AppState.profiles = res.data.map((p) => new Account(p))),
      (AppState.page = res.data.page);

    AppState.lastPage = res.data.total_pages;
    AppState.term = term;
   
  }
}

export const profilesService = new ProfilesService();
