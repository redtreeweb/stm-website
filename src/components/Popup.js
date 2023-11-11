import React, { useState } from 'react';
import '../styles/components/popup.css';
import $ from 'jquery';

const Popup = () => {
  
  
    setTimeout(function(){
      $('.popupwrapper').addClass('visible');
      $('body, html').css('overflow', 'hidden');
    }, 1000);

  return (
    <div className="popupwrapper">
    <div className="overlay"></div>
    <div className="popup"><h2>SkinnyTie Media is now Kindling Culture Agency.</h2><p>Same great team.<br/>Same amazing work.<br/>Bigger vision.</p><p>Spark something BIG and see what we're up to over at <a href=" https://thekindlingagency.com">thekindlingagency.com</a></p><p>P.S. All Ties Welcome!</p></div>
    </div>
  );
}

export default Popup;