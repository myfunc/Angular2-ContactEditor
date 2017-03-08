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
var forms_1 = require("@angular/forms");
var group_edit_box_data_contract_1 = require("./group-edit-box-data-contract");
var GroupEditBoxComponent = (function () {
    function GroupEditBoxComponent(clientsData) {
        this.clientsData = clientsData;
        this._inited = false;
        this.onSave = new core_1.EventEmitter();
    }
    GroupEditBoxComponent.prototype.btnSaveClick = function () {
        if (!this.checkFormValid())
            return;
        this.onSave.emit();
        this.closeEditBox();
    };
    GroupEditBoxComponent.prototype.isReady = function () {
        return this._inited;
    };
    GroupEditBoxComponent.prototype.closeEditBox = function () {
        this._inited = false;
    };
    Object.defineProperty(GroupEditBoxComponent.prototype, "activeGroupInfo", {
        set: function (groupInfo) {
            if (groupInfo) {
                this.groupInfo = groupInfo;
                this._inited = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    GroupEditBoxComponent.prototype.checkFormValid = function () {
        if (this.isReady()) {
            return this.editFrom.valid;
        }
        return true;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GroupEditBoxComponent.prototype, "onSave", void 0);
    __decorate([
        core_1.ViewChild("editform"), 
        __metadata('design:type', forms_1.NgForm)
    ], GroupEditBoxComponent.prototype, "editFrom", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', group_edit_box_data_contract_1.GroupInfo), 
        __metadata('design:paramtypes', [group_edit_box_data_contract_1.GroupInfo])
    ], GroupEditBoxComponent.prototype, "activeGroupInfo", null);
    GroupEditBoxComponent = __decorate([
        core_1.Component({
            selector: "group-edit-box",
            templateUrl: "./app/groups/group-edit-box/group-edit-box.component.html",
            styleUrls: ["./app/groups/group-edit-box/group-edit-box.style.css"]
        }), 
        __metadata('design:paramtypes', [clients_data_service_1.ClientsDataService])
    ], GroupEditBoxComponent);
    return GroupEditBoxComponent;
}());
exports.GroupEditBoxComponent = GroupEditBoxComponent;
//# sourceMappingURL=group-edit-box.component.js.map