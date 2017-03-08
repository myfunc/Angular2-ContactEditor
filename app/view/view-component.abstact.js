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
var view_states_1 = require("../layout/view-states");
var ViewComponent = (function () {
    function ViewComponent() {
        this.onStateChange = new core_1.EventEmitter();
        this.tableViewState = view_states_1.TableUnitState.idle;
    }
    ViewComponent.prototype.setIdleState = function () {
        this.setState(view_states_1.TableUnitState.idle);
    };
    ViewComponent.prototype.setEditState = function () {
        this.setState(view_states_1.TableUnitState.edit);
    };
    ViewComponent.prototype.setCreateState = function () {
        this.setState(view_states_1.TableUnitState.create);
    };
    ViewComponent.prototype.setState = function (state) {
        this.tableViewState = state;
        this.onStateChange.emit(state);
    };
    ViewComponent.prototype.createUnit = function (event) {
        this.setCreateState();
        this.initEditBoxData(event);
    };
    ViewComponent.prototype.editUnit = function (event) {
        if (this.isUnitActive()) {
            this.setEditState();
            this.initEditBoxData(event);
        }
    };
    ViewComponent.prototype.deleteUnit = function (event) {
        this.setIdleState();
        this.deleteSelectedUnit(event);
    };
    // Sugar's
    ViewComponent.prototype.isEditState = function () {
        return this.tableViewState == view_states_1.TableUnitState.edit;
    };
    ViewComponent.prototype.isCreateState = function () {
        return this.tableViewState == view_states_1.TableUnitState.create;
    };
    ViewComponent.prototype.isIdleState = function () {
        return this.tableViewState == view_states_1.TableUnitState.idle;
    };
    ViewComponent.prototype.isEditableState = function () {
        return this.isCreateState() || this.isEditState();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ViewComponent.prototype, "onStateChange", void 0);
    __decorate([
        core_1.ViewChild("editBox"), 
        __metadata('design:type', Object)
    ], ViewComponent.prototype, "editBox", void 0);
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view-component.abstact.js.map