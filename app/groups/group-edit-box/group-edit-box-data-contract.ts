import {Contact, Group} from "../../data-service/clients-data-contract";

/**
 * Safe copy structure of {Contact, Group};
 */
export class GroupInfo {
    contacts: Contact[];
    group: Group;


    private get empty(){
        return {
            contact:new Contact(),
            groups:[]
        };
    }
    // Safe constructor copy
    constructor(group : Group = null, contacts : Contact[] = null ){
        if (group == null){
            this.contacts = [];
            this.group = new Group();
        } else {
            let clone = this.clone.apply({contacts: contacts, group: group});
            this.contacts = clone.contacts;
            this.group = clone.group;
        }
    }

    clone() : GroupInfo{
        let clone = new GroupInfo();
        Object.assign(clone.group, this.group);
        for (let contact of this.contacts){
            let cntClone : Contact = new Contact();
            Object.assign(cntClone,contact);
            clone.contacts.push(cntClone);
        }
        return clone;
    }
}