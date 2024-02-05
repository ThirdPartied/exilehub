import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.poestack.com/graphql",
  generates: {
    "graphql/generated/poestack.ts": {
      plugins: ["typescript", "typescript-document-nodes"],
    },
    "./instrospection-poestack.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
