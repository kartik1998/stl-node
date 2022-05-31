import Queue from "./queue";

export default class Deque<T> extends Queue<T> {
  constructor(array?: Array<T>) {
    super(array);
  }

  public addLast(value: T): void {
    this.add(value);
  }

  public addFirst(value: T): void {
    this._arr.unshift(value);
  }

  public removeFirst(): T | undefined {
    return this.remove();
  }

  public removeLast(): T | undefined {
    return this._arr.pop();
  }

  public peekFirst(): T | undefined {
    return this.peek();
  }

  public peekLast(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this._arr[this._arr.length - 1];
  }

  static fromArray<T>(array: Array<T>): Deque<T> {
    return new Deque<T>(array);
  }
}
