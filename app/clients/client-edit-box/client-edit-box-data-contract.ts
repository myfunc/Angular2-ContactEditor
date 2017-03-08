import {Contact, Group} from "../../data-service/clients-data-contract";

/**
 * Safe copy structure of {Contact, Group};
 */
export class ContactInfo {
    contact: Contact;
    groups: Group[];


    private get empty(){
        return {
            contact:new Contact(),
            groups:[]
        };
    }
    // Safe constructor copy
    constructor(contact : Contact = null, groups : Group[] = null){
        if (contact == null){
            this.contact = new Contact();
            this.groups = [];
        } else {
            let clone = this.clone.apply({contact: contact, groups: groups});
            this.contact = clone.contact;
            this.groups = clone.groups;
        }
    }

    clone() : ContactInfo{
        let clone = new ContactInfo();
        Object.assign(clone.contact, this.contact);
        for (let group of this.groups){
            let grpClone : Group = new Group();
            Object.assign(grpClone,group);
            clone.groups.push(grpClone);
        }
        return clone;
    }
}