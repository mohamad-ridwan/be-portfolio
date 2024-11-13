import { skillsRequests } from "../database/resolvers/skills";

const {
    getSkills: skills
} = skillsRequests

function getSkills() {
    return skills()
}

export const skillsResolvers = {
    getSkills
}