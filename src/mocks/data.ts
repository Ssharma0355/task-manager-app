import { Task } from "../types/task";

export const mockUser = {
  username: "test",
  password: "test123",
};

export let tasks: Task[] = JSON.parse(
  localStorage.getItem("tasks") || "[]"
);

if (tasks.length === 0) {
  tasks = [
    {
      id: crypto.randomUUID(),
      title: "Complete Assignment",
      description: "Build task manager app",
      status: "in-progress",
    },
  ];

  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );
}