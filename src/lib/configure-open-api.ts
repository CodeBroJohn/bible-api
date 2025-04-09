import { Scalar } from "@scalar/hono-api-reference";

import type { AppOpenAPI } from "./types";

import packageJSON from "../../package.json";

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      title: "Bible API",
      description: "Bible API documentation",
      version: packageJSON.version,
    },
  });

  app.get(
    "/reference",
    Scalar({
      theme: "solarized",
      layout: "classic",
      url: "/doc",
    }),
  );
}
