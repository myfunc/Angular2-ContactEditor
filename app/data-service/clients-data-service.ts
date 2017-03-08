import {Injectable, OnInit} from "@angular/core"
import {Contact,Group,ContactInGroup} from "./clients-data-contract";
import {Http, Response} from "@angular/http";

/*
Сервис для работы с удаленной БД.
Может работать в автономном режиме
 */
@Injectable()
export class ClientsDataService implements OnInit{
    // Id для таблиц. Для работы в тестовом режиме
    private static contactIdIncr : number = 0;
    private static groupIdIncr : number = 0;

    // Локальная БД
    private m_contacts : Contact[] = [];
    private m_groups : Group[] = [];
    private m_contactsInGroup: ContactInGroup[] = [];

    constructor(private http: Http){
        this.loadData();
    }

    ngOnInit(): void {

    }

    getContactGroups(contact : Contact) : Group[]{
        let curGroups : Group[] = [];
        for (let i of this.m_contactsInGroup){
            if (i.contactId == contact.contactId){
                curGroups.push(this.getGroupById(i.groupId));
            }
        }
        return curGroups;
    }

    getGroupContacts(group : Group) : Contact[]{
        let curContacts : Contact[] = [];
        for (let i of this.m_contactsInGroup){
            if (i.groupId == group.groupId){
                curContacts.push(this.getContactById(i.contactId));
            }
        }
        return curContacts;
    }

    // Throwable:
    // Invalid groupId Error
    getGroupById(groupId : number) : Group{
        let result = this.m_groups.find((item)=>{return item.groupId == groupId});
        if (result){
            return result
        }
        throw new Error("Invalid groupId. Input : " + groupId);
    }

    getGroupByName(groupName : string) : Group{
        let result = this.m_groups.find((item)=>{return item.groupName == groupName});
        if (result){
            return result
        }
        throw new Error("Invalid groupName. Input : " + groupName);
    }

    // Throwable:
    // Invalid contactId Error
    getContactById(contactId : number) : Contact{
        for (let i of this.m_contacts){
            if (i.contactId == contactId){
                return i;
            }
        }
        throw new Error("Invalid contactId. Input : " + contactId);
    }

    get groups() : Group[]{
      return this.m_groups;
    }
    get contacts() : Contact[]{
      return this.m_contacts;
    }

    // Throwable:
    // Invalid groupId or contactId Error
    // returns a boolean of successful operation
    //
    // false - already exists
    // true - successful operation;
    asocContactGroup(contact : Contact, group : Group):boolean{
        let contactGroup = new ContactInGroup(contact.contactId,group.groupId);
        if (this.m_contactsInGroup.some((item)=>{
            return (item.contactId == contact.contactId && item.groupId == group.groupId)
        })){
            return false;
        }
        this.m_contactsInGroup.push(contactGroup);
        return true;
    }
    removeContactGroup(contact : Contact, group : Group):void{
        this.m_contactsInGroup.forEach((item,id,arr)=>{
            if (item.contactId == contact.contactId && item.groupId == group.groupId){
                arr.splice(id,1);
            }
        });
    }

    clearContactGroups(contact: Contact){
        let groups = this.getContactGroups(contact);
        for (let group of groups){
            this.removeContactGroup(contact,group);
        }
    }

    setContactGroups(contact: Contact, groups: Group[]){
        this.clearContactGroups(contact);
        for (let group of groups){
            this.asocContactGroup(contact,group);
        }
    }

    addContact(
        name : string,
        surname : string,
        age : number,
        description : string = "",
        note : string = ""
    ) : Contact{
        let newId : number = ClientsDataService.contactIdIncr++;
        let newContact = new Contact(newId,name,surname,age,description,note);
        this.m_contacts.push(newContact);
        return newContact;
    }

    // For JSON load without real DB
    addContactFull(
        contactId : number,
        name : string,
        surname : string,
        age : number,
        description : string = "",
        note : string = ""
    ) : Contact{
        if (ClientsDataService.contactIdIncr <= contactId){
            ClientsDataService.contactIdIncr = contactId+1;
        }
        let newContact = new Contact(contactId,name,surname,age,description,note);
        this.m_contacts.push(newContact);
        return newContact;
    }

    // Throwable:
    // Invalid contactId Error
    deleteContact(contact : Contact) : void{
        this.clearContactGroups(contact);
        this.m_contacts.splice(this.m_contacts.indexOf(contact),1);
    }
    // editContact(){}

    addGroup(
        groupName : string,
    ) : Group {
        let newId : number = ClientsDataService.groupIdIncr++;
        let newGroup = new Group(newId,groupName);
        this.groups.push(newGroup);
        return newGroup;
    }
    deleteGroup(group : Group) : void{
        this.m_groups.splice(this.m_groups.indexOf(group),1);
    }
    // editGroup(){}
    addGroupFull(
        groupId : number,
        groupName : string,
    ) : Group {
        if (ClientsDataService.groupIdIncr <= groupId){
            ClientsDataService.groupIdIncr = groupId+1;
        }
        let newGroup = new Group(groupId,groupName);
        this.groups.push(newGroup);
        return newGroup;
    }

    private wipeDb(){
        this.m_contacts = [];
        this.m_groups = [];
        this.m_contactsInGroup = []
        ClientsDataService.contactIdIncr = 0;
        ClientsDataService.groupIdIncr = 0;
    }

    // Данные для тестирования
    fillData(data: Response){
        this.wipeDb();
        let dbData = data.json();
        for (let i of dbData["m_groups"]){
            this.addGroupFull(i.groupId,i.groupName);
        }
        for (let i of dbData["m_contacts"]){
            this.addContactFull(i.contactId, i.name,i.surname,i.age,i.description,i.note);
        }
        //
        for (let i of dbData["m_contactsInGroup"]){
            this.asocContactGroup(this.getContactById(i.contactId),this.getGroupById(i.groupId));
        }
    }

    saveChanges(){}
    loadData(){
        this.http.get("data.json").subscribe(this.fillData.bind(this));
    }
}

/*
* let adminsGroup = this.addGroup("admins");
 let moderatorsGroup = this.addGroup("moderators");
 let usersGroup = this.addGroup("users");

 let contact: Contact;

 contact = this.addContact("Vasiliy","Pryahin",30,"like tea");
 this.asocContactGroup(contact,adminsGroup);

 contact = this.addContact("Nikolay","Drozdov",28,".NET developer");
 this.asocContactGroup(contact,usersGroup);

 contact = this.addContact("Ivan","Green",51,"From Canada", "Have macBook");
 this.asocContactGroup(contact,usersGroup);
 this.asocContactGroup(contact,moderatorsGroup);

 contact = this.addContact("Michael","Krasnov",34,"Every day in a suit");
 this.asocContactGroup(contact,usersGroup);
 this.asocContactGroup(contact,usersGroup);

 console.log(JSON.stringify(this.m_contacts));
 console.log(JSON.stringify(this.m_groups));
 console.log(JSON.stringify(this.m_contactsInGroup));
* */