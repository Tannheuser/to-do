import { Column, Entity } from 'typeorm';

import { BaseModel } from '@/lib/models/base-model';

@Entity()
export class Task extends BaseModel {
  @Column({ type: 'boolean' })
  public completed!: boolean;

  @Column({ type: 'boolean' })
  public flagged!: boolean;
}