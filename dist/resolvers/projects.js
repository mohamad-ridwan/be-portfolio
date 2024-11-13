"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectResolvers = void 0;
const projects_1 = require("../database/resolvers/projects");
const { getProject: project } = projects_1.projectsRequests;
function getProject(_, variable) {
    return project();
}
exports.projectResolvers = {
    getProject
};
