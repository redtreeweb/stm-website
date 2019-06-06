import React, {useEffects, useState} from 'react';
import axios from 'axios';

import '../styles/components/contact-form.scss';



const ContactForm = () => {

    // const [formData, setFormData]

    // useEffects(() => {

    // }, [])

    const [showFields, setShowFields] = useState({'contact-form-follow-up__phone': false, 'contact-form-follow-up__email': false});

    const submitData = () => {
        axios.post()
    }

    const onFollowUpChange = (e) => {
        console.log(e.target.value)
        const {value} = e.target;

        // const newState = Object.assign({}, showFields);

        const newState = {}


        newState[`contact-form-follow-up__email`] = true;
        newState[`contact-form-follow-up__phone`] = false;
        newState['test'] = true

        // newState[`contact-form-follow-up__${value}`] = true;
        console.log(newState)
        setShowFields(prev => {
            console.log(prev)
            return newState
        });
    }
   

    console.log(showFields)

    return <form className="contact-form" id="contact-form">
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
        {!!showFields['contact-form-follow-up__email'] && <input id="contact-form-follow-up__email__value" type="text" placeholder="Email Address"/>}
        <br/>
        <label for="contact-form-follow-up__phone">
        <input type="radio" name="contact-form-follow-up" id="contact-form-follow-up__phone" value="phone" onChange={onFollowUpChange}/>
        Phone</label>
        {!!showFields['contact-form-follow-up__phone'] && <input id="contact-form-follow-up__phone__value" type="text" placeholder="Phone Number"/> }
     </fieldset>

    <button 
        className="fill-in-effect-orange"
        id="contact-form-submit" 
        type="submit"
        onClick={(e) => {
            e.preventDefault();
            alert('submitted');
        }}
    >SUBMIT</button>
  </form>
}


export default ContactForm