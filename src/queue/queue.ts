import IQueue from "./interface";

export default class Queue<T> implements IQueue<T> {
  private _arr: Array<T> = [];

  constructor(arr?: Array<T>) {
    if (Array.isArray(arr)) this._arr = Array.from(arr);
  }

  add(value: T): void {
    this._arr.push(value);
  }

  peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this._arr[0];
  }

  remove(): T | undefined {
    return this._arr.shift();
  }

  isEmpty(): boolean {
    return this._arr.length === 0;
  }

  array(): T[] {
    return this._arr;
  }
}
