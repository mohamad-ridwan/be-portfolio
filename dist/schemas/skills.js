"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillsSchema = void 0;
const skillsData = `
type SkillsData{
    name: String!
    logo: String
}
`;
const skills = `
type Skills{
    title: String!
    description: String!
    data: [SkillsData]
}
`;
exports.skillsSchema = `
${skillsData}
${skills}
`;
