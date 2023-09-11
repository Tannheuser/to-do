import { Task } from '@/lib/models';
import { ActionListProps } from '@/props';
import TasksListItem from './task-list-item';

export default function TasksList(props: ActionListProps<Task>) {
  const { items: tasks, title, onFlag, onComplete, onDelete } = props;

  return (
    <>
      {
        tasks.length
          ? tasks.map((task) =>
            <TasksListItem
              key={task.id}
              item={task}
              onDelete={onDelete}
              onFlag={onFlag}
              onComplete={onComplete} />)
          : <h3 className="font-bold mb-2 mx-2 lg:mx-0">Start adding some tasks today!</h3>
      }
    </>
  );
}