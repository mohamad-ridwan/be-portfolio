"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const information_1 = require("./information");
const projects_1 = require("./projects");
const skills_1 = require("./skills");
exports.query = `
type Query{
    ${information_1.informationQuery}
    ${projects_1.projectQuery}
    ${skills_1.skillsQuery}
}
`;
