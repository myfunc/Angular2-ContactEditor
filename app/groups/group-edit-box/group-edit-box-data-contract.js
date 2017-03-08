"use strict";
var clients_data_contract_1 = require("../../data-service/clients-data-contract");
/**
 * Safe copy structure of {Contact, Group};
 */
var GroupInfo = (function () {
    // Safe constructor copy
    function GroupInfo(group, contacts) {
        if (group === void 0) { group = null; }
        if (contacts === void 0) { contacts = null; }
        if (group == null) {
            this.contacts = [];
            this.group = new clients_data_contract_1.Group();
        }
        else {
            var clone = this.clone.apply({ contacts: contacts, group: group });
            this.contacts = clone.contacts;
            this.group = clone.group;
        }
    }
    Object.defineProperty(GroupInfo.prototype, "empty", {
        get: function () {
            return {
                contact: new clients_data_contract_1.Contact(),
                groups: []
            };
        },
        enumerable: true,
        configurable: true
    });
    GroupInfo.prototype.clone = function () {
        var clone = new GroupInfo();
        Object.assign(clone.group, this.group);
        for (var _i = 0, _a = this.contacts; _i < _a.length; _i++) {
            var contact = _a[_i];
            var cntClone = new clients_data_contract_1.Contact();
            Object.assign(cntClone, contact);
            clone.contacts.push(cntClone);
        }
        return clone;
    };
    return GroupInfo;
}());
exports.GroupInfo = GroupInfo;
//# sourceMappingURL=group-edit-box-data-contract.js.map