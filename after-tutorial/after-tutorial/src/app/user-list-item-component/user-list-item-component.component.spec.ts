import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListItemComponentComponent } from './user-list-item-component.component';

describe('UserListItemComponentComponent', () => {
  let component: UserListItemComponentComponent;
  let fixture: ComponentFixture<UserListItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListItemComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
