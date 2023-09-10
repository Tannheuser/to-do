import { FindOptionsWhere, Repository } from 'typeorm';

import { BaseModel } from '@/lib/models';

export class BaseService<T extends BaseModel> {
  constructor(protected repository: Repository<T>) {}

  async getItems(): Promise<T[]> {
    return await this.repository.find();
  };

  async getItemById(id: string): Promise<T | null> {
    return await this.repository.findOneBy({ id } as FindOptionsWhere<T>);
  }

  async addItem(item: T): Promise<T> {
    return await this.repository.save(item);
  }

  async deleteItem(id: string): Promise<T> {
    const existingItem = await this.getItemById(id);

    if (!existingItem) {
      throw new Error('Item does not exist');
    }

    return await this.repository.remove(existingItem);
  }

  async updateItem(item: T): Promise<T> {
    const existingItem = await this.getItemById(item.id);

    if (!existingItem) {
      throw new Error('Item does not exist');
    }

    return await this.repository.save(item);
  }
}