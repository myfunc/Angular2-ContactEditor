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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var app_menu_component_1 = require("./app-menu/app-menu.component");
var clients_view_component_1 = require("./clients/clients-view/clients-view.component");
var groups_view_component_1 = require("./groups/groups-view/groups-view.component");
var client_info_component_1 = require("./clients/client-info/client-info.component");
var group_info_component_1 = require("./groups/group-info/group-info.component");
var clients_data_service_1 = require("./data-service/clients-data-service");
var hover_row_1 = require("./layout/directives/hover-row");
var client_edit_box_component_1 = require("./clients/client-edit-box/client-edit-box.component");
var capitalize_pipe_1 = require("./layout/pipes/capitalize.pipe");
var group_edit_box_component_1 = require("./groups/group-edit-box/group-edit-box.component");
var clocks_component_1 = require("./clocks/clocks.component");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
            declarations: [
                app_component_1.AppComponent,
                app_menu_component_1.MenuComponent,
                clients_view_component_1.ClientsViewComponent,
                groups_view_component_1.GroupsViewComponent,
                client_info_component_1.ClientInfoComponent,
                group_info_component_1.GroupInfoComponent,
                client_edit_box_component_1.ClientEditBoxComponent,
                group_edit_box_component_1.GroupEditBoxComponent,
                hover_row_1.HoverRowDirective,
                capitalize_pipe_1.CapitalizePipe,
                clocks_component_1.ClocksComponent
            ],
            providers: [clients_data_service_1.ClientsDataService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map