import { NextResponse } from 'next/server';

import { TaskRequestParams } from '@/lib/dto';
import { Task } from '@/lib/models';

export async function PUT(request: Request, context: TaskRequestParams) {
  const task = await request.json() as Task;
  // TODO: Implement the TaskService.updateItem method

  return new NextResponse(JSON.stringify(task), { status: 200 });
  // return new NextResponse(null, { status: 400 });
}

export async function DELETE(request: Request, context: TaskRequestParams) {
  const { id } = context.params;
  // TODO: Implement the TaskService.deleteItem method
  return new NextResponse(null, { status: 204 });
}

export async function PATCH(request: Request, context: TaskRequestParams) {
  const task = await request.json() as Task;
  // TODO: Implement flag and complete task methods

  return new NextResponse(JSON.stringify(task), { status: 200 });
  // return new NextResponse(null, { status: 400 });

}