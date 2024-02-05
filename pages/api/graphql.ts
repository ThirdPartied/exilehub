require("dotenv").config();

import { schema } from "@/types/gqlschema";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";
import { NextRequest } from "next/server";

const server = new ApolloServer({ schema });

export default startServerAndCreateNextHandler<NextRequest>(server);
