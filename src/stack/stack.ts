export default class Stack<T> {
  private _arr: Array<T> = [];

  constructor(stack?: Array<T>) {
    if (Array.isArray(stack)) this._arr = Array.from(stack);
  }

  public push(value: T): void {
    this._arr.push(value);
  }

  public pop(): T | undefined {
    return this._arr.pop();
  }

  public peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this._arr[this._arr.unshift()];
  }

  public isEmpty(): boolean {
    return this._arr.length === 0;
  }

  public size(): number {
    return this._arr.length;
  }

  public array(): Array<T> {
    return this._arr;
  }

  public clear(): void {
    this._arr = [];
  }

  public static fromArray<T>(array: Array<T>) {
    return new Stack<T>(array);
  }
}
