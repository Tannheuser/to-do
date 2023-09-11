'use client'

import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import Flag from '@mui/icons-material/Flag';
import FlagOutlined from '@mui/icons-material/FlagOutlined';
import EditOutlined from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/joy/IconButton';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';

import { useHttp } from '@/hooks';
import { Env } from '@/lib/env';
import { Task } from '@/lib/models';
import { getAuthHeaders } from '@/lib/utils';
import { ActionListItemProps } from '@/props';

export default function TasksListItem(props: ActionListItemProps<Task>) {
  const { item: task, onDelete, onComplete, onFlag } = props;
  const { loading, error, sendRequest, data} = useHttp<Task>(`${Env.apiUrl}/${task.id}`);
  const headers = getAuthHeaders();
  const buttonParams = { fontSize: 16 };

  const completeTask = async () => {
    const body = JSON.stringify({ completed: !task.completed });
    await sendRequest({ method: 'PATCH', headers, body });
    onComplete();
  };

  const deleteTask = async () => {
    await sendRequest({ method: 'DELETE', headers });
    onDelete();
  };

  const flagTask = async () => {
    const body = JSON.stringify({ flagged: !task.flagged });
    await sendRequest({ method: 'PATCH', headers, body });
    onFlag();
  }

  return (
    <>
      <div className="flex flex-col p-2">
        <div className="flex flex-row items-center justify-between pb-2">
          <Checkbox checked={task.completed}
                    disabled={task.completed || loading}
                    label={task.title}
                    onClick={completeTask}
                    style={{ textDecoration: task.completed ? 'line-through' : 'none'}} />
          <div className="flex flex-row items-center">
            <ButtonGroup>
              <IconButton size="sm" disabled={loading}>
                <EditOutlined style={buttonParams} />
              </IconButton>
              <IconButton size="sm" disabled={loading} onClick={flagTask}>
                {
                  task.flagged
                    ? <Flag style={{ ...buttonParams, color: 'red' }} />
                    : <FlagOutlined style={buttonParams} />
                }
              </IconButton>
              <IconButton size="sm" disabled={loading} onClick={deleteTask}>
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