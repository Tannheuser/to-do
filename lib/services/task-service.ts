import { Task } from '@/lib/models';
import { BaseService } from './base-service';
import AppDataSource from '@/lib/data-source';

export class TaskService extends BaseService<Task> {
  constructor(protected repository = AppDataSource.getRepository(Task)) {
    super(repository);
  }
}