import * as tslib_1 from "tslib";
import { AuthService } from './auth.service';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav.component';
import { RegisterComponent } from './register.component';
var routes = [
    { path: '', component: HomeComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'messages/:name', component: MessagesComponent },
    { path: 'register', component: RegisterComponent },
];
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent, MessagesComponent, NewMessageComponent,
            NavComponent, HomeComponent, RegisterComponent
        ],
        imports: [
            BrowserModule, HttpClientModule, AppRoutingModule,
            FormsModule, ReactiveFormsModule, MatSnackBarModule,
            BrowserAnimationsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
            MatToolbarModule,
            RouterModule.forRoot(routes)
        ],
        providers: [WebService, AuthService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map