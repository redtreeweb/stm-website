import React from 'react'
import { Link } from 'gatsby'

// import imgLogo from '../images/logo-color.svg';
// import imgLogoWhite from '../images/logo.svg';

import '../styles/components/footer.scss';

const Footer = ({ siteTitle, fontColor, subTitle }) => (
    <footer>
	{/* <div class="row center drk"> */}		
    <div className="large-12 columns">
			<h6 className="footer-copy"><a href="mailto:HELLO@SKINNYTIEMEDIA.COM" target="_blank">HELLO@SKINNYTIEMEDIA.COM</a></h6>
			<p>304 E. Main Street, Carnegie, PA 15106</p>
			<p><a href="tel:+14125025054" target="_blank">412.502.5054</a></p>
		<div className="section-wrapper">
			<p className="social-media"><a href="https://vimeo.com/skinnytiemedia" target="_blank">Vimeo </a>| <a href="https://www.linkedin.com/company/skinny-tie-media" target="_blank">LinkedIn </a></p>
			<p className="copyright"><span className="copyright__symbol">©</span> Skinny Tie Media</p>
		</div>
	</div>
	{/* </div> */}
	</footer>
)

export default Footer
