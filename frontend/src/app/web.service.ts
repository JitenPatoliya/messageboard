import { AuthService } from './auth.service';
import { Message } from './shared/message';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
//import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';

@Injectable()
export class WebService {
    BASE_URL = 'https://localhost:44308/api';
    private messageStore: Message[] = [];
    private messageSubject = new Subject();
    messages = this.messageSubject.asObservable();
    
    constructor(private http: HttpClient
        , private errorHandler: ErrorHandler
        , private sb: MatSnackBar
        , private auth:AuthService) {
        this.getMessages();
    }

    getMessages(user?) {

        user = (user) ? '/' + user : '';
        this.http.get<Message[]>(this.BASE_URL + '/messages' + user)
            .subscribe(res => {
                this.messageStore = res;
                this.messageSubject.next(this.messageStore);
            }, error => {
                this.handleError("Unable to get messages");
            });
    }

    postMessage(message: Message) {
        this.http.post<Message>(this.BASE_URL + '/messages', message)
            .subscribe(res => {
                this.messageStore.push(res);
                this.messageSubject.next(this.messageStore);
            }, error => this.handleError("Unable to post message"));
    }

    getUser(){
        return this.http.get(this.BASE_URL+"/users/me", {headers: this.auth.tokenHeader});
        //.subscribe((res: any)=> console.log(res));
    }

    saveUser(userData){
        return this.http.post(this.BASE_URL+"/users/me", userData , {headers: this.auth.tokenHeader});
        //.subscribe((res: any)=> console.log(res));
    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, "Close", { duration: 2000 });
    }
}

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