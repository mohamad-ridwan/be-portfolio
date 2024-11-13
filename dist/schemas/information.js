"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.informationSchema = void 0;
const intro = `
type Intro{
    title: String!
    description: String!
}
`;
const information = `
type Information{
    navbarTitle: String!
    webName: String!
    intro: Intro!
}
`;
exports.informationSchema = `
${intro}
${information}
`;
