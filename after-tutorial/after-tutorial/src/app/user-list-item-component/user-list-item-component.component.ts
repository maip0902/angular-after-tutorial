import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list-item-component',
  templateUrl: './user-list-item-component.component.html',
  styleUrls: ['./user-list-item-component.component.css']
})
export class UserListItemComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  user!: User

}
