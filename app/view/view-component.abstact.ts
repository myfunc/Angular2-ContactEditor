import {Output, ViewChild, EventEmitter} from "@angular/core";
import {TableUnitState} from "../layout/view-states";

export abstract class ViewComponent {

    @Output() onStateChange = new EventEmitter<TableUnitState>();
    @ViewChild("editBox") editBox : any;

    tableViewState : TableUnitState = TableUnitState.idle;

    setIdleState():void{
        this.setState(TableUnitState.idle);
    }

    setEditState():void{
        this.setState(TableUnitState.edit);
    }

    setCreateState():void{
        this.setState(TableUnitState.create);
    }

    setState(state: TableUnitState):void {
        this.tableViewState = state;
        this.onStateChange.emit(state);
    }

    createUnit(event: any): void{
        this.setCreateState();
        this.initEditBoxData(event);
    }

    editUnit(event: any): void{
        if (this.isUnitActive()) {
            this.setEditState();
            this.initEditBoxData(event);
        }
    }

    deleteUnit(event: any): void{
        this.setIdleState();
        this.deleteSelectedUnit(event);
    }

    abstract initEditBoxData(event: any):void;
    abstract deleteSelectedUnit(event: any):void;
    abstract isUnitActive(): boolean;
    // Sugar's

    isEditState():boolean{
        return this.tableViewState == TableUnitState.edit;
    }

    isCreateState(): boolean{
        return this.tableViewState == TableUnitState.create;
    }

    isIdleState(): boolean{
        return this.tableViewState == TableUnitState.idle;
    }

    isEditableState() : boolean {
        return this.isCreateState() || this.isEditState();
    }
}