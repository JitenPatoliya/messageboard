import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    
    BASE_URL = 'https://localhost:44308/auth';
    TOKEN_KEY= 'token';
    NAME_KEY= 'name';

    constructor(private http: HttpClient
        , private errorHandler: ErrorHandler
        , private router:Router) {
    }

    get name(){
        return localStorage.getItem(this.NAME_KEY);
    }

    get isAuthenticated(){
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    get tokenHeader(){
        var header = new HttpHeaders({'Authorization' : 'Bearer '+localStorage.getItem(this.TOKEN_KEY)});
        return header;
    }

    register(user) {
        delete user.confirmPassword;
        this.http.post(this.BASE_URL +"/register", user).subscribe( (res: any) =>{
            this.authenticate(res);
        });
    }

    logout(){
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.NAME_KEY);
    }

    login(loginData) {
        this.http.post(this.BASE_URL+"/login", loginData).subscribe((res: any) => {
            this.authenticate(res);
        });
    }

    authenticate(res) {
        if (!res.token)
            return;

        localStorage.setItem(this.TOKEN_KEY, res.token);
        localStorage.setItem(this.NAME_KEY, res.firstName);
        this.router.navigate(['/']);
    }
}