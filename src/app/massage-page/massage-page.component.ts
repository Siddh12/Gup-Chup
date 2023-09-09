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
   ngOnInit(){
     var id = localStorage.getItem("id");
     this.api.apicall(id).getUserDetails.subscribe((data) => {
      this.userData = data;
      console.log(this.userData);
      
   })
}

logout(){
  this.api.removeToken()
  this.router.navigateByUrl('')
}
}
