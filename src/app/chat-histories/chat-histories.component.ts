import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import * as randomColor from 'randomcolor';

@Component({
  selector: 'app-chat-histories',
  templateUrl: './chat-histories.component.html',
  styleUrls: ['./chat-histories.component.css']
})
export class ChatHistoriesComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  colors = [];

  ngOnInit() {
    // this.chats
  }

  getColor(userId) {
    let userColor = this.colors.find(o => o.userId === userId);
    if (userColor === undefined) {
      userColor = {userId: userId, color: randomColor()};
      this.colors.push(userColor);
    }
    return userColor.color;
  }

}
