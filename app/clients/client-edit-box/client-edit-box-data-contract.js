"use strict";
var clients_data_contract_1 = require("../../data-service/clients-data-contract");
/**
 * Safe copy structure of {Contact, Group};
 */
var ContactInfo = (function () {
    // Safe constructor copy
    function ContactInfo(contact, groups) {
        if (contact === void 0) { contact = null; }
        if (groups === void 0) { groups = null; }
        if (contact == null) {
            this.contact = new clients_data_contract_1.Contact();
            this.groups = [];
        }
        else {
            var clone = this.clone.apply({ contact: contact, groups: groups });
            this.contact = clone.contact;
            this.groups = clone.groups;
        }
    }
    Object.defineProperty(ContactInfo.prototype, "empty", {
        get: function () {
            return {
                contact: new clients_data_contract_1.Contact(),
                groups: []
            };
        },
        enumerable: true,
        configurable: true
    });
    ContactInfo.prototype.clone = function () {
        var clone = new ContactInfo();
        Object.assign(clone.contact, this.contact);
        for (var _i = 0, _a = this.groups; _i < _a.length; _i++) {
            var group = _a[_i];
            var grpClone = new clients_data_contract_1.Group();
            Object.assign(grpClone, group);
            clone.groups.push(grpClone);
        }
        return clone;
    };
    return ContactInfo;
}());
exports.ContactInfo = ContactInfo;
//# sourceMappingURL=client-edit-box-data-contract.js.map