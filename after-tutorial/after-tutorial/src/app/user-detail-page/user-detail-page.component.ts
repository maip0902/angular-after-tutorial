import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, map, distinctUntilChanged } from 'rxjs';
import { UserDetailUsecase } from '../user-detail.usecase';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent implements OnInit {
  user$ = this.userDetailUsecase.user$;

  private onDestroy$ = new EventEmitter();

  constructor(private route: ActivatedRoute, private userDetailUsecase: UserDetailUsecase) {

  }

  ngOnInit(): void {
    this.route.params
    .pipe(
      takeUntil(this.onDestroy$),
      map(params => params["userId"]),
      distinctUntilChanged()
    )
    .subscribe(userId => this.userDetailUsecase.fetchUser(userId));
  }

  ngOnDestroy() {
    this.onDestroy$.complete();
  }
}
