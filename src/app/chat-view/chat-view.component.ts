import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent {

  @Input('chat')
  chat;

  @Input('color')
  color;

  constructor(public chatService: ChatService) {
  }



}
