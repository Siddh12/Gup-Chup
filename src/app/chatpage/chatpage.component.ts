import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent {
  constructor(private api: ApiService, private router: Router) { }
  userData: any
  usermsg: any = []
  Url: any = localStorage.getItem("NavigetUrl")
  reciverid : any = localStorage.getItem("id_where_send_to_massege");
  senderid  : any = localStorage.getItem("id")
  ngOnInit() {
    console.log(localStorage.getItem("id_where_send_to_massege"));
   
    this.api.apicall(this.reciverid).getUserDetails.subscribe((data) => {
      this.userData = data;
      console.log(this.userData);
    })
    this.usermsg = [{
      fristusermsgmsg: "hello",
      Secondusermsgmsg: "Hi there",
    },
    {
      fristusermsgmsg: "hello",
      Secondusermsgmsg: "Hi there",
    },
    {
      fristusermsgmsg: "hello",
      Secondusermsgmsg: "Hi there",
    }
      ,
    {
      fristusermsgmsg: "hello",
      Secondusermsgmsg: "Hi there",
    },
    {
      fristusermsgmsg: "hello",
      Secondusermsgmsg: "Hi there",
    }
      ,
    {
      fristusermsgmsg: "hello",
      Secondusermsgmsg: "Hi there",
    },
    {
      fristusermsgmsg: "hello",
      Secondusermsgmsg: "Hi there",
    }
      ,
    {
      fristusermsgmsg: "hello",
      Secondusermsgmsg: "Hi there",
    },
    {
      fristusermsgmsg: "hello",
      Secondusermsgmsg: "Hi there",
    }
      ,
    {
      fristusermsgmsg: "hello",
      Secondusermsgmsg: "Hi there",
    },
    {
      fristusermsgmsg: "hello",
      Secondusermsgmsg: "Hi there",
    }
      ,
    {
      fristusermsgmsg: "hello",
      Secondusermsgmsg: "Hi there",
    },
    {
      fristusermsgmsg: "hello",
      Secondusermsgmsg: "Hi there",
    }
    ]
  }

  SendMsg(value: any) {
    console.log(value);
    var object = {
      "sender": this.senderid,
      "receiver": this.reciverid,
      "message": value.massege
    }
    this.api.apicall(object).sendMsg.subscribe((data) => {
      console.log(data);

    }, (error) => {
      console.log(error);
    })
  }
  back() {
    this.router.navigateByUrl(this.Url)
  }
}
