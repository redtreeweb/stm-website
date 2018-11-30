import React from 'react'
import { Link } from 'gatsby'

import imgLogo from '../images/logo-color.svg';
import imgLogoWhite from '../images/logo.svg';

import '../styles/components/header.scss';

const Header = ({ siteTitle, fontColor, subTitle, fontSize }) => (
  <div className={`nav-wrapper ${fontColor}`  }>
		<div id="logo-flow">
			<Link to="/">
        <img 
          src={fontColor === 'light' ? 
            imgLogoWhite : 
            imgLogo} 
            alt="logo-tag" />
        </Link>
		</div>
		
		<div id="cd-nav">
			{/* <a href="#0" onclick="return false;" class="cd-nav-trigger">Menu<span></span></a> */}
		
			<nav id="cd-main-nav">
				<ul>
					<li><Link to="/our-approach">Our Approach</Link></li>
					<li><Link to="/our-work">Our Work</Link></li>
					<li><Link to="/our-background">Our Background</Link></li>
					<li><Link to="/blog">Blog</Link></li>
				</ul>
			</nav>
		</div>
		<h3 className={'center interior-title ' + (fontSize === 'large' ? 'large-title' : '')}>{subTitle}</h3>
	</div>
)

export default Header
