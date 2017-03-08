"use strict";
/**
 * Created by den on 08.03.17.
 */
var ErrorWindowData = (function () {
    function ErrorWindowData(title, message) {
        if (title === void 0) { title = ""; }
        if (message === void 0) { message = ""; }
        this.title = title;
        this.message = message;
    }
    return ErrorWindowData;
}());
exports.ErrorWindowData = ErrorWindowData;
//# sourceMappingURL=error.js.map