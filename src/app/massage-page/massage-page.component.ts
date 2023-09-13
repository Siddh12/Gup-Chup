import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-massage-page',
  templateUrl: './massage-page.component.html',
  styleUrls: ['./massage-page.component.css']
})
export class MassagePageComponent {
  constructor(private api: ApiService, private router: Router) { }
  userData: any
  Name: string = ""
  showPopup: boolean  = false;
  inputString : string = ""
  userArray : any = []; 
  imgurl: string = "../../assets/profilepuctureimagemen.jpg";
  ngOnInit() {
    var id = localStorage.getItem("id");
    this.api.apicall(id).getUserDetails.subscribe((data) => {
      this.userData = data;
      console.log(this.userData);
       this.inputString = this.userData.name;
      var words = this.inputString.split(" "); 
      console.log(words);
      this.Name = words[0]; 
      console.log( this.Name);
    })
    
    this.api.apicall(id).getmsgforuser.subscribe((data) => {
      this.userArray= data;
      console.log(this.userArray);
    }, (error)=>{
      console.log(error);
      
    })

  }

  msg(id : any){
    localStorage.setItem("id_where_send_to_massege", id.toString())
    localStorage.setItem("NavigetUrl", "massagepage")
    this.router.navigateByUrl('chatpage')
  }

  ShowAllUser(){
    this.router.navigateByUrl('alluser')
  }
  Showpopup(){
    this.showPopup = true
  }

  closePopup(){
    this.showPopup = false
  }

  logout() {
    this.api.removeToken()
    this.router.navigateByUrl('')
  }
  UpdateProfile(){
    this.router.navigateByUrl('updateProfile')
  }
}
