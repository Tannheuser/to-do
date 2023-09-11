import { Arg, Substitute, SubstituteOf } from '@fluffy-spoon/substitute';
import { Repository } from 'typeorm';
import { beforeEach, describe, expect, test } from 'vitest';

import { Task } from '@/lib/models';
import { TaskService } from '@/lib/services';
import { tasks } from '../fixtures';

describe('Task Service', () => {
  let repository: SubstituteOf<Repository<Task>>;
  let taskService: TaskService;

  beforeEach(async () => {
    repository = Substitute.for<Repository<Task>>();
    taskService = new TaskService(repository);
  });

  test('returns list of all tasks', async () => {
    repository.find().resolves(tasks);
    const result = await taskService.getItems();
    repository.received(1).find();

    expect(result.length).toBe(tasks.length);
  });

  test('deletes existing task', async () => {
    const task = tasks[0];
    const deleteCriteria = { id: task.id };

    repository.findOneBy(deleteCriteria).resolves(task);
    repository.remove(task).resolves(task);
    const result = await taskService.deleteItem(task.id);
    repository.received(1).findOneBy(deleteCriteria);
    repository.received(1).remove(task);

    expect(result).toBe(task);
  });

  test('throws when trying to delete non-existent task', async () => {
    const taskId = 'id';
    const deleteCriteria = { id: taskId };

    repository.findOneBy(deleteCriteria).resolves(null);

    await expect(() => taskService.deleteItem(taskId)).rejects.toThrowError('Item does not exist');
    repository.received(1).findOneBy(deleteCriteria);
    repository.received(0).remove(Arg.any());
  });

  test('adds new task', async () => {
    const task = new Task();
    task.id = '3';
    task.title = 'Task 3';

    repository.save(task).resolves(task);
    const result = await taskService.addItem(task);
    repository.received(1).save(task);

    expect(result).toBe(task);
  });

  test('updates existing task', async () => {
    const existingTask = tasks[0];
    const updatedTask = new Task();
    updatedTask.id = existingTask.id;
    updatedTask.title = 'Updated Task 1';

    repository.save(updatedTask).resolves(updatedTask);
    const result = await taskService.updateItem(updatedTask);
    repository.received(1).save(updatedTask);

    expect(result).toBe(updatedTask);
  });

  test('completes existing task', async () => {
    const completedTask = tasks[0];
    completedTask.completed = true;
    const findCriteria = { id: completedTask.id };

    repository.findOneBy(findCriteria).resolves(tasks[0]);
    repository.save(completedTask).resolves(completedTask);
    const result = await taskService.completeTask(completedTask.id);
    repository.received(1).findOneBy(findCriteria);
    repository.received(1).save(completedTask);
    expect(result).toBe(completedTask);
  });

  test('throws when trying to complete non-existent task', async () => {
    const completedTask = tasks[0];
    completedTask.completed = true;
    const findCriteria = { id: completedTask.id };

    repository.findOneBy(findCriteria).resolves(null);
    await expect(() => taskService.completeTask(completedTask.id)).rejects.toThrowError('Item does not exist');
    repository.received(1).findOneBy(findCriteria);
    repository.received(0).save(Arg.any());
  });
});