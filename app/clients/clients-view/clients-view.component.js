"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var client_edit_box_data_contract_1 = require("../client-edit-box/client-edit-box-data-contract");
var view_component_abstact_1 = require("../../view/view-component.abstact");
var ClientsViewComponent = (function (_super) {
    __extends(ClientsViewComponent, _super);
    function ClientsViewComponent(clientsData) {
        _super.call(this);
        this.clientsData = clientsData;
        // selected in table contact
        this.activeContact = null;
        this.activeContactInfo = null;
    }
    ClientsViewComponent.prototype.onEditBoxSaved = function () {
        var cinfo = this.activeContactInfo.contact;
        if (this.isCreateState()) {
            var contact = this.clientsData.addContact(cinfo.name, cinfo.surname, cinfo.age, cinfo.description, cinfo.note);
            this.clientsData.setContactGroups(contact, this.activeContactInfo.groups);
        }
        else if (this.isEditState()) {
            Object.assign(this.activeContact, this.activeContactInfo.contact);
            this.clientsData.setContactGroups(cinfo, this.activeContactInfo.groups);
        }
        this.setIdleState();
    };
    ClientsViewComponent.prototype.initEditBoxData = function () {
        var contact;
        var groups;
        if (this.isEditState()) {
            contact = this.activeContact;
            groups = this.clientsData.getContactGroups(this.activeContact);
        }
        else if (this.isCreateState()) {
            contact = new clients_data_contract_1.Contact();
            groups = [];
        }
        this.activeContactInfo = new client_edit_box_data_contract_1.ContactInfo(contact, groups);
    };
    ClientsViewComponent.prototype.deleteSelectedUnit = function () {
        if (this.activeContact) {
            this.clientsData.deleteContact(this.activeContact);
            this.activeContact = null;
        }
    };
    ClientsViewComponent.prototype.isUnitActive = function () {
        return this.activeContact != null;
    };
    // Contact table control section
    ClientsViewComponent.prototype.isTableCellActive = function (contact) {
        return (this.activeContact && contact.contactId == this.activeContact.contactId);
    };
    ClientsViewComponent.prototype.activateTableCell = function (contact) {
        this.activeContact = contact;
    };
    ClientsViewComponent = __decorate([
        core_1.Component({
            selector: "clients-view",
            templateUrl: "./app/clients/clients-view/clients-view.template.html",
            styleUrls: ["./app/clients/clients-view/clients-view.template.css"]
        }), 
        __metadata('design:paramtypes', [clients_data_service_1.ClientsDataService])
    ], ClientsViewComponent);
    return ClientsViewComponent;
}(view_component_abstact_1.ViewComponent));
exports.ClientsViewComponent = ClientsViewComponent;
//# sourceMappingURL=clients-view.component.js.map