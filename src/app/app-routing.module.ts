import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/LoginpageComponent';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import {AuthgurdGuard} from './authgurd.guard';
import {MassagePageComponent} from './massage-page/massage-page.component'
import { AllUserPageComponent } from './all-user-page/all-user-page.component';
const routes: Routes = [
  {
    path: '',
    component: LoginpageComponent
  },
  {
    path: "updateProfile",  
    component: UpdateProfileComponent,
    canActivate: [AuthgurdGuard]
  },
  {
    path: "massagepage",
    component: MassagePageComponent,
    canActivate: [AuthgurdGuard]
  },

  {
    path: "alluser",
    component: AllUserPageComponent,
    canActivate:[AuthgurdGuard]
  }


]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
