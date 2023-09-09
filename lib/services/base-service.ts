export abstract class BaseService<T> {
  abstract getItems(): Promise<T[]>;
}