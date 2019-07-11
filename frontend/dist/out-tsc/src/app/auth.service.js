import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
let AuthService = class AuthService {
    constructor(http, errorHandler) {
        this.http = http;
        this.errorHandler = errorHandler;
        this.BASE_URL = 'https://localhost:44308/auth';
    }
    register(user) {
        delete user.confirmPassword;
        this.http.post(this.BASE_URL + "/register", user).subscribe((res) => {
            console.log(res);
            localStorage.setItem('token', res.token);
        });
    }
};
AuthService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        ErrorHandler])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map