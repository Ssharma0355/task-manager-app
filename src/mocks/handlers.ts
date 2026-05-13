import { http, HttpResponse } from "msw";
import { mockUser, tasks } from "./data";

export const handlers = [
  http.post("/login", async ({ request }) => {
    const body = await request.json() as {
      username: string;
      password: string;
    };

    if (
      body.username === mockUser.username &&
      body.password === mockUser.password
    ) {
      return HttpResponse.json({
        token: "fake-jwt-token",
        user: {
          name: "Test User",
        },
      });
    }

    return HttpResponse.json(
      {
        message: "Invalid credentials",
      },
      {
        status: 401,
      }
    );
  }),

  http.get("/tasks", () => {
    return HttpResponse.json(tasks);
  }),
];