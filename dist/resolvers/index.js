"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
// Resolvers define how to fetch the types defined in your schema.
const information_1 = require("./information");
const projects_1 = require("./projects");
const skills_1 = require("./skills");
// This resolver retrieves books from the "books" array above.
exports.resolvers = {
    Query: {
        ...information_1.informationResolvers,
        ...projects_1.projectResolvers,
        ...skills_1.skillsResolvers
    },
};
