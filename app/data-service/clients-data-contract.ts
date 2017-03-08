import {Injectable} from "@angular/core"

/*
 В тестовом задании на клиенте строится базовая логика БД,
 но есть возможность подключиться в удаленной БД и использовать
 эти классы как представления таблиц.
 */

@Injectable()
export class Contact {
    constructor(
        public contactId : number = null,
        public name : string = null,
        public surname : string = null,
        public age : number = null,
        public description : string = null,
        public note : string = null
    ){}
}

@Injectable()
export class Group {
    constructor(
       public groupId : number = null,
       public groupName : string = null
    ){}
}

@Injectable()
export class ContactInGroup {
    constructor(
        public contactId : number,
        public groupId : number
    ){}
}