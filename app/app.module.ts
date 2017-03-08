import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent}  from './app.component';
import {MenuComponent} from "./app-menu/app-menu.component";
import {ClientsViewComponent} from "./clients/clients-view/clients-view.component";
import {GroupsViewComponent} from "./groups/groups-view/groups-view.component";
import {ClientInfoComponent} from "./clients/client-info/client-info.component";
import {GroupInfoComponent} from "./groups/group-info/group-info.component";
import {ClientsDataService} from "./data-service/clients-data-service";
import {HoverRowDirective} from "./layout/directives/hover-row";
import {ClientEditBoxComponent} from "./clients/client-edit-box/client-edit-box.component";
import {CapitalizePipe} from "./layout/pipes/capitalize.pipe";
import {GroupEditBoxComponent} from "./groups/group-edit-box/group-edit-box.component";
import {ClocksComponent} from "./clocks/clocks.component";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule ],
    declarations: [
        AppComponent,
        MenuComponent,
        ClientsViewComponent,
        GroupsViewComponent,
        ClientInfoComponent,
        GroupInfoComponent,
        ClientEditBoxComponent,
        GroupEditBoxComponent,
        HoverRowDirective,
        CapitalizePipe,
        ClocksComponent
    ],
    providers: [ ClientsDataService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }