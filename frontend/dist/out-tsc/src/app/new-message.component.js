import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { WebService } from './web.service';
let NewMessageComponent = class NewMessageComponent {
    // @Output() onPosted = new EventEmitter();
    constructor(webService) {
        this.webService = webService;
        this.message = {
            owner: "",
            text: ""
        };
    }
    post() {
        //console.log(this.message);
        this.webService.postMessage(this.message);
        //this.onPosted.emit(this.message);
    }
};
NewMessageComponent = tslib_1.__decorate([
    Component({
        selector: 'new-message',
        template: `
    <mat-card class="card">
        <mat-card-content>
            <mat-form-field>
                <input [(ngModel)]="message.owner" matInput placeholder="Name">
            </mat-form-field>
            <mat-form-field>
                <textarea [(ngModel)]="message.text" matInput placeholder="Message"></textarea>
            </mat-form-field>
        </mat-card-content>
        <mat-card-actions>
            <button (click)="post()" mat-button color='primary'>POST</button>
        </mat-card-actions>
    </mat-card>
    `
    }),
    tslib_1.__metadata("design:paramtypes", [WebService])
], NewMessageComponent);
export { NewMessageComponent };
//# sourceMappingURL=new-message.component.js.map