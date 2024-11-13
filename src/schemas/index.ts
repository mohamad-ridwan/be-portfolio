// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
import { query } from "../querys";
import { informationSchema } from "./information";
import { projectsSchema } from "./projects";
import { skillsSchema } from "./skills";

export const typeDefs = `#graphql
  ${informationSchema}
  ${projectsSchema}
  ${skillsSchema}
  ${query}
`;