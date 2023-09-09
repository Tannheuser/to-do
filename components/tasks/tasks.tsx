import { TasksList } from './task-list';

export function Tasks() {
  const tasks = [
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

  return (
    <>
      <h1 className="text-2xl font-bold mb-2">My Tasks</h1>
      <TasksList items={tasks} />
    </>
  );
}

