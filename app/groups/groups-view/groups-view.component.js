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
var view_states_1 = require("../../layout/view-states");
var clients_data_contract_1 = require("../../data-service/clients-data-contract");
var view_component_abstact_1 = require("../../view/view-component.abstact");
var group_edit_box_data_contract_1 = require("../group-edit-box/group-edit-box-data-contract");
var error_1 = require("../../extensions/error");
var GroupsViewComponent = (function (_super) {
    __extends(GroupsViewComponent, _super);
    function GroupsViewComponent(clientsData) {
        _super.call(this);
        this.clientsData = clientsData;
        this.contactTableState = view_states_1.TableUnitState.idle;
        this.activeGroup = null;
        this.activeGroupInfo = null;
        // For modal error window
        this.error = new error_1.ErrorWindowData();
    }
    GroupsViewComponent.prototype.onEditBoxSaved = function (validEdit) {
        var g = this.activeGroupInfo.group;
        if (this.isCreateState()) {
            this.clientsData.addGroup(g.groupName);
        }
        else if (this.isEditState()) {
            Object.assign(this.activeGroup, this.activeGroupInfo.group);
        }
        this.setIdleState();
    };
    GroupsViewComponent.prototype.initEditBoxData = function () {
        var contacts;
        var group;
        if (this.isEditState()) {
            group = this.activeGroup;
            contacts = this.clientsData.getGroupContacts(this.activeGroup);
        }
        else if (this.isCreateState()) {
            contacts = [];
            group = new clients_data_contract_1.Group();
        }
        this.activeGroupInfo = new group_edit_box_data_contract_1.GroupInfo(group, contacts);
    };
    GroupsViewComponent.prototype.deleteSelectedUnit = function (event) {
        if (!this.activeGroup)
            return;
        if (this.groupMembersCount(this.activeGroup) == 0) {
            event.stopPropagation();
            this.clientsData.deleteGroup(this.activeGroup);
            this.activeGroup = null;
        }
        else {
            this.error = new error_1.ErrorWindowData("Delete error", "Can not delete group. A group is associated with one or more contacts.");
        }
    };
    GroupsViewComponent.prototype.isUnitActive = function () {
        return this.activeGroup != null;
    };
    GroupsViewComponent.prototype.groupMembersCount = function (group) {
        return this.clientsData.getGroupContacts(group).length;
    };
    GroupsViewComponent.prototype.isTableCellActive = function (group) {
        return (this.activeGroup && group.groupId == this.activeGroup.groupId);
    };
    GroupsViewComponent.prototype.activateTableCell = function (group) {
        this.activeGroup = group;
    };
    GroupsViewComponent = __decorate([
        core_1.Component({
            selector: "groups-view",
            templateUrl: "./app/groups/groups-view/groups-view.template.html",
            styleUrls: ["./app/groups/groups-view/groups-view.template.css"]
        }), 
        __metadata('design:paramtypes', [clients_data_service_1.ClientsDataService])
    ], GroupsViewComponent);
    return GroupsViewComponent;
}(view_component_abstact_1.ViewComponent));
exports.GroupsViewComponent = GroupsViewComponent;
//# sourceMappingURL=groups-view.component.js.map