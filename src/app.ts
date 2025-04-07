import type { PinoLogger } from "hono-pino";

import { OpenAPIHono } from "@hono/zod-openapi";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { notFound, onError } from "stoker/middlewares";

import { pinoLogger } from "./middlewares/pino-logger";

expand(config());

interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
}

const app = new OpenAPIHono<AppBindings>();
app.use(pinoLogger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/error", (c) => {
  c.status(422);
  c.var.logger.info("This is an info log");
  throw new Error("Pwned");
});

app.notFound(notFound);
app.onError(onError);

export default app;
