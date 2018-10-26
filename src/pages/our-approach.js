import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/footer';

import imageHat from '../images/hat.jpg';

const OurApproach = () => (
  <Layout
    headerFontColor="dark"
    headerSubTitle="WE LIKE TO MAKE S#*T THAT LOOKS GOOD – AND MATTERS"
  >
    <img src={imageHat} className="content-featured-image-fixed our-approach" />
    <div className="" style={{ flex: 1 }}>
    <div className="content-featured-image-fixed our-approach spacer"></div>
      <div class="wrapper skinny">
        <div class="row">
          <div class="large-8 columns skinny-copy">

            <p class="pad-top-none">The strengths and possibilities of video in today’s digital world are boundless. And we want to help you maximize the effectiveness of this ever-expanding medium.  With the surge in video content being published across the internet and user preferences to get their information from video, it’s becoming increasingly important for your message to stand out. And we can partner with you to help you do just that – by bringing together both the strategy and craft that goes into producing this engaging and popular form of communication.</p>
            <p>Our approach to every project centers on you. It involves listening, strategizing, collaborating, and executing. Not to mention making sure you have a positive experience along the way.
        
For over a decade we have developed communication tools for corporations, non-profits, health care providers, ad agencies, colleges and universities.  And it’s this experience that’s given us the expertise, skillset, and network to develop video communication in a strategic and creative way for you.</p>
          </div>

          <div class="large-4 columns quote">
            <p>Services</p>
            <ul>
              <li>Video Consulting & Strategy</li>
              <li>Project Management</li>
              <li>Video Production</li>
              <li>Video Post Production</li>
              <li>Scriptwriting</li>
              <li>Event Management</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default OurApproach
