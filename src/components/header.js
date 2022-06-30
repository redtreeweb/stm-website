import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';


import imgLogo from '../images/logo-color.svg';
import imgLogoWhite from '../images/logo.svg';

import '../styles/components/header.scss';

const tieLogo = require('../images/arrow_tie.png');

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSidebarOpen: false
        };
    }

    render() {


        const { siteTitle, fontColor, subTitle, fontSize, pageName, className, bodyClass } = this.props;
        const { isSidebarOpen } = this.state;

        const navUl = <ul>
            {/* <li>DEV BUILD</li> */}
            <li><Link to="/approach">Approach</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/us">Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">What's Your Story?</Link></li>
        </ul>;


        const mobileOpen = (
            <div className="cd-nav-mobile open" onClick={() => { this.setState({ isSidebarOpen: true }); }}>
                <i className="material-icons">menu</i>
            </div>);

        const mobileClose = (
            <div className="cd-nav-mobile close" onClick={() => { this.setState({ isSidebarOpen: false }); }}>
                <i className="material-icons">close</i>
            </div>);

        const HeaderLink = ({ children }) => {
            if (pageName === 'index') {
                return <a href="/">{children}</a>;
            }
            else {
                return <Link to="/">{children}</Link>;
            }
        };

        return (<>
			{/* {console.log(this.props)} */}
			{/* {console.log(location)} */}
			<Helmet>
			    <html className={isSidebarOpen ? 'overflow-hidden' : ''} />
			    <body className={ bodyClass + " " + (isSidebarOpen ? 'overflow-hidden' : '') } />
			</Helmet>
			<div className={`nav-wrapper ${fontColor} ${className}`}>
			    <div id="logo-flow">
			        {/* {pageName === 'index' ? <a href="/">: <Link to="/" state={{scrollPosition: 0}}> */}
			        <HeaderLink>
			            <img
			                src={fontColor === 'light' ?
			                    imgLogoWhite :
			                    imgLogo}
			                alt="logo-tag" />
			        </HeaderLink>
			        {/* </Link> */}
			    </div>
			    {mobileOpen}
			    <div id="cd-nav">
			        <nav id="cd-main-nav">
			            {navUl}
			        </nav>
			    </div>
			    <h3 className={`center interior-title ${  fontSize === 'large' ? 'large-title' : ''}`}>{subTitle}</h3>
                
                <div className="triangle">
                    <svg width="1200px" height="54px" viewBox="0 0 1200 54" version="1.1">
                        <g id="Welcome" stroke="none" strokeWidth="1" fill="none">
                            <g id="Get-the-Skinny" transform="translate(0.000000, -189.000000)" fill="#FFFFFF" opacity="0.7">
                                <g id="page-title" transform="translate(0.000000, 102.000000)">
                                    <path d="M600,140.933365 L0,87 L1200,87 L600,140.933365 Z" id="Triangle-1"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                
			</div>
			<div className={`site-sidebar${  this.state.isSidebarOpen ? ' is-visible' : ''}`}>
			    {mobileClose}
			    {navUl}
			    <img src={tieLogo} className="logo-tie" />
			</div>
		</>
        );
    }
}


export default Header;
