const skillsData = `
type SkillsData{
    name: String!
    logo: String
}
`

const skills = `
type Skills{
    title: String!
    description: String!
    data: [SkillsData]
}
`

export const skillsSchema = `
${skillsData}
${skills}
`