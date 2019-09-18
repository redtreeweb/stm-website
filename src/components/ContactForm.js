import React, {useEffects, useState} from 'react';
import axios from 'axios';

import '../styles/components/contact-form.scss';



const ContactForm = () => {

    // const [formData, setFormData]

    // useEffects(() => {

    // }, [])

    const [showFields, setShowFields] = useState({'contact-form-follow-up__phone': false, 'contact-form-follow-up__email': false});

  
    const onFormSubmission = (e) => {
        e.preventDefault();
    
        const name = document.getElementById('contact-form-name').value;
        const contactFormText = document.getElementById('contact-form-text').value;

        const followUpEmail = document.getElementById('contact-form-follow-up__email__value').value;
        const followUpPhone = document.getElementById('contact-form-follow-up__phone__value').value;

        const followUp = !!showFields['contact-form-follow-up__phone'] ? 'phone' : 'email';
    
        axios.post('https://cms.skinnytiemedia.com/form-email.php', 
            { name, contactFormText, followUpEmail, followUpPhone, followUp},
            ).then(res => {
    
            if (res.status === 200) {
                alert('submitted!');
                return
            }
    
            alert('something went wrong, please try to submitting again, if the problem continues, please contact using normal email')
    
        })
    
    
    }

    const onFollowUpChange = (e) => {        
        const {value} = e.target;

        const newState = {}

        newState[`contact-form-follow-up__email`] = false;
        newState[`contact-form-follow-up__phone`] = false;

        newState[`contact-form-follow-up__${value}`] = true;
        setShowFields(newState);
    }
   

    return <form className="contact-form" id="contact-form">
        <div className="contact-form_phone-number">
            Drop us a line at <a href="tel:+14125025054" target="_blank">412.502.5054</a>
        </div>
    <fieldset>
        <label for="contact-form-name">Nice to meet you _______</label>
        <input id="contact-form-name" type="text" placeholder="First and Last Name"/>
    </fieldset>
    <fieldset>
        <label for="contact-form-name">What can we do for you?</label>
        <textarea id="contact-form-text" placeholder="Let's Collaborate on Something!" data-test={showFields.test}></textarea>
    </fieldset>
    <fieldset class="contact-form-follow-up">
        <label className="section-label">How should we follow up?</label>
        <label for="contact-form-follow-up__email" onChange={onFollowUpChange}>
        <input type="radio" name="contact-form-follow-up" id="contact-form-follow-up__email" value="email"/>
        Email</label>
        <div className={'contact-form-follow-up-input ' + (!!showFields['contact-form-follow-up__email'] ? 'is-visible' : null)} >
            <input id="contact-form-follow-up__email__value" type="text" placeholder="Email Address"/>
        </div>
        <label for="contact-form-follow-up__phone">
        <input type="radio" name="contact-form-follow-up" id="contact-form-follow-up__phone" value="phone" onChange={onFollowUpChange}/>
        Phone</label>
        <div className={'contact-form-follow-up-input ' + (!!showFields['contact-form-follow-up__phone'] ? 'is-visible' : null)} >
            <input id="contact-form-follow-up__phone__value" type="text" placeholder="Phone Number"/>
        </div>
     </fieldset>

    <button 
        className="fill-in-effect-orange"
        id="contact-form-submit" 
        type="submit"
        onClick={onFormSubmission}
    >SUBMIT</button>
  </form>
}


export default ContactForm