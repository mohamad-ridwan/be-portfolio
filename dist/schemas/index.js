"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
const querys_1 = require("../querys");
const information_1 = require("./information");
const projects_1 = require("./projects");
const skills_1 = require("./skills");
exports.typeDefs = `#graphql
  ${information_1.informationSchema}
  ${projects_1.projectsSchema}
  ${skills_1.skillsSchema}
  ${querys_1.query}
`;
