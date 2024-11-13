import { projectsRequests } from "../database/resolvers/projects"

const {
    getProject: project
} = projectsRequests

function getProject(_: any, variable: any) {
    return project()
}

export const projectResolvers = {
    getProject
}