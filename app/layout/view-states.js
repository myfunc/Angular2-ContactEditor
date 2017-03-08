"use strict";
(function (MenuState) {
    MenuState[MenuState["contacts"] = 0] = "contacts";
    MenuState[MenuState["groups"] = 1] = "groups";
    MenuState[MenuState["clocks"] = 2] = "clocks";
})(exports.MenuState || (exports.MenuState = {}));
var MenuState = exports.MenuState;
(function (TableUnitState) {
    TableUnitState[TableUnitState["idle"] = 0] = "idle";
    TableUnitState[TableUnitState["create"] = 1] = "create";
    TableUnitState[TableUnitState["edit"] = 2] = "edit";
})(exports.TableUnitState || (exports.TableUnitState = {}));
var TableUnitState = exports.TableUnitState;
//# sourceMappingURL=view-states.js.map