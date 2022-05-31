export default class Queue<T> {
  private _arr: Array<T> = [];

  constructor(arr?: Array<T>) {
    if (Array.isArray(arr)) this._arr = Array.from(arr);
  }
}
