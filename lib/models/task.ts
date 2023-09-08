import { BaseModel } from '@/lib/models/base-model';

export interface Task extends BaseModel {
    priority: number;
    dueDate?: number;
    completed?: boolean;
    flagged?: boolean;
}