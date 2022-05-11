import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { StoreService } from './store.service';

@Injectable({ providedIn: 'root' })
export class UserDetailUsecase {

  constructor(private userApi: UserApiService, private store: StoreService){}

  get user$() {
    return this.store.select(state => state.userDetail.user);
  }

  async fetchUser(userId: string) {
    this.store.update(state => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user: null
      }
    }));

    const user = await this.userApi.getUserById(userId);

    this.store.update(state => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user
      }
    }));
  }
}
