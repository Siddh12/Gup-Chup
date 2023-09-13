import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { HttpClientModule  } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/LoginpageComponent';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { MassagePageComponent } from './massage-page/massage-page.component';
import { AllUserPageComponent } from './all-user-page/all-user-page.component';
import { ChatpageComponent } from './chatpage/chatpage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    UpdateProfileComponent,
    MassagePageComponent,
    AllUserPageComponent,
    ChatpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
