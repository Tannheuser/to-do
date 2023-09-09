import { ListComponentProps } from '@/props';
import TasksListItem from './task-list-item';
import { Task } from '@/lib/models';

export function TasksList(props: ListComponentProps<Task>) {
  const { items: tasks } = props;

  return (
    tasks.map((task) => <TasksListItem key={task.id} item={task} />)
  );
}