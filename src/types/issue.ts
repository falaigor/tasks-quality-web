export interface IssueProps {
  id: string;
  taskId: string;
  description: string;
  finishedAt?: Date;
  canceledAt?: Date;
  createdAt: Date;
}
