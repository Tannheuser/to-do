import { DeleteResult, ObjectLiteral, Repository } from 'typeorm';

export class BaseService<T extends ObjectLiteral> {
  constructor(protected repository: Repository<T>) {}

  async getItems(): Promise<T[]> {
    return await this.repository.find();
  };

  async addItem(item: T): Promise<T> {
    return await this.repository.save(item);
  }

  async deleteItem(id: string): Promise<DeleteResult> {
    return await this.repository.delete( { id });
  }
}