import {Component} from "@angular/core"
import {MenuState} from "./layout/view-states"

@Component({
    selector: "contacts-editor-app",
    templateUrl: "app/app.template.html"
})
export class AppComponent{
    public viewState = MenuState;
    state : MenuState = MenuState.contacts;

    updateState(state : MenuState) : void {
        this.state = state;
    }

    // State conditions
    isClientView() : boolean {
        return this.state == MenuState.contacts;
    }
    isGroupsView() : boolean {
        return this.state == MenuState.groups;
    }
    isClocksView() : boolean {
        return this.state == MenuState.clocks;
    }
}