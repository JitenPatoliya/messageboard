import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
//import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
let WebService = class WebService {
    constructor(http, errorHandler, sb) {
        this.http = http;
        this.errorHandler = errorHandler;
        this.sb = sb;
        this.BASE_URL = 'https://localhost:44308/api';
        this.messageStore = [];
        this.messageSubject = new Subject();
        this.messages = this.messageSubject.asObservable();
        this.getMessages();
    }
    getMessages(user) {
        user = (user) ? '/' + user : '';
        this.http.get(this.BASE_URL + '/messages' + user)
            .subscribe(res => {
            this.messageStore = res;
            this.messageSubject.next(this.messageStore);
        }, error => {
            this.handleError("Unable to get messages");
        });
    }
    postMessage(message) {
        this.http.post(this.BASE_URL + '/messages', message)
            .subscribe(res => {
            this.messageStore.push(res);
            this.messageSubject.next(this.messageStore);
        }, error => this.handleError("Unable to post message"));
    }
    handleError(error) {
        console.error(error);
        this.sb.open(error, "Close", { duration: 2000 });
    }
};
WebService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        ErrorHandler,
        MatSnackBar])
], WebService);
export { WebService };
/*
//getMessages():  Observable<Message[]>{
async getMessages(user?) {
        try {
            user = (user) ? '/'+user : '';
            var response = await this.http.get<Message[]>(this.BASE_URL+'/messages'+user);
            response.subscribe(res => this.messages = res,
                                 error=>this.handleError("Unable to get messages"));
        } catch (error) {
            this.errorHandler.handleError(error);
        }

        //.map((result: Response) => this.messages = result.json());
    }

    async postMessage(message:Message){
        var response = this.http.post<Message>(this.BASE_URL+'/messages', message);//.toPromise();
        response.subscribe(res => this.messages.push(res),
                                 error=>this.handleError("Unable to post message"));
    }
*/ 
//# sourceMappingURL=web.service.js.map