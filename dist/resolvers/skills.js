"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillsResolvers = void 0;
const skills_1 = require("../database/resolvers/skills");
const { getSkills: skills } = skills_1.skillsRequests;
function getSkills() {
    return skills();
}
exports.skillsResolvers = {
    getSkills
};
