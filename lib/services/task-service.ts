import AppDataSource from '@/lib/data-source';
import { Task } from '@/lib/models';
import { BaseService } from './base-service';

export class TaskService extends BaseService<Task> {
  constructor(protected repository = AppDataSource.getRepository(Task)) {
    super(repository);
  }

  async flagTask(id: string, flagged: boolean): Promise<Task> {
    const existingItem = await this.getItemById(id);

    if (!existingItem) {
      throw new Error('Item does not exist');
    }

    existingItem.flagged = flagged;

    return await this.updateItem(existingItem);
  }

  async completeTask(id: string): Promise<Task> {
    const existingItem = await this.getItemById(id);

    if (!existingItem) {
      throw new Error('Item does not exist');
    }

    existingItem.completed = true;

    return await this.updateItem(existingItem);
  }
}