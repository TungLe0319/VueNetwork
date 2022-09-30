import { AppState } from '../AppState.js';
import { Account } from '../models/Account.js';
import { api } from './AxiosService.js';
class ProfilesService {
  async getProfileById(id) {
    const res = await api.get(`/api/profiles/${id}`);
    console.log(res.data);
    AppState.activeProfile = new Account(res.data);
  }
}

export const profilesService = new ProfilesService();
