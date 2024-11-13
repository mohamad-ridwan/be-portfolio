import { informationQuery } from "./information";
import { projectQuery } from "./projects";
import { skillsQuery } from "./skills";

export const query = `
type Query{
    ${informationQuery}
    ${projectQuery}
    ${skillsQuery}
}
`