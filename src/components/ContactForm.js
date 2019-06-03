import React from 'react';


const ContactForm = () => {
    return <form className="contact-form" id="contact-form">
    <label for="contact-form-name">Nice to meet you _______</label>
    <input id="contact-form-name" type="text" value="Name" placeholder="First and Last Name"/>

    <label for="contact-form-name">What can we do for you?</label>
    <textarea id="contact-form-text" placeholder="Let's Collaborate on Something!"></textarea>

    <label>How should we follow up?</label>
    <input type="radio" name="contact-form-follow-up" id="contact-form-follow-up__email" value="email"/>
    <label for="contact-form-follow-up__email">Email</label>

    <input type="radio" name="contact-form-follow-up" id="contact-form-follow-up__phone" value="phone"/>
    <label for="contact-form-follow-up__phone">Phone</label>

    <button id="contact-form-submit" type="submit">Submit</button>
  </form>
}


export default ContactForm