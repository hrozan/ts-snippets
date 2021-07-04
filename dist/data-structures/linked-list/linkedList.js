"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.ListNode = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        this.head = head;
    }
    LinkedList.prototype.size = function () {
        var count = 0;
        var node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    };
    LinkedList.prototype.clear = function () {
        this.head = null;
    };
    LinkedList.prototype.getLast = function () {
        var lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
            return lastNode.value;
        }
        return null;
    };
    LinkedList.prototype.getFirst = function () {
        return this.head ? this.head.value : null;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
