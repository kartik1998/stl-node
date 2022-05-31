export default interface IQueue<T> {
  add(value: T): void;
  peek(): T | undefined;
  remove(): T | undefined;
  isEmpty(): boolean;
  array(): Array<T>;
}
