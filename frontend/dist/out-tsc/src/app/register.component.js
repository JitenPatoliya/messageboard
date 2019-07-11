import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
let RegisterComponent = class RegisterComponent {
    constructor(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.form = fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, emailValid()]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, {
            validators: matchingFields('password', 'confirmPassword')
        });
    }
    onSubmit() {
        console.log(this.form.errors);
        this.auth.register(this.form.value);
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'register',
        templateUrl: './register.component.html',
        styles: [
            `
    .error{
        background-color: #fff0f0
    }
    `
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        AuthService])
], RegisterComponent);
export { RegisterComponent };
function matchingFields(field1, field2) {
    return form => {
        if (form.controls[field1].value !== form.controls[field2].value)
            return { mismatchedFields: true };
    };
}
function emailValid() {
    return control => {
        var regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regex.test(control.value) ? null : { invalidEmail: true };
    };
}
//# sourceMappingURL=register.component.js.map