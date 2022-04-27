import { Component } from '@angular/core';
import { UserService } from './user.service';
import { UserListFilter } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'after-tutorial';
  users$ = this.userService.users$;
  userListFilter$ = this.userService.filter$;
  test = 'not clicked'
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.fetchUsers()
  }

  setUserListFilter(value: UserListFilter) {
    console.log(value)
    this.userService.setNameFilter(value.nameFilter);
  }

  click(value: string) {
    this.test = value
  }

}
