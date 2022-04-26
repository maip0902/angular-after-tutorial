import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'after-tutorial';
  users$ = this.userService.users$;
  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit() {
    this.userService.fetchUsers()
  }
}
