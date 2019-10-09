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
var core_1 = require("@angular/core");
var ClocksComponent = (function () {
    function ClocksComponent() {
        this.cloackBckgImagePath = "./app/clocks/clocks_bckg.jpg";
        this.date = new Date();
        this.angle = 0;
        this.clockDivisions = 60;
    }
    Object.defineProperty(ClocksComponent.prototype, "imagePath", {
        get: function () {
            return this.cloackBckgImagePath;
        },
        enumerable: true,
        configurable: true
    });
    ClocksComponent.prototype.ngOnInit = function () {
        this.canvas = this.clocks.nativeElement;
        this.context = this.canvas.getContext("2d");
        this.image = $("#clocks-bckg")[0];
        this.startClocks();
    };
    ClocksComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    ClocksComponent.prototype.startClocks = function () {
        this.timer = setInterval(this.updateClock.bind(this), 50);
    };
    ClocksComponent.prototype.updateClock = function () {
        this.date = new Date;
        this.canvasClear();
        this.canvasDrawClockView();
        this.canvasDrawClockTime();
    };
    ClocksComponent.prototype.canvasDrawClockView = function () {
        this.canvasDrawCircle(10);
        this.canvasDrawHours();
        this.canvasDrawCenter();
    };
    ClocksComponent.prototype.canvasDrawClockTime = function () {
        this.canvasDrawSecondArrow();
        this.canvasDrawMinuteArrow();
        this.canvasDrawHourArrow();
    };
    ClocksComponent.prototype.canvasClear = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    ClocksComponent.prototype.drawBckgImage = function (image) {
        this.context.beginPath();
        this.context.arc(this.canvas.width / 2, this.canvas.height / 2, this.canvas.height / 2, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
        this.context.drawImage(image, 0, 0);
    };
    ClocksComponent.prototype.canvasDrawCircle = function (radius) {
        this.context.beginPath();
        this.context.arc(this.canvas.width / 2, this.canvas.height / 2, this.clockDivisions + radius, 0, Math.PI * 2);
        this.context.lineWidth = 2;
        this.context.strokeStyle = '#b4b4b4';
        this.context.stroke();
    };
    ClocksComponent.prototype.canvasDrawCenter = function () {
        this.context.beginPath();
        this.context.arc(this.canvas.width / 2, this.canvas.height / 2, 2, 0, Math.PI * 2);
        this.context.lineWidth = 3;
        this.context.fillStyle = '#353535';
        this.context.strokeStyle = '#5a5a5a';
        this.context.stroke();
    };
    ClocksComponent.prototype.canvasDrawHours = function () {
        this.context.lineWidth = 1;
        for (var i = 0; i < 12; i++) {
            this.angle = (i + 1 - 3) * (Math.PI * 2) / 12;
            this.context.beginPath();
            var x = (this.canvas.width / 2) + Math.cos(this.angle) * (this.clockDivisions) - 4;
            var y = (this.canvas.height / 2) + Math.sin(this.angle) * (this.clockDivisions) + 3;
            //this.context.font = "Arial";
            this.context.strokeStyle = "#000000";
            this.context.font = "normal 10px 'Times New Roman'";
            this.context.strokeText((i + 1).toString(), x, y);
            this.context.stroke();
        }
    };
    ClocksComponent.prototype.canvasDrawSecondArrow = function () {
        var milsec = this.date.getSeconds() * 1000 + this.date.getMilliseconds();
        this.angle = ((Math.PI * 2) * (milsec / 60000)) - ((Math.PI * 2) / 4);
        this.context.lineWidth = 0.5;
        this.context.beginPath();
        this.context.moveTo(this.canvas.width / 2, this.canvas.height / 2);
        this.context.lineTo((this.canvas.width / 2 + Math.cos(this.angle) * this.clockDivisions), this.canvas.height / 2 + Math.sin(this.angle) * this.clockDivisions);
        this.context.moveTo(this.canvas.width / 2, this.canvas.height / 2);
        this.context.lineTo((this.canvas.width / 2 - Math.cos(this.angle) * 20), this.canvas.height / 2 - Math.sin(this.angle) * 20);
        this.context.strokeStyle = '#555555';
        this.context.stroke();
    };
    ClocksComponent.prototype.canvasDrawMinuteArrow = function () {
        var min = this.date.getMinutes();
        this.angle = ((Math.PI * 2) * (min / 60)) - ((Math.PI * 2) / 4);
        this.context.lineWidth = 1.5;
        this.context.beginPath();
        this.context.moveTo(this.canvas.width / 2, this.canvas.height / 2);
        this.context.lineTo((this.canvas.width / 2 + Math.cos(this.angle) * this.clockDivisions / 1.1), this.canvas.height / 2 + Math.sin(this.angle) * this.clockDivisions / 1.1);
        this.context.strokeStyle = '#999999';
        this.context.stroke();
    };
    ClocksComponent.prototype.canvasDrawHourArrow = function () {
        var hour = this.date.getHours();
        var min = this.date.getMinutes();
        this.angle = ((Math.PI * 2) * ((hour * 5 + (min / 60) * 5) / 60)) - ((Math.PI * 2) / 4);
        this.context.lineWidth = 1.5;
        this.context.beginPath();
        this.context.moveTo(this.canvas.width / 2, this.canvas.height / 2);
        this.context.lineTo((this.canvas.width / 2 + Math.cos(this.angle) * this.clockDivisions / 1.5), this.canvas.height / 2 + Math.sin(this.angle) * this.clockDivisions / 1.5);
        this.context.strokeStyle = '#000000';
        this.context.stroke();
    };
    __decorate([
        core_1.ViewChild("clocks"), 
        __metadata('design:type', core_1.ElementRef)
    ], ClocksComponent.prototype, "clocks", void 0);
    ClocksComponent = __decorate([
        core_1.Component({
            selector: "clocks",
            templateUrl: "app/clocks/clocks.template.html"
        }), 
        __metadata('design:paramtypes', [])
    ], ClocksComponent);
    return ClocksComponent;
}());
exports.ClocksComponent = ClocksComponent;
//# sourceMappingURL=clocks.component.js.map