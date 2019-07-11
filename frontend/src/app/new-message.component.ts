import { AuthService } from './auth.service';
import { Message } from './shared/message';
import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'new-message',
    template: `
    <mat-card class="card">
        <mat-card-content>
            <mat-form-field>
                <textarea [(ngModel)]="message.text" matInput placeholder="Message"></textarea>
            </mat-form-field>
        </mat-card-content>
        <mat-card-actions>
            <button (click)="post()" mat-button color='primary'>POST</button>
        </mat-card-actions>
    </mat-card>
    `
})

export class NewMessageComponent{ 
    // @Output() onPosted = new EventEmitter();

    constructor(private webService: WebService
                , private auth:AuthService){}

    message:Message = { 
        owner: this.auth.name,
        text: ""
    }

    post(){
        //console.log(this.message);
        this.webService.postMessage(this.message);
        //this.onPosted.emit(this.message);
    }
}