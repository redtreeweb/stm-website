/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
      // The “graphql” function allows us to run arbitrary
      // queries against the local WordPress graphql schema. Think of
      // it like the site has a built-in database constructed
      // from the fetched data that you can run queries against.
  
      // ==== PAGES (WORDPRESS NATIVE) ====
      graphql(
        `
          {
            allWordpressPage {
              edges {
                node {
                  id
                  slug
                  status
                  template
                }
              }
            }
          }
        `
      )
        .then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
  
          // // Create Page pages.
          // const pageTemplate = path.resolve("./src/templates/page.js")
          // // We want to create a detailed page for each
          // // page node. We'll just use the WordPress Slug for the slug.
          // // The Page ID is prefixed with 'PAGE_'
          // _.each(result.data.allWordpressPage.edges, edge => {
          //   // Gatsby uses Redux to manage its internal state.
          //   // Plugins and sites can use functions like "createPage"
          //   // to interact with Gatsby.
          //   createPage({
          //     // Each page is required to have a `path` as well
          //     // as a template component. The `context` is
          //     // optional but is often necessary so the template
          //     // can query data specific to each page.
          //     path: `/${edge.node.slug}/`,
          //     component: slash(pageTemplate),
          //     context: {
          //       id: edge.node.id,
          //     },
          //   })
          // })
        })
        // ==== END PAGES ====
  
        // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
        .then(() => {
          graphql(
            `
              {
                allWordpressPost {
                  edges {
                    node {
                      id
                      slug
                      status
                      template
                      format
                    }
                  }
                }
              }
            `
          ).then(result => {
            if (result.errors) {
              reject(result.errors)
            }
            const postTemplate = path.resolve("./src/templates/post.js")
            // this programmatically creates a page
            // if I want to create a home...I wouldn't need to do this.
            // We want to create a detailed page for each
            // post node. We'll just use the WordPress Slug for the slug.
            // The Post ID is prefixed with 'POST_'
            _.each(result.data.allWordpressPost.edges, edge => {
              createPage({
                path: `blog/${edge.node.slug}/`,
                component: slash(postTemplate),
                context: {
                  id: edge.node.id,
                },
              })
            })
            resolve()
          })
        })
      // ==== END POSTS ====
      // ==== CATEGORIES ====
      .then(() => {
        graphql(
          `
            query {
              allWordpressCategory {
                  edges {
                      node {
                      id,
                      slug,
                      name
                      }
                  }
              }
          }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const postTemplate = path.resolve("./src/templates/category.js")
        //   // this programmatically creates a page
        //   // if I want to create a home...I wouldn't need to do this.
        //   // We want to create a detailed page for each
        //   // post node. We'll just use the WordPress Slug for the slug.
        //   // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressCategory.edges, edge => {
            createPage({
              path: `blog/category/${edge.node.slug}/`,
              component: slash(postTemplate),
              context: {
                id: edge.node.id,
                name: edge.node.name
              },
            })
          })
          resolve()
        })
      })
    })
  }