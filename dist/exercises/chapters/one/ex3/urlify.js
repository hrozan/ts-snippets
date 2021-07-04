"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlify = void 0;
function urlify(input) {
    return input.trimStart().trimEnd().replace(/\s/g, '%20');
}
exports.urlify = urlify;
