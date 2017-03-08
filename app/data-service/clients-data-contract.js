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
/*
 В тестовом задании на клиенте строится базовая логика БД,
 но есть возможность подключиться в удаленной БД и использовать
 эти классы как представления таблиц.
 */
var Contact = (function () {
    function Contact(contactId, name, surname, age, description, note) {
        if (contactId === void 0) { contactId = null; }
        if (name === void 0) { name = null; }
        if (surname === void 0) { surname = null; }
        if (age === void 0) { age = null; }
        if (description === void 0) { description = null; }
        if (note === void 0) { note = null; }
        this.contactId = contactId;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.description = description;
        this.note = note;
    }
    Contact = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Number, String, String, Number, String, String])
    ], Contact);
    return Contact;
}());
exports.Contact = Contact;
var Group = (function () {
    function Group(groupId, groupName) {
        if (groupId === void 0) { groupId = null; }
        if (groupName === void 0) { groupName = null; }
        this.groupId = groupId;
        this.groupName = groupName;
    }
    Group = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Number, String])
    ], Group);
    return Group;
}());
exports.Group = Group;
var ContactInGroup = (function () {
    function ContactInGroup(contactId, groupId) {
        this.contactId = contactId;
        this.groupId = groupId;
    }
    ContactInGroup = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Number, Number])
    ], ContactInGroup);
    return ContactInGroup;
}());
exports.ContactInGroup = ContactInGroup;
//# sourceMappingURL=clients-data-contract.js.map