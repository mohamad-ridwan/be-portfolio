const intro = `
type Intro{
    title: String!
    description: String!
}
`

const information = `
type Information{
    navbarTitle: String!
    webName: String!
    intro: Intro!
}
`

export const informationSchema = `
${intro}
${information}
`