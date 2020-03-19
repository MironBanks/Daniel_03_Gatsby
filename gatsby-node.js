const path = require(`path`)
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/layouts/post.js`)

    const result = await graphql(`
        query queryCMSPage {
            allDatoCmsPortfolio {
                nodes {
                id
                title
                }
            }
        }
`);

    result.data.allDatoCmsPortfolio.nodes.forEach(post => {
        const slugifiedTitle = slugify(post.title, {
            lower: true
        });
        createPage({
            path: `news/${slugifiedTitle}`,
            component: blogPostTemplate,
            context: {
                id: post.id,
            },
        })
    })
}