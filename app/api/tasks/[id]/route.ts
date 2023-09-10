import { NextResponse } from 'next/server';

import AppDataSource from '@/lib/data-source';
import { TaskRequestParams } from '@/lib/dto';
import { Task } from '@/lib/models';
import { TaskService } from '@/lib/services';

AppDataSource.initialize();

export async function PUT(request: Request, context: TaskRequestParams) {
  const task = await request.json() as Task;
  // TODO: Implement the TaskService.updateItem method

  return new NextResponse(JSON.stringify(task), { status: 200 });
  // return new NextResponse(null, { status: 400 });
}

export async function DELETE(request: Request, context: TaskRequestParams) {
  try {
    const { id } = context.params;
    await new TaskService().deleteItem(id);
    // TODO: Implement the TaskService.deleteItem method
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return new NextResponse(null, { status: 400, statusText: (error as Error).message });
  }
}

export async function PATCH(request: Request, context: TaskRequestParams) {
  const task = await request.json() as Task;
  // TODO: Implement flag and complete task methods

  return new NextResponse(JSON.stringify(task), { status: 200 });
  // return new NextResponse(null, { status: 400 });

}