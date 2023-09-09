import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import Flag from '@mui/icons-material/Flag';
import FlagOutlined from '@mui/icons-material/FlagOutlined';
import EditOutlined from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/joy/IconButton';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';

import { TaskListItemProps } from '@/props';

export default function TasksListItem(props: TaskListItemProps) {
  const { item: task, showDueDate } = props;
  const buttonParams = { fontSize: 16 };

  const completeTask = () => {

  };

  const deleteTask = () => {

  };

  const editTask = () => {
    console.log('edit task');
  };

  const flagTask = () => {

  };

  return (
    <>
      <div className="flex flex-col p-2">
        <div className="flex flex-row items-center justify-between pb-2">
          <Checkbox checked={task.completed}
                    label={task.title}
                    onClick={completeTask}
                    style={{ textDecoration: task.completed ? 'line-through' : 'none'}} />
          <div className="flex flex-row items-center">
            {
              showDueDate && <span className="text-sm">{task.dueDate}</span>
            }
            <ButtonGroup>
              <IconButton size="sm" onClick={editTask}>
                <EditOutlined style={buttonParams} />
              </IconButton>
              <IconButton size="sm" onClick={flagTask}>
                {
                  task.flagged
                    ? <Flag style={{ ...buttonParams, color: 'red' }} />
                    : <FlagOutlined style={buttonParams} />
                }
              </IconButton>
              <IconButton size="sm" onClick={() => deleteTask}>
                <DeleteOutlined style={buttonParams} />
              </IconButton>
            </ButtonGroup>
          </div>
        </div>
        <Divider />
      </div>
    </>
  )
}