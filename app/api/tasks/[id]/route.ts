import { NextResponse } from 'next/server';

import AppDataSource from '@/lib/data-source';
import { TaskRequestParams } from '@/lib/dto';
import { Task } from '@/lib/models';
import { TaskService } from '@/lib/services';

AppDataSource.initialize();

export async function PUT(request: Request, context: TaskRequestParams) {
  // TODO: Could be used to update a task
  const task = await request.json() as Task;

  return new NextResponse(JSON.stringify(task), { status: 200 });
  // return new NextResponse(null, { status: 400 });
}

export async function DELETE(request: Request, context: TaskRequestParams) {
  try {
    const { id } = context.params;
    const deletedTask = await new TaskService().deleteItem(id);

    return new NextResponse(JSON.stringify(deletedTask), { status: 200 });
  } catch (error) {
    return new NextResponse(null, { status: 400, statusText: (error as Error).message });
  }
}

export async function PATCH(request: Request, context: TaskRequestParams) {
  try {
    const task = await request.json();
    const taskService = new TaskService();

    if ('completed' in task) {
      const updatedTask = await taskService.completeTask(context.params.id);
      return new NextResponse(JSON.stringify(updatedTask), { status: 200 });
    } else if ('flagged' in task) {
      const updatedTask = await taskService.flagTask(context.params.id, task.flagged);
      return new NextResponse(JSON.stringify(updatedTask), { status: 200 });
    } else {
      return new NextResponse(null, { status: 400, statusText: 'Action not supported' });
    }


  } catch (error) {
    return new NextResponse(null, { status: 400, statusText: (error as Error).message });
  }
}