import {Component, Input} from "@angular/core"
import {Contact} from "../../data-service/clients-data-contract";
import {ClientsDataService} from "../../data-service/clients-data-service";

@Component({
    selector: "client-info",
    templateUrl: "app/clients/client-info/client-info.template.html"
})
export class ClientInfoComponent{
    @Input() activeContact : Contact;
    constructor(private clientsData : ClientsDataService){}

}