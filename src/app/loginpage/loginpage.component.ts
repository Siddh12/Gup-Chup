import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  isLoggedIn: boolean = true;
  Email : string =""

  getOtp(value: any){
   console.log(value);
   this.isLoggedIn = false
   this.Email = value.email
   
  }
  varifiOTP(value : number){
     console.log(value);
     
  }
}
