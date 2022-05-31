export default class Stack<T> {
  private _arr: Array<T> = [];

  constructor(stack?: Array<T>) {
    if (Array.isArray(stack)) this._arr = Array.from(stack);
  }

  public push(value: T): void {
    this._arr.push(value);
  }

  // removes top element from stack or returns undefined
  public pop(): T | undefined {
    return this._arr.pop();
  }

  // Returns the element on the top of the stack, but does not remove it.
  public peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this._arr[this._arr.length - 1];
  }

  // checks if stack is empty
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

  // searches and checks if an object is in stack
  public search(obj: T): boolean {
    for (const val of this._arr) {
      if (val === obj) return true;
    }
    return false;
  }

  // creates a stack from an array
  public static fromArray<T>(array: Array<T>) {
    return new Stack<T>(array);
  }
}
