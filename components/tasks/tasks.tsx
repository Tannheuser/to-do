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
  };

  useEffect(() => {
    getTasks();
  }, [])

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(function () {
        getTasks();
      }, 5000);
      clearTimeout(timeout);
    }
  }, [error]);

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold my-2 mx-2 lg:mx-0">My Tasks</h1>
        <Divider />
        <NewTask onCreate={getTasks} />
        {
          data && <TasksList items={data} onDelete={getTasks} onFlag={getTasks} onComplete={getTasks}  />
        }
        { error && <p className="text-red-500 text-center">Something went wrong possible due to a cold start. <br /> Will try to resolve it in a few seconds.</p> }
      </div>

    </>
  );
}

