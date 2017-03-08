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
var clients_data_service_1 = require("../../data-service/clients-data-service");
var clients_data_contract_1 = require("../../data-service/clients-data-contract");
var GroupInfoComponent = (function () {
    function GroupInfoComponent(clientsData) {
        this.clientsData = clientsData;
    }
    GroupInfoComponent.prototype.getGroupContacts = function () {
        return this.clientsData.getGroupContacts(this.activeGroup);
    };
    GroupInfoComponent.prototype.groupMembersCount = function () {
        return this.clientsData.getGroupContacts(this.activeGroup).length;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', clients_data_contract_1.Group)
    ], GroupInfoComponent.prototype, "activeGroup", void 0);
    GroupInfoComponent = __decorate([
        core_1.Component({
            selector: "group-info",
            templateUrl: "app/groups/group-info/group-info.template.html"
        }), 
        __metadata('design:paramtypes', [clients_data_service_1.ClientsDataService])
    ], GroupInfoComponent);
    return GroupInfoComponent;
}());
exports.GroupInfoComponent = GroupInfoComponent;
//# sourceMappingURL=group-info.component.js.map