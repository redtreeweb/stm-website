import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
// import './layout.css'
import '../styles/main.scss';


const Layout = ({ children, className, headerFontColor, headerFontSize, headerSubTitle, bodyClass, pageName }) => (
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
            // meta={[
            //   { name: 'description', content: 'Sample' },
            //   { name: 'keywords', content: 'sample, something' },
            // ]}
            link={[
                { rel: 'stylesheet', type: 'text/css', href: '//cloud.typography.com/7803112/799324/css/fonts.css' },
                { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css2?family=League+Gothic&display=swap' }
            ]}
        >
            <html lang="en" />
            <meta name="google-site-verification" content="iHCvh1L-5oY1aiFIMF7iDUBeW1it-IDpa8wAMALuDJw" />
        </Helmet>
        <div className="site-wrapper">
            <Header
                bodyClass={bodyClass}
                siteTitle={data.site.siteMetadata.title}
                fontColor={headerFontColor}
                fontSize={headerFontSize}
                subTitle={headerSubTitle}
                pageName={pageName}
                className={className}
            />
            <div className="site-content">
                {children}
            </div>
        </div>
      </>
        )}
    />
);

export default Layout;
