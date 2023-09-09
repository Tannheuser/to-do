import { Task } from '@/lib/models';
import { BaseService } from './base-service';

export class TaskService extends BaseService<Task> {
  private tasks = [
    {
      id: 1,
      title: 'Task 1',
      priority: 1,
      createdBy: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      flagged: true,
    },
    {
      id: 2,
      title: 'Task 2',
      priority: 1,
      createdBy: 1,
      completed: true,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
  ];

  getItems(): Promise<Task[]> {
    return Promise.resolve(this.tasks);
  }
}