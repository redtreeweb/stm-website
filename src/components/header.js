import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';


import imgLogo from '../images/logo-color.svg';
import imgLogoWhite from '../images/logo.svg';

import '../styles/components/header.scss';

const tieLogo = require('../images/arrow_tie.png');

class Header extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			isSidebarOpen: false
		}
	}

	render() {


		const { siteTitle, fontColor, subTitle, fontSize, pageName } = this.props;
		const { isSidebarOpen } = this.state;

		const navUl = <ul>
			<li><Link to="/approach">Approach</Link></li>
			<li><Link to="/work">Work</Link></li>
			<li><Link to="/background">Background</Link></li>
			<li><Link to="/blog">Blog</Link></li>
			<li><Link to="/#contact">Contact</Link></li>
		</ul>


		const mobileOpen = (
			<div className="cd-nav-mobile open" onClick={() => { this.setState({ isSidebarOpen: true }) }}>
				<i className="material-icons">menu</i>
			</div>)

		const mobileClose = (
			<div className="cd-nav-mobile close" onClick={() => { this.setState({ isSidebarOpen: false }) }}>
				<i className="material-icons">close</i>
			</div>)

		const HeaderLink = ({ children }) => {
			if (pageName === 'index') {
				return <a href="/">{children}</a>
			}
			else {
				return <Link to="/">{children}</Link>
			}
		}

		return (<>
			{console.log(this.props)}
			{/* {console.log(location)} */}
			<Helmet>
				<html className={isSidebarOpen ? 'overflow-hidden' : ''} />
				<body className={isSidebarOpen ? 'overflow-hidden' : ''} />
			</Helmet>
			<div className={`nav-wrapper ${fontColor}`}>
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
				<h3 className={'center interior-title ' + (fontSize === 'large' ? 'large-title' : '')}>{subTitle}</h3>
			</div>
			<div className={'site-sidebar' + (this.state.isSidebarOpen ? ' is-visible' : '')}>
				{mobileClose}
				{navUl}
				<img src={tieLogo} className="logo-tie" />
			</div>
		</>
		)
	}
}


export default Header
