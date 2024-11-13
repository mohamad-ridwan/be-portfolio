const applications = `
type Applications{
    video: String
    deskripsi: String
    github: String
    linkProjek: String
    titleAplikasi: String
}
`

const projects = `
type Projects{
    title: String!
    description: String!
    application: [Applications]
}
`

export const projectsSchema = `
${applications}
${projects}
`