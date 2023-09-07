import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

   url = "https://spot-buy.vercel.app/";

  apicall(object : any){
   
    return {
      getOTP : this.http.post(this.url + "emailvarification", object),
      varifyOTP : this.http.post(this.url + "otpVarification", object)
    }
  }


}
