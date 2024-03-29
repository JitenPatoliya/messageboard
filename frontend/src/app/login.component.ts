import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'login',
    template: 
    `
    <mat-card>
        <mat-form-field>
            <input matInput [(ngModel)]="loginData.email" placeholder="Email" type="email">
        </mat-form-field>
        <mat-form-field>
            <input matInput [(ngModel)]="loginData.password" placeholder="Password" type="password">
        </mat-form-field>
        <button mat-raised-button color="primary" (click)="login()">Login</button>
    </mat-card>
    `
})
export class LoginComponent{ 
    constructor(private auth:AuthService){}
    loginData={
        email: '',
        password: ''
    }

    login() {
        this.auth.login(this.loginData);
    }
}