import { Substitute, SubstituteOf } from '@fluffy-spoon/substitute';
import { Repository } from 'typeorm';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { Task } from '@/lib/models';
import { TaskService } from '@/lib/services';
import { tasks } from '../fixtures';

describe('Task Service', () => {
  let repository: SubstituteOf<Repository<Task>>;

  beforeEach(async () => {
    repository = Substitute.for<Repository<Task>>();
  });

  test('returns list of all tasks', async () => {
    const taskService = new TaskService(repository);

    repository.find().resolves(tasks);
    const result = await taskService.getItems();
    repository.received(1).find();

    expect(result.length).toBe(tasks.length);
  });
});