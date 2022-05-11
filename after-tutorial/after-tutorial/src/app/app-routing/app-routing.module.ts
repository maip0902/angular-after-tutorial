import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDetailPageComponent } from '../user-detail-page/user-detail-page.component';

const routes =[
  {
    path: 'users/:userId',
    component: UserDetailPageComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
