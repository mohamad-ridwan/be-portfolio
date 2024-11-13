import { projectsDB } from '../models/projects'

async function getProject(): Promise<any> {
    const projects = await projectsDB.find() as any[]
    if (
        projects?.length === undefined ||
        projects.length === 0 ||
        !projects?.[0]?.title
    ) {
        return {
            title: 'Not found',
            description: 'Not found',
            application: []
        }
    }
    return projects[0]
}

export const projectsRequests = {
    getProject
}