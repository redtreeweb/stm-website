import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
// import './layout.css'
import '../styles/main.scss';


const Layout = ({ children, headerFontColor, headerFontSize, headerSubTitle, bodyClass, pageName }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            { rel: 'stylesheet', type: 'text/css', href: '//cloud.typography.com/7803112/799324/css/fonts.css' }
          ]}
        >
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-60717411-1"></script>
          <script>
            { `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-60717411-1');` }
          </script>
          <html lang="en" />
          <body className={bodyClass} />
        </Helmet>
        <div className="site-wrapper">
            <Header
              siteTitle={data.site.siteMetadata.title}
              fontColor={headerFontColor}
              fontSize={headerFontSize}
              subTitle={headerSubTitle}
              pageName={pageName}
            />
            <div className="site-content">
              {children}
            </div>
        </div>
      </>
    )}
  />
)

export default Layout
