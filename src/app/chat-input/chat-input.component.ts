import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChatService } from '../chat.service';
import * as randomName from 'random-name';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

  randomUserId = randomName.first();

  messageForm = new FormGroup({
    userId: new FormControl(this.randomUserId),
    message: new FormControl()
  });

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  sendMessage() {
    if (this.messageForm.invalid) {
      return false;
    }
    this.chatService.send(this.messageForm.value);
    this.clearForm();
  }

  clearForm() {
    this.messageForm.get('message').setValue('');
  }
}
