import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
  constructor(private api: ApiService, private router: Router) { }

  id : any;
  loder: boolean = false;
  form: boolean = true

  ngOnInit(){
    console.log(localStorage.getItem("id"));
  }


  getuserdetails(value : any){
    console.log(value);
    var datatosend = {
      id : localStorage.getItem("id"),
      name: value.name,
      gender: value.gender,
      age: value.age,
      city: value.city
    }
    this.loder = true;
    this.form = false
    console.log(datatosend);
    this.api.apicall(datatosend).updateProfile.subscribe((data)=>{
         console.log(data);  
         this.router.navigateByUrl('massagepage')
    },(error)=>{
      console.log(error);
      this.loder = false
      this.form = true
    })
  }
}
