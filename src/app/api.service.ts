import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

   url = "https://gup-chup-backend.vercel.app/";

  apicall(object : any){
    
    return { 
      getOTP : this.http.post(this.url + "emailvarification", object),
      varifyOTP : this.http.post(this.url + "otpVarification", object),
      getUserDetails : this.http.get(this.url+ "getUserDetails/"+ object),
      updateProfile : this.http.post(this.url+ "updateUserDetails", object),
      getAllUser: this.http.get(this.url+ "alluser"),
      sendMsg : this.http.post(this.url +"startmassege", object),
      getmsgforuser : this.http.get(this.url+ "getmsgforuser/"+ object),
    }
  }

   
  setToken(token : string){
     localStorage.setItem("access_token", token)
  }

  isLoggedin(){
    return localStorage.getItem("access_token") ? true : false;
  }

  removeToken(){
    localStorage.removeItem("access_token")
  }

  sharedData: any ;

  setSharedData(data: any) {
    this.sharedData = data;
    console.log(data);
    
  }

  getSharedData() {
    return this.sharedData;
  }
}
