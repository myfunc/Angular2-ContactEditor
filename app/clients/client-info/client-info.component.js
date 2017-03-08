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
var clients_data_contract_1 = require("../../data-service/clients-data-contract");
var clients_data_service_1 = require("../../data-service/clients-data-service");
var ClientInfoComponent = (function () {
    function ClientInfoComponent(clientsData) {
        this.clientsData = clientsData;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', clients_data_contract_1.Contact)
    ], ClientInfoComponent.prototype, "activeContact", void 0);
    ClientInfoComponent = __decorate([
        core_1.Component({
            selector: "client-info",
            templateUrl: "app/clients/client-info/client-info.template.html"
        }), 
        __metadata('design:paramtypes', [clients_data_service_1.ClientsDataService])
    ], ClientInfoComponent);
    return ClientInfoComponent;
}());
exports.ClientInfoComponent = ClientInfoComponent;
//# sourceMappingURL=client-info.component.js.map