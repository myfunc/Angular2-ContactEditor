"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HoverRowDirective = (function () {
    function HoverRowDirective(elementRef) {
        this.elementRef = elementRef;
        this.ref = this.elementRef.nativeElement;
        this.userNameChange = new core_1.EventEmitter();
    }
    HoverRowDirective.prototype.onClick = function (model) {
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HoverRowDirective.prototype, "userNameChange", void 0);
    HoverRowDirective = __decorate([
        core_1.Directive({
            selector: '[hover-row]',
            host: {
                '(click)': 'onMouseEnter()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HoverRowDirective);
    return HoverRowDirective;
}());
exports.HoverRowDirective = HoverRowDirective;
//# sourceMappingURL=hover-row.js.map