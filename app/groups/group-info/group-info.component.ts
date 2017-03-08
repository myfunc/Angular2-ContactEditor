import {Component, Input} from "@angular/core"
import {ClientsDataService} from "../../data-service/clients-data-service";
import {Group, Contact} from "../../data-service/clients-data-contract";

@Component({
    selector: "group-info",
    templateUrl: "app/groups/group-info/group-info.template.html"
})
export class GroupInfoComponent{
    @Input() activeGroup : Group;
    constructor(private clientsData : ClientsDataService){}

    getGroupContacts():Contact[]{
        return this.clientsData.getGroupContacts(this.activeGroup);
    }

    groupMembersCount(): number{
        return this.clientsData.getGroupContacts(this.activeGroup).length;
    }
}