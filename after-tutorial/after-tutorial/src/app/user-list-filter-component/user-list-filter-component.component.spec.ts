import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListFilterComponentComponent } from './user-list-filter-component.component';

describe('UserListFilterComponentComponent', () => {
  let component: UserListFilterComponentComponent;
  let fixture: ComponentFixture<UserListFilterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListFilterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
