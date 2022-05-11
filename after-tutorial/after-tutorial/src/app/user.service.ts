import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreService } from './store.service';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get users$() {
    return this.store
    .select(state => state.userList)
    .pipe(
      map(({ items, filter }) =>
          items.filter(user =>
            (user.first_name + user.last_name).includes(filter.nameFilter)
          )
      )
    )
  }

  get filter$() {
    return this.store.select(state => state.userList.filter)
  }

  constructor(private userApi: UserApiService, private store: StoreService) { }

  async fetchUsers() {
    const users = await this.userApi.getAllUsers()

    this.store.update(state => ({
      ...state,
      userList: {
        ...state.userList,
        items: users
      }
    }));
  }

  setNameFilter(nameFilter: string) {
    this.store.update(state => ({
      ...state,
      userList: {
        ...state.userList,
        filter: {
          nameFilter
        }
      }
    }));
  }
}
