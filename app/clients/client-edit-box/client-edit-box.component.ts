import {Component, Input, OnInit, ViewChild, Output, EventEmitter} from "@angular/core"
import {ClientsDataService} from "../../data-service/clients-data-service";
import {Contact, Group, ContactInGroup} from "../../data-service/clients-data-contract";
import {NgForm} from "@angular/forms";
import {ContactInfo} from "./client-edit-box-data-contract";

@Component({
    selector: "client-edit-box",
    templateUrl: "./app/clients/client-edit-box/client-edit-box.component.html",
    styleUrls: ["./app/clients/client-edit-box/client-edit-box.style.css"]

})
export class ClientEditBoxComponent implements OnInit{
    private _fieldInited: boolean = false;
    private _ngInited: boolean = false;

    @Output() onSave = new EventEmitter();
    @Input() globalGroups : Group[] = null;
    @Input() contactInfo : ContactInfo;

    @ViewChild("editform") editFrom : NgForm;

    bufferContactGroups : number[] = []; // Array of groupId, where contact is member.

    constructor(private clientsData: ClientsDataService) {
    }

    btnSaveClick(): void{
        if (!this.checkFormValid()) return;
        this.saveSelectedGroups();
        this.onSave.emit();
        this.closeEditBox();
    }

    ngOnInit(): void {
        this._ngInited = true;
    }

    isReady(): boolean {
        return (this._fieldInited && this._ngInited);
    }

    closeEditBox(): void {
        this._fieldInited = false;
    }

    @Input() set activeContactInfo(contactInfo: ContactInfo) {
        if (contactInfo){
        this.contactInfo = contactInfo;
        this.loadSelectedGroups();
        this.contactInfo.groups = [];
        this._fieldInited = true;
        }
    }

    loadSelectedGroups(){
        this.contactInfo.groups.forEach((item:Group)=>this.bufferContactGroups.push(item.groupId));
    }

    saveSelectedGroups(){
        for (let groupId of this.editFrom.value["groups"]) {
            this.contactInfo.groups.push(this.clientsData.getGroupById(groupId));
        }
    }

    checkFormValid(): boolean {
        // TODO: Validate logic for edit form
        if (this.isReady()) {
            return this.editFrom.valid;
        }
        return false;
    }
}
