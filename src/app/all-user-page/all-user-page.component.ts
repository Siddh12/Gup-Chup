import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-user-page',
  templateUrl: './all-user-page.component.html',
  styleUrls: ['./all-user-page.component.css']
})
export class AllUserPageComponent {
  isSearchHidden = false;
  searchText = '';
  

  constructor(private api: ApiService, private router: Router) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        this.isSearchHidden = true;
      } else {
        this.isSearchHidden = false;
      }
    });
  }
  userData : any ={};
  imgurl: string = "../../assets/profilepuctureimagemen.jpg";
  ngOnInit(): void {
    
    this.api.apicall(null).getAllUser.subscribe(data => {
      console.log(data);
      this.userData = data;
    })
  }

  filteredUsers: any[] = this.userData;
  backtochat(){
    this.router.navigateByUrl('massagepage')
  }
  

  addFriend(userId: number) {
    console.log(`Added friend with userId: ${userId}`);
    localStorage.setItem("id_where_send_to_massege", userId.toString())
    localStorage.setItem("NavigetUrl", "alluser")
    this.router.navigateByUrl('chatpage')
  }

  filterUsers() {
    this.userData = this.userData.filter((user: { name: string; }) => user.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }


  
  }

