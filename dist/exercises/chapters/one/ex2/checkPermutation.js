"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPermutation = exports.stringHashTableToString = exports.stringToStringHashTable = void 0;
function stringToStringHashTable(input) {
    var table = {};
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var c = input_1[_i];
        var key = c.charCodeAt(0);
        if (!table[key]) {
            table[key] = [c];
        }
        else {
            table[key].push(c);
        }
    }
    return table;
}
exports.stringToStringHashTable = stringToStringHashTable;
function stringHashTableToString(table) {
    var result = '';
    for (var _i = 0, _a = Object.values(table); _i < _a.length; _i++) {
        var i = _a[_i];
        i.forEach(function (c) { return (result = result.concat(c)); });
    }
    return result;
}
exports.stringHashTableToString = stringHashTableToString;
function checkPermutation(input, compare) {
    if (input.length !== compare.length) {
        return false;
    }
    var stringHashTable = stringToStringHashTable(input);
    var compareStringHashTable = stringToStringHashTable(compare);
    return stringHashTableToString(stringHashTable) === stringHashTableToString(compareStringHashTable);
}
exports.checkPermutation = checkPermutation;
