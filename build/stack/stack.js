"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor(stack) {
        this._arr = [];
        if (Array.isArray(stack))
            this._arr = Array.from(stack);
    }
    push(value) {
        this._arr.push(value);
    }
    pop() {
        return this._arr.pop();
    }
    peek() {
        if (this.isEmpty())
            return undefined;
        return this._arr[this._arr.unshift()];
    }
    isEmpty() {
        return this._arr.length === 0;
    }
    size() {
        return this._arr.length;
    }
    array() {
        return this._arr;
    }
    clear() {
        this._arr = [];
    }
    static fromArray(array) {
        return new Stack(array);
    }
}
exports.default = Stack;
