import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { UserListFilter } from '../state';

@Component({
  selector: 'app-user-list-filter-component',
  templateUrl: './user-list-filter-component.html',
  styleUrls: ['./user-list-filter-component.css']
})
export class UserListFilterComponent {
  @Input() set value(value: UserListFilter) {
    this.setFormValue(value);
  }
  @Output() valueChangeEvent = new EventEmitter<UserListFilter>();
  @Output() 
  testSetEvent = new EventEmitter();

  form: FormGroup;

  private onDestroy = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nameFilter: ['']
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(value => {
      this.valueChangeEvent.emit(value);
    });
  }

  ngOnDestroy() {
    this.valueChangeEvent.emit({nameFilter: ''} as UserListFilter);
  }

  private setFormValue(value: UserListFilter) {
    this.form.setValue(value, { emitEvent: false });
  }

  testSet() {
    console.log('clicked')
    this.testSetEvent.emit("success!!!")
  }

}
