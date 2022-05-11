import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListItemComponent } from './user-list-item-component/user-list-item.component';
import { UserListComponent } from './user-list-component/user-list.component';
import { UserListFilterComponent } from './user-list-filter-component/user-list-filter.component';
import { UserDetailPageComponent } from './user-detail-page/user-detail-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserListItemComponent,
    UserListFilterComponent,
    UserListComponent,
    UserDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
