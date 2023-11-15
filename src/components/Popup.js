import React, { useState } from 'react';
import '../styles/components/popup.css';
import $ from 'jquery';

const logo = require('../images/kindling-logo.webp');

const Popup = () => {
  
  
    setTimeout(function(){
      $('.popupwrapper').addClass('visible');
      $('body, html').css('overflow', 'hidden');
    }, 1000);

  return (
    <div className="popupwrapper">
    <div className="overlay"></div>
    <div className="popup"><h2>SkinnyTie Media is now <img src={logo} alt="Kindling Culture Agency" className="logo" /></h2><p>Same great team.<br/>Same amazing work.<br/>Bigger vision.</p><p>Spark something big and see what we're up to over at <a href=" https://thekindlingagency.com">thekindlingagency.com</a></p></div>
    </div>
  );
}

export default Popup;