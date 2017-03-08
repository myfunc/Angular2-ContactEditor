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
var client_edit_box_data_contract_1 = require("./client-edit-box-data-contract");
var ClientEditBoxComponent = (function () {
    function ClientEditBoxComponent(clientsData) {
        this.clientsData = clientsData;
        this._fieldInited = false;
        this._ngInited = false;
        this.onSave = new core_1.EventEmitter();
        this.globalGroups = null;
        this.bufferContactGroups = []; // Array of groupId, where contact is member.
    }
    ClientEditBoxComponent.prototype.btnSaveClick = function () {
        if (!this.checkFormValid())
            return;
        this.saveSelectedGroups();
        this.onSave.emit();
        this.closeEditBox();
    };
    ClientEditBoxComponent.prototype.ngOnInit = function () {
        this._ngInited = true;
    };
    ClientEditBoxComponent.prototype.isReady = function () {
        return (this._fieldInited && this._ngInited);
    };
    ClientEditBoxComponent.prototype.closeEditBox = function () {
        this._fieldInited = false;
    };
    Object.defineProperty(ClientEditBoxComponent.prototype, "activeContactInfo", {
        set: function (contactInfo) {
            if (contactInfo) {
                this.contactInfo = contactInfo;
                this.loadSelectedGroups();
                this.contactInfo.groups = [];
                this._fieldInited = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    ClientEditBoxComponent.prototype.loadSelectedGroups = function () {
        var _this = this;
        this.contactInfo.groups.forEach(function (item) { return _this.bufferContactGroups.push(item.groupId); });
    };
    ClientEditBoxComponent.prototype.saveSelectedGroups = function () {
        for (var _i = 0, _a = this.editFrom.value["groups"]; _i < _a.length; _i++) {
            var groupId = _a[_i];
            this.contactInfo.groups.push(this.clientsData.getGroupById(groupId));
        }
    };
    ClientEditBoxComponent.prototype.checkFormValid = function () {
        // TODO: Validate logic for edit form
        if (this.isReady()) {
            return this.editFrom.valid;
        }
        return false;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ClientEditBoxComponent.prototype, "onSave", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ClientEditBoxComponent.prototype, "globalGroups", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', client_edit_box_data_contract_1.ContactInfo)
    ], ClientEditBoxComponent.prototype, "contactInfo", void 0);
    __decorate([
        core_1.ViewChild("editform"), 
        __metadata('design:type', forms_1.NgForm)
    ], ClientEditBoxComponent.prototype, "editFrom", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', client_edit_box_data_contract_1.ContactInfo), 
        __metadata('design:paramtypes', [client_edit_box_data_contract_1.ContactInfo])
    ], ClientEditBoxComponent.prototype, "activeContactInfo", null);
    ClientEditBoxComponent = __decorate([
        core_1.Component({
            selector: "client-edit-box",
            templateUrl: "./app/clients/client-edit-box/client-edit-box.component.html",
            styleUrls: ["./app/clients/client-edit-box/client-edit-box.style.css"]
        }), 
        __metadata('design:paramtypes', [clients_data_service_1.ClientsDataService])
    ], ClientEditBoxComponent);
    return ClientEditBoxComponent;
}());
exports.ClientEditBoxComponent = ClientEditBoxComponent;
//# sourceMappingURL=client-edit-box.component.js.map