"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(item) {
        if (item === void 0) { item = []; }
        this.item = item;
    }
    Stack.prototype.push = function (item) {
        this.item.push(item);
    };
    Stack.prototype.pop = function () {
        return this.item.pop();
    };
    Stack.prototype.peek = function () {
        return this.item[this.item.length - 1];
    };
    Stack.prototype.count = function () {
        return this.item.length;
    };
    return Stack;
}());
exports.Stack = Stack;
