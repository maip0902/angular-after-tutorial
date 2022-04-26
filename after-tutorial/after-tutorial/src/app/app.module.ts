import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListItemComponentComponent } from './user-list-item-component/user-list-item-component.component';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';
import { UserListFilterComponentComponent } from './user-list-filter-component/user-list-filter-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListItemComponentComponent,
    UserListComponentComponent,
    UserListFilterComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
