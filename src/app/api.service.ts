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
      getUserDetails : this.http.get(this.url+ "getUserDetails/"+ object)
    }
  }


}
