import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let NavComponent = class NavComponent {
    constructor() { }
};
NavComponent = tslib_1.__decorate([
    Component({
        selector: 'nav',
        template: `<mat-toolbar color='primary'>
        
        <button mat-button routerLink='/'>Message Board</button>
        <button mat-button routerLink='/messages'>Messages</button>
        <button mat-button routerLink='/register'>Register</button>

    </mat-toolbar>`
    }),
    tslib_1.__metadata("design:paramtypes", [])
], NavComponent);
export { NavComponent };
//# sourceMappingURL=nav.component.js.map