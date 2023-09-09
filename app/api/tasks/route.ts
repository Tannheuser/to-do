import { NextResponse } from 'next/server';
import { Task } from '@/lib/models';
import { TaskService } from '@/lib/services';

export async function POST(request: Request) {
  const task = await request.json() as Task;
  // TODO: Add input validation
  // TODO: Implement the TaskService.addItem method
  // const newTask = await new TaskService().addItem(task);
  console.log('task', task);
  const newTask = task;

  return new NextResponse(JSON.stringify(newTask), { status: 201 });
}