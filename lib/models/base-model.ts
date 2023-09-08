export interface BaseModel {
    id: number;
    title: string;
    createdAt: number;
    updatedAt: number;
    createdBy?: number;
}