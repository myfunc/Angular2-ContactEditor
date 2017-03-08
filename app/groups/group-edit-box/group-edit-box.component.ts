import {Component, Input, ViewChild, Output, EventEmitter} from "@angular/core"
import {ClientsDataService} from "../../data-service/clients-data-service";
import {NgForm} from "@angular/forms";
import {GroupInfo} from "./group-edit-box-data-contract";

@Component({
    selector: "group-edit-box",
    templateUrl: "./app/groups/group-edit-box/group-edit-box.component.html",
    styleUrls: ["./app/groups/group-edit-box/group-edit-box.style.css"]

})
export class GroupEditBoxComponent{
    private _inited: boolean = false;

    @Output() onSave = new EventEmitter();
    groupInfo : GroupInfo;

    @ViewChild("editform") editFrom : NgForm;

    constructor(private clientsData: ClientsDataService) {
    }

    btnSaveClick(): void{
        if (!this.checkFormValid()) return;
        this.onSave.emit();
        this.closeEditBox();
    }

    isReady(): boolean {
        return this._inited;
    }

    closeEditBox(): void {
        this._inited = false;
    }

    @Input() set activeGroupInfo(groupInfo: GroupInfo) {
        if (groupInfo){
        this.groupInfo = groupInfo;
        this._inited = true;
        }
    }

    checkFormValid(): boolean {
        if (this.isReady()) {
            return this.editFrom.valid;
        }
        return true;
    }
}
