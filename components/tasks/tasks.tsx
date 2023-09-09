import { TaskService } from '@/lib/services';
import { TasksList } from './task-list';

export async function Tasks() {
  const tasks = await new TaskService().getItems();

  return (
    <>
      <h1 className="text-2xl font-bold mb-2">My Tasks</h1>
      <TasksList items={tasks} />
    </>
  );
}

