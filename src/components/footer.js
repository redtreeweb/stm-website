import React from 'react'
import { Link } from 'gatsby'

// import imgLogo from '../images/logo-color.svg';
// import imgLogoWhite from '../images/logo.svg';

import '../styles/components/footer.scss';

const Footer = ({ siteTitle, fontColor, subTitle }) => (
    <footer>
	{/* <div class="row center drk"> */}		
    <div class="large-12 columns">
			<h6 class="footer-copy"><a href="mailto:HELLO@SKINNYTIEMEDIA.COM" target="_blank">HELLO@SKINNYTIEMEDIA.COM</a></h6>
			<p>304 E. Main Street, Carnegie, PA 15106</p>
			<p><a href="tel:+4125025054" target="_blank">412-502-5054</a></p>
		<div class="section-wrapper">
			<p class="social-media"><a href="https://vimeo.com/skinnytiemedia" target="_blank">Vimeo </a>| <a href="https://www.linkedin.com/company/skinny-tie-media" target="_blank">LinkedIn </a>| <a href="https://twitter.com/skinnytiemedia" target="_blank">Twitter </a>| <a href="https://instagram.com/skinnytiemedia" target="_blank">Instagram </a></p>
			<p className="copyright"><span className="copyright__symbol">©</span> Skinny Tie Media</p>
		</div>
	</div>
	{/* </div> */}
	</footer>
)

export default Footer
