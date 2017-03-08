import {Component, Output, EventEmitter} from "@angular/core"
import {MenuState} from "../layout/view-states"

@Component({
    selector: "app-menu",
    templateUrl: "app/app-menu/app-menu.template.html"
})
export class MenuComponent{
    public viewState = MenuState;
    @Output() onViewChange : EventEmitter<MenuState> = new EventEmitter();
    stateChange(state: any) : void {
        this.onViewChange.emit(state);
    }
}