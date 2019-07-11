import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
let MessagesComponent = class MessagesComponent {
    constructor(webService, route) {
        this.webService = webService;
        this.route = route;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var name = this.route.snapshot.params.name;
            this.webService.getMessages(name);
            //  this.webService.messages.subscribe(messages => this.messages = messages);
            //  //await this.webService.getMessages().subscribe(res => this.messages = res);
        });
    }
};
MessagesComponent = tslib_1.__decorate([
    Component({
        selector: 'messages',
        template: `<div *ngFor="let message of webService.messages | async">
        <mat-card  class="card">
            <mat-card-title [routerLink]="['/messages', message.owner]" style="cursor: pointer">{{message.owner}}</mat-card-title>
            <mat-card-content>{{message.text}}</mat-card-content>
        </mat-card>
    </div>`
    }),
    tslib_1.__metadata("design:paramtypes", [WebService,
        ActivatedRoute])
], MessagesComponent);
export { MessagesComponent };
//# sourceMappingURL=messages.component.js.map