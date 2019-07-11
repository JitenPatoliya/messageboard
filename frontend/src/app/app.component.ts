import { Message } from './shared/message';
import { Component } from '@angular/core';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-root',
  template: 
  `
  <nav></nav>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
    // @ViewChild(MessagesComponent, {static: false}) messages:MessagesComponent;

    // onPosted(message:Message){
    //   //this.messages.messages.push(message);
    // }
}
