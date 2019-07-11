import { WebService } from './web.service';
import { Component } from '@angular/core';

@Component({
    selector: 'user',
    template: 
    `
    <mat-card class='card'>
        <mat-form-field>
            <input matInput placeholder="First Name" [(ngModel)]="model.firstName">
        </mat-form-field>
        <mat-form-field>
            <input matInput placeholder="Last Name" [(ngModel)]="model.lastName">
        </mat-form-field>
        <button mat-raised-button color="primary" (click)="saveUser(model)">Save Changes</button>
    </mat-card>
    `
})

export class UserComponent{ 
    model = {
        firstName: '',
        lastName: '',
    }
    constructor(private webService:WebService){}

    ngOnInit(){
        this.webService.getUser().subscribe((res: any)=> {
            this.model.firstName = res.firstName;
            this.model.lastName = res.lastName;
        });
    }

    saveUser(userData){
        this.webService.saveUser(userData).subscribe();
    }
}

