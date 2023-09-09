import { Task } from '@/lib/models';

const task1 = new Task();
task1.id = '1';
task1.title = 'Task 1';
task1.completed = false;
task1.flagged = false;

const task2 = new Task();
task2.id = '2';
task2.title = 'Task 2';
task2.completed = true;
task2.flagged = true;

export const tasks: Task[] = [task1, task2];