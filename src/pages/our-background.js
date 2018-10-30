import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/footer';

import imgFounders from '../images/about-header-large.jpg';
import imgCollage from '../images/collage.png';

const OurApproach = () => (
  <Layout
    headerFontColor="dark"
    headerSubTitle="WE LIKE TO MAKE S#*T THAT LOOKS GOOD – AND MATTERS"
  >
  <div className="" style={{flex: 1}}>
    <img className="header-wrapper background-header" src={imgFounders} />
    <div className="wrapper background">
    <div className="row">
      
      <div className="large-12 columns">
      <div className="large-5 columns jamie-bio">
        <h5 className="jamie-name name">JAMIE HOLLERAN</h5>
        <p>As co-founder and Executive Producer at Skinny Tie Media, Jamie brings together and manages all the pieces needed to take a project from conception to delivery. His experience is truly built from the ground up – starting as a tape librarian at a Pittsburgh-based production company and moving up to Executive Producer and manager of a video department at a higher education agency. He’s had experiences with a myriad of corporate, non-profit and higher education clients that have taken him not only all around the domestic United States, but earning his wings working in the likes of Malaysia, Singapore, Nova Scotia, Turkey, and more.</p>
      </div>
      
      <div className="large-5 columns nathan-bio">
        <h5 className="nathan-name name">NATHAN WADDING</h5>
        <p>As co-founder and CEO, Nathan brings energy and unbridled enthusiasm to every aspect of his role at Skinny Tie Media. While he started his career in video production in technical roles at Waynesburg University and the Pittsburgh Penguins, he learned how to marry his technical expertise with creative strategy at a Pittsburgh-based production agency, eventually becoming Director of Post Production. Today, Nathan takes pride not only in partnering with clients to help them solve their challenges, but in putting his passion into creating a culture and environment at Skinny Tie for employees and contractors to want to come to work.</p>
      </div>
      </div>
      
      
      <div className="large-12 columns collage">
        <img src={imgCollage} />
      </div>

      
    </div>
    </div>
  </div>
  <Footer />
  </Layout>
)

export default OurApproach
