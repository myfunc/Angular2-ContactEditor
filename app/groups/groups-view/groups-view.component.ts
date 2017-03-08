import {Component} from "@angular/core"
import {ClientsDataService} from "../../data-service/clients-data-service";
import {TableUnitState} from "../../layout/view-states";
import {Group} from "../../data-service/clients-data-contract";
import {ViewComponent} from "../../view/view-component.abstact";
import {GroupInfo} from "../group-edit-box/group-edit-box-data-contract";
import {ErrorWindowData} from "../../extensions/error";

@Component({
    selector: "groups-view",
    templateUrl: "./app/groups/groups-view/groups-view.template.html",
    styleUrls: ["./app/groups/groups-view/groups-view.template.css"]
})
export class GroupsViewComponent extends ViewComponent{

    contactTableState : TableUnitState = TableUnitState.idle;

    activeGroup : Group = null;
    activeGroupInfo : GroupInfo = null;

    // For modal error window
    error : ErrorWindowData = new ErrorWindowData();

    constructor(private clientsData : ClientsDataService){
        super();
    }
    onEditBoxSaved(validEdit : boolean){
        let g = this.activeGroupInfo.group;
        if (this.isCreateState()){
            this.clientsData.addGroup(g.groupName);
        } else if (this.isEditState()){
            Object.assign(this.activeGroup,this.activeGroupInfo.group);
        }
        this.setIdleState();
    }

    initEditBoxData(){
        let contacts ;
        let group;
        if (this.isEditState()){
            group = this.activeGroup;
            contacts = this.clientsData.getGroupContacts(this.activeGroup);
        } else if (this.isCreateState()){
            contacts = [];
            group = new Group();
        }
        this.activeGroupInfo = new GroupInfo(group, contacts);
    }

    deleteSelectedUnit(event: any): void{
        if (!this.activeGroup) return;
        if (this.groupMembersCount(this.activeGroup) == 0) {
            event.stopPropagation();
            this.clientsData.deleteGroup(this.activeGroup);
            this.activeGroup = null;
        } else {
            this.error = new ErrorWindowData("Delete error",
                "Can not delete group. A group is associated with one or more contacts.");
        }
    }

    isUnitActive():boolean {
        return this.activeGroup != null;
    }

    groupMembersCount(group: Group): number{
        return this.clientsData.getGroupContacts(group).length;
    }

    isTableCellActive(group : Group) : boolean{
        return (this.activeGroup && group.groupId == this.activeGroup.groupId);
    }

    activateTableCell(group : Group): void {
        this.activeGroup = group;
    }
}