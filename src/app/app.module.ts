import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatUsersComponent } from './chat-users/chat-users.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatHistoriesComponent } from './chat-histories/chat-histories.component';
import { ChatService } from './chat.service';
import { ApolloModule } from 'apollo-angular';
import { GraphqlService } from './graphql.service';
import { ChatViewComponent } from './chat-view/chat-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatInputComponent,
    ChatUsersComponent,
    ChatHistoriesComponent,
    ChatViewComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ApolloModule,
  ],
  providers: [
    GraphqlService,
    ChatService,
    { provide: APP_INITIALIZER, useFactory: (service: GraphqlService) => () => service.hydrated(), deps: [GraphqlService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
