import { IssueProps } from "./issue";

export interface TaskProps {
  id: string;
  userId: string;
  title: string;
  description?: string;
  urlTask?: string;
  status: string;
  startedAt?: Date;
  dueDateAt?: Date;
  finishedAt?: Date;
  createdAt: Date;
  _count: {
    issues: number;
  };
}
