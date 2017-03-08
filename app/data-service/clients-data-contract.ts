import {Injectable} from "@angular/core"

/*
In the test task, the client builds the main database functionality. 
In the future it is easy to replace it with a real remote database.
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
