import { Injectable, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';          // import signalR
import { HttpClient } from '@angular/common/http';
import { ChatDTO } from '../ChatDTO';
import { Observable, Subject } from 'rxjs';
// import { User } from '../Interface,enum/User';
import { Ichat } from '../Interfaces/Chat';
import { AuthService } from './auth.service';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

   readonly POST_URL = "http://localhost:5218/api/Chat/SendMessage"

  private receivedMessageObject: ChatDTO={
     
      senderId: this.auth.gettokenID(),
      content: '',
     

  };
  // private Users:IUser[]=[];
  // private userchats:UserChats[]=[];
  private sharedObj = new Subject<ChatDTO>();
  
  constructor(private http: HttpClient,private auth:AuthService) { 
            
  }


//   private mapReceivedMessage(senderUser: string,receiveUser:string, message: string): void {
//     this.receivedMessageObject.senderId = senderUser;
//     this.receivedMessageObject.reciverId = receiveUser;
//     this.receivedMessageObject.msgText = message;
//     this.sharedObj.next(this.receivedMessageObject);
//  }
  /* ****************************** Public Mehods **************************************** */
  
  // public getUsers(curr:any):Observable<User>
  // {
  //   return this.http.get<User>(`http://localhost:5218/api/chat/GetChatUsers?OwnerAccountId=${this.auth.gettokenID()}`);
  // }

  public SendMessage(chatDTO:ChatDTO):Observable<ChatDTO>
  {
    return this.http.post<ChatDTO>(`http://localhost:5218/api/Chat/SendMessage`,chatDTO);
  }

  public GetConversation( UserId?:string ):Observable<Ichat[]>
  {

    return this.http.get<Ichat[]>(`http://localhost:5218/api/Chat/GetMessage?sender=${UserId}`);
  }
  // public GetUserObj():Observable<User[]>{
  //   return this.http.get<User[]>(`http://localhost:5294/api/chat/GetChatUsers?OwnerAccountId=${this.auth.gettokenID()}`);
  // }

  public GetSenderName(userId:string):Observable<User>{
    return this.http.get<User>(`http://localhost:5218/api/Chat/GetUserName?userId=${userId}`);
   
  }
  // public GetRecieverName(userId:string):Observable<User>{
  //   return this.http.get<User>(`http://localhost:5294/api/chat/GetUserName?userId=${this.auth.gettokenID()}`);
  //   // `);
  // }
}
