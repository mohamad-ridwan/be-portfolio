"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectsSchema = void 0;
const applications = `
type Applications{
    video: String
    deskripsi: String
    github: String
    linkProjek: String
    titleAplikasi: String
}
`;
const projects = `
type Projects{
    title: String!
    description: String!
    application: [Applications]
}
`;
exports.projectsSchema = `
${applications}
${projects}
`;
