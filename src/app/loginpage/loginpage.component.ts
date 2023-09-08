import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  isLoggedIn: boolean = true;
  Email: string = ""
  loder: boolean = false;
  otbtemplet: boolean = false;
  sucessmsg: any;
  UnSuccessfully: boolean = false

  constructor(private api: ApiService) { }


  grabId: any;

  changeEmail(){
    this.otbtemplet = false;
    this.isLoggedIn = true;
  }
  getOtp(value: any) {
    console.log(value);
    this.isLoggedIn = false
    this.Email = value.email
    this.loder = true;
    this.api.apicall(value).getOTP.subscribe(data => {
      console.log(data);
      this.grabId = data
      if (data) {
        this.loder = false;
        this.otbtemplet = true
      }
    })

  }
  varifiOTP(value: any) {
    console.log(value);
    console.log(this.grabId.Databaseinformation._id);
    var dataforsend = {
      id: this.grabId.Databaseinformation._id,
      otp: Number(value.otp),
    }

    console.log(dataforsend);
    this.otbtemplet = false
    this.loder = true;

    this.api.apicall(dataforsend).varifyOTP.subscribe(data => {
      console.log(data);
      var Data = data
      if (data) {
        this.loder = false;
        this.sucessmsg = Data
        if (this.sucessmsg.text === "OTP Verified Successfully") {
          this.api.apicall(this.grabId.Databaseinformation._id).getUserDetails.subscribe((data) => {
            console.log(data);

          })
        } else if (this.sucessmsg.text === "OTP Verified UnSuccessfully") {
          this.UnSuccessfully = true
          setTimeout(() => {
            this.UnSuccessfully = false;
            this.otbtemplet = true;
          }, 3000);
        }
      }
    })

  }


}
