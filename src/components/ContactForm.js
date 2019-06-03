import React, {useEffects} from 'react';
import axios from 'axios';

import '../styles/components/contact-form.scss';



const ContactForm = () => {

    // const [formData, setFormData]

    // useEffects(() => {

    // }, [])

    const submitData = () => {
        axios.post()
    }



    return <form className="contact-form" id="contact-form">
    <fieldset>
        <label for="contact-form-name">Nice to meet you _______</label>
        <input id="contact-form-name" type="text" placeholder="First and Last Name"/>
    </fieldset>
    <fieldset>
        <label for="contact-form-name">What can we do for you?</label>
        <textarea id="contact-form-text" placeholder="Let's Collaborate on Something!"></textarea>
    </fieldset>
    <fieldset class="contact-form-follow-up">
        <label className="section-label">How should we follow up?</label>
        <label for="contact-form-follow-up__email">
        <input type="radio" name="contact-form-follow-up" id="contact-form-follow-up__email" value="email"/>
        Email</label>
        <br/>
        <label for="contact-form-follow-up__phone">
        <input type="radio" name="contact-form-follow-up" id="contact-form-follow-up__phone" value="phone"/>
        Phone</label>
     </fieldset>



    <button 
        id="contact-form-submit" 
        type="submit"
        onClick={(e) => {
            e.preventDefault();
            alert('submitted');
        }}
    >Submit</button>
  </form>
}


export default ContactForm