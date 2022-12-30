export interface TaskProps {
  id: string;
  userId: string;
  title: string;
  description?: string;
  urlTask?: string;
  status: "in-progress" | "waiting" | "complete";
  startedAt: Date;
  dueDateAt: Date;
  finishedAt: Date;
  createdAt: Date;
  _count: {
    issues: number;
  };
}
