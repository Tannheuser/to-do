'use client'

import { useEffect } from 'react';
import Divider from '@mui/joy/Divider';

import { useHttp } from '@/hooks';
import { Env } from '@/lib/env';
import { Task } from '@/lib/models';
import { getAuthHeaders } from '@/lib/utils';
import NewTask from './new-task';
import TasksList from './task-list';

export function Tasks() {
  const { data, loading, error, sendRequest  } = useHttp<Task[]>(Env.apiUrl!);
  const headers = getAuthHeaders();

  const getTasks = async () => {
    await sendRequest({ headers });
  }

  useEffect(() => {
    getTasks();
  }, [])

  if (error) {
    alert(error);
  }

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold my-2">My Tasks</h1>
        <Divider />
        <NewTask onCreate={getTasks} />
        {
          data && <TasksList items={data} onDelete={getTasks} onFlag={getTasks} onComplete={getTasks}  />
        }
      </div>

    </>
  );
}

