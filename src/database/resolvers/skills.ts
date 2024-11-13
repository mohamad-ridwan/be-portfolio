import { skillsDB } from '../models/skills'

async function getSkills(): Promise<any> {
    const skills = await skillsDB.find()
    if (
        skills?.length === undefined ||
        skills.length === 0 ||
        !skills[0]?.title
    ) {
        return {
            title: 'Not found',
            description: 'Not found',
            data: []
        }
    }

    return skills[0]
}

export const skillsRequests = {
    getSkills
}