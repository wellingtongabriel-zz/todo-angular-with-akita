import { guid } from "@datorama/akita";

export interface TodoModel {
  id: string;
  title: string;
  completed: boolean;
}

export function createTodo(title: string): TodoModel {
  return {
    id: guid(),
    title,
    completed: false
  } as TodoModel;
}