// Resolvers define how to fetch the types defined in your schema.
import { informationResolvers } from "./information";
import { projectResolvers } from "./projects";
import { skillsResolvers } from "./skills";

// This resolver retrieves books from the "books" array above.
export const resolvers = {
    Query: {
        ...informationResolvers,
        ...projectResolvers,
        ...skillsResolvers
    },
};