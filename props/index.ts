import { Task } from '@/lib/models';

export interface ListComponentProps<T> {
  items: T[];
}

export interface DetailsComponentProps<T> {
  item: T;
}

export interface TaskListItemProps extends DetailsComponentProps<Task> {
  showDueDate?: boolean;
}