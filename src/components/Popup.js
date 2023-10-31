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
    <div className="popup"><h2>SkinnyTie Media has rebranded to Kindling Creative. </h2><p>For years, we've been dedicated to crafting exceptional communication tools and strategies. Now, we're taking that commitment to the next level. We're now focused on uncovering authentic voices within organizations, making workplaces more meaningful.</p><p><a href="https://kindlingcultureagency.com">Let's spark something big by telling us your story »</a></p></div>
    </div>
  );
}

export default Popup;