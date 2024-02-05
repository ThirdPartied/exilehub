import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/api/graphql",
  generates: {
    "graphql/generated/local.ts": {
      plugins: ["typescript", "typescript-document-nodes"],
    },
    "./instrospection-local.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
