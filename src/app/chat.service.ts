import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Apollo } from 'apollo-angular';
import { listChats } from './queries/list-chats';
import { getChat } from './queries/get-chat';
import { post } from './queries/post';
import { subscriptionToChats } from './queries/subscriptionToChats';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class ChatService {

  chats = new BehaviorSubject([]);

  constructor(private apollo: Apollo) {
    this.initApollo();
  }

  initApollo() {

    this.apollo.watchQuery({query: listChats, fetchPolicy: 'network-only'}).valueChanges
    .pipe(map(result => result.data['listChats'].items)).subscribe(o => {
      const copied = Object.assign([], o);
      copied.sort((o1, o2) => {
        return o1.createdAt > o2.createdAt;
      });
      this.chats.next(copied);
    });

    this.apollo.subscribe({query: subscriptionToChats}).subscribe(o => {
      const chat  = o.data.subscribeToChats;
      if (this.chats.getValue().findIndex(p => p.userId === chat.userId && p.createdAt === chat.createdAt) === -1) {
        this.chats.next([...this.chats.getValue(), chat]);
      }
    });
  }

  send(input: any) {
    const chat = {
      userId: input.userId,
      createdAt: new Date().toISOString(),
      message: input.message,
    };
    this.chats.next([...this.chats.getValue(), chat]);
    this.apollo.mutate({mutation: post, variables: chat}).subscribe();
  }

  getChat(id) {
    return this.apollo.watchQuery({query: getChat, variables: {id: id}}).valueChanges;
  }
}
