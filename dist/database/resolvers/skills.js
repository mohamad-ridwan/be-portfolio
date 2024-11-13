"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillsRequests = void 0;
const skills_1 = require("../models/skills");
async function getSkills() {
    const skills = await skills_1.skillsDB.find();
    if (skills?.length === undefined ||
        skills.length === 0 ||
        !skills[0]?.title) {
        return {
            title: 'Not found',
            description: 'Not found',
            data: []
        };
    }
    return skills[0];
}
exports.skillsRequests = {
    getSkills
};
