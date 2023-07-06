import { Component, OnInit } from '@angular/core';
import { ChatService } from '../Services/chat.service';
import { ChatDTO } from 'src/app/ChatDTO';
// import { IUser } from '../iuser';
// import { UserChats } from '../user-chats';
import { HubConnection } from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr';
import { AuthService } from '../Services/auth.service';
import { Ichat } from '../Interfaces/Chat';
import { User } from '../Interfaces/User';
import { AdminService } from '../Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';

// import { EmojiService } from 'ng-emoji-picker';

@Component({
  selector: 'app-chat',
  templateUrl:'./chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private chatService: ChatService, private Auth: AuthService,private admin: AdminService,private toast:ToastrService, private route: Router, private builder: FormBuilder) {
   
  }
    user: ChatDTO = { 
    senderId: this.Auth.gettokenID(),
    content: '',
   
  }

  formda = this.builder.group({
    content: new FormControl(null),
    senderId:new FormControl(null)
  })


  avatarUrls = [
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp",
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp",

  ];

 

  AllUsers: User[] = [];
  chats: Ichat[] = [];
  sendID!: string;
  senderName!:any;
  recieverName!: any;
  StrangerName!: any;
  recievID!: string;


  hubConnectionBuilderShare!: HubConnection;
  ngOnInit(): void {
    this.hubConnectionBuilderShare = new signalR.HubConnectionBuilder().withUrl('http://localhost:5218/ChatHub',
      {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      }).configureLogging(signalR.LogLevel.Debug).build();

    setTimeout(() => {
      this.hubConnectionBuilderShare.start().then(() => {
        console.log("connection started");
      }).catch(err => console.log(err));
    }, 2000);

      this.hubConnectionBuilderShare.on('ReceiveMessage', (message) => {
        this.chats.push(message);
      console.log(this.chats);
    });
    this.GetMesg(this.Auth.gettokenID())
  }


  currentUser: any = this.Auth.gettokenID();
  RCVId?: string;
  async SendMessage(event:any) {
    this.hubConnectionBuilderShare.invoke('NewMassameAdded',this.user);
    this.hubConnectionBuilderShare.off('ReceiveOneNotify');
    this.hubConnectionBuilderShare.on('ReceiveOneNotify', (message) => {
      const p: HTMLElement = document.createElement('P')
      const chat = document.getElementById('Chat')


    //   <div  class="d-flex flex-row justify-content-start" style="margin-top: 2%;">
    //   <p class="large p-2 me-3 mb-1 rounded-3 " style="width: 50%; background-color:#404c68; margin-left:auto;color:#fff" > ${ message.content }</p>          
    //   <p style="color: rgb(123, 127, 127); font-size: small; font-style: oblique; font-weight: 600;">Me : </p>
    // </div>



    // <div  class="d-flex flex-row justify-content-start" style="margin-top: 2%; margin-left: auto;">
               
    //           <p style="color: rgb(123, 127, 127); font-size: small; font-style: oblique; font-weight: 600;"> ${this.getUsersName(message.senderId)} </p>

    //               <p style="width: 40%; background-color: #f1f0f0; margin-right: auto;" class="large p-2 me-3 mb-1 rounded-3" > ${ message.content }</p>
                  
    //           </div>
      if(message.senderId==this.currentUser)
      {
        p.innerHTML = `
 
        <li class="p-2 border-bottom" >
            <div class="pt-1">
              <div class="large p-2 me-3 mb-1 rounded-3 "  style="width: 50%;background-color: #404c68; color: #fff; margin-left: auto;">
                    <p style="color: white; font-size: small; font-style: oblique; font-weight: 600;">Me : </p>
                   <p class="large p-2 me-3 mb-1 rounded-3 " style="width: 50%;background-color: #404c68; color: #fff; margin-left: auto;" > ${ message.content }</p>
              </div>
          </div>
        </li>

      `

      }
      else
      {
                p.innerHTML = `
        <li class="p-2 border-bottom" >
            <div class="pt-1">
            


            <div style="width: 40%; background-color: #f1f0f0;margin-right: auto;" class="large p-2 me-3 mb-1 rounded-3 ">
                                  <p style="width: 40%; background-color: #f1f0f0;margin-right: auto;"class="large p-2 me-3 mb-1 rounded-3 "> ${ message.content }</p>
                                  <p style="color: rgb(123, 127, 127); font-size: small; font-style: oblique; font-weight: 600;">${this.getUsersName(message.senderId)}</p>
                                </div>

            </div>
          </div>
        </li>
      `
      }
    
      chat?.appendChild(p);
      console.log('Sending message to server: ' + ' says ' + message.content+this.currentUser,this.getUsersName(message.senderId));
    });
    this.user.content=''
  }

Names:any;

  async GetMesg(UserId?: string) {
    this.RCVId = UserId;
    this.chatService.GetConversation(UserId).subscribe((data) => {
      this.chats = data;
      this.Names=data;
      // for(let messag of data){
      // this.getUsersName(messag.senderId)
      //  }   
    },
      (err) => {
        console.log(err);
      });

  }


  userName!: string;
  getUsersName(userId: string) :any{
    this.chatService.GetSenderName(userId).subscribe((data) => {  
      console.log(data.userName);
      this.userName= data.userName;
    }
    )
     return this.userName;
  }


}


