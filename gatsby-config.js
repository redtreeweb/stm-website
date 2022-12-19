module.exports = {
    siteMetadata: {
        title: 'Skinny Tie Media',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'material icons'
                    // 'roboto:300,400,500,700',
                ]
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'skinny-tie-media',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/logo-tag.png', // This path is relative to the root of the site.  
            },
        },
        'gatsby-plugin-offline',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: "gatsby-source-wordpress",
            options: {
                /*
         * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
         * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
         */
                baseUrl: "cms.skinnytiemedia.com",
                // The protocol. This can be http or https.
                protocol: "https", //why did this change?
                // Indicates whether the site is hosted on wordpress.com.
                // If false, then the assumption is made that the site is self hosted.
                // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
                // If your site is hosted on wordpress.org, then set this to false.
                hostingWPCOM: false,
                // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
                // This feature is untested for sites hosted on Wordpress.com.
                // Defaults to true.
                useACF: true,
                // Include specific ACF Option Pages that have a set post ID
                // Regardless if an ID is set, the default options route will still be retrieved
                // Must be using V3 of ACF to REST to include these routes
                // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
                // routes with the ID option_page_1 and option_page_2
                // Dashes in IDs will be converted to underscores for use in GraphQL
                acfOptionPageIds: [],
                // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
                // It can help you debug specific API Endpoints problems.
                verboseOutput: false,
                // Set how many pages are retrieved per API request.
                perPage: 100,
                // Search and Replace Urls across WordPress content.
                searchAndReplaceContentUrls: {
                    sourceUrl: "http://cms.skinnytiemedia.com",
                    replacementUrl: "https://cms.skinnytiemedia.com",
                },
                // Set how many simultaneous requests are sent at once.
                concurrentRequests: 10,
                // Set WP REST API routes whitelists
                // and blacklists using glob patterns.
                // Defaults to whitelist the routes shown
                // in the example below.
                // See: https://github.com/isaacs/minimatch
                // Example:  `["/*/*/comments", "/yoast/**"]`
                // ` will either include or exclude routes ending in `comments` and
                // all routes that begin with `yoast` from fetch.
                // Whitelisted routes using glob patterns
                includedRoutes: [
                    "/*/*/categories",
                    "/*/*/posts",
                    "/*/*/pages",
                    "/*/*/media",
                    "/*/*/tags",
                    "/*/*/taxonomies",
                    "/*/*/users",
                ],
                // Blacklisted routes using glob patterns
                excludedRoutes: ["/*/*/posts/1456"],
                // use a custom normalizer which is applied after the built-in ones.
                normalizer: function ({ entities }) {
                    return entities;
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-60717411-1",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
            },
        },
        {
          resolve: `gatsby-plugin-google-gtag`,
          options: {
            trackingIds: [
              'G-3S4YDQ2X6G'
            ],
            pluginConfig: {
              head: true
            }
          }
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://skinnytiemedia.us10.list-manage.com/subscribe/post?u=9000c9c71a9eb1030fd6c4320&amp;id=d18a0fae0e', // add your MC list endpoint here; see instructions below
            },
        }
    ],
};
