import { NextResponse } from 'next/server';

import AppDataSource from '@/lib/data-source';
import { Task } from '@/lib/models';
import { TaskService } from '@/lib/services';

AppDataSource.initialize();

export async function GET(request: Request) {
  try {
    const taskService = new TaskService();
    const task = await taskService.getItems();

    return new NextResponse(JSON.stringify(task));
  } catch (error) {
    return new NextResponse(null, { status: 400, statusText: (error as Error).message });
  }
}

export async function POST(request: Request) {
  try {
    // TODO: Add input validation
    const task = await request.json() as Task;
    const newTask = await new TaskService().addItem(task);

    return new NextResponse(JSON.stringify(newTask), { status: 201 });
  } catch (error) {
    return new NextResponse(null, { status: 400, statusText: (error as Error).message });
  }

}