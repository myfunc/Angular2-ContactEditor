"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var clients_data_contract_1 = require("./clients-data-contract");
var http_1 = require("@angular/http");
/*
Сервис для работы с удаленной БД.
Может работать в автономном режиме
 */
var ClientsDataService = (function () {
    function ClientsDataService(http) {
        this.http = http;
        // Локальная БД
        this.m_contacts = [];
        this.m_groups = [];
        this.m_contactsInGroup = [];
        this.loadData();
    }
    ClientsDataService.prototype.ngOnInit = function () {
    };
    ClientsDataService.prototype.getContactGroups = function (contact) {
        var curGroups = [];
        for (var _i = 0, _a = this.m_contactsInGroup; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.contactId == contact.contactId) {
                curGroups.push(this.getGroupById(i.groupId));
            }
        }
        return curGroups;
    };
    ClientsDataService.prototype.getGroupContacts = function (group) {
        var curContacts = [];
        for (var _i = 0, _a = this.m_contactsInGroup; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.groupId == group.groupId) {
                curContacts.push(this.getContactById(i.contactId));
            }
        }
        return curContacts;
    };
    // Throwable:
    // Invalid groupId Error
    ClientsDataService.prototype.getGroupById = function (groupId) {
        var result = this.m_groups.find(function (item) { return item.groupId == groupId; });
        if (result) {
            return result;
        }
        throw new Error("Invalid groupId. Input : " + groupId);
    };
    ClientsDataService.prototype.getGroupByName = function (groupName) {
        var result = this.m_groups.find(function (item) { return item.groupName == groupName; });
        if (result) {
            return result;
        }
        throw new Error("Invalid groupName. Input : " + groupName);
    };
    // Throwable:
    // Invalid contactId Error
    ClientsDataService.prototype.getContactById = function (contactId) {
        for (var _i = 0, _a = this.m_contacts; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.contactId == contactId) {
                return i;
            }
        }
        throw new Error("Invalid contactId. Input : " + contactId);
    };
    Object.defineProperty(ClientsDataService.prototype, "groups", {
        get: function () {
            return this.m_groups;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientsDataService.prototype, "contacts", {
        get: function () {
            return this.m_contacts;
        },
        enumerable: true,
        configurable: true
    });
    // Throwable:
    // Invalid groupId or contactId Error
    // returns a boolean of successful operation
    //
    // false - already exists
    // true - successful operation;
    ClientsDataService.prototype.asocContactGroup = function (contact, group) {
        var contactGroup = new clients_data_contract_1.ContactInGroup(contact.contactId, group.groupId);
        if (this.m_contactsInGroup.some(function (item) {
            return (item.contactId == contact.contactId && item.groupId == group.groupId);
        })) {
            return false;
        }
        this.m_contactsInGroup.push(contactGroup);
        return true;
    };
    ClientsDataService.prototype.removeContactGroup = function (contact, group) {
        this.m_contactsInGroup.forEach(function (item, id, arr) {
            if (item.contactId == contact.contactId && item.groupId == group.groupId) {
                arr.splice(id, 1);
            }
        });
    };
    ClientsDataService.prototype.clearContactGroups = function (contact) {
        var groups = this.getContactGroups(contact);
        for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
            var group = groups_1[_i];
            this.removeContactGroup(contact, group);
        }
    };
    ClientsDataService.prototype.setContactGroups = function (contact, groups) {
        this.clearContactGroups(contact);
        for (var _i = 0, groups_2 = groups; _i < groups_2.length; _i++) {
            var group = groups_2[_i];
            this.asocContactGroup(contact, group);
        }
    };
    ClientsDataService.prototype.addContact = function (name, surname, age, description, note) {
        if (description === void 0) { description = ""; }
        if (note === void 0) { note = ""; }
        var newId = ClientsDataService.contactIdIncr++;
        var newContact = new clients_data_contract_1.Contact(newId, name, surname, age, description, note);
        this.m_contacts.push(newContact);
        return newContact;
    };
    // For JSON load without real DB
    ClientsDataService.prototype.addContactFull = function (contactId, name, surname, age, description, note) {
        if (description === void 0) { description = ""; }
        if (note === void 0) { note = ""; }
        if (ClientsDataService.contactIdIncr <= contactId) {
            ClientsDataService.contactIdIncr = contactId + 1;
        }
        var newContact = new clients_data_contract_1.Contact(contactId, name, surname, age, description, note);
        this.m_contacts.push(newContact);
        return newContact;
    };
    // Throwable:
    // Invalid contactId Error
    ClientsDataService.prototype.deleteContact = function (contact) {
        this.clearContactGroups(contact);
        this.m_contacts.splice(this.m_contacts.indexOf(contact), 1);
    };
    // editContact(){}
    ClientsDataService.prototype.addGroup = function (groupName) {
        var newId = ClientsDataService.groupIdIncr++;
        var newGroup = new clients_data_contract_1.Group(newId, groupName);
        this.groups.push(newGroup);
        return newGroup;
    };
    ClientsDataService.prototype.deleteGroup = function (group) {
        this.m_groups.splice(this.m_groups.indexOf(group), 1);
    };
    // editGroup(){}
    ClientsDataService.prototype.addGroupFull = function (groupId, groupName) {
        if (ClientsDataService.groupIdIncr <= groupId) {
            ClientsDataService.groupIdIncr = groupId + 1;
        }
        var newGroup = new clients_data_contract_1.Group(groupId, groupName);
        this.groups.push(newGroup);
        return newGroup;
    };
    ClientsDataService.prototype.wipeDb = function () {
        this.m_contacts = [];
        this.m_groups = [];
        this.m_contactsInGroup = [];
        ClientsDataService.contactIdIncr = 0;
        ClientsDataService.groupIdIncr = 0;
    };
    // Данные для тестирования
    ClientsDataService.prototype.fillData = function (data) {
        this.wipeDb();
        var dbData = data.json();
        for (var _i = 0, _a = dbData["m_groups"]; _i < _a.length; _i++) {
            var i = _a[_i];
            this.addGroupFull(i.groupId, i.groupName);
        }
        for (var _b = 0, _c = dbData["m_contacts"]; _b < _c.length; _b++) {
            var i = _c[_b];
            this.addContactFull(i.contactId, i.name, i.surname, i.age, i.description, i.note);
        }
        //
        for (var _d = 0, _e = dbData["m_contactsInGroup"]; _d < _e.length; _d++) {
            var i = _e[_d];
            this.asocContactGroup(this.getContactById(i.contactId), this.getGroupById(i.groupId));
        }
    };
    ClientsDataService.prototype.saveChanges = function () { };
    ClientsDataService.prototype.loadData = function () {
        this.http.get("data.json").subscribe(this.fillData.bind(this));
    };
    // Id для таблиц. Для работы в тестовом режиме
    ClientsDataService.contactIdIncr = 0;
    ClientsDataService.groupIdIncr = 0;
    ClientsDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ClientsDataService);
    return ClientsDataService;
}());
exports.ClientsDataService = ClientsDataService;
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
//# sourceMappingURL=clients-data-service.js.map