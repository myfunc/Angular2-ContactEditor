import {Component, OnInit, Output, EventEmitter, ViewChild} from "@angular/core"
import {ClientsDataService} from "../../data-service/clients-data-service";
import {Contact} from "../../data-service/clients-data-contract";
import {TableUnitState} from "../../layout/view-states";
import {ContactInfo} from "../client-edit-box/client-edit-box-data-contract";
import {ViewComponent} from "../../view/view-component.abstact";

@Component({
    selector: "clients-view",
    templateUrl: "./app/clients/clients-view/clients-view.template.html",
    styleUrls: ["./app/clients/clients-view/clients-view.template.css"]
})
export class ClientsViewComponent extends ViewComponent{

    // selected in table contact
    activeContact : Contact = null;
    activeContactInfo : ContactInfo = null;

    constructor(private clientsData : ClientsDataService){
        super();
    }

    onEditBoxSaved(){
        let cinfo = this.activeContactInfo.contact;
        if (this.isCreateState()){
            let contact = this.clientsData.addContact(cinfo.name,
                cinfo.surname,cinfo.age,cinfo.description,cinfo.note);
            this.clientsData.setContactGroups(contact,this.activeContactInfo.groups);
        } else if (this.isEditState()){
            Object.assign(this.activeContact,this.activeContactInfo.contact);
            this.clientsData.setContactGroups(cinfo,this.activeContactInfo.groups);
        }
        this.setIdleState();
    }

    initEditBoxData(){
        let contact ;
        let groups;
        if (this.isEditState()){
            contact = this.activeContact;
            groups = this.clientsData.getContactGroups(this.activeContact);
        } else if (this.isCreateState()){
            contact = new Contact();
            groups = [];
        }
        this.activeContactInfo = new ContactInfo(contact, groups);
    }

    deleteSelectedUnit(): void{
        if (this.activeContact){
            this.clientsData.deleteContact(this.activeContact);
            this.activeContact = null;
        }
    }
    isUnitActive():boolean {
        return this.activeContact != null;
    }

// Contact table control section

    isTableCellActive(contact : Contact) : boolean{
        return (this.activeContact && contact.contactId == this.activeContact.contactId);
    }

    activateTableCell(contact : Contact): void {
        this.activeContact = contact;
    }

// Section ends
}