export interface ListComponentProps<T> {
  title?: string;
  items: T[];
}

export interface DetailsComponentProps<T> {
  item: T;
}

export interface CreateActionProps {
  onCreate: () => void;
}

export interface TaskActionsProps {
  onDelete: () => void;
  onComplete: () => void;
  onFlag: () => void;
}

export interface ActionListProps<T> extends ListComponentProps<T>, TaskActionsProps {}

export interface ActionListItemProps<T> extends DetailsComponentProps<T>, TaskActionsProps {}