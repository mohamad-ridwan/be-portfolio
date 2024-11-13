"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectsRequests = void 0;
const projects_1 = require("../models/projects");
async function getProject() {
    const projects = await projects_1.projectsDB.find();
    if (projects?.length === undefined ||
        projects.length === 0 ||
        !projects?.[0]?.title) {
        return {
            title: 'Not found',
            description: 'Not found',
            application: []
        };
    }
    return projects[0];
}
exports.projectsRequests = {
    getProject
};
