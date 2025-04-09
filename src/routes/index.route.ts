import { createRoute, z } from "@hono/zod-openapi";

import { createRouter } from "@/lib/create-app";

const router = createRouter()
  .openapi(createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: z.object({
              message: z.string(),
            }),
          },
        },
        description: "Bible API Index",
      },
    },
  }), (c) => {
    return c.json({
      message: "Bible API",
    });
  });

export default router;
