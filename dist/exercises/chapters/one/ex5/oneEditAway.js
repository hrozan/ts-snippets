"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oneEditAway = void 0;
function oneEditAway(first, second) {
    if (first === second) {
        return false;
    }
    if (Math.abs(first.length - second.length) > 1) {
        return false;
    }
    var i = 0;
    var j = 0;
    var diff = 0;
    while (i < first.length && j < second.length) {
        var f = first[i];
        var s = second[j];
        if (f !== s) {
            diff++;
            if (first.length > second.length)
                i++;
            if (second.length > first.length)
                j++;
            if (second.length === first.length) {
                i++;
                j++;
            }
        }
        else {
            i++;
            j++;
        }
        if (diff > 1) {
            return false;
        }
    }
    return !(diff === 1 && first.length !== second.length && (i !== first.length || j !== second.length));
}
exports.oneEditAway = oneEditAway;
