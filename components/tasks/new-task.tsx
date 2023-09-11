'use client'

import { useState, KeyboardEvent } from 'react';
import Add from '@mui/icons-material/Add';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';

import { useHttp } from '@/hooks';
import { Env } from '@/lib/env';
import { Task } from '@/lib/models';
import { getAuthHeaders } from '@/lib/utils';
import { CreateActionProps } from '@/props';

export default function NewTask(props: CreateActionProps) {
  const [taskTitle, setTaskTitle] = useState<string>('');
  const { onCreate } = props;
  const { loading, error, sendRequest, data } = useHttp<Task>(Env.apiUrl!);
  const headers = getAuthHeaders();

  const createTask = async () => {
    const body = JSON.stringify({ title: taskTitle });
    await sendRequest({ method: 'POST', headers, body });
    setTaskTitle('');
    onCreate();
  }

  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      await createTask();
    }
  }

  return (
    <div className="flex my-4 mx-2 lg:mx-0">
      <Input
        className="mr-4 flex-1"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.currentTarget.value)}
        onKeyDown={handleKeyDown} />
      <Button variant='plain' startDecorator={<Add />} onClick={createTask} loading={loading}>Add Task</Button>
    </div>
  )

}