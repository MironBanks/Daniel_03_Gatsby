const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/layouts/post.js`)
    const result = await graphql(`
  query queryArticles {
        allMdx {
            nodes{
                frontmatter{
                        title
                        slug
                        author
                        quoter
                        featuredImage{
                        childImageSharp{
                                fluid(maxWidth: 700, maxHeight: 500) {
                                    src
                                    }
                            }
                        }
                    }
                excerpt(pruneLength: 50)
            }
        }
    }
  `);
    result.data.allMdx.nodes.forEach(post => {
        createPage({
            // Path for this page — required
            path: `blog/${post.frontmatter.slug}`,
            component: blogPostTemplate,
            context: {

            },
        })
    })
}
