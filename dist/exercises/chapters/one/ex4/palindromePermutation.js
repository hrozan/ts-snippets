"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.palindromePermutation = void 0;
function palindromePermutation(_input) {
    var input = _input.replace(/\s/g, '').toLowerCase();
    var set = new Set();
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var c = input_1[_i];
        if (set.has(c)) {
            set.delete(c);
        }
        else {
            set.add(c);
        }
    }
    return set.size <= 1;
}
exports.palindromePermutation = palindromePermutation;
